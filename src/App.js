import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForms from "./Components/TextForms";
// import About from "./Components/About";

function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return (
    <>
      <Navbar Titel="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForms heading="Enter The Text to analyze" />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
