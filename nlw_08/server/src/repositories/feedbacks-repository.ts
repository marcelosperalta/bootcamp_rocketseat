export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbacksRepository {
    // create: (data: FeedbackCreateData) => void;
    create: (data: FeedbackCreateData) => Promise<void>;
}