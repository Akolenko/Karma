const nodemailer = require('nodemailer')

class MailService {

    // constructor() {
    //     this.transporter = nodemailer.createTransport({
    //         host: 'smtp.gmail.com',
    //         port: 587,
    //         secure: false,
    //         auth: {
    //             user: 'slawutich5@gmail.com',
    //             pass: 'r753klzY#'
    //         }
    //     })
    // }
    // async sendActivationMail(to, link) {
    //     await this.transporter.sendMail({
    //         from: 'slawutich5@gmail.com',
    //         to,
    //         subject: `Account activation on ${'http://localhost:3000'}`,
    //         text: '',
    //         html: `
    //         <div>
    //             <h1>Для активации перейдите по ссылке</h1>
    //             <a href="${link}">${link}</a>
    //         </div>
    //         `

    //     })
    // }
}

module.exports = new MailService()