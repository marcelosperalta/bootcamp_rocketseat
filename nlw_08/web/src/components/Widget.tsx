// import { useState } from "react";

import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

export function Widget(){

    // ----- using "Popover" (@headlessui/react)
    // const [ isWidgetOpen, setIsWidgetOpen ] = useState(false)

    // function toogleWidgetVisibility(){
    //     setIsWidgetOpen(!isWidgetOpen)
    // }
    // ----- using "Popover" (@headlessui/react)

    return (
        // <div className="absolute bottom-5 right-5">
        <Popover className="absolute bottom-5 right-5">
            {/* { isWidgetOpen ? <p>Hello World</p> : null } */}
            {/* { isWidgetOpen && <p>Hello World</p> } */}
            {/* <p>Hello World</p> */}
            <Popover.Panel>Hello World</Popover.Panel>

            {/* <button onClick={toogleWidgetVisibility} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"> */}
            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6" />

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </Popover.Button>
            {/* </button> */}
        </Popover>
        // </div>       
    )
}