import { useState } from "react";
import "../styles/components/Logo.css";
import { useIntersecObserver } from "../hooks/useIntersecObserver";

const Logo = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const [ elementRef ] = useIntersecObserver(setVisible);

    const today = new Date();
    const shownDate = new Intl.DateTimeFormat("en-US", {weekday: "long", year: "numeric", month: "short", day: "numeric", timeZone: "UTC"}).format(today);

    return (
        <div ref={elementRef && elementRef} className={`logo-wrapper ${visible ? "show" : ""}`}>
            <h2>Weather Forecast</h2>
            <p>{shownDate}</p>
        </div>
    )
}

export default Logo