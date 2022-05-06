import { useState } from "react";

import { CloseButton } from "../CloseButton";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import otherImageUrl from "../../assets/other.svg";

export const feedbackTypes = {
    BUG: {
        title: "Problem",
        image: {
            source: bugImageUrl,
            alt: "Bug icon"
        },
    },
    IDEA: {
        title: "Sugestion",
        image: {
            source: ideaImageUrl,
            alt: "Lamp icon"
        },
    },
    OTHER: {
        title: "Other",
        image: {
            source: otherImageUrl,
            alt: "Thought icon"
        },
    },
}

// Object.entries(feedbackTypes) => 
// [ 
//     ["BUG", {...}], 
//     ["IDEA", {...}], 
//     ["OTHER", {...}] 
// ]

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">
                    Leave feedback
                </span>

                <CloseButton />
            </header>

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <p>Hello World</p>
            ) }

            <footer className="text-xs text-neutral-400">
                Made with ❤ by <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}