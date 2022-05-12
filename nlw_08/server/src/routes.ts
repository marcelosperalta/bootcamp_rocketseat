import express from 'express';
// import nodemailer from 'nodemailer';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

// import { prisma } from './prisma';

export const routes = express.Router()

// const transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "f03cbb204ec3c7",
//       pass: "b146bcae390077"
//     }
// });

// app.post('/feedbacks', (req, res) => {
// app.post('/feedbacks', async (req, res) => {
routes.post('/feedbacks', async (req, res) => {
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
    // const feedback = await prisma.feedback.create({
    //     data: {
    //         type,
    //         comment,
    //         screenshot,
    //     }
    // })
    
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();
    
    const submitFeedbaclUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    );

    await submitFeedbaclUseCase.execute({
        type,
        comment,
        screenshot
    })

    // await transport.sendMail({
    //     from: "Feedget Team <hi@feedget.com>",
    //     to: "Marcelo Peralta <marcelosperalta@gmail.com>",
    //     subject: "New feedback",
    //     html: [
    //         `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
    //             `<p><b>Feedback type:</b> ${type}<p>`,
    //             `<p><b>Comment:</b> ${comment}`,
    //         `</div>`,
    //     ].join(''),
    // });

    // return res.send("Hello World");
    // return res.status(201).json( { data: feedback } );
    return res.status(201).send();
})