import './App.css';
import GeneralInformation from "./components/GeneralInformation";
import Experience from "./components/Experience";
import React from "react";

function App() {


  return (
    <div className="App">
        <h1>Create Your Resume</h1>
        <div className='container-md'>
            <h2>General Information</h2>
            < GeneralInformation/>
        </div>
        <div className='container-md'>
            <h2>Professional Experience</h2>
            < Experience/>
        </div>
    </div>
  );
};

export default App;