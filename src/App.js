import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
} from "react-router-dom";



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

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.getElementById("myBox").classList.remove('bg-success')
    document.getElementById("myBox").classList.remove('bg-secondary')
    document.getElementById("myNav").classList.remove('bg-secondary')
  }

  const toggleMode = (cls) => {
    console.log(cls)
    setMode ('dark')
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    // document.body.style.backgroundColor = "#042743"
    document.getElementById("myBox").classList.add('bg-'+cls)
    document.getElementById("myNav").classList.add('bg-'+cls)
    showAlert("Dark Mode activated!", "success")
    document.title = "TextUtils - Dark Mode"
  }
  const lightMode = (cls) => {
    console.log(cls)
    setMode ('light')
    removeBodyClasses();
    // document.body.style.backgroundColor = "white"
    document.body.classList.add('bg-'+cls)
    document.getElementById("myBox").style.backgroundColor = "white"
    document.getElementById("myNav").style.backgroundColor = "white"
    showAlert(" Light Mode has been enabled.", "success")
  }
  const greenMode = (cls) => {
    console.log(cls)
    setMode ('green')
    removeBodyClasses();
    // document.body.style.backgroundColor = "green"
    document.body.classList.add('bg-'+cls)
    // document.getElementById("myBox").style.backgroundColor = "green"
    document.getElementById("myBox").classList.add('bg-'+cls)
    document.getElementById("myNav").style.backgroundColor = "#345e34"
    document.getElementById("btnradio3").style.backgroundColor = "pink"
    showAlert("Green Mode activated!", "success")
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} greenMode={greenMode}
      lightMode={lightMode}/>
      <Alerts alert={alert}/>
      <div className="container my-3">
        
        {/* <Switch> */}
          <Routes>
            <Route exact path='/about' element={<About mode={mode} toggleMode={toggleMode} greenMode={greenMode} lightMode={lightMode}/>}>
            </Route>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces." mode={mode} toggleMode={toggleMode} greenMode={greenMode} lightMode={lightMode}/>}>
            </Route>
          </Routes>
        {/* </Switch> */}
      </div>
    </Router>  
    </>

  );
}

export default App;
