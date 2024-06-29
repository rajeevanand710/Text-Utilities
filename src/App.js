// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }
  const toggleMode = () => {
    setMode ('dark')
    document.body.style.backgroundColor = "#042743"
    document.getElementById("myBox").style.backgroundColor = "#042743"
    document.getElementById("myNav").style.backgroundColor = "#042743"
    showAlert("Dark Mode activated!", "success")
  }
  const lightMode = () => {
    setMode ('light')
    document.body.style.backgroundColor = "white"
    document.getElementById("myBox").style.backgroundColor = "white"
    document.getElementById("myNav").style.backgroundColor = "white"
    showAlert(" Light Mode has been enabled.", "success")
  }
  const greenMode = () => {
    setMode ('green')
    document.body.style.backgroundColor = "green"
    document.getElementById("myBox").style.backgroundColor = "green"
    document.getElementById("myNav").style.backgroundColor = "#345e34"
    document.getElementById("btnradio3").style.backgroundColor = "pink"
    showAlert("Green Mode activated!", "success")
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} greenMode={greenMode}
      lightMode={lightMode}/>
      <Alerts alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below:" mode={mode} toggleMode={toggleMode} greenMode={greenMode} lightMode={lightMode}/>
        {/* <About/> */}
      </div>
      
    </>

  );
}

export default App;
