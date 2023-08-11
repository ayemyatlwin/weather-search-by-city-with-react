import React from "react";
import "./App.css";
import Weather from "./Weather";
import Source from "./source";

const App = () => {
  return (
    <>
      <div className="container 2xl mx-auto h-screen">
        <div className="row">
         <Weather />
         <Source/>
        </div>
      </div>
    </>
  );
};

export default App;
