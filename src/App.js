import { useState } from "react";
import "./App.css";
import Alert from "./Components/Body/Alert";
// import About from "./Components/Body/About";
import TextForm from "./Components/Body/TextForm";
import Navbar from "./Components/Header/Navbar";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#37474f";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing app";
      }, 2000);
      setInterval(() => {
        document.title = "TextUtils is Installing";
      }, 3000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
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
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
      </div>
      <hr />
      {/* <About /> */}
    </>
  );
}

export default App;
