import InputField from "./components/InputField";
import BasicDetails from "./layout/BasicDetails";
import SunMoonMeter from "./layout/SunMoonMeter";
import Forecast from "./layout/Forecast";
import "./App.css";

function App():JSX.Element {

  return (
    <div className="App">
      <InputField />
      <BasicDetails />
      <SunMoonMeter />
      <Forecast />
    </div>
  )
}

export default App
