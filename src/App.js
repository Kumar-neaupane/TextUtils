
///import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForms from "./Components/TextForms";
function App() {
  return (
    <>
  <Navbar Titel = "TextUtils"/>
  <div className="container"><TextForms heading = "Enter The Text to analyze"/>
  </div>
  {/*<About/>*/}
    </>
  );
}

export default App;
