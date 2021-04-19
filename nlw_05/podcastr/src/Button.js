// React Component
// function with some HTML

// React Properties
// props.title

// React State
// useState

import { useState } from "react"

export default function Button(props) {

    // let counter = 1;
    let [counter, setCounter] = useState(1);

    function increment() {
        // counter = counter + 1;
        // counter++;
        // console.log(counter);
        setCounter(counter + 1)
    }

    return (
      <>
        {/* <button>{props.title}</button> */}
        <span>{counter}</span>
        <button onClick={increment}>{props.children}</button>
        <br/>
      </>
    );
}