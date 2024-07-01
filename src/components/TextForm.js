import React, {useState } from 'react'
// import PropTypes from 'prop-types'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked!" + text)
        let newText = text.toUpperCase() 
        setText(newText)
        props.showAlert(" Converted to upper case.", "success")
    }
    const handleDownClick = () => {
        // console.log("Lowercase was clicked!" + text)
        let newText = text.toLowerCase() 
        setText(newText)
        props.showAlert(" Converted to lower case.", "success")
    }
    const handleClear = () => {
        // console.log("Lowercase was clicked!" + text)
        let newText = "" 
        setText(newText)
        props.showAlert(" Text Cleared!", "success")
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlert(" Text Copied.", "success")
    }
    const handleSpaces = () => {
        let newText = text.split(/[  ]+/)
        setText(newText.join(" "))
        props.showAlert(" Extra spaces removed!", "success")
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    
    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h2 className='mb-4'>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control my-3"  value={text} onChange={handleOnChange} id="myBox" style={{color: props.mode==='light'?'#042743':'white'}} 
                 rows="12"></textarea>
                <button disabled={text.length===0} className="btn btn-primary  mx-2 my-2" onClick={handleUpClick}>Convert to Upper case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Convert to Lower case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes taken to read complete. </p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
