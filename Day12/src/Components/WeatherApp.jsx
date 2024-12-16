import React, { useState } from 'react'

const WeatherApp = () => {
    const [city,setcity]=useState();
    const [data,setweather]=useState();
    const api_key ="72a581a29acbd8f56bd9eed638c30cb0";
    const fetchdata = () => {
        alert("Weather data");
    };
  return (
    <div>
        WeatherApp
        <input type="text"
        onChange={(e)=>{
            setcity(e.target.value);
        }}
        />
        <button onClick= {fetchdata}> fetch weather </button>
    </div>
  );
};

export default WeatherApp;