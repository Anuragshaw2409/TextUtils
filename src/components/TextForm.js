import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText]=useState("");

    function handleOnChange(event){
        setText(event.target.value);
    }


    function handleUpClick(){
        setText(text.toUpperCase());

    }
    function handleLoClick(){
        setText(text.toLowerCase());

    }

    function clearText(){
        setText("");
    }
    function capitalizeFirst(){
        let newText="";
        
        console.log(text.split(" "));
        text.split(" ").forEach(word=>{
           newText+=(word.substring(0, 1).toUpperCase() + word.substring(1, word.length).toLowerCase() +" ");

        });
        setText(newText.trimEnd());
    }
    function speakText(){
        let utterence= new SpeechSynthesisUtterance(text);
        utterence.rate=0.3;
        utterence.lang='en';
        speechSynthesis.speak(utterence);
    }
    function copyClipboard(){
        let data= document.getElementById("myTextBox");
        data.select();
       navigator.clipboard.writeText(data.value);

    }

    return (
    <>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            {/* <label for="myTextBox" className="form-label">Enter Your Text Below</label> */}
            <textarea className="form-control" id="myTextBox" value={text} onChange={handleOnChange} rows="8" placeholder='Enter Text here'></textarea>
            <button className='btn btn-primary my-3' onClick={handleUpClick} >Convert to UpperCase</button>
            <button className='btn btn-primary my-3 mx-3' onClick={handleLoClick} >Convert to LowerCase</button>
            <button className='btn btn-primary my-3 ' onClick={clearText} >Clear Text</button>
            <button className='btn btn-primary my-3 mx-3' onClick={capitalizeFirst} >Capitalize first letter</button>
            <button className='btn btn-primary my-3 ' onClick={speakText} >Speak</button>
            <button className='btn btn-primary my-3 mx-3' onClick={copyClipboard} >Copy to Clipboard <i class="ri-clipboard-line"></i></button>



        </div>

        <div className="container">
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters, {0.0083*text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>

    )
}
