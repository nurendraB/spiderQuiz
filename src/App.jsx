import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx"; // HomePage component
import About from "./components/About.jsx"; // AboutPage
import Cpp from "./components/Cpp.jsx"; // CppPage
import PythonQuiz from "./components/PythonQuiz.jsx"; // PythonQuizPage
import Cybersecurity from "./components/Cybersecurity.jsx";
import Footer from "./components/Footer.jsx"; // Footer component

const App = () => {
  return (
    <Router basename="/">
      <NavBar /> {/* This will render the NavBar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />{" "}
        {/* Lowercased for consistency */}
        <Route path="/cpp" element={<Cpp />} />{" "}
        {/* Lowercased for consistency */}
        <Route path="/pythonquiz" element={<PythonQuiz />} />{" "}
        {/* Lowercased for consistency */}
        <Route path="/cybersecurity" element={<Cybersecurity />} />
      </Routes>
      <Footer /> {/* Footer component */}
    </Router>
  );
};

export default App;
