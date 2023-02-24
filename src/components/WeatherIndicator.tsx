import { useState, useEffect } from "react";
import { useIntersecObserver } from "../hooks/useIntersecObserver";
import { Iastro } from "../@types/weather";
import { SunRise, SunSet, MoonRise, MoonSet } from "../assets/React-Icons-modified/SVGs";
import IconContainer from "./IconContainer";
import "../styles/layout/WeatherIndicator.css";

interface IWeatherIndicatorProps {
    astro: Iastro
}

const WeatherIndicator:React.FC<IWeatherIndicatorProps> = ({ astro }) => {
    const [astroData, setAstroData] = useState<Iastro>();
    const [sunrise, setSunrise] = useState<number[]>();
    const [sunset, setSunSet] = useState<number[]>();
    const [moonrise, setMoonrise] = useState<number[]>();
    const [moonset, setMoonset] = useState<number[]>();

    useEffect(() => {
        if (astro) {
            setAstroData(astro);
        }
    }, [astro]);

    useEffect(() => {
        setSunTimes();
        setMoonUp();
        setMoonDown()
    }, [astroData])
    
    const setSunTimes = () => {
            const sunriseLoc = astroData?.sunrise;
            const sunriseTime = sunriseLoc?.split(" ").shift()?.split(":").map(Number); 

            setSunrise(sunriseTime);
    
            const sunTimeDef = astroData?.sunset.split(' ').pop();
            let sunSetTime = astroData?.sunset.split(' ').shift()?.split(":").map(Number);
    
            if (sunTimeDef === "PM") {
                if (sunSetTime) {
                    sunSetTime[0] = sunSetTime[0] + 12;
                    setSunSet(sunSetTime);
                }
            } else {
                setSunSet(sunSetTime);
            };
    };

    const setMoonUp = () => {
            const moonTimeDef = astroData?.moonrise?.split(' ').pop();
            let moonSetTime = astroData?.moonrise.split(' ').shift()?.split(":").map(Number)
    
            if (moonTimeDef === "PM") {
                if (moonSetTime) {
                    moonSetTime[0] = moonSetTime[0] + 12;
                    setMoonrise(moonSetTime);
                }
            } else {
                setMoonrise(moonSetTime);
            };
    };

    const setMoonDown = () => {
        const moonTimeDef = astroData?.moonset.split(' ').pop();
        let moonSetTime = astroData?.moonset.split(' ').shift()?.split(":").map(Number)
        console.log(astroData?.moonset);

        if (moonTimeDef === "AM") {
            if (moonSetTime && moonSetTime[0] === 12) {
                moonSetTime[0] = moonSetTime[0] - 12;
                setMoonset(moonSetTime);
                console.log(moonSetTime)
            }
        } else if (moonTimeDef === "PM") {
            if (moonSetTime) {
                moonSetTime[0] = moonSetTime[0] + 12;
                setMoonset(moonSetTime)
            }
        } else {
            setMoonset(moonSetTime)
        }
        console.log(moonset)
    };

    const setTimeFormat:Function = (array: number[]):string => {
        return array[0] < 10 ? 
                    array[1] < 10 ? ["0" + array[0], "0" + array[1]].join(":") 
                    : ["0" + array[0], array[1]].join(":") 
                    : array[0] >= 10 && array[1] < 10 ? [array[0], "0" + array[1]].join(":") 
                    : array.join(":") 
    }

    return (
        <>{
            astroData ?
                <div  className={`weather-indicator`}>
                    <IconContainer type="sun" sunrise={sunrise} sunset={sunset} rise={true}>
                        <p>
                            {
                            sunrise ? setTimeFormat(sunrise) : null
                            }
                        </p>
                        <SunRise width={50} />
                    </IconContainer>
                    <IconContainer type="sun" sunrise={sunrise} sunset={sunset} rise={false}>
                        <p>
                            {
                                sunset ? setTimeFormat(sunset) : null
                            }
                        </p>
                        <SunSet width={50} />
                    </IconContainer>
                    <IconContainer type="moon" moonrise={moonrise} moonset={moonset} rise={true}>
                        <MoonRise width={50} />
                        <p>                            
                            {
                            moonrise ? isNaN(moonrise[0]) ? "N.A" : setTimeFormat(moonrise): null
                            }
                        </p>
                    </IconContainer>
                    <IconContainer type="moon" moonrise={moonrise} moonset={moonset} rise={false}>
                        <MoonSet width={50} />
                        <p>                            
                            {
                            moonset ? isNaN(moonset[0]) ? "N.A" : setTimeFormat(moonset) : null
                            }
                        </p>
                    </IconContainer>
                </div>
            : null
        }
        </>
    )
}

export default WeatherIndicator