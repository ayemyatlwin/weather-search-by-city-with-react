import React from "react";



const Srce = () => {
    let date = new Date();
    console.log(date)
  return (
    <>
      <h1 className="text-center text-sm text-gray-500">
        source code
        <a
          target="_blnk"
          href="https://github.com/ayemyatlwin/weather-search-by-city-with-react.git"
          className="text-blue-500"
        > here
        </a>
      </h1>

    </>
  );
};

export default Srce;
