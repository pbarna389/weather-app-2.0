export interface Ifetch {
    url: string,
    options: string,
};

export interface IWeatherReducerInitialState {
    locData: IlocData | undefined,
    currentData: IcurrentData | undefined,
    
}

export interface IContextProps {
    children: React.ReactNode
};

export interface IWeatherContext {
    message: string,
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>,
    suggestions: any,
    setLocation: React.Dispatch<React.SetStateAction<string>>
    location: string,
    data: any,
    forecast: any,
};

export interface ICurrentWeather {
    locData: IlocData,
    currentData: IcurrentData,
}


export interface IlocData {
    name: string,
    region: string,
    country: string,
    lat: number,
    lon: number,
    tz_id: string,
    localtime_epoch: number,
    localtime: string,
};

export interface Icondition {
    text: string,
    icon: string,
    code: number
};

export interface IcurrentData {
    last_updated_epoch: number,
    last_updated: string,
    temp_c: number,
    is_day: boolean,
    condition: Icondition,
    wind_mph: number,
    wind_kph: number,
    wind_degree: number,
    pressure_mb: number,
    pressure_in: number,
    precip_mm: number,
    precip_in: number,
    humidity: number,
    cloud: number,
    feelslike_c: number,
    vis_km: number,
    uv: number,
    gust_kph: number,
};

export interface IForecastHours {
    time: "string",
    temp_c: number,
    temp_f: number,
    is_day: boolean,
    condition: Icondition,
    wind_mph: number,
    wind_kph: number,
    wind_degree: number,
    wind_Dir: string,
    pressure_mb: number,
    pressure_in: number,
    precip_mm: number,
    precip_in: number,
    humidity: number,
    cloud: number,
    feelslike_c: number,
    feelslike_f: number,
    windchill_c: number,
    windchill_f: number,
    heatindex_c: number,
    heatindex_f: number,
    dewpoint_c: number,
    dewpoint_f: number,
    will_it_rain: number,
    chance_of_rain: number,
    will_it_snow: number,
    chance_of_snow: number,
    vis_km: number,
    vis_miles: number,
    gust_mph: number,
    gust_kph: number,
    uv: number
};

export interface IforecastDays {
    avghumidity: number,
    avgtemp_c: number,
    avgvis_km: number,
    avgvis_miles: number,
    condition: Icondition,
    daily_chance_of_rain: number,
    daily_chance_of_snow: number,
    daily_will_it_rain: number,
    daily_will_it_snow: number,
    maxtemp_c: number,
    maxwind_kph: number,
    maxwind_mph: number,
    mintemp_c: number,
    totalprecip_in: number,
    totalprecip_mm: number,
    totalsnow_cm: number,
    uv: number,
}

export interface ICurrentStatus {
    code: number,
    isDay: boolean,
    type?: "forecast" | "current",
};

export interface IWeatherColumnProps extends ICurrentStatus {
    minTemp: number,
    maxTemp: number,
    currentTemp: number,
    time: string,
}

export interface IGalleryProps {
    forecastHours: IForecastHours[];
}
export interface Iastro {
    sunrise: string,
    sunset: string,
    moonrise: string,
    moonset: string,
    moon_phase: string,
    moon_illumination: string,
    is_moon_up: boolean,
    is_sun_up: boolean,
}

export interface IForecastCardProps extends ICurrentStatus {
    astro: Iastro
}
//REDUCER

export type ActionType = {
    type: "loading" | "fetchedAuto" | "fetchedData" | "fetchedPicture" | "fetchedForecast" | "error",
    payload: any;
}