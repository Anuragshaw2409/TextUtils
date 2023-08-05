import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText]=useState("Enter text here");

    function handleOnChange(event){
        setText(event.target.value);
    }


    function handleUpClick(){
        setText(text.toUpperCase());

    }
    function handleLoClick(){
        setText(text.toLowerCase());

    }


    return (
        <div className="mb-3">
            <h1>{props.heading}</h1>
            {/* <label for="myTextBox" className="form-label">Enter Your Text Below</label> */}
            <textarea className="form-control" id="myTextBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            <button className='btn btn-primary my-3' onClick={handleUpClick} >Convert to UpperCase</button>
            <button className='btn btn-primary my-3 mx-3' onClick={handleLoClick} >Convert to LowerCase</button>

        </div>

    )
}
