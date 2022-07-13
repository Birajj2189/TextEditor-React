import React,{useState} from 'react'

export default function Textarea(props) {
     const handleUpClick = () =>{
          let newText = Text.toUpperCase();
          setText(newText);
          props.alert("Text converted to Uppercase: ","success");
          
     }
     const handleLowClick = () =>{
          let newText = Text.toLowerCase();
          setText(newText);
          props.alert("Text converted to Lowercase: ","success");
     }
     const handleClrClick = () =>{
          let newText = '';
          setText(newText);
          props.alert("Cleared Text: ","success");
     }
     const handleOnChange = (event) =>{
          setText(event.target.value);
     }
     const handleCopy = ()=>{
          let txt = document.getElementById("exampleFormControlTextarea1");
          navigator.clipboard.writeText(txt.value);
          props.alert("Copied Text: ","success");
     }
     const handleExtraSpc = ()=>{
          let newTxt = Text.split(/[ ]+/);
          setText(newTxt.join(" "));
          props.alert("Removed extra space from the Text: ","success");
     }
     const [Text, setText] = useState('');  

return (
       <>
       <div className="my-5 ">
          <h1>{props.heading}</h1>
          <div className="mb-3">
               <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} style = {{backgroundColor : props.mode==='dark'?'grey':'white'}} value={Text} rows="8" ></textarea>
          </div>
          <div className="btn-container mb-3">
               <button disabled={Text.length===0} className="btn btn-primary  btn-sm mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
               <button disabled={Text.length===0} className="btn btn-primary  btn-sm mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
               <button disabled={Text.length===0} className="btn btn-primary  btn-sm mx-1" onClick={handleExtraSpc}>Remove extra spaces</button>
               <button disabled={Text.length===0} className="btn btn-success  btn-sm mx-1" onClick={handleCopy}>Copy Text</button>
               <button disabled={Text.length===0} className="btn btn-danger  btn-sm mx-1" onClick={handleClrClick}>Clear Text</button>
          </div>
          <div className="mb-5">
               <h1>Your Text Summary : </h1>
               <p>Number of words - {Text.split(" ").filter((element)=>{return element.length!==0}).length} </p>
               <p>Number of sentences - {Text.split(".").filter((element)=>{return element.length!==0}).length} </p>
               <p>Number of characters (with spaces) - {Text.length} characters </p>
               <p>Average read time - {Text.split(" ").length*0.004} min</p>
          </div>
          <div className="mb-5">
               <h1>Preview : </h1>
               <p>{Text.length>0?Text:"Enter something in the box above to preview it."}</p>
          </div>
       </div>
       </>
  )
}