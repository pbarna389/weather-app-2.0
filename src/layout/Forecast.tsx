import { useContext, useState, useEffect } from 'react';
import { weatherContext } from '../context/weatherContext';
import { IWeatherContext } from '../@types/weather';
import ForecastCard from '../components/ForecastCard';
import { useIntersecObserver } from "../hooks/useIntersecObserver"; 

import "../styles/layout/Forecast.css";

const Forecast = () => {
    const [forecastDays, setForecastDays] = useState<any[]>();
    const {forecast} = useContext(weatherContext) as IWeatherContext;
    const [visible, setVisible] = useState<boolean>(false);
    const [ elementRef ] = useIntersecObserver(setVisible);

    useEffect(() => {
        if (forecast) {
            const newArr:any[] = [];
            forecast.forecastday.forEach((el:any) => newArr.push(el));
            setForecastDays(newArr.slice(1))
        }
    }, [forecast])

    return (
        <section ref={elementRef && elementRef} className={`fullForecast-wrapper ${visible ? "shown" : ""}`}>
            {
                forecastDays ?
                forecastDays.map(el => <ForecastCard key={el.date} astro={el.astro} code={el.day.condition.code} isDay={true} date={el.date} mintemp={el.day.mintemp_c} maxtemp={el.day.maxtemp_c} />)
                :null
            }
        </section>
    )
}

export default Forecast