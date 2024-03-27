import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1, // Add a stagger effect to the children elements
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`navbar ${expandNavbar ? "expanded" : ""}`}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div className="links" variants={linkVariants} initial="hidden" animate="visible">
          <motion.div variants={linkItemVariants}>
            <Link to="/">Home</Link>
          </motion.div>
          <motion.div variants={linkItemVariants}>
            <Link to="/projects">Projects</Link>
          </motion.div>
          <motion.div variants={linkItemVariants}>
            <Link to="/experience">Experience</Link>
          </motion.div>
          <motion.div variants={linkItemVariants}>
            <a
              href="https://drive.google.com/file/d/1o8p5EQJC7inW17eNMp28yLgBqo8FSP5N/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resumeLink"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>
        <motion.button
          className={`toggleButton ${expandNavbar ? "active" : ""}`}
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
          whileHover={{ scale: 1.2 }} // Add a scale animation on hover
          whileTap={{ scale: 0.9 }} // Add a scale animation on tap
        >
          <ReorderIcon />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}

export default Navbar;