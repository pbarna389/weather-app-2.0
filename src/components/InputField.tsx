import { ChangeEvent, useContext } from 'react'
import { IWeatherContext } from '../@types/weather';
import { weatherContext } from '../context/weatherContext';
import { SearchIcon } from '../assets/React-Icons-modified/SVGs';

import "../styles/components/InputField.css"

const InputField:React.FC = ():JSX.Element => {
    const { query, setQuery, suggestions, setLocation } = useContext(weatherContext) as IWeatherContext;

    const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
        const value = e.target.value;
        setQuery(value);
    };

    const handleClick = (e:React.MouseEvent<HTMLParagraphElement>) => {
        const target = e.target as unknown as HTMLParagraphElement;
        if (target.textContent) setLocation(target.textContent);
        setQuery("")
    };

    const handleButtonClick = (e:any) => {
        const target = e.target as unknown as HTMLElement;
        const dataType = target.getAttribute(`data-svg`);
        const inputTarget = document.querySelector(`[data-input="${dataType}"]`) as HTMLInputElement;
        if (inputTarget && inputTarget.value.length > 0) {
            console.log(inputTarget.value);
            setLocation(inputTarget.value);
            setQuery("");
        } 
    }
    
    return (
        <div className="input-wrapper">
            <input type="text" name="" id="" value={query} placeholder="search" onChange={e => handleChange(e)} data-input="search" />
            <button onClick={e => handleButtonClick(e)} data-svg="search"><SearchIcon width={25} /></button>
            <div className="autocomplete">
                {
                suggestions ?
                suggestions.map((loc:any) => <p key={loc.id} onClick={e => handleClick(e)}>{loc.name} - {loc.region}</p>)
                : null
                }
            </div>
        </div>
    )
}

export default InputField