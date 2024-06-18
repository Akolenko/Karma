const { User, Bid } = require('../db/models')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const jwt = require('jsonwebtoken')
const mailService = require('../service/mail-service')
const tokenService = require('../service/token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')

class UserService {
    async registration(email, password) {
        const candidate = await User.findOne({where: {
            email: email
        }})

        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует.`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        // const activationLink = uuid.v4()
        const user = await User.create({email, password: hashPassword, activationLink})
        // await mailService.sendActivationMail(email, `http://localhost:3000/api/activate/${activationLink}`)
        const userDto = new UserDto (user)
        const tokens = tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }

    }

    async login(email, password) {
        const user = await User.findOne({where: {
            email: email
        }})

        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким email не найден.')
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) {
            throw ApiError.BadRequest('Неверный пароль.')
        }

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return { ...tokens, user: userDto }
    }

    // validateAcessToken(token) {
    //     try {
    //         const userData = jwt.verify(token, 'JWT-SECRET-KEY')
    //         return userData
    //     } catch (error) {
    //         return null
    //     }
    // }

    // validateRefreshToken(token) {
    //     try {
    //         const userData = jwt.verify(token, 'JWT-SECRET-refr-KEY')
    //         return userData
    //     } catch (error) {
    //         return null
    //     }
    // }


    async logout (refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }

        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDB = await tokenService.findToken(refreshToken)

        if (!userData || !tokenFromDB) {
            throw ApiError.UnauthorizedError()
        }

        const user = await User.findByPk(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return { ...tokens, user: userDto }
    }

    async getAllBids() {
        const bids = await Bid.findAll()
        return bids
    }
}

module.exports = new UserService()