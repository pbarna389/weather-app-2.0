import { useState, useEffect } from "react";
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

        if (moonTimeDef === "PM") {
            if (moonSetTime) {
                moonSetTime[0] = moonSetTime[0] + 12
                setMoonset(moonSetTime)
            }
        } else {
            setMoonset(moonSetTime)
        }
    };


    return (
        <>{
            astroData ?
                <div className="weather-indicator">
                    <IconContainer type="sun" sunrise={sunrise} sunset={sunset} rise={true}>
                        <p>
                            {
                            sunrise ? 
                                sunrise[0] < 10 ?
                                    sunrise[1] < 10 ?
                                        ["0" + sunrise[0], "0" + sunrise[1]].join(":")
                                    : ["0" + sunrise[0], sunrise[1]].join(":")
                                    : sunrise.join(":")
                                    : null
                            }
                        </p>
                        <SunRise width={50} />
                    </IconContainer>
                    <IconContainer type="sun" sunrise={sunrise} sunset={sunset} rise={false}>
                        <p>{sunset?.join(":")}</p>
                        <SunSet width={50} />
                    </IconContainer>
                    <IconContainer type="moon" moonrise={moonrise} moonset={moonset} rise={true}>
                        <MoonRise width={50} />
                        <p>                            
                            {
                            moonrise ? 
                                moonrise[0] < 10 ?
                                    moonrise[1] < 10 ?
                                        ["0" + moonrise[0], "0" + moonrise[1]].join(":")
                                    : ["0" + moonrise[0], moonrise[1]].join(":")
                                    : moonrise.join(":")
                                    : null
                            }
                        </p>
                    </IconContainer>
                    <IconContainer type="moon" moonrise={moonrise} moonset={moonset} rise={false}>
                        <MoonSet width={50} />
                        <p>                            
                            {
                            moonset ? 
                                moonset[0] < 10 ?
                                    moonset[1] < 10 ?
                                        ["0" + moonset[0], "0" + moonset[1]].join(":")
                                    : ["0" + moonset[0], moonset[1]].join(":")
                                    : moonset.join(":")
                                    : null
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