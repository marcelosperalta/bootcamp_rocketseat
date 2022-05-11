import { FeedbacksRepository } from "../repositories/feedbacks-repository";
// import { PrismaFeedbacksRepository } from "../repositories/prisma/prisma-feedbacks-repository";

interface SubmitFeedbackUseCaseRequest{
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase{
    // private feedbacksRepository: FeedbacksRepository
    // constructor(
    //     feedbacksRepository: FeedbacksRepository
    // ){
    //     this.feedbacksRepository = feedbacksRepository
    // }
    constructor(
        private feedbacksRepository: FeedbacksRepository
    ){}

    async execute(request: SubmitFeedbackUseCaseRequest){
        const { type, comment, screenshot } = request;

        // const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
        // await prismaFeedbacksRepository.create({
        //     type,
        //     comment,
        //     screenshot,
        // })
        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })
    }
}