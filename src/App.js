import { useState } from "react";
import "./App.css";
// import About from "./Components/Body/About";
import TextForm from "./Components/Body/TextForm";
import Navbar from "./Components/Header/Navbar";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#37474f";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* Passing title in Navbar Using Props */}
      <Navbar
        title="<SK TextUtils/>"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>
      <hr />
      {/* <About /> */}
    </>
  );
}

export default App;
