import React from 'react'
import { useState} from 'react';

export default function TextForms(props) {
    const ConvertUpper=()=>{
      console.log(" Convert Upper clicked"  +text);
      let newText = text.toUpperCase();
        setText(newText);


    }
    const ConvertLower=()=>{
      console.log(" Convert Upper clicked"  +text);
      let newText = text.toLocaleLowerCase();
        setText(newText);
  }
  const Clear=()=>{
    console.log(" Convert Upper clicked"  +text);
    let newText = '';
      setText(newText);
}
const copy=()=>{
  console.log("Copy text");
  var text = document.getElementById("myBox");
  navigator.clipboard.writeText(text.value);
}

const reverseString=()=> {
  let strRev =  Array.from(text).reverse().join("");
  setText(strRev);
}
    const handleOnChange = (event)=>{
        console.log("cup clicked");
        setText(event.target.value)
    }
    const [text, setText] = useState("");
  return (
    <>
    <div>
      
<div className="mb-3 container">
    <h1>{props.heading}</h1>
 
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
</div>
    <button className="btn btn-primary mx-1" onClick={ConvertUpper}>Convert To Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={ConvertLower}>Convert To Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={Clear}>Clear</button>
    <button className="btn btn-primary mx-1" onClick={reverseString}>Reverse</button>
    <button className="btn btn-primary mx-1" onClick={copy}>CopyText</button>
      
    </div>
    <div className="container my-3">
      <h1>Your Text summary</h1>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}
