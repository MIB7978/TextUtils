
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Text from './component/Text';
import React, { useState } from 'react';
import Alert from './component/Alert';

function App() {
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState("light")
  const togglemode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      showAlert('dark mode enabled','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('light mode enabled','success')
    }
  }
  const showAlert = (msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  return (
    <>
    <Navbar Mode = {mode} togglemode ={togglemode} />
    <Alert alert = {alert}/>
    <Text Mode = {mode} togglemode ={togglemode} showAlert={showAlert}/>
    {/* <About/> */}
    </>
  );
}

export default App;
