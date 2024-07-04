import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg `} id='myNav' style={{ color: props.mode==='light'?'#042743':'white'}}>      
        <div className="container-fluid">
            <Link className="navbar-brand" style={{color: props.mode==='light'?'#042743':'white'}} to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" style={{color: props.mode==='light'?'#042743':'white'}}  aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={{color: props.mode==='light'?'#042743':'white'}} to="/about">{props.aboutText}</Link>
                    </li>
                </ul>
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group" id='btns'>
                    <input type="radio" className="btn-check bg-light" name="btnradio" id="btnradio1" autoComplete="off" onClick={()=>{props.lightMode('light')}} />
                    <label className="btn btn-outline-primary" htmlFor="btnradio1">Light Mode</label>

                    <input type="radio" className="btn-check bg-dark" name="btnradio" id="btnradio2" autoComplete="off" onClick={()=>{props.toggleMode('secondary')}}/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio2">Dark Mode</label>

                    <input type="radio" className="btn-check bg-success" name="btnradio" id="btnradio3" autoComplete="off" onClick={()=>{props.greenMode('success')}}/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio3">Green Mode</label>
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = { 
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
};

// Navbar.defaultProps = { 
//     title: 'Set title here',
//     aboutText: 'About text here',
// };
