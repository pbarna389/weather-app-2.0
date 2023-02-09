import CurrentWeather from "../components/CurrentWeather";

import "../styles/layout/BasicDetails.css"

const BasicDetails = ():JSX.Element => {
    return (
        <div className="currentWeather-wrapper">
            <CurrentWeather />
        </div>
    )
}

export default BasicDetails