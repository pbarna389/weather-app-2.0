import { IForecastCardProps } from "../@types/weather"
import CurrentStatus from "./CurrentStatus"
import WeatherIndicator from "./WeatherIndicator"

import "../styles/components/ForecastCard.css"

const ForecastCard:React.FC<IForecastCardProps> = ({ code, isDay, astro, date, mintemp, maxtemp}) => {

    const newDate = new Date(date);
    const shownDate = new Intl.DateTimeFormat("en-US", {weekday: "short", month: "short", day: "numeric", timeZone: "UTC"}).format(newDate);

    return (
        <div className="forecast-card">
            <p>{shownDate}</p>
            <CurrentStatus code={code} isDay={isDay} type={"forecast"}  />
            <WeatherIndicator astro={astro} />
            <div className="temp-wrapper">
                <p>{mintemp} °C</p>
                <p>{maxtemp} °C</p>
            </div>    
        </div>
    )
}

export default ForecastCard