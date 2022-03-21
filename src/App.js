import "./App.css";
import About from "./Components/Body/About";
import TextForm from "./Components/Body/TextForm";
import Navbar from "./Components/Header/Navbar";

function App() {
  return (
    <>
      {/* Passing title in Navbar Using Props */}
      <Navbar title="<SK TextUtils/>" aboutText="About" />
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
      <hr />
      <About />
    </>
  );
}

export default App;
