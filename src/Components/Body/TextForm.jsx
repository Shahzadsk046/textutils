import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    // console.log("Uppercase button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  
  const handleLowClick = () => {
    // console.log("Uppercase button was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  
  const handleClearClick = () => {
    // console.log("Uppercase button was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  
  const handleCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to Clipboard!", "success");
  };
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed!", "success");
  };

  const [text, setText] = useState("");
  //   text = "new text"; // Wrong way to change the state
  //   setText("new text"); // Correct way to change the state
  let char = text.length;
  let word = char === 0 ? 0 : text.split(" ").length;

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          {/* <label htmlFor="myBox" className="form-label">Enter your text below</label> */}
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter text here"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#424242" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your text summary</h3>
        <p>
          {word} words and {char} characters
        </p>
        <p>{0.008 * word} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Type something in box to preview"}</p>
      </div>
    </>
  );
};

export default TextForm;
