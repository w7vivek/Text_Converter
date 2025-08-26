import React,{useState} from 'react'
import './App.css';
// import ModeDark from './components/ModeDark';
import NavBar from './components/NavBar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
// import About from './components/About';

// Import the react-router-dom
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [mode,setMode]= useState('light');

  const toggleMode= ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enable","primary")
      document.title= "Text Converter - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enable","danger")
      document.title= "Text Converter - Light Mode";
    }
  }

 const [alert,setAlert]= useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }

  return (
    <>
    {/* <Router> */}
    <NavBar title="Text Converter" aboutText="ABOUT" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
        {/* <Switch>
            <Route exact path="/About">
              <About/>
            </Route>

            <Route exact path="/"> */}
                <TextFrom heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
            {/* </Route>
        </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
