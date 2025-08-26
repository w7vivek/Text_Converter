import React,{useState} from 'react'


export default function TextFrom(props) {

// Button and toUppercase Function
const handletoClickUpper = ()=>{
    console.log("UpperCase was clicked" + text);
    let update_upper=text.toUpperCase();
    setText(update_upper);
    props.showAlert("Converted into Uppercase","primary");
}

const handletoClickLower = ()=>{
    console.log("Lowercase was clicked" + text);
    let update_upper=text.toLowerCase();
    setText(update_upper);
    props.showAlert("Converted into Lowercase","dark");
}

const handletoClickRemoveExtraSpace = ()=>{
    console.log("Lowercase was clicked" + text);
    let update_upper=text.replace(/\s+/g, " ").trim();
    setText(update_upper);
    props.showAlert("Remove Space","danger");
}

const handletoClickClear = ()=>{
    console.log("Lowercase was clicked" + text);
    let update_upper='';
    setText(update_upper);
    props.showAlert("CLEAR","success");
}

const handleToClickReverse = () => {
    console.log("Reverse was clicked: " + text);
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("REVERSE","warning");
};

// TextArea
const hadleOnchange=(event)=>{
    setText(event.target.value)
}
const [text,setText]= useState("");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',
                    color:props.mode==='dark'?'white':'black'}} value={text} onChange={hadleOnchange} placeholder='Enter here'></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handletoClickUpper}>Convert to Uppercase</button>
            <button className="btn btn-secondary mx-2" onClick={handletoClickLower}>Convert to LowerCase</button>
            <button className="btn btn-success mx-2" onClick={handletoClickClear}>Convert to clear</button>
            <button className="btn btn-warning mx-2" onClick={handleToClickReverse}>Convert to Reverse</button>
            <button className="btn btn-danger mx-2" onClick={handletoClickRemoveExtraSpace}>Remove Extra Space</button>
        </div>

    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        {/* The below function is for calculating the number of words and character in the sentence */}
        <p> {text.trim()===""?"Enter something":text.trim().split(/\s+/).length+" words and " + text.length + " characters"} </p>
        <p> {0.008 * text.split(" ").length} Minutes to read this</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
