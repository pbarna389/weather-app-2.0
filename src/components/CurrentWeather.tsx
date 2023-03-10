import { useState } from "react";
import { ICurrentWeather } from "../@types/weather"
import Portrait from "./Portrait";
import { useIntersecObserver } from "../hooks/useIntersecObserver";
import "../styles/components/CurrentWeather.css";


const CurrentWeather:React.FC<ICurrentWeather> = ({ locData, currentData}):JSX.Element => {
    const [visible, setVisible] = useState<boolean>(false);
    const [ elementRef ] = useIntersecObserver(setVisible)

    return (
        <>
        {
            locData && currentData ? 
            <>
                <div ref={elementRef && elementRef} className={`loc-wrapper ${visible ? "shown" : ""}`}>
                    <div className="loc-basic">
                        <div className="loc-data">
                            <h3>{locData.name}</h3>
                            <h4>Region: {locData.region}</h4>
                            <h5>Country: {locData.country}</h5>
                        </div>
                        <Portrait />
                    </div>
                    <div className="loc-details">
                        <h2>Current: {currentData.temp_c} °C</h2>
                        <h5>Feelslike: {currentData.feelslike_c} °C</h5>
                        <h5>Humidity: {currentData.humidity} %</h5>
                        <h5>Cloud: {currentData.cloud} %</h5>
                    </div>
                </div>
            </>
            : null
        }
        </>
    )
}

export default CurrentWeather