interface ISVG {
    width: number
}

interface INightlySVG extends ISVG {
    color1: string,
    color2: string
}

export const Moon:React.FC<ISVG> = ( { width = 80 } ) => {
    return (
        <svg stroke="currentColor" strokeWidth="0" viewBox="0 0 24 24" height={width} width={width} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="moon" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff"/>
                    <stop offset="100%" stopColor="#6e1bde"/>
                </linearGradient>
            </defs>
            <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="url(#moon)" d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"></path>
            </g>
        </svg>
    )
}

export const Sun:React.FC<ISVG> = ({ width = 80}) => {
    return(
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height={width} width={width} xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="sun" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f0d024"/>
                <stop offset="100%" stopColor="#f98a06"/>
            </linearGradient>
            <path fill="url(#sun)" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
        </svg>
    )
}

export const Cloud:React.FC<ISVG> = ( { width = 80 } ) => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height={width} width={width} xmlns="http://www.w3.org/2000/svg">
                <linearGradient id="cloud1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2f2f2f"/>
                    <stop offset="40%" stopColor="#606060"/>                    
                    <stop offset="100%" stopColor="#DFDFDF"/>
                </linearGradient>
            <path fill="url(#cloud1)" d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3z"></path>
        </svg>
    )
}

export const CloudTwo:React.FC<ISVG> = ( { width = 80 } ) => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height={width * 0.75} width={width * 0.75} xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#cloud1)" d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3z"></path>
        </svg>
    )
}

export const Fog:React.FC<ISVG> = ( {width = 80} ) => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height={width} width={width} xmlns="http://www.w3.org/2000/svg">
            <path fill="#EED" d="M175.8 27.6c-54.4 0-160.07 32-160.07 32s24.03 7.26 54.98 14.86C52.11 76.55 22.26 91.2 22.26 91.2s34.61 17 52.52 17c17.98 0 52.72-17 52.72-17s-8.3-4.05-18.8-8.19c24.2 4.88 48.6 8.59 67.1 8.59 43.6 0 119.2-20.32 147.9-28.48 13.8 4.98 34.8 11.68 48 11.68 21.2 0 62-17 62-17s-40.8-17-62-17c-15.2 0-40.5 8.8-53.5 13.72C285.8 45.5 216.5 27.6 175.8 27.6zm145.1 57.1c-34.2 0-100.4 17-100.4 17s66.2 17 100.4 17c34.1 0 100.4-17 100.4-17s-66.3-17-100.4-17zm-167.7 57.1c-34.2 0-100.46 17-100.46 17s66.26 17 100.46 17c19.4 0 49.3-5.5 71.5-10.3-15.4 7.4-26.5 13.6-26.5 13.6s9.1 5.1 22.2 11.5c-35.1 3.9-80.9 15.7-80.9 15.7s66.2 17 100.4 17c15.1 0 36.6-3.4 55.9-7.1.9.1 1.9.1 2.8.1 23.9 0 63.4-18.2 85.1-29.1 4.2.3 8.1.5 11.7.5 34.1 0 100.4-17 100.4-17s-66.3-17-100.4-17c-11 0-25.4 1.8-39.7 4.2-19.6-8.4-41.6-16.1-57.1-16.1-14.7 0-35.4 6.9-54.1 14.8-19.1-4.6-64.8-14.8-91.3-14.8zm195.5 81.8c-46.2 0-136.1 32-136.1 32s31.7 11.3 67.2 20.5c-4-.2-7.8-.3-11.4-.3-60.1 0-176.95 25.3-176.95 25.3s116.85 25.4 176.95 25.4c21.1 0 49.2-3.1 76.8-7.2-27.5 9.1-53.1 21.1-53.1 21.1s66.2 31 100.4 31c34.1 0 100.4-31 100.4-31s-56.1-26.3-91.7-30.5c25.8-4.8 44.2-8.8 44.2-8.8s-36.1-7.8-78.5-14.8c48.2-5.9 118-30.7 118-30.7s-89.9-32-136.2-32zm-253.37 3.2c-21.1 0-61.88 25.7-61.88 25.7s40.78 25.6 61.88 25.6c21.17 0 62.07-25.6 62.07-25.6s-40.9-25.7-62.07-25.7zm81.77 119.6c-21.1 0-61.9 25.7-61.9 25.7s15 9.4 31.4 16.8c-4.8-.5-9.3-.7-13.3-.7-34.2 0-100.43 17-100.43 17s37.91 9.7 71.23 14.5c-17.97 4.4-39.56 15-39.56 15s34.61 17 52.56 17c18 0 52.7-17 52.7-17s-15.5-7.6-31.2-12.6c35.2-1.5 95.1-16.9 95.1-16.9s-19.9-5.1-43.6-9.7c21.6-6.2 49-23.4 49-23.4s-40.9-25.7-62-25.7zm238.3 75.4c-21.1 0-61.9 17-61.9 17s16.6 6.9 34 11.9c-35.6 2.2-92 16.7-92 16.7s66.2 17 100.4 17c34.1 0 100.4-17 100.4-17s-33.7-8.6-65.4-13.6c21.1-4.5 46.5-15 46.5-15s-40.9-17-62-17z"></path>
        </svg>
    )
}

export const RainyCloud:React.FC<ISVG> = ( {width = 80} ) => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height={width} width={width} xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="cloud1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#02248f"/>
                <stop offset="40%" stopColor="#1e44bb"/>                    
                <stop offset="100%" stopColor="#DFDFDF"/>
            </linearGradient>
            <path fill="url(#cloud1)" d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"></path>
        </svg>
    )
}

export const SnowyCloud:React.FC<ISVG> = ( {width = 80} ) => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height={width} width={width} xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="coldcloud1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#02248f"/>
                <stop offset="40%" stopColor="#1e44bb"/>                    
                <stop offset="100%" stopColor="#DFDFDF"/>
            </linearGradient>
            <path fill="url(#coldcloud1)" d="M208.406 21.47c-54.52 0-98.764 43.37-99.375 97.75l-.124 10.5-10.375-1.314c-2.84-.36-5.616-.53-8.624-.53-38.627 0-70.062 30.928-70.062 69.53 0 38.602 31.522 70.156 70.062 70.156 18.738 0 35.314-7.333 47.906-19.406l6.907-6.625 6.468 7.064c9.322 10.188 22.718 16.53 37.687 16.53 18.546 0 34.354-9.584 43.344-24.28l8.03-13.125 7.938 13.186c14.78 24.543 40.75 40.72 71.406 40.72 26.433 0 49.963-12.282 65.406-31.376l8.25-10.22 6.938 11.157c9.035 14.48 25.154 24.313 43.406 24.313 28.253 0 51.125-22.884 51.125-51.188 0-26-19.45-47.35-44.44-50.656l-10.686-1.406 2.937-10.406c1.892-6.66 3.314-12.756 3.314-18.844 0-38.602-31.523-70.156-70.063-70.156-22.396 0-42.064 10.95-54.905 27.562l-11.813 15.25-4.656-18.72c-10.74-43.247-49.448-75.467-96-75.467zM381.28 297.343l-18.03 4.844 7.03 26.218-26.217-7.03-4.844 18.062 26.217 7.03-19.187 19.188 13.188 13.188 19.187-19.188 7.03 26.22 18.064-4.845-7.033-26.217 26.22 7.03 4.843-18.03-26.22-7.032 19.19-19.186-13.22-13.22-19.188 19.188-7.03-26.218zm-272.06 17.062l-7.032 26.22L83 321.437l-13.22 13.218 19.19 19.188-26.22 7 4.844 18.062 26.22-7.03-7.033 26.218 18.064 4.844 7.03-26.22 19.19 19.188 13.217-13.22-19.186-19.186 26.187-7.03-4.81-18.033-26.22 7 7.03-26.187-18.06-4.844zm135.936 47.625l-3.844 35.69-28.968-21.158-11.03 15.094 28.967 21.156-32.81 14.532 7.56 17.062 32.845-14.53-3.844 35.718 18.564 2 3.844-35.688 29 21.156 11-15.093-29-21.158 32.843-14.53-7.56-17.094-32.814 14.53 3.844-35.687-18.594-2zm202.063 48.314l-8.19 21.125-14.186-17.626-14.563 11.72 14.22 17.623-22.375 3.5 2.875 18.47 22.375-3.5-8.156 21.124 17.405 6.72 8.156-21.094L459 486.03l14.563-11.717-14.22-17.625 22.376-3.5-2.876-18.47-22.375 3.5 8.186-21.124-17.437-6.75z"></path>
        </svg>
    )
}

export const Thunder:React.FC<INightlySVG> = ( {width = 80, color1, color2} ) => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height={width} width={width} xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="sun" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={color1}/>
                <stop offset="100%" stopColor={color2}/>
            </linearGradient>
            <path fill="url(#sun)" d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"></path>
        </svg>
    )
}

export const DrizzleRain:React.FC<ISVG> = ({ width = 80}) => {
    return(
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height={width} width={width} xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="coldcloud1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#02248f"/>
                <stop offset="40%" stopColor="#1e44bb"/>                    
                <stop offset="100%" stopColor="#DFDFDF"/>
            </linearGradient>
            <path fill="url(#coldcloud1)" d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"></path>
        </svg>
    )
}

export const ThermometerCold:React.FC<ISVG> = ({ width = 80 }) => {
    return(
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height={width} width={width} xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="cold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0642f9"/>                    
                <stop offset="100%" stopColor="#DFDFDF"/>
            </linearGradient>
            <path fill="url(#cold)" d="M160 36.5c-11.688 0-23 6.674-23 25.5v25h23v18h-23v14h7v18h-7v14h23v18h-23v14h7v18h-7v14h23v18h-23v14h7v18h-7v14h23v18h-23v14h7v18h-7v14h14v-23h18v81.313A32 32 0 0 1 192 432a32 32 0 0 1-32 32 32 32 0 0 1-32-32 32 32 0 0 1 23-30.688V361h-14v21h.01c-18.926 8.673-32.01 27.74-32.01 50 0 30.482 24.518 55 55 55s55-24.518 55-55c0-22.26-13.084-41.327-32.01-50h.01V62c0-18.826-11.313-25.5-23-25.5zm87 16.273v66.73l-46-23v20.124l46 23v50.246l-13.54 27.084-30.228-1.814-2.232-1.29v27.126l9.918 15.02L201 271.02v27.126l2.232-1.29 30.227-1.813L247 322.127v50.246l-29.51 14.754c3.703 4.73 6.834 9.922 9.293 15.478L247 392.498v66.73h18v-66.73l68.266 34.133 8.05-16.1L265 372.374v-50.246l13.54-27.084 30.228 1.814 43.513 25.123-5.11 85.172 17.97 1.078 4.57-76.187 57.79 33.365 9-15.588-57.79-33.365 63.694-42.053-9.918-15.02-71.205 47.01-43.514-25.124L301.082 256l16.684-25.268 43.515-25.125 71.206 47.012 9.918-15.022-63.693-42.053 57.79-33.365-9-15.588-57.79 33.365-4.57-76.187-17.97 1.078 5.11 85.172-43.512 25.123-30.227 1.814L265 189.873v-50.246l76.316-38.158-8.05-16.1L265 119.5v-66.73h-18zm-162.5 93.82l-9 15.587 43.5 25.115v-20.783l-34.5-19.92zm34.5 58.386l-49.404 32.618 9.918 15.02L119 226.55v-21.57zm-39.486 54.4l-9.918 15.022L119 307.022v-21.57l-39.486-26.07zM119 324.706L75.5 349.82l9 15.588 34.5-19.92v-20.783zm43.11 83.943c-25.186 0-25.186 26.678-25.186 26.678s7.05-10.4 11.31-14.904c4.195-4.435 13.877-11.774 13.877-11.774z"></path>
        </svg>
    )
}

export const PelletCloud:React.FC<ISVG> = ( { width = 80 } ) => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height={width} width={width} xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="cold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0642f9"/>                    
                <stop offset="100%" stopColor="#DFDFDF"/>
            </linearGradient>
            <path fill="url(#cold)" d="M2.375 13.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 1 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 1 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 0 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zM6.375 13.5a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 1 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 1 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 0 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zm2.151 2.447a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 1 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 1 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zm1.181-7.026a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"></path>
        </svg>
    )
}

export const Arrow1:React.FC<ISVG> = ( { width = 80} ) => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height={width} width={width} xmlns="http://www.w3.org/2000/svg" data-arrowleft={"forecast"}>
            <linearGradient id="arrow1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff"/>
                <stop offset="100%" stopColor="#6e1bde"/>
            </linearGradient>
            <path fill="none" d="M0 0h24v24H0z" data-arrowleft={"forecast"}></path>
            <path fill="url(#arrow1)" d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z" data-arrowleft={"forecast"}></path>
        </svg>
    )
}

export const Arrow2:React.FC<ISVG> = ( { width = 80} ) => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height={width} width={width} xmlns="http://www.w3.org/2000/svg" data-arrowright={"forecast"}>
            <linearGradient id="arrow1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff"/>
                <stop offset="100%" stopColor="#6e1bde"/>
            </linearGradient>
            <path fill="none" d="M0 0h24v24H0V0z" data-arrowright={"forecast"}></path>
            <path fill="url(#arrow1)" d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z" data-arrowright={"forecast"}></path>
        </svg>
    )
}

