import { useState } from "react";
import "./App.css";
import Alert from "./Components/Body/Alert";
import About from "./Components/Body/About";
import TextForm from "./Components/Body/TextForm";
import Navbar from "./Components/Header/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-secondary");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-info");
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-muted");
  //   document.body.classList.remove("bg-white");
  // };

  // const toggleMode = (cls) => {
  //   removeBodyClasses();
  //   console.log(cls);
  //   // setMode(cls);
  //   document.body.classList.add("bg-" + cls);
  //   console.log(document.body.classList);
  //   if (cls === "light" || cls === "white" ) {
  //     setMode("light");
  //     document.body.style.backgroundColor = "#37474f";
  //     showAlert(`${cls.charAt(0).toUpperCase() + cls.slice(1)} Mode has been enabled`, "success");
  //     // document.title = "TextUtils - Dark Mode";
  //     // Dynamic Title
  //     // setInterval(() => {
  //     //   document.title = "TextUtils is Amazing app";
  //     // }, 2000);
  //     // setInterval(() => {
  //     //   document.title = "TextUtils is Installing";
  //     // }, 3000);
  //   } else {
  //     setMode("dark");
  //     // document.body.style.backgroundColor = "white";
  //     showAlert(`${cls.charAt(0).toUpperCase() + cls.slice(1)} Mode has been enabled`, "success");
  //     // document.title = "TextUtils - Light Mode";
  //   }
  // };
  const toggleMode = () => {
    // removeBodyClasses();
    // console.log(cls);
    setMode("light");
    // document.body.classList.add("bg-" + cls);
    console.log(document.body.classList);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#37474f";
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // Dynamic Title
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing app";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils is Installing";
      // }, 3000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* Passing title in Navbar Using Props */}
      <Router>
        <Navbar
          title="<SK TextUtils/>"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            {/* <About /> */}
            {/* </Route> */}
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces"
                  mode={mode}
                />
              }
            />
            {/* <TextForm /> */}
            {/* //   </Route> */}
          </Routes>
        </div>
        <hr />
        {/* <About /> */}
      </Router>
    </>
  );
}

export default App;
