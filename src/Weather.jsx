import axios from "axios";
import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import {TiWeatherCloudy} from "react-icons/ti"

const Weather = () => {
  const [temp, setTemp] = useState(null);
  const [weather, setWeather] = useState([]);
  const [city, SetCity] = useState("");
  console.log(city);
  const formHandler = (e) => {
    e.preventDefault();
    SetCity(e.target[0].value);
  };

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a867e25f2d83db579421a57fd8e937ec&units=metric`;
  const getData = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setTemp(data.main.temp);
    setWeather(data.weather[0]);
  };
  console.log(temp);
  console.log(weather);
  useEffect(() => {
    getData();
  }, [city]);

  
  

  return (
    <>
      <div className="flex justify-center items-center flex-col p-5 ">
        <h1 className="text-3xl font-semibold my-2 py-5 text-green-700">
          Weather Search App<i className=" inline-block w-7 h-7 mb-1 px-2"><TiWeatherCloudy/></i> 
        </h1>
        <div className="shadow bg-white p-10 rounded-2xl">
          <div className="form-control ">
            <form onSubmit={formHandler} className="input-group bg-white">
              <input
                type="text"
                placeholder="Search City Here"
                className="border px-5 bg-white"
              />
              <button type="submit" className="btn btn-success ">
                Search
              </button>
            </form>
          </div>
          {city !== "" ? (
            <div className="bg-white">
            <h1 className="pt-10 text-center text-3xl font-bold text-green-700 capitalize bg-white ">
              {city}
            </h1>
             <h1 className="pt-10 text-center text-xl font-semibold text-green-800 bg-white">
             {temp}°C
           </h1>
           <img
             src={`http://openweathermap.org/img/w/${weather.icon}.png`}
             alt="image of weather"
             className="mx-auto pt-10 w-20 bg-white"
           />
            </div>
          ) : (
            <p className="pt-10 text-center text-xl font-bold text-green-700 bg-white">Search weather by City</p>
          )}

         
        </div>
      </div>
    </>
  );
};

export default Weather;
