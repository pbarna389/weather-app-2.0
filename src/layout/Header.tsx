import InputField from '../components/InputField';
import Logo from '../components/Logo';

import "../styles/layout/Header.css"

const Header = () => {
    return (
        <header>
            <Logo />
            <InputField />
        </header>
    ) 
}

export default Header