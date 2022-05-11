import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();
const port = 3333;

app.use(express.json());

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f03cbb204ec3c7",
      pass: "b146bcae390077"
    }
});

// app.get('/users', (req, res) => {
//     return res.send("Hello World");
// })

// app.post('/feedbacks', (req, res) => {
app.post('/feedbacks', async (req, res) => {
    // console.log(req.body);

    // prisma.feedback.create({
    //     data: {
    //         type: req.body.type,
    //         comment: req.body.comment,
    //         screenshot: req.body.screenshot,
    //     }
    // })
    const { type, comment, screenshot } = req.body;
    // prisma.feedback.create({
    //     data: {
    //         type: type,
    //         comment: comment,
    //         screenshot: screenshot,
    //     }
    // })
    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        }
    })

    await transport.sendMail({
        from: "Feedget Team <hi@feedget.com>",
        to: "Marcelo Peralta <marcelosperalta@gmail.com>",
        subject: "New feedback",
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p><b>Feedback type:</b> ${type}<p>`,
                `<p><b>Comment:</b> ${comment}`,
            `</div>`,
        ].join(''),
    });

    // return res.send("Hello World");
    return res.status(201).json( { data: feedback } );
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})