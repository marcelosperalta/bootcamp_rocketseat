import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
    { name: "Diego", email: "diego@rocktseat.com.br" },
    { name: "Marcelo", email: "m@m.com" },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: "Marcelo", 
                email: "m@m.com"
            },
            message: { 
                subject: "Welcome", 
                body: "Hi" 
            }
        });

        return res.send("Message from UserController");
    }
}