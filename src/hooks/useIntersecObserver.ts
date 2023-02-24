import { useState, useEffect, useRef, MutableRefObject } from "react";

export const useIntersecObserver = (setState: React.Dispatch<React.SetStateAction<boolean>>, options: any = {}) => {
    const [shown, setShown] = useState<boolean>(false);
    const elementRef:MutableRefObject<HTMLElement | any> = useRef();

    const callbackFunc = (entries: any) => {
        const [ entry ] = entries;
        if (entry.isIntersecting) {
            setState(entry.isIntersecting);
            setShown(true);
            console.log(entry);
        } else return;
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunc, options);
        if (elementRef) observer.observe(elementRef.current);

    }, [elementRef]);

    return (
        [elementRef]
    )
}

export default useIntersecObserver