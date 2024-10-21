import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import AboutUs from "./Component/About";
import Skills from "./Component/Skills";
import Experience from "./Component/Experience";
import Education from "./Component/Education";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className=" bg-white px-24 sm:px-32">

      
      <Router>
      <Header />
      <Home />
      <AboutUs />
      <Skills />
      <Experience/>
      <Education/>
      <Contact/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
