import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "448252ac66ecb980caa5f4b3c3b84a18";

  let weatherinfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonresponse = await response.json();
    console.log(jsonresponse);
    let result = {
      city: jsonresponse.name,
      temp: jsonresponse.main.temp,
      humidity: jsonresponse.main.humidity,
      description: jsonresponse.weather[0].description,
      temp_min: jsonresponse.main.temp_min,
      temp_max: jsonresponse.main.temp_max,
      feels: jsonresponse.main.feels_like,
    };
    console.log(result);
    return result;
  };

  let handlechange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    let newinfo = await weatherinfo();
    updateInfo(newinfo);
  };

  return (
    <div>
      <h1 className="search ">Enter The City Name</h1>
      <br />
      <form onSubmit={handleSubmit} >
        <TextField
          id="city"
          label="city"
          variant="outlined"
          required
          value={city}
          onChange={handlechange}
          className="T"
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          search
        </Button>
        <br />
      </form>
    </div>
  );
}
