import express from 'express';
import { prisma } from './prisma';

const app = express();
const port = 3333

app.use(express.json());

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

    // return res.send("Hello World");
    return res.status(201).json( { data: feedback } );
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})