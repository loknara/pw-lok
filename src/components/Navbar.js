import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";


function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className={`navbar ${expandNavbar ? "expanded" : ""}`}>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <a href="https://drive.google.com/file/d/1o8p5EQJC7inW17eNMp28yLgBqo8FSP5N/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resumeLink">Resume</a>
      </div>
      <button
        className={`toggleButton ${expandNavbar ? "active" : ""}`}
        onClick={() => {
          setExpandNavbar((prev) => !prev);
        }}
      >
        <ReorderIcon />
      </button>
    </div>
  );
}

export default Navbar;
