import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

export default function Input({ name, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    
    //console.log(inputRef.current);

    // useEffect(() => {
    //     console.log(inputRef.current.value);
    // }, [inputRef]);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        })
    }, [fieldName, registerField]);

    return (
        // <input onChange={e => e.target.value} />
        // <input ref={inputRef} value="123" />
        <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    )
}