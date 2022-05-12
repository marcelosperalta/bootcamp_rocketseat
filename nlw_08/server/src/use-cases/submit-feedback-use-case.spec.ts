// test("sum 2 + 2", () => {
//     expect(2 + 2).toBe(4)
// });

import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// spy
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

// const submitFeedback = new SubmitFeedbackUseCase(
//     { create: async () => {} },
//     { sendMail: async () => {} }
// )
const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe("Submit feedback", () => {
    it("should be able to submit a feedback", async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "example comment",
            // screenshot: "test.jpg",
            screenshot: "data:image/png;base64,testTestTest",
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled;
        expect(sendMailSpy).toHaveBeenCalled;
    });

    it("should not be able to submit a feedback wihout type", async () => {
        await expect(submitFeedback.execute({
            type: "",
            comment: "example comment",
            screenshot: "data:image/png;base64,testTestTest",
        })).rejects.toThrow();
    });

    it("should not be able to submit a feedback wihout comment", async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "",
            screenshot: "data:image/png;base64,testTestTest",
        })).rejects.toThrow();
    });

    it("should not be able to submit a feedback with an invalid screenshot format", async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "example comment",
            screenshot: "test",
        })).rejects.toThrow();
    });
});