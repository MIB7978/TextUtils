
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Text from './component/Text';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light")
  const togglemode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
    <Navbar Mode = {mode} togglemode ={togglemode} />
    <Text Mode = {mode} togglemode ={togglemode} />
    {/* <About/> */}
    </>
  );
}

export default App;
