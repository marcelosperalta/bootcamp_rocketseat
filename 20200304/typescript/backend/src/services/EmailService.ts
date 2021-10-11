interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    // attachment?: Array<string>; //or
    attachment?: string[];
}

// DTO = Data Transfer Object
interface MessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

class EmailService {
    // sendMail(to: IMailTo, message: IMailMessage) { // or
    sendMail({ to, message }: MessageDTO) {
        console.log(`Email sent to ${to.name}: ${message.subject}`);
    }
}

export default EmailService;