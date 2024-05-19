import React from 'react'
import { useState} from 'react';

export default function TextForms(props) {
    const ConvertUpper=()=>{
      console.log(" Convert Upper clicked"  +text);
      let newText = text.toUpperCase();
        setText(newText);


    }
    const handleOnChange = (event)=>{
        console.log("cup clicked");
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here");
  return (
    <div>
      
<div className="mb-3">
    <h1>{props.heading}</h1>
 
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
</div>
    <button className="btn btn-primary" onClick={ConvertUpper}>Convert To Uppercase</button>
      
    </div>
  )
}
