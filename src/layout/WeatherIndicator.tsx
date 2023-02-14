import { useState, useEffect, useContext } from "react";
import { weatherContext } from "../context/weatherContext";
import { IWeatherContext } from "../@types/weather";
import { SunRise, SunSet, MoonRise, MoonSet } from "../assets/React-Icons-modified/SVGs";
import IconContainer from "../components/IconContainer";
import "../styles/layout/WeatherIndicator.css";

interface Iastro {
    sunrise: string,
    sunset: string,
    moonrise: string,
    moonset: string,
    moon_phase: string,
    moon_illumination: string,
    is_moon_up: boolean,
    is_sun_up: boolean,
}

const WeatherIndicator = () => {
    const [astroData, setAstroData] = useState<Iastro>();
    const [sunrise, setSunrise] = useState<number[]>();
    const [sunset, setSunSet] = useState<number[]>();
    const [moonrise, setMoonrise] = useState<number[]>();
    const [moonset, setMoonset] = useState<number[]>();
    

    const { data } = useContext(weatherContext) as IWeatherContext;

    useEffect(() => {
        if (data) {
            setAstroData(data.forecast.forecastday[0].astro);
        }
    }, [data]);

    useEffect(() => {
        setSunTimes();
        setMoonUp();
        setMoonDown()
    }, [astroData])
    
    const setSunTimes = () => {
            const sunrise = astroData?.sunrise;
            const sunriseTime = sunrise?.split(" ").shift()?.split(":").map(Number); 

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
            data ?
                <div className="weather-indicator">
                    <IconContainer type="sun" sunrise={sunrise} sunset={sunset} rise={true}>
                        <SunRise width={50} />
                    </IconContainer>
                    <IconContainer type="sun" sunrise={sunrise} sunset={sunset} rise={false}>
                        <SunSet width={50} />
                    </IconContainer>
                    <IconContainer type="moon" moonrise={moonrise} moonset={moonset} rise={true}>
                        <MoonRise width={50} />
                    </IconContainer>
                    <IconContainer type="moon" moonrise={moonrise} moonset={moonset} rise={false}>
                        <MoonSet width={50} />
                    </IconContainer>
                </div>
            : null
        }
        </>
    )
}

export default WeatherIndicator