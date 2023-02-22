import "../styles/components/Logo.css"

const Logo = () => {
    const today = new Date();
    const shownDate = new Intl.DateTimeFormat("en-US", {weekday: "long", year: "numeric", month: "short", day: "numeric", timeZone: "UTC"}).format(today);

    return (
        <div className="logo-wrapper">
            <h2>Weather Forecast</h2>
            <p>{shownDate}</p>
        </div>
    )
}

export default Logo