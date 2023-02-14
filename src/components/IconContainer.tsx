interface IiconContainer {
    type: "sun" | "moon",
    rise: boolean,
    sunrise?: number[] | undefined,
    sunset?: number[] | undefined,
    moonrise?: number[] | undefined,
    moonset?: number[] | undefined,
    children: React.ReactNode;
};

import "../styles/components/IconContainer.css"

const IconContainer:React.FC<IiconContainer> = ({ type, rise, sunrise, sunset, moonrise, moonset, children}) => {
    // console.log(sunrise, ((((sunrise[0] * 60) + (sunrise[1])) / 1440) * 100).toFixed(2))

    return (
        <>
            {
                sunrise && sunset ? 
                    <div className="icon-container sun"
                        style={{
                            left: `${rise ? ((((sunrise[0] * 60) + (sunrise[1])) / 1440) * 100).toFixed(2) : ((((sunset[0] * 60) + (sunset[1])) / 1440) * 100).toFixed(2)}%`
                        }}
                    >
                        {children}
                    </div>
                : 
                moonrise && moonset ? 
                    <div className="icon-container moon"
                        style={{
                            left: `${rise ? ((((moonrise[0] * 60) + (moonrise[1])) / 1440) * 100).toFixed(2) : ((((moonset[0] * 60) + (moonset[1])) / 1440) * 100).toFixed(2)}%`
                        }}
                    >
                        {children}
                    </div>
                    : null
            }
        </>

    )
}

export default IconContainer;
