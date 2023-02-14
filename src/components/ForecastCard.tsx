import { IForecastCardProps } from "../@types/weather"
import CurrentStatus from "./CurrentStatus"
import WeatherIndicator from "./WeatherIndicator"

import "../styles/components/ForecastCard.css"

const ForecastCard:React.FC<IForecastCardProps> = ({ code, isDay, astro}) => {

    return (
        <div className="forecast-card">
            <CurrentStatus code={code} isDay={isDay} type={"forecast"}  />
            <WeatherIndicator astro={astro} />    
        </div>
    )
}

export default ForecastCard