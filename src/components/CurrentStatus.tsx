import { BsFillCloudSleetFill } from "react-icons/bs"; 
import { Moon, Sun, Cloud, CloudTwo, Fog, RainyCloud, SnowyCloud, Thunder, DrizzleRain, ThermometerCold, PelletCloud } from "../assets/React-Icons-modified/Moon";
import { ICurrentStatus } from "../@types/weather";

import "../styles/components/CurrentStatus.css"

const CurrentStatus:React.FC<ICurrentStatus> = ({ code, isDay }):JSX.Element => {
    return (
            <div className="status-wrapper">
                {
                    // !isDay ?
                    code === 1000 ?
                    <> 
                        <div className="icon-1" style={{top: "50%"}}>
                            {
                                !isDay ?
                                    <Moon width={150} />
                                :
                                    <Sun width={150} />
                            }
                        </div>
                    </>
                    : code === 1003 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2">
                                <Cloud width={100} />
                            </div>
                        </>
                    : code === 1006 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2">
                                <Cloud width={150} />
                            </div>
                        </>
                    : code === 1009 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2">
                                <Cloud width={150} />
                            </div>
                            <div className="icon-3">
                                <CloudTwo width={150} />
                            </div>                            
                        </>
                    : code === 1030 ?
                        <>
                            <div className="icon-1" style={{top: "45%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{top: "16%", left: "50%", opacity: "0.5", rotate: "270deg"}}>
                                <Fog width={140} />
                            </div>                        
                        </>
                    : code === 1063 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{opacity: "0.5"}} >
                                <RainyCloud width={90} />
                            </div>
                            <div className="icon-3" style={{opacity: "0.5", top: "52%", left: "55%"}} >
                                <RainyCloud width={75} />
                            </div>                            
                        </>
                    : code === 1066 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{opacity: "0.5"}} >
                                <SnowyCloud width={90} />
                            </div>
                            <div className="icon-3" style={{opacity: "0.5", top: "52%", left: "55%"}} >
                                <SnowyCloud width={75} />
                            </div>                            
                        </>
                    : code === 1069 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{opacity: "0.5"}} >
                                <RainyCloud width={90} />
                            </div>
                            <div className="icon-3" style={{opacity: "0.5", top: "52%", left: "55%"}} >
                                <SnowyCloud width={75} />
                            </div>                            
                        </>
                    : code === 1072 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{opacity: "0.5"}} >
                                <SnowyCloud width={90} />
                            </div>
                            <div className="icon-3" style={{opacity: "0.5", top: "52%", left: "55%"}} >
                                <SnowyCloud width={75} />
                            </div>
                            <div className="icon-4" style={{opacity: "0.1", top: "60%", left: "22%", rotate: "90deg"}} >
                                <Fog width={100} />
                            </div>                               
                        </>
                    : code === 1087 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                        <Moon width={100} />                           
                                    :
                                    <Sun width={100} />
                                }
                                </div>
                                <div className="icon-2">
                                    <Cloud width={150} />
                                </div>
                                <div className="icon-3">
                                    <CloudTwo width={150} />
                                </div>
                                <div className="icon-4" style={{top: "70%", left: "42%"}} >
                                    {
                                        !isDay ?
                                        <Thunder width={60} color1="#ffffff" color2="#6e1bde" />
                                        :
                                        <Thunder width={60} color1="#f0d024" color2="#f98a06" />
                                    }
                                </div>
                        </>
                    : code === 1114 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" >
                                <SnowyCloud width={90} />
                            </div>
                            <div className="icon-3" style={{top: "52%", left: "55%"}} >
                                <SnowyCloud width={75} />
                            </div>
                            <div className="icon-4" style={{opacity: "0.3", top: "60%", left: "22%", rotate: "90deg"}} >
                                <Fog width={100} />
                            </div>                               
                        </>
                    : code === 1117 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" >
                                <SnowyCloud width={100} />
                            </div>
                            <div className="icon-3" style={{top: "52%", left: "60%"}} >
                                <SnowyCloud width={105} />
                            </div>
                            <div className="icon-4" style={{top: "56%", left: "50%", zIndex:"3"}} >
                                <SnowyCloud width={110} />
                            </div>                              
                        </>
                    : code === 1135 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{top: "52%", left: "60%"}} >
                                <Fog width={105} />
                            </div>
                            <div className="icon-3" style={{top: "52%", left: "42%", zIndex:"3"}} >
                                <Fog width={110} />
                            </div>                              
                        </>
                    : code === 1147 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{top: "60%", left: "60%", opacity: "0.6"}} >
                                <Fog width={100} />
                            </div>
                            <div className="icon-3" style={{top: "60%", left: "42%", zIndex:"3", opacity: "0.6"}} >
                                <Fog width={100} />
                            </div>
                            <div className="icon-4" style={{top: "50%", left: "50%", zIndex:"3", opacity: "0.95"}} >
                                <SnowyCloud width={100} /> 
                            </div>                             
                        </>
                    : code === 1150 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2"  style={{opacity: "0.5"}} >
                                <DrizzleRain width={85} />
                            </div>
                            <div className="icon-3" style={{top: "52%", left: "60%", opacity: "0.5"}} >
                                <DrizzleRain width={85} />
                            </div>                            
                        </>
                    : code === 1153 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2"  style={{opacity: "0.75"}} >
                                <DrizzleRain width={85} />
                            </div>
                            <div className="icon-3" style={{top: "52%", left: "60%", opacity: "0.75"}} >
                                <DrizzleRain width={85} />
                            </div>                            
                        </>
                    : code === 1168 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2"  style={{top: "50%", left: "50%",opacity: "0.75"}} >
                                <DrizzleRain width={100} />
                            </div>
                            <div className="icon-3" style={{top: "61%", left: "50%"}} >
                                <ThermometerCold width={40} />
                            </div>                            
                        </>
                    : code === 1171 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2"  style={{opacity: "0.95"}} >
                                <DrizzleRain width={85} />
                            </div>
                            <div className="icon-3" style={{top: "52%", left: "60%", opacity: "0.95"}} >
                                <DrizzleRain width={85} />
                            </div> 
                            <div className="icon-4" style={{top: "63%", left: "50%"}} >
                                <ThermometerCold width={40} />
                            </div>
                        </>
                    : code === 1180 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "45%"}} >
                                <RainyCloud width={70} />
                            </div>
                        </>
                    : code === 1183 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "45%"}} >
                                <RainyCloud width={90} />
                            </div>
                        </>
                    : code === 1186 || code === 1189 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "45%"}} >
                                <RainyCloud width={100} />
                            </div>
                            <div className="icon-3" style={{top: "53%", left: "60%"}} >
                                <RainyCloud width={75} />
                            </div>
                        </>
                    : code === 1192 || code === 1195 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "37%"}} >
                                <RainyCloud width={125} />
                            </div>
                            <div className="icon-3" style={{top: "60%", left: "50%"}} >
                                <RainyCloud width={100} />
                            </div>
                            <div className="icon-4" style={{top: "53%", left: "60%"}} >
                                <RainyCloud width={110} />
                            </div>
                        </>
                    : code === 1198 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "50%"}} >
                                <RainyCloud width={90} />
                            </div>
                            <div className="icon-4" style={{top: "47%", left: "64%"}} >
                                <ThermometerCold width={40} />
                            </div>
                        </>
                    : code === 1201 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "44%"}} >
                                <RainyCloud width={125} />
                            </div>
                            <div className="icon-3" style={{top: "52%", left: "55%"}} >
                                <RainyCloud width={100} />
                            </div>
                            <div className="icon-4" style={{top: "42%", left: "67%"}} >
                                <ThermometerCold width={40} />
                            </div>
                        </>
                    : code === 1204 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "44%"}} >
                                <DrizzleRain width={90} />
                            </div>
                            <div className="icon-3" style={{top: "52%", left: "55%"}} >
                                <SnowyCloud width={75} />
                            </div>
                        </>
                    : code === 1207 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "44%"}} >
                                <DrizzleRain width={95} />
                            </div>
                            <div className="icon-3" style={{top: "52%", left: "55%"}} >
                                <SnowyCloud width={80} />
                            </div>
                        </>
                    : code === 1210 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "50%", opacity: "0.8"}} >
                                <SnowyCloud width={90} />
                            </div>
                        </>
                    : code === 1213 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "50%", opacity: "1"}} >
                                <SnowyCloud width={90} />
                            </div>
                        </>
                    : code === 1216 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" >
                                <SnowyCloud width={85} />
                            </div>
                            <div className="icon-3" style={{top: "52%", left: "60%"}} >
                                <SnowyCloud width={85} />
                            </div>    
                        </>
                    : code === 1219 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" >
                                <SnowyCloud width={100} />
                            </div>
                            <div className="icon-3" style={{top: "52%", left: "60%"}} >
                                <SnowyCloud width={100} />
                            </div>    
                        </>
                    : code === 1222 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{ opacity: "0.8"}} >
                                <SnowyCloud width={100} />
                            </div>
                            <div className="icon-3" style={{top: "52%", left: "60%", opacity: "0.8"}} >
                                <SnowyCloud width={105} />
                            </div>
                            <div className="icon-4" style={{top: "56%", left: "50%", opacity: "0.8"}} >
                                <SnowyCloud width={110} />
                            </div>                              
                        </>
                    : code === 1225 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" >
                                <SnowyCloud width={100} />
                            </div>
                            <div className="icon-3" style={{top: "52%", left: "60%"}} >
                                <SnowyCloud width={105} />
                            </div>
                            <div className="icon-4" style={{top: "56%", left: "50%"}} >
                                <SnowyCloud width={110} />
                            </div>                              
                        </>
                    : code === 1237 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{zIndex: "0", top: "52%", left: "40%"}} >
                                <PelletCloud width={100} />
                            </div>
                            <div className="icon-3" style={{top: "52%", left: "60%"}} >
                                <PelletCloud width={105} />
                            </div>
                            <div className="icon-4" style={{top: "56%", left: "50%"}} >
                                <PelletCloud width={110} />
                            </div>                              
                        </>
                    : code === 1240 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "37%"}} >
                                <RainyCloud width={75} />
                            </div>
                            <div className="icon-3" style={{top: "60%", left: "50%"}} >
                                <RainyCloud width={75} />
                            </div>
                            <div className="icon-4" style={{top: "53%", left: "60%"}} >
                                <RainyCloud width={75} />
                            </div>
                        </>
                    : code === 1243 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "37%"}} >
                                <RainyCloud width={87} />
                            </div>
                            <div className="icon-3" style={{top: "60%", left: "50%"}} >
                                <RainyCloud width={87} />
                            </div>
                            <div className="icon-4" style={{top: "53%", left: "60%"}} >
                                <RainyCloud width={87} />
                            </div>
                        </>
                    : code === 1246 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "37%"}} >
                                <RainyCloud width={100} />
                            </div>
                            <div className="icon-3" style={{top: "60%", left: "50%"}} >
                                <RainyCloud width={100} />
                            </div>
                            <div className="icon-4" style={{top: "53%", left: "60%"}} >
                                <RainyCloud width={100} />
                            </div>
                        </>
                    : code === 1249 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "40%"}} >
                                <DrizzleRain width={75} />
                            </div>
                            <div className="icon-3" style={{top: "50%", left: "50%"}} >
                                <SnowyCloud width={75} />
                            </div>
                            <div className="icon-4" style={{top: "53%", left: "60%"}} >
                                <DrizzleRain width={75} />
                            </div>
                        </>
                    : code === 1252 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "40%"}} >
                                <DrizzleRain width={100} />
                            </div>
                            <div className="icon-3" style={{top: "50%", left: "50%"}} >
                                <SnowyCloud width={100} />
                            </div>
                            <div className="icon-4" style={{top: "53%", left: "60%"}} >
                                <DrizzleRain width={100} />
                            </div>
                        </>
                    : code === 1255 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "37%"}} >
                                <SnowyCloud width={75} />
                            </div>
                            <div className="icon-3" style={{top: "60%", left: "50%"}} >
                                <SnowyCloud width={75} />
                            </div>
                            <div className="icon-4" style={{top: "53%", left: "60%"}} >
                                <SnowyCloud width={75} />
                            </div>
                        </>
                    : code === 1258 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "37%"}} >
                                <SnowyCloud width={100} />
                            </div>
                            <div className="icon-3" style={{top: "60%", left: "50%"}} >
                                <SnowyCloud width={100} />
                            </div>
                            <div className="icon-4" style={{top: "53%", left: "60%"}} >
                                <SnowyCloud width={100} />
                            </div>
                        </>
                    : code === 1261 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "37%"}} >
                                <SnowyCloud width={75} />
                            </div>
                            <div className="icon-3" style={{top: "60%", left: "50%"}} >
                                <PelletCloud width={75} />
                            </div>
                            <div className="icon-4" style={{top: "53%", left: "60%"}} >
                                <SnowyCloud width={75} />
                            </div>
                        </>
                    : code === 1264 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{left: "37%"}} >
                                <SnowyCloud width={100} />
                            </div>
                            <div className="icon-3" style={{top: "60%", left: "50%"}} >
                                <SnowyCloud width={100} />
                            </div>
                            <div className="icon-4" style={{top: "53%", left: "60%"}} >
                                <SnowyCloud width={100} />
                            </div>
                        </>
                    : code === 1273 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{top: "52%", left: "50%"}} >
                                <RainyCloud width={80} />
                            </div>
                            <div className="icon-3" style={{top: "61%", left: "48%"}} >
                                    {
                                        !isDay ?
                                        <Thunder width={45} color1="#ffffff" color2="#6e1bde" />
                                        :
                                        <Thunder width={45} color1="#f0d024" color2="#f98a06" />
                                    }
                            </div>
                        </>
                    : code === 1276 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{top: "52%", left: "60%"}} >
                                <RainyCloud width={100} />
                            </div>
                            <div className="icon-3" style={{left: "40%"}} >
                                <SnowyCloud width={100} />
                            </div>
                            <div className="icon-4" style={{top: "62%", left: "58%", zIndex: "2"}} >
                                    {
                                        !isDay ?
                                        <Thunder width={45} color1="#ffffff" color2="#6e1bde" />
                                        :
                                        <Thunder width={45} color1="#f0d024" color2="#f98a06" />
                                    }
                            </div>
                        </>
                    : code === 1279 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{top: "56%", left: "50%"}} >
                                <SnowyCloud width={100} />
                            </div>
                            <div className="icon-3" style={{top: "60%", left: "48%", zIndex: "0"}} >
                                    {
                                        !isDay ?
                                        <Thunder width={45} color1="#ffffff" color2="#6e1bde" />
                                        :
                                        <Thunder width={45} color1="#f0d024" color2="#f98a06" />
                                    }
                            </div>
                        </>
                    : code === 1282 ?
                        <>
                            <div className="icon-1" style={{top: "42%"}}>
                                {
                                    !isDay ?
                                    <Moon width={100} />
                                    :
                                    <Sun width={100} />
                                }
                            </div>
                            <div className="icon-2" style={{top: "52%", left: "60%"}} >
                                <SnowyCloud width={100} />
                            </div>
                            <div className="icon-3" style={{left: "40%"}} >
                                <SnowyCloud width={100} />
                            </div>
                            <div className="icon-4" style={{top: "56%", left: "58%", zIndex: "0"}} >
                                    {
                                        !isDay ?
                                        <Thunder width={45} color1="#ffffff" color2="#6e1bde" />
                                        :
                                        <Thunder width={45} color1="#f0d024" color2="#f98a06" />
                                    }
                            </div>
                        </>
                    : null
                }
            </div>
    )
}

export default CurrentStatus