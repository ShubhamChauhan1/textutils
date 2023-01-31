import React from 'react'
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

export default function App() {
    const [mode, setMode] = useState("dark-subtle")

    const [alert, setAlert] = useState(null)

    const [rang, setRang] = useState("info")
    
    const showAlert = (message,type)=>{
        setAlert({
            msg: message,
            type: type
        })
    }
    setTimeout(()=>{
        setAlert(null)
    },1500)


    const toggleMode = ()=>{
        if (mode === 'dark-subtle'){
            setMode('dark');
            document.body.style.backgroundColor = '#021f36'
            showAlert("Dark mode has been enabled!","success")
            setRang("primary")

        }
        else{
            setMode('dark-subtle')
            document.body.style.backgroundColor = 'white'
            showAlert("Light mode has been enabled!","success")
            setRang("outline-primary")
        }

    }

    const toggleGreen = ()=>{
        if (mode === 'dark-subtle'){
            setMode('dark');
            document.body.style.backgroundColor = '#014809'
            showAlert("Green mode has been enabled!","success")
            setRang("success")

        }
        else{
            setMode('dark-subtle')
            document.body.style.backgroundColor = 'white'
            showAlert("Light mode has been enabled!","success")
            setRang("outline-success")
        }

    }

    const toggleRed = ()=>{
        if (mode === 'dark-subtle'){
            setMode('dark');
            document.body.style.backgroundColor = '#460a0f'
            showAlert("Red mode has been enabled!","success")
            setRang("danger")

        }
        else{
            setMode('dark-subtle')
            document.body.style.backgroundColor = 'white'
            showAlert("Light mode has been enabled!","success")
            setRang("outline-danger")
        }

    }
    return (
       <div>
        <Navbar title = "TextUtils" mode = {mode} rang = {rang} toggleMode = {toggleMode} toggleGreen = {toggleGreen} toggleRed = {toggleRed} />
        <Alert alert = {alert}/>
        <div className="container">
        <TextForm heading = "Enter the text below " rang = {rang} showAlert = {showAlert} mode = {mode} />
        {/* <About/> */}
        </div>
        
       </div>
    );
}
