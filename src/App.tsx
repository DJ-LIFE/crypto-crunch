import { BrowserRouter, Route, Routes } from "react-router";
import { Cryptocrunch } from "./page/cryptoCrunch/Cryptocrunch";
import { WeatherApp } from "./page/weatherApp/WeatherApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cryptocrunch />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
