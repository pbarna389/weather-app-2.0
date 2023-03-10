import { useState } from "react";
import { useIntersecObserver } from "../hooks/useIntersecObserver"; 
import { Moon, Sun, Cloud, CloudTwo, Fog, RainyCloud, SnowyCloud, Thunder, DrizzleRain, ThermometerCold, PelletCloud } from "../assets/React-Icons-modified/SVGs";
import { ICurrentStatus } from "../@types/weather";

import "../styles/components/CurrentStatus.css"

const CurrentStatus:React.FC<ICurrentStatus> = ({ code, isDay, type, status }):JSX.Element => {
    const [visible, setVisible] = useState<boolean>(false);
    const [ elementRef ] = useIntersecObserver(setVisible);

    return (
            <div ref={elementRef && elementRef} className={`status-wrapper ${visible ? "shown" : ""}`} style={{width: type === "forecast" ? "3rem" : "", flexDirection: type !== "forecast" ? "column" : "row"}}>
                {
                    // !isDay ?
                    code === 1000 ?
                    <> 
                        <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                            {
                                !isDay ?
                                    <Moon width={type === "forecast" ? 50 : 175} />
                                :
                                    <Sun width={type === "forecast" ? 50 : 175} />
                            }
                        </div>
                    </>
                    : code === 1003 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%"}}>
                                <Cloud width={type === "forecast" ? 40 : 100} />
                            </div>
                        </>
                    : code === 1006 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%"}}>
                                <Cloud width={type === "forecast" ? 45 : 140} />
                            </div>
                        </>
                    : code === 1009 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "30%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%"}}>
                                <Cloud width={type === "forecast" ? 40 : 140} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "65%" : "35%"}}>
                                <CloudTwo width={type === "forecast" ? 40 : 140} />
                            </div>                            
                        </>
                    : code === 1030 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "0%" : "30%", left: "50%", opacity: "0.5", rotate: "270deg"}}>
                                <Fog width={type === "forecast" ? 46 : 100} />
                            </div>                        
                        </>
                    : code === 1063 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", opacity: "0.5"}} >
                                <RainyCloud width={type === "forecast" ? 35 : 90} />
                            </div>
                            <div className="icon-3" style={{opacity: "0.5", top: type === "forecast" ? "60%" : "35%", left: "55%"}} >
                                <RainyCloud width={type === "forecast" ? 32 : 75} />
                            </div>                            
                        </>
                    : code === 1066 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", opacity: "0.5"}} >
                                <SnowyCloud width={type === "forecast" ? 35 : 90} />
                            </div>
                            <div className="icon-3" style={{opacity: "0.5", top: type === "forecast" ? "60%" : "35%", left: "55%"}} >
                                <SnowyCloud width={type === "forecast" ? 32 : 75} />
                            </div>                            
                        </>
                    : code === 1069 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", opacity: "0.5"}} >
                                <RainyCloud width={type === "forecast" ? 35 : 90} />
                            </div>
                            <div className="icon-3" style={{opacity: "0.5", top: type === "forecast" ? "60%" : "35%", left: "55%"}} >
                                <SnowyCloud width={type === "forecast" ? 32 : 75} />
                            </div>                            
                        </>
                    : code === 1072 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", opacity: "0.5"}} >
                                <SnowyCloud width={type === "forecast" ? 35 : 90} />
                            </div>
                            <div className="icon-3" style={{opacity: "0.5", top: type === "forecast" ? "60%" : "35%", left: "55%"}} >
                                <SnowyCloud width={type === "forecast" ? 32 : 75} />
                            </div>
                            <div className="icon-4" style={{opacity: "0.1", top: type === "forecast" ? "0%" : "42%", left: "22%", rotate: "90deg"}} >
                                <Fog width={type === "forecast" ? 40 : 100} />
                            </div>                               
                        </>
                    : code === 1087 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                        <Moon width={type === "forecast" ? 40 : 100} />                           
                                    :
                                    <Sun width={type === "forecast" ? 40 : 100} />
                                }
                                </div>
                                <div className="icon-2" style={{top: type === "forecast" ? "55%" : "20%"}}>
                                    <Cloud width={type === "forecast" ? 50 : 150} />
                                </div>
                                <div className="icon-3" style={{top: type === "forecast" ? "60%" : "25%"}}>
                                    <CloudTwo width={type === "forecast" ? 50 : 150} />
                                </div>
                                <div className="icon-4" style={{top: type === "forecast" ? "80%" : "37%", left: "42%"}} >
                                    {
                                        !isDay ?
                                        <Thunder width={type === "forecast" ? 20 : 60} color1="#ffffff" color2="#6e1bde" />
                                        :
                                        <Thunder width={type === "forecast" ? 20 : 60} color1="#f0d024" color2="#f98a06" />
                                    }
                                </div>
                        </>
                    : code === 1114 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%"}}>
                                <SnowyCloud width={type === "forecast" ? 40 : 125} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "60%" : "35%", left: "55%"}} >
                                <SnowyCloud width={type === "forecast" ? 35 : 125} />
                            </div>
                            <div className="icon-4" style={{opacity: "0.3", top: type === "forecast" ? "0%" : "42%", left: "22%", rotate: "90deg"}} >
                                <Fog width={type === "forecast" ? 40 : 100} />
                            </div>                               
                        </>
                    : code === 1117 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                                <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%"}}>
                                <SnowyCloud width={type === "forecast" ? 40 : 125} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "60%" : "35%", left: "60%"}} >
                                <SnowyCloud width={type === "forecast" ? 42 : 125} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "50%", zIndex:"3"}} >
                                <SnowyCloud width={type === "forecast" ? 45 : 115} />
                            </div>                              
                        </>
                    : code === 1135 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", left: "60%"}} >
                                <Fog width={type === "forecast" ? 42 : 105} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "55%" : "35%", left: "42%", zIndex:"3"}} >
                                <Fog width={type === "forecast" ? 45 : 110} />
                            </div>                              
                        </>
                    : code === 1147 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", left: "60%", opacity: "0.6"}} >
                                <Fog width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "55%" : "35%", left: "42%", zIndex:"3", opacity: "0.6"}} >
                                <Fog width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "50%", zIndex:"3", opacity: "0.95"}} >
                                <SnowyCloud width={type === "forecast" ? 40 : 100} /> 
                            </div>                             
                        </>
                    : code === 1150 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2"  style={{top: type === "forecast" ? "55%" : "30%", opacity: "0.5"}} >
                                <DrizzleRain width={type === "forecast" ? 32 : 85} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "60%" : "35%", left: "60%", opacity: "0.5"}} >
                                <DrizzleRain width={type === "forecast" ? 32 : 85} />
                            </div>                            
                        </>
                    : code === 1153 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2"  style={{top: type === "forecast" ? "55%" : "30%", opacity: "0.75"}} >
                                <DrizzleRain width={type === "forecast" ? 32 : 85} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "60%" : "35%", left: "60%", opacity: "0.75"}} >
                                <DrizzleRain width={type === "forecast" ? 32 : 85} />
                            </div>                            
                        </>
                    : code === 1168 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2"  style={{top: type === "forecast" ? "55%" : "30%", left: "50%",opacity: "0.75"}} >
                                <DrizzleRain width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "60%" : "35%", left: "50%"}} >
                                <ThermometerCold width={type === "forecast" ? 20 : 40} />
                            </div>                            
                        </>
                    : code === 1171 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2"  style={{top: type === "forecast" ? "55%" : "30%", opacity: "0.95"}} >
                                <DrizzleRain width={type === "forecast" ? 32 : 85} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "60%" : "35%", left: "60%", opacity: "0.95"}} >
                                <DrizzleRain width={type === "forecast" ? 32 : 85} />
                            </div> 
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "40%", left: "50%"}} >
                                <ThermometerCold width={type === "forecast" ? 20 : 40} />
                            </div>
                        </>
                    : code === 1180 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", left: "45%"}} >
                                <RainyCloud width={type === "forecast" ? 28 : 70} />
                            </div>
                        </>
                    : code === 1183 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", left: "45%"}} >
                                <RainyCloud width={type === "forecast" ? 35 : 100} />
                            </div>
                        </>
                    : code === 1186 || code === 1189 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", left: "45%"}} >
                                <RainyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "60%" : "35%", left: "60%"}} >
                                <RainyCloud width={type === "forecast" ? 32 : 75} />
                            </div>
                        </>
                    : code === 1192 || code === 1195 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", left: "37%"}} >
                                <RainyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "60%" : "35%", left: "50%"}} >
                                <RainyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "65%" : "40%", left: "60%"}} >
                                <RainyCloud width={type === "forecast" ? 45 : 110} />
                            </div>
                        </>
                    : code === 1198 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", left: "50%"}} >
                                <RainyCloud width={type === "forecast" ? 35 : 90} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "65%" : "40%", left: "64%"}} >
                                <ThermometerCold width={type === "forecast" ? 20 : 40} />
                            </div>
                        </>
                    : code === 1201 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", left: "44%"}} >
                                <RainyCloud width={125} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "60%" : "35%", left: "55%"}} >
                                <RainyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "65%" : "40%", left: "67%"}} >
                                <ThermometerCold width={type === "forecast" ? 20 : 40} />
                            </div>
                        </>
                    : code === 1204 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", left: "44%"}} >
                                <DrizzleRain width={type === "forecast" ? 35 : 90} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "60%" : "35%", left: "55%"}} >
                                <SnowyCloud width={type === "forecast" ? 32 : 75} />
                            </div>
                        </>
                    : code === 1207 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", left: "44%"}} >
                                <DrizzleRain width={type === "forecast" ? 46 : 95} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "60%" : "35%", left: "55%"}} >
                                <SnowyCloud width={type === "forecast" ? 35 : 80} />
                            </div>
                        </>
                    : code === 1210 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", left: "50%", opacity: "0.8"}} >
                                <SnowyCloud width={type === "forecast" ? 35 : 90} />
                            </div>
                        </>
                    : code === 1213 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%", left: "50%", opacity: "1"}} >
                                <SnowyCloud width={type === "forecast" ? 35 : 90} />
                            </div>
                        </>
                    : code === 1216 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                                <div className="icon-2" style={{top: type === "forecast" ? "55%" : "30%"}}>
                                <SnowyCloud width={type === "forecast" ? 32 : 85} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "60%" : "35%", left: "60%"}} >
                                <SnowyCloud width={type === "forecast" ? 32 : 85} />
                            </div>    
                        </>
                    : code === 1219 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", animationName: "animation2-b"}}>
                                <SnowyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "60%", animationName: "animation3-b"}} >
                                <SnowyCloud width={type === "forecast" ? 40 : 100} />
                            </div>    
                        </>
                    : code === 1222 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", opacity: "0.8", animationName: "animation2-b"}} >
                                <SnowyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "60%", opacity: "0.8", animationName: "animation3-b"}} >
                                <SnowyCloud width={type === "forecast" ? 42 : 105} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "60%", opacity: "0.8", animationName: "animation4-a"}} >
                                <SnowyCloud width={type === "forecast" ? 45 : 110} />
                            </div>                              
                        </>
                    : code === 1225 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", animationName: "animation2-b"}}>
                                <SnowyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "60%", animationName: "animation3-b"}} >
                                <SnowyCloud width={type === "forecast" ? 42 : 105} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "60%", animationName: "animation4-a"}} >
                                <SnowyCloud width={type === "forecast" ? 45 : 110} />
                            </div>                              
                        </>
                    : code === 1237 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{zIndex: "0", top: type === "forecast" ? "70%" : "30%", left: "40%", animationName: "animation2-b"}} >
                                <PelletCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "60%", animationName: "animation3-b"}} >
                                <PelletCloud width={type === "forecast" ? 42 : 105} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "50%", animationName: "animation4-a"}} >
                                <PelletCloud width={type === "forecast" ? 45 : 110} />
                            </div>                              
                        </>
                    : code === 1240 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", left: "37%", animationName: "animation2-b"}} >
                                <RainyCloud width={type === "forecast" ? 32 : 75} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "50%", animationName: "animation3-b"}} >
                                <RainyCloud width={type === "forecast" ? 32 : 75} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "60%", animationName: "animation4-a"}} >
                                <RainyCloud width={type === "forecast" ? 32 : 75} />
                            </div>
                        </>
                    : code === 1243 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", left: "37%", animationName: "animation2-b"}} >
                                <RainyCloud width={type === "forecast" ? 20 : 87} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "50%", animationName: "animation3-b"}} >
                                <RainyCloud width={type === "forecast" ? 20 : 87} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "60%", animationName: "animation4-a"}} >
                                <RainyCloud width={type === "forecast" ? 20 : 87} />
                            </div>
                        </>
                    : code === 1246 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", left: "37%", animationName: "animation2-b"}} >
                                <RainyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "50%", animationName: "animation3-b"}} >
                                <RainyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "60%", animationName: "animation4-a"}} >
                                <RainyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                        </>
                    : code === 1249 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", left: "40%", animationName: "animation2-b"}} >
                                <DrizzleRain width={type === "forecast" ? 32 : 75} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "50%", animationName: "animation3-b"}} >
                                <SnowyCloud width={type === "forecast" ? 32 : 75} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "60%", animationName: "animation4-a"}} >
                                <DrizzleRain width={type === "forecast" ? 32 : 75} />
                            </div>
                        </>
                    : code === 1252 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", left: "40%", animationName: "animation2-b"}} >
                                <DrizzleRain width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "50%", animationName: "animation3-b"}} >
                                <SnowyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "60%", animationName: "animation4-a"}} >
                                <DrizzleRain width={type === "forecast" ? 40 : 100} />
                            </div>
                        </>
                    : code === 1255 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", left: "37%", animationName: "animation2-b"}} >
                                <SnowyCloud width={type === "forecast" ? 32 : 75} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "50%", animationName: "animation3-b"}} >
                                <SnowyCloud width={type === "forecast" ? 32 : 75} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "60%", animationName: "animation4-a"}} >
                                <SnowyCloud width={type === "forecast" ? 32 : 75} />
                            </div>
                        </>
                    : code === 1258 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", left: "37%", animationName: "animation2-b"}} >
                                <SnowyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "50%", animationName: "animation3-b"}} >
                                <SnowyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "60%", animationName: "animation4-a"}} >
                                <SnowyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                        </>
                    : code === 1261 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", left: "37%", animationName: "animation2-b"}} >
                                <SnowyCloud width={type === "forecast" ? 32 : 75} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "50%", animationName: "animation3-b"}} >
                                <PelletCloud width={type === "forecast" ? 32 : 75} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "60%", animationName: "animation4-a"}} >
                                <SnowyCloud width={type === "forecast" ? 32 : 75} />
                            </div>
                        </>
                    : code === 1264 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", left: "37%", animationName: "animation2-b"}} >
                                <SnowyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "50%", animationName: "animation3-b"}} >
                                <SnowyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "60%", animationName: "animation4-a"}} >
                                <SnowyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                        </>
                    : code === 1273 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", left: "50%", animationName: "animation2-b"}} >
                                <RainyCloud width={type === "forecast" ? 40 : 80} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "48%", animationName: "animation3-b"}} >
                                    {
                                        !isDay ?
                                        <Thunder width={type === "forecast" ? 15 : 45} color1="#ffffff" color2="#6e1bde" />
                                        :
                                        <Thunder width={type === "forecast" ? 15 : 45} color1="#f0d024" color2="#f98a06" />
                                    }
                            </div>
                        </>
                    : code === 1276 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", left: "60%", animationName: "animation2-b"}} >
                                <RainyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "40%", animationName: "animation3-b"}} >
                                <SnowyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "58%", zIndex: "2", animationName: "animation4-a"}} >
                                    {
                                        !isDay ?
                                        <Thunder width={type === "forecast" ? 15 : 45} color1="#ffffff" color2="#6e1bde" />
                                        :
                                        <Thunder width={type === "forecast" ? 15 : 45} color1="#f0d024" color2="#f98a06" />
                                    }
                            </div>
                        </>
                    : code === 1279 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", left: "50%", animationName: "animation2-b"}} >
                                <SnowyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "48%", zIndex: "0", animationName: "animation3-b"}} >
                                    {
                                        !isDay ?
                                        <Thunder width={type === "forecast" ? 15 : 45} color1="#ffffff" color2="#6e1bde" />
                                        :
                                        <Thunder width={type === "forecast" ? 15 : 45} color1="#f0d024" color2="#f98a06" />
                                    }
                            </div>
                        </>
                    : code === 1282 ?
                        <>
                            <div className="icon-1" style={{top: type === "forecast" ? "50%" : "20%", animationName: type === "forecast" ? "animation1-b" : "animation1-a"}}>
                                {
                                    !isDay ?
                                    <Moon width={type === "forecast" ? 40 : 150} />
                                    :
                                    <Sun width={type === "forecast" ? 40 : 150} />
                                }
                            </div>
                            <div className="icon-2" style={{top: type === "forecast" ? "70%" : "30%", left: "60%", animationName: "animation2-b"}} >
                                <SnowyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-3" style={{top: type === "forecast" ? "75%" : "35%", left: "40%", animationName: "animation3-b"}} >
                                <SnowyCloud width={type === "forecast" ? 40 : 100} />
                            </div>
                            <div className="icon-4" style={{top: type === "forecast" ? "80%" : "42%", left: "58%", zIndex: "0", animationName: "animation4-a"}} >
                                    {
                                        !isDay ?
                                        <Thunder width={type === "forecast" ? 15 : 45} color1="#ffffff" color2="#6e1bde" />
                                        :
                                        <Thunder width={type === "forecast" ? 15 : 45} color1="#f0d024" color2="#f98a06" />
                                    }
                            </div>
                        </>
                    : null
                }
                {
                    type !== "forecast" ?
                    <p className="forecast-status">{status}</p>
                    : null
                }
            </div>
    )
}

export default CurrentStatus