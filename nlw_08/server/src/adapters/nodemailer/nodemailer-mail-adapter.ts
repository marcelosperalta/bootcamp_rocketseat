import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f03cbb204ec3c7",
      pass: "b146bcae390077"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Feedget Team <hi@feedget.com>",
            to: "Marcelo Peralta <marcelosperalta@gmail.com>",
            subject,
            html: body,
        });
    };
}