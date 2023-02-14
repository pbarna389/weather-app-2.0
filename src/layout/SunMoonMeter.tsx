import { useContext, useEffect, useState } from 'react';
import { weatherContext } from '../context/weatherContext';
import { IWeatherContext, Iastro } from '../@types/weather';
import WeatherIndicator from "../components/WeatherIndicator"

const SunMoonMeter = () => {
    const [forecastData, setForecastData] = useState<Iastro>();
    const { data } = useContext(weatherContext) as IWeatherContext;

    useEffect(() => {
        if (data)
        setForecastData(data.forecast.forecastday[0].astro);
    }, [data])

    return (
        <>
            {
                forecastData ?
                <div className="indicator-wrapper">
                    <WeatherIndicator astro={forecastData} />
                </div>
                : null
            }
        </>
    )
}

export default SunMoonMeter