import { useContext } from "react";
import { IWeatherContext } from "../@types/weather"
import { weatherContext } from "../context/weatherContext";

import CurrentWeather from "../components/CurrentWeather";
import CurrentStatus from "../components/CurrentStatus";
import Gallery from "../components/Gallery";


import "../styles/layout/BasicDetails.css"

const BasicDetails = ():JSX.Element => {
    const {
        data, forecast, loc
    } = useContext(weatherContext) as IWeatherContext;
    
    return (
        <>
            {
                data ? 
                    <div className="currentWeather-wrapper">
                        <CurrentWeather locData={loc} currentData={data} />
                        <CurrentStatus isDay={data.is_day} code={data.condition.code} />
                        <Gallery forecastHours={forecast.forecastday[0].hour} />
                    </div>
                : null
            }
        </>
    )
}

export default BasicDetails