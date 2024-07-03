const nodemailer = require('nodemailer')

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.yandex.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'app.karma@yandex.ru',
                pass: 'quemtcaeeyifhqrs'
            }
        })
    }
    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: 'app.karma@yandex.ru',
            to,
            subject: `Account activation on ${'http://localhost:3000'}`,
            text: '',
            html: `
            <div>
                <h1>Для активации перейдите по ссылке</h1>
                <a href="${link}">${link}</a>
            </div>
            `

        })
    }

    async sendCertificationBuyingMail(to, image, name) {
        await this.transporter.sendMail({
            from: 'app.karma@yandex.ru',
            to,
            subject: `Поздравляем с покупкой!`,
            text: ``,
            html: `
            <div>
                <div>Уважаемый(-ая) ${name}</div>
                <div>Поздравляем с покупокй сертификата!</div>
                <div><img src=${image} alt="certificate" style="width: 200px; height: 150px"/></div>
            </div>
            `

        })
    }
}

module.exports = new MailService()