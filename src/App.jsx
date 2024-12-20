import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Elements from "./components/Elements/Elements";
import AllPortfolio from "./components/AllPortfolio";


function App() {
  return (
    <>
      <Router>
        <div className="font-mono bg-neutral-800  overflow-hidden ">

          <div className="fixed top-0 left-0 w-full z-50  backdrop-blur-md">
            <Header />
          </div>

          <div className="pt-32 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/element" element={<Elements />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<AllPortfolio/>}/>

            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
