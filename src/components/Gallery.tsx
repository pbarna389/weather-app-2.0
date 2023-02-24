import { useState, useEffect } from "react";
import { useIntersecObserver } from "../hooks/useIntersecObserver";
import { IForecastHours, IGalleryProps } from "../@types/weather";
import WeatherColumn from "./WeatherColumn";
import { Arrow1, Arrow2 } from "../assets/React-Icons-modified/SVGs";

import "../styles/components/Gallery.css"

const Gallery:React.FC<IGalleryProps> = ({ forecastHours }) => {
    const [hoursToRotate, setHoursToRotate] = useState<IForecastHours[]>();
    const [showedHours, setShowedHours] = useState<IForecastHours[]>();
    const [comesFromLeft, setComesFromLeft] = useState<boolean | null>(null);
    const [goesToRight, setGoesToRight] = useState<boolean | null>(null);
    const [visible, setVisible] = useState<boolean>(false);

    const [ elementRef ] = useIntersecObserver(setVisible);

    useEffect(() => {
        setHoursToRotate(forecastHours);
        setShowedHours(forecastHours.slice(0, 6));
    }, [forecastHours]);;

    useEffect(() => {
    }, [hoursToRotate]);
    
    useEffect(() => {
        const id = setTimeout(() => {
            setGoesToRight(null);
            if (goesToRight) {
                if (hoursToRotate) setShowedHours(hoursToRotate.slice(0, 6));
                setComesFromLeft(true);
            } else {
                setComesFromLeft(false);
                if (hoursToRotate) setShowedHours(hoursToRotate.slice(0, 6));
            }
        }, 200)
        return (() => 
            clearTimeout(id)
        )
    }, [hoursToRotate]);

    useEffect(() => {
        const id = setTimeout(() => {
            setComesFromLeft(null)
        }, 200)

        return (() => clearTimeout(id))
    }, [comesFromLeft])

    const temps:number[] =  [];

    forecastHours.forEach((el:IForecastHours) => temps.push(el.temp_c));

    const maxTemp:number = Math.max(...temps);
    const minTemp:number = Math.min(...temps);

    const setToDefault = () => {
        setComesFromLeft(null);
        setGoesToRight(null);
    }

    const handleClick = (e:any, direction:"left" | "right") => {
        if (hoursToRotate) {
            if (direction === "left") {
                rotateHours(hoursToRotate, -6);
                setGoesToRight(true);
            } else {
                rotateHours(hoursToRotate, 6)
                setGoesToRight(false);
            }
        }
    }

    const rotateHours = (arr:IForecastHours[], num: number) => {
        const originalArr:IForecastHours[] = [...arr];
        num -= originalArr.length * Math.floor(num / originalArr.length);
        const movingObjects = originalArr.splice(0, num);
        const returnValue = originalArr.concat(movingObjects);
        setHoursToRotate(returnValue);
    }

    return (
        <section ref={elementRef && elementRef} className={`forecast-wrapper ${visible ? "shown" : ""}`} data-parent={"forecast"} >
            <div className="arrow-wrapper">
                <div className="arrow-left" onClick={(e => handleClick(e, "left"))} >
                    <Arrow1 width={50} />
                </div>
                <div className="arrow-right" onClick={(e => handleClick(e, "right"))} >
                    <Arrow2 width={50} />
                </div>
            </div>
            <div className={`columns ${goesToRight === false ? "goesToLeft" : goesToRight === true ? "goesToRight" : comesFromLeft === true ? "comesFromLeft" : comesFromLeft === false ? "comesFromRight" : ""}`} >
                {
                    showedHours &&
                    showedHours.map((el) => <WeatherColumn key={el.time} minTemp={minTemp} time={el.time} maxTemp={maxTemp} currentTemp={el.temp_c} code={el.condition.code} isDay={el.is_day} />)
                }
            </div>
        </section>
    )
}

export default Gallery