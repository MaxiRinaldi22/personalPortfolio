import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./app/Home";
import Header from "./components/Hearder";
import Projects from "./app/Projects";
import {  useRef } from "react";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router>
      <Header refs={{ heroRef, aboutRef, projectsRef, skillsRef, contactRef }} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home refs={{ heroRef, aboutRef, projectsRef, skillsRef, contactRef }}/>} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <footer>
        <p className="bg-[#171C22] text-center text-gray-400">
          © 2024 Maximiliano Rinaldi. All rights reserved.
        </p>
      </footer>
    </Router>
  );
}

export default App;
