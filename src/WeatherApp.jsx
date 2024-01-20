import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "mumbai",
    discription: "mist",
    feels: "290.17",
    humidity: "88",
    temp: "29.12",
  });

  let updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
  };

  return (
    <div className="container">
      <h1>Weather App by Hamid Ahmad</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
