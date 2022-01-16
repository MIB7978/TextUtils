import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import Text from "./component/Text";
import React, { useState } from "react";
// import Alert from "./component/Ale/rt";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("dark mode enabled", "success");
      document.title = "Dark mode Text utils";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");
      document.title = "light mode Text utils";
    }
  };
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
    {/* <Router> */}
    <Navbar Mode={mode} togglemode={togglemode} />
    {/* <Switch> */}
      {/* <Route path="/about">
      <About/>
      </Route> */}
      {/* <Route path="/"> */}
      <Text Mode={mode}/>
      {/* </Route>
      </Switch>
      </Router> */}
    </>
  );
}

export default App;
