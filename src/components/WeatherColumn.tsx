import { IWeatherColumnProps } from "../@types/weather";
import CurrentStatus from "./CurrentStatus"

import "../styles/components/WeatherColumns.css"

const WeatherColumn:React.FC<IWeatherColumnProps> = ({ minTemp, maxTemp, currentTemp, code, isDay}) => {
    return (
        <div className="column-wrapper">
            <CurrentStatus code={code} isDay={isDay} type="forecast"/>
            <div className="column" style={{ height: `${(((currentTemp - minTemp) / (maxTemp - minTemp) * 100)).toFixed(2)}%`, minHeight: "1rem"}}>{currentTemp}</div>
        </div>
    )
}

export default WeatherColumn
