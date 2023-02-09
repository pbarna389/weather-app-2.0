import React from "react"

export interface Ifetch {
    url: string,
    options: string,
};

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
};

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

interface ICurrentStatus {
    code: number,
    isDay: boolean,
}