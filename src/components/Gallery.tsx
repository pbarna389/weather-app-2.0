import { IForecastHours, IGalleryProps } from "../@types/weather";
import WeatherColumn from "./WeatherColumn";
import { Arrow1, Arrow2 } from "../assets/React-Icons-modified/SVGs";

import "../styles/components/Gallery.css"

const Gallery:React.FC<IGalleryProps> = ({ forecastHours }) => {

    const temps:number[] =  [];

    forecastHours.forEach((el:IForecastHours) => temps.push(el.temp_c));

    const maxTemp:number = Math.max(...temps);
    const twelveHourTemp: number = temps[(temps.length / 2)]
    const minTemp:number = Math.min(...temps);
    console.log(maxTemp, twelveHourTemp, minTemp, Number((((twelveHourTemp - minTemp) / (maxTemp - minTemp)) * 100).toFixed(2)));

    const getDataName = (e:any, data:string) => {
        const target = e.target;
        const ForecastScrollBarData = target.getAttribute(`${data}`);
        const ForecastTarget = document.querySelector(`[data-parent="${ForecastScrollBarData}"]`)
        return ForecastTarget;
    }

    const handleClick = (e:any, direction:"left" | "right") => {
        if (direction === "left") {
            const forecast = getDataName(e, "data-arrowleft")
            console.log(forecast);
            if (forecast) forecast.scrollLeft -= 600;
        } else {
            const forecast = getDataName(e, "data-arrowright");
            console.log(forecast);
        if (forecast) forecast.scrollLeft += 600;
        }
    }

    return (
        <div className="forecast-wrapper" data-parent={"forecast"} >
            <div className="arrow-wrapper">
                <div className="arrow-left" onClick={(e => handleClick(e, "left"))} >
                    <Arrow1 width={50} />
                </div>
                <div className="arrow-right" onClick={(e => handleClick(e, "right"))} >
                    <Arrow2 width={50} />
                </div>
            </div>

            {
                forecastHours &&
                forecastHours.map((el) => <WeatherColumn key={el.time} minTemp={minTemp} maxTemp={maxTemp} currentTemp={el.temp_c} code={el.condition.code} isDay={el.is_day} />)
            }
        </div>
    )
}

export default Gallery