import { useContext } from "react";
import { IWeatherContext } from "../@types/weather"
import { weatherContext } from "../context/weatherContext";

import CurrentWeather from "../components/CurrentWeather";
import CurrentStatus from "../components/CurrentStatus";
import Gallery from "../components/Gallery";


import "../styles/layout/BasicDetails.css"

const BasicDetails = ():JSX.Element => {
    const {
        data
    } = useContext(weatherContext) as IWeatherContext;
    
    return (
        <>
            {
                data ? 
                    <div className="currentWeather-wrapper">
                        <CurrentWeather locData={data.location} currentData={data.current} />
                        <CurrentStatus isDay={data.current.is_day} code={data.current.condition.code} />
                        <Gallery forecastHours={data.forecast.forecastday[0].hour} />
                    </div>
                : null
            }
        </>
    )
}

export default BasicDetails