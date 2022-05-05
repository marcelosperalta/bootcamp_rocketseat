import { useState } from "react";

import { CloseButton } from "./CloseButton";

import bugImageUrl from "../assets/bug.svg";
import ideaImageUrl from "../assets/idea.svg";
import otherImageUrl from "../assets/other.svg";

const feedbackTypes = {
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

type FeedbackType = keyof typeof feedbackTypes;

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
                            <div className="flex py-8 gap-2 w-full">
                            { Object.entries(feedbackTypes).map(([key, value]) => {
                                return (
                                    <button
                                        key={key}
                                        type="button"
                                        className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                        onClick={() => setFeedbackType(key as FeedbackType)}
                                    >
                                        <img src={value.image.source} alt={value.image.alt} />
                                        <span>{value.title}</span>
                                    </button>
                                );
                            })}
                        </div>
            ) : (
                <p>Hello World</p>
            ) }

            <footer className="text-xs text-neutral-400">
                Made with ❤ by <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}