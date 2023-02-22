
import { IWeatherColumnProps } from "../@types/weather";
import CurrentStatus from "./CurrentStatus"

import "../styles/components/WeatherColumns.css"

const WeatherColumn:React.FC<IWeatherColumnProps> = ({ minTemp, maxTemp, currentTemp, code, isDay, time}) => {
    return (
        <div className="column-wrapper">
            <CurrentStatus code={code} isDay={isDay} type="forecast"/>
            <p>{time.split(" ").pop()}</p>
            <div className="column" style={{ height: `${(((currentTemp - minTemp) / (maxTemp - minTemp) * 100) * 0.97).toFixed(2)}%`, minHeight: "1.3rem", background: `${
                isDay ? currentTemp <= 10 && currentTemp >= 0  ? "linear-gradient(210deg, rgba(249,138,6,1) 10%, #02248f 100%)" 
                : currentTemp < 0 ? "linear-gradient(210deg, rgba(249,138,6,1) 10%, #02248f 100%)"
                : currentTemp >= 10 && currentTemp <= 20 ? "linear-gradient(210deg, rgba(249,138,6,1) 0%, #f0d024 100%)" 
                : currentTemp >= 20 && currentTemp <= 25 ? "linear-gradient(210deg, #f95d06, #f0d024 100%)" : "linear-gradient(210deg, rgba(249,138,6,1), #cc1212 100%)"
                : currentTemp > 10 ? "linear-gradient(210deg, #6e1bde 10%, #f95d06 100%)" 
                : currentTemp >= 0 && currentTemp <= 10 ? "linear-gradient(210deg, #6e1bde 10%, #f0d024 100%)" 
                : currentTemp < 0 && currentTemp >= -10 ? "linear-gradient(210deg, #6e1bde 50%, #004af9 100%)" 
                : currentTemp < -10 && currentTemp >= -20 ? "linear-gradient(210deg, #6e1bde 50%, #02248f 100%)" 
                : "linear-gradient(210deg, #6e1bde 50%, #01103e 100%)"}`}}>
                <div>{currentTemp} °C</div>
            </div>
        </div>
    )
}

export default WeatherColumn
