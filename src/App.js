import React,{useState} from 'react'
import MyButton from "./components/MyButton";
import TextForm from "./components/TextForm";

import Navigation from "./components/Navigation";


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function MyApp() {
  
  

  return (
    <div>
      <Navigation/>
      <h2 className="p-3 mb-2 bg-secondary text-white mx-auto">Play With Text</h2>
      
      <div className="container">
        <TextForm/>
      </div>
      
      {/* <MyButton name="phani" age = {12} /> */}
      
    </div>
  );
}

export default MyApp;