import { ChangeEvent, useContext, useEffect } from 'react'
import { IWeatherContext } from '../@types/weather';
import { weatherContext } from '../context/weatherContext';

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
    }
    
    return (
        <div className="input-wrapper">
            <input type="text" name="" id="" value={query} onChange={e => handleChange(e)} />
            <div className="autocomplete">
                {
                suggestions ?
                suggestions.map((loc:any) => <p key={loc.id} onClick={e => handleClick(e)}>{loc.name}</p>)
                : null
                }
            </div>
        </div>
    )
}

export default InputField