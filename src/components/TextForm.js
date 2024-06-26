import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked!" + text)
        let newText = text.toUpperCase() 
        setText(newText)
    }
    const handleDownClick = () => {
        // console.log("Lowercase was clicked!" + text)
        let newText = text.toLowerCase() 
        setText(newText)
    }
    const handleClear = () => {
        // console.log("Lowercase was clicked!" + text)
        let newText = "" 
        setText(newText)
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const handleSpaces = () => {
        let newText = text.split(/[  ]+/)
        setText(newText.join(" "))
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    // setText("new text")
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control my-3"  value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
                <button className="btn btn-primary  mx-2" onClick={handleUpClick}>Convert to Upper case</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lower case</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes taken to read complete. </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
