import { useContext, useState, useEffect } from "react";
import { IWeatherContext } from '../@types/weather';
import { weatherContext } from '../context/weatherContext';

import useFetch from "../hooks/useFetch";

import "../styles/components/Portrait.css";

const PICTURE_SITE = import.meta.env.VITE_PICTURE_SITE;
const PICTURE_KEY = import.meta.env.VITE_PICTURE_KEY;

const Portrait:React.FC = ():JSX.Element => {
    const [bgImage, setBgImage] = useState<string | null>(null);
    const { location } = useContext(weatherContext) as IWeatherContext;

    const options = { 
        headers: {
            Authorization: `${PICTURE_KEY}`,
        }
    };

    const { picture, pictureLoading, pictureError } = useFetch("picture", location,`${PICTURE_SITE}?query=${location.toLowerCase()}&page=1&per_page=1`, options);

    useEffect(() => {

        if (!picture || picture.length === 0) {
            setBgImage(null)
        } else {
            picture.forEach((picture:any) => setBgImage(picture.src.tiny))
        }

    }, [picture])

    return (
        <>
            { pictureLoading ? 
                <div className="portrait no-img loading">Loading...</div>
                : pictureError ? <div className="portrait no-img">No image available</div>
                : <div className="portrait" style={{backgroundImage: `url( ${bgImage !== null ? bgImage : ""})`}}></div>
            }
        </>
    )
}

export default Portrait