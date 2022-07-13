import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textarea from './components/Textarea'; 
import React,{useState} from 'react'
import Alert from './components/Alert';

// React router DOM -----------
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
// -----------------------------


function App() {
  const [mode , switchMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type) => { 
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === "dark")
    {
      switchMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode is enabled : ","success");
    }
    else{
      switchMode("dark");
      document.body.style.backgroundColor = ' rgb(10 9 8)';
      document.body.style.color = 'white';
      showAlert("Dark mode is enabled : ","success");
    }
  }
  return (
    <>
     {/* <Router history={history} > */}
      <Navbar mode = {mode} toggleMode={toggleMode} />
      <Alert alert={alert} style={{position:'fixed'}}/>
      <div className='container'>
        {/* <Routes> */}
          {/* <Route path="/about" mode={mode} element ={<About mode={mode}/>}/> */}
          {/* <Route path="/" element={<Textarea alert={showAlert} mode={mode} heading = "Enter your text here : "/>}/> */}
          <Textarea alert={showAlert} mode={mode} heading = "Enter your text here : "/>
        {/* </Routes> */}
      </div>
     {/* </Router> */}
    </>
  );
}

export default App;
