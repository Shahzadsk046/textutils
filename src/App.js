import "./App.css";
import TextForm from "./Components/Body/TextForm";
import Navbar from "./Components/Header/Navbar";

function App() {
  return (
    <>
      {/* Passing title in Navbar Using Props */}
      {/* <Navbar title="<SK TextUtils/>" aboutText="About" /> */}
      <Navbar />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
