import axios from "axios";
import React, { useEffect, useState } from "react";

const WeatherForecast = (props) => {
  console.log(props.date);
  const [forecastData, setForecastData] = useState([]);
  let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.cityName}&key=b453f04431883a9b0a16ea237f7oat08`;
  const getForecastData = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setForecastData(data.daily);
  };
  console.log(forecastData);

  useEffect(() => {
    getForecastData();
  }, [props.cityName]);

  function day(dayCode) {
    let date = new Date(dayCode * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <>
      <div className="flex rounded-xl  flex-wrap md:justify-between my-2 py-5 px-2 flex-col md:gap-14 md:flex-row items-center">
        {forecastData?.map((data, i) => {
          return (
            <div key={i} className="flex-col">
              <p className="text-center text-green-800 font-semibold">{day(data?.time)}</p>
              <p className="text-center text-green-800 font-bold">{data?.condition?.description}</p>
              <img
                src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${data?.condition?.icon}.png`}
                alt=""
              />
              <p className="flex gap-2 justify-center">
                <span className="text-green-800">{Math.round(data?.temperature?.minimum)}°</span> -
                <span className="text-green-800">{Math.round(data?.temperature?.maximum)}°</span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeatherForecast;
