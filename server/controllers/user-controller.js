const ApiError = require('../exceptions/api-error')
const userService = require('../service/user-service')
const { validationResult } = require('express-validator')

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation error', errors.array()))
            }
            // console.log('мой консольлог:', req.body);
            const { name, dateOfBirth, email, password, phone } = req.body
            const userData = await userService.registration(name, dateOfBirth, email, password, phone)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
            // res.setHeader('Access-Control-Allow-Credentials', true);
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body
            const userData = await userService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (error) {
            next(error)
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link
            await userService.activate(activationLink)
            return res.redirect('http://localhost:5173/')
        } catch (error) {
            next(error)
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    }

    async getBids(req, res, next) {
        try {
            const bids = await userService.getAllBids()
            console.log(bids);
            res.json(bids)
        } catch (error) {
            next(error)
        }
    }



}

module.exports = new UserController()