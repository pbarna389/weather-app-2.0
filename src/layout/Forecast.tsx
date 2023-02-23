import { useContext, useState, useEffect } from 'react';
import { weatherContext } from '../context/weatherContext';
import { IWeatherContext, IforecastDays, Iastro} from '../@types/weather';
import ForecastCard from '../components/ForecastCard';

import "../styles/layout/Forecast.css";

const Forecast = () => {
    const [forecastDays, setForecastDays] = useState<any[]>();
    const {forecast} = useContext(weatherContext) as IWeatherContext;

    useEffect(() => {
        if (forecast) {
            const newArr:any[] = [];
            forecast.forecastday.forEach((el:any) => newArr.push(el));
            setForecastDays(newArr.slice(1))
        }
    }, [forecast])

    return (
        <div className="fullForecast-wrapper">
            {
                forecastDays ?
                forecastDays.map(el => <ForecastCard key={el.date} astro={el.astro} code={el.day.condition.code} isDay={true} date={el.date} mintemp={el.day.mintemp_c} maxtemp={el.day.maxtemp_c} />)
                :null
            }
        </div>
    )
}

export default Forecast