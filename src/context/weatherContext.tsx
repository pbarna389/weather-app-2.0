import { useState, useEffect, createContext } from 'react';
import { IContextProps, IWeatherContext } from '../@types/weather';
import useFetch from '../hooks/useFetch';
import useDebounceValue from '../hooks/useDebounceValue';

export const weatherContext = createContext<IWeatherContext | null>(null);

const WEATHER_URL = import.meta.env.VITE_WEATHER_API;
const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;

const WeatherContextProvider:React.FC<IContextProps> = ({ children }) => {
    const [query, setQuery] = useState<string>("");
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [location, setLocation] = useState<string>("");

    const debounceQuery = useDebounceValue(query, 250);

    const { autoComplete } = useFetch("autocomplete", location,`${WEATHER_URL}search.json?key=${WEATHER_KEY}&q=${debounceQuery}`, { method: 'GET'}, debounceQuery.length);
    const { data, forecast, loc } = useFetch('data', location, `${WEATHER_URL}forecast.json?key=${WEATHER_KEY}&q=${location.toLowerCase()}&days=14&aqi=no&alerts=no`);

    useEffect(() => {
        setSuggestions([]);

        if (debounceQuery.length > 3) {
            console.log(debounceQuery);
            const filteredAutoComplete:any[] = [];
            autoComplete.forEach((el:any, idx: number) => {
                !filteredAutoComplete.some((element:any) => el.id === element.id) ? filteredAutoComplete.push(el) : el = el;    
            })
            console.log(filteredAutoComplete)
            setSuggestions(filteredAutoComplete);
        } else {
            setSuggestions([]);
        }
        if (location.length > 0) {
            console.log(location)
        }
    }, [autoComplete]);

    useEffect(() => {
        console.log(data, forecast, loc)
    }, [data, forecast])

    return (
        <weatherContext.Provider value={{ 
            message: "ALIVE",
            query,
            setQuery,
            suggestions,
            setLocation,
            location,
            data,
            forecast,
            loc
        }}>
            {children}
        </weatherContext.Provider>
    )
};

export default WeatherContextProvider;