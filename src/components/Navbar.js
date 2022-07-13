import { clear } from '@testing-library/user-event/dist/clear';
import React,{useState}  from 'react'
import {Link} from 'react-router-dom';

export default function Navbar(prop) {
  const [theme , switchTheme] = useState('warning');

  const clearCheck=()=>{
      Array.from(document.getElementsByClassName('theme-switch')).forEach((element)=>{
        element.checked= false;
    })
  }
  const toggleToBlue =()=>{
    switchTheme('primary');
    clearCheck();
    document.getElementById('primary').checked = true;
  }
  const toggleToRed=()=>{
    switchTheme('danger');
    clearCheck();
    document.getElementById('danger').checked = true;
  }
  const toggleToYellow =()=>{
    switchTheme('warning');
    clearCheck();
    document.getElementById('warning').checked = true;
  }
  const toggleToGreen =()=>{
    switchTheme('success');
    clearCheck();
    document.getElementById('success').checked = true;
  }
  
  return (
      <>
<nav className={`shadow-lg navbar navbar-expand-lg bg-${theme}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Text Editor</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Themes
          </a>
          <ul className="dropdown-menu" style={{padding:'1rem'}} aria-labelledby="navbarDropdown">
            <li>
              <div className="form-check form-switch">
              <input className="form-check-input theme-switch" onClick = {toggleToGreen}  type="checkbox" role="switch" id="success"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green</label> 
              </div>
            </li>
            <li>
              <div className="form-check form-switch">
              <input className="form-check-input theme-switch" onClick = {toggleToYellow} type="checkbox" role="switch" id="warning" defaultChecked/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Yellow</label> 
              </div>
            </li>
            <li>
              <div className="form-check form-switch">
              <input className="form-check-input theme-switch" onClick = {toggleToRed} type="checkbox" role="switch" id="danger"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red</label> 
              </div>
            </li>
            <li>
              <div className="form-check form-switch">
              <input className="form-check-input theme-switch"  onClick = {toggleToBlue} type="checkbox" role="switch" id="primary"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Blue</label> 
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
            <div className="form-check form-switch">
                <input className="form-check-input" onClick = {prop.toggleMode} type="checkbox" role="switch" id="flex SwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label> 
              </div>
      </form>
    </div>
  </div>
</nav>
</>
  )
}
