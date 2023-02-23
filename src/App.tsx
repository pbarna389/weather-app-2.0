import { useContext } from "react";
import { IWeatherContext } from "./@types/weather"
import { weatherContext } from "./context/weatherContext";

import Header from "./layout/Header";
import BasicDetails from "./layout/BasicDetails";
import SunMoonMeter from "./layout/SunMoonMeter";
import Forecast from "./layout/Forecast";
import Loading from "./components/Loading";
import Error from "./components/Error";
import "./App.css";

function App():JSX.Element {
  const { loading, error } = useContext(weatherContext) as IWeatherContext;

  return (
    <div className="App">
      <Header />
      <main>
        {
          loading ? 
            <Loading />
          : error ?
            <Error />
          :
          <>
            <BasicDetails />
            <SunMoonMeter />
            <Forecast />
          </>
        }
      </main>
    </div>
  )
}

export default App
