import { useState, useEffect } from "react";

const useDebounceValue = ( value:string, time:number = 100 ):string => {
    const [debounceValue, setDebounceValue] = useState<string>(value);
    

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value)
        }, time);

        return() => {
            clearTimeout(timeout)
        };

    }, [value, time])

    return debounceValue
}

export default useDebounceValue