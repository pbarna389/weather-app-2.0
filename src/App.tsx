import InputField from "./components/InputField";
import BasicDetails from "./layout/BasicDetails";
import WeatherIndicator from "./layout/WeatherIndicator";
import Forecast from "./layout/Forecast";
import "./App.css";

function App():JSX.Element {

  return (
    <div className="App">
      <InputField />
      <BasicDetails />
      <WeatherIndicator />
      <Forecast />
    </div>
  )
}

export default App
