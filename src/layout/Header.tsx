import { useState } from "react";
import { useIntersecObserver } from "../hooks/useIntersecObserver";
import InputField from '../components/InputField';
import Logo from '../components/Logo';

import "../styles/layout/Header.css"

const Header = () => {
    const [visibility, setVisibility] = useState<boolean>(false);
    const [ elementRef ] = useIntersecObserver(setVisibility);

    return (
        <header ref={elementRef && elementRef}>
            <Logo />
            <InputField />
        </header>
    ) 
}

export default Header