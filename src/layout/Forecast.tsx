import { useContext, useState, useEffect } from 'react';
import { weatherContext } from '../context/weatherContext';
import { IWeatherContext, IforecastDays} from '../@types/weather';

const Forecast = () => {
    const [forecastDays, setForecastDays] = useState<IforecastDays[]>();
    const {forecast} = useContext(weatherContext) as IWeatherContext;

    useEffect(() => {
        if (forecast) {
            const days:IforecastDays[] = [];
            forecast.forecast.forecastday.forEach((el:any) => days.push(el.day));
            setForecastDays(days)
        };
    }, [forecast])

    if (forecast) forecast.forecast.forecastday.forEach((el:any) => console.log(el.day))
    return (
        <div className="fullForecast-wrapper">Forecast</div>
    )
}

export default Forecast