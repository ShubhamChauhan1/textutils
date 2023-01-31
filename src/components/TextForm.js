import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case!","success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case!","success")
    }
    const handleClClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!","success")
    }
    const handleCoClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!","success")
    }

    const handleExtraspace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Empty spaces removed!","success") 
 
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const noOfWords = (sentence)=>{
        return sentence.charAt((text.length)-1) === " " ? (text.split(" ").length - 1) : text.split(" ").length
    }

    return (
        <>
        <div className={`container text-${props.mode === 'dark-subtle' ? 'black' : 'white'}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value = {text} style = {{backgroundColor : props.mode === 'dark-subtle' ? 'white' : '#afb9c2', color: props.mode === 'dark-subtle' ? 'black' : 'white'}} placeholder = "Enter text here"  onChange ={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className={`btn btn-${props.rang} mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className={`btn btn-${props.rang} mx-2`} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className={`btn btn-${props.rang} mx-2`} onClick={handleClClick}>Clear</button>
            <button className={`btn btn-${props.rang} mx-2`} onClick={handleCoClick}>Copy to clipboard</button>
            <button className={`btn btn-${props.rang} mx-2`} onClick={handleExtraspace}>Remove extra spaces</button>

        </div>
        <div className={`container my-3 text-${props.mode === 'dark-subtle' ? 'black' : 'white'}`}>
            <h2>Your text summary </h2>
            <p><b> {noOfWords(text)}</b> words and <b>{text.length}</b> characters</p>
            <p><b>{0.008 * text.split(" ").length}</b> Minutes to read</p>
        </div>
        </>
    
    )
}
