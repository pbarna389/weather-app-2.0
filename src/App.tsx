import Header from "./layout/Header";
import BasicDetails from "./layout/BasicDetails";
import SunMoonMeter from "./layout/SunMoonMeter";
import Forecast from "./layout/Forecast";
import "./App.css";

function App():JSX.Element {
  return (
    <div className="App">
      <Header />
      <main>
        <BasicDetails />
        <SunMoonMeter />
        <Forecast />
      </main>
    </div>
  )
}

export default App
