import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    // console.log("Uppercase button was clicked");
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    // console.log("Uppercase button was clicked");
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text = "new text"; // Wrong way to change the state
  //   setText("new text"); // Correct way to change the state
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          {/* <label htmlFor="myBox" className="form-label">Enter your text below</label> */}
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter text here"
            onChange={handleOnChange}
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
      </div>
      <div className="container my-2">
          <h3>Your text summary</h3>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h3>Preview</h3>
          <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
