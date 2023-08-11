import React from "react";
import "./App.css";
import Weather from "./Weather";
import Srce from "./Srce";

const App = () => {
  return (
    <>
      <div className="container 2xl mx-auto h-screen">
        <div className="row">
         <Weather />
         <Srce/>
        </div>
      </div>
    </>
  );
};

export default App;
