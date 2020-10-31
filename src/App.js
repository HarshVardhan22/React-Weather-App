import React, { useState } from "react";
import "./App.css";
import "./Form";
import Form from "./Form";
import Weather from "./Weather";

function App() {
  const [weather, setWeather] = useState([]);

  const APIKEY = "80a73573df05e8d85388b8e1b1f435e2";

  async function fetchData(e) {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => data);

      if(city && country && apiData.sys){
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature:  Math.round(apiData.main.temp * 9/5 - 459.67),
        error: "",
      });
    }

     else{
      setWeather({
        data: '',
        city: '',
        country: '',
        description: '',
        temperature: '',
        error: "Please enter valid City and Country",
      });
    }
  }

  return (
    <div className="App">
      <h3>Weather App</h3>
      <Form getWeather={fetchData} />
      {console.log(weather.data)}
      <Weather
        city={weather.city}
        description={weather.description}
        country={weather.country}
        temperature={weather.temperature}
        error={weather.error}
      />
    </div>
  );
}

export default App;
