import { useState, useEffect, useContext } from "react"
import { IWeatherContext, IlocData, IcurrentData } from "../@types/weather"
import { weatherContext } from "../context/weatherContext";
import Portrait from "./Portrait";
import CurrentStatus from "./CurrentStatus";

import "../styles/components/CurrentWeather.css"

const CurrentWeather = ():JSX.Element => {
    const [locData, setLocaData] = useState<IlocData>();
    const [currentData, setCurrentData] = useState<IcurrentData>();

    const {
        data
    } = useContext(weatherContext) as IWeatherContext

    useEffect(() => {
        if (data) {
            setLocaData(data.location)
            setCurrentData(data.current);
        }
    }, [data])

    return (
        <>
        {
            locData && currentData ? 
            <>
                <div className="loc-wrapper">
                    <div className="loc-basic">
                        <div className="loc-data">
                            <h3>Location: {locData.name}</h3>
                            <h4>Region: {locData.region}</h4>
                            <h5>Country: {locData.country}</h5>
                        </div>
                        <Portrait />
                    </div>
                    <div className="loc-details">
                        <h2>Current: {currentData.temp_c}</h2>
                        <h5>Feelslike: {currentData.feelslike_c}</h5>
                        <h5>Humidity: {currentData.humidity} %</h5>
                        <h5>Cloud: {currentData.cloud}</h5>
                    </div>
                </div>
                <CurrentStatus isDay={currentData.is_day} code={currentData.condition.code} />
            </>
            : null
        }
        </>
    )
}

export default CurrentWeather