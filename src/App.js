import React, { useEffect } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import ReactGA from "react-ga";

// Initialize Google Analytics
const initGA = (trackingID) => {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
};

// Log Page View
const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

// Create a wrapper component for using useLocation hook
const PageTracker = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return children;
};

function App() {
  useEffect(() => {
    // Initialize Google Analytics with your tracking ID
    initGA(process.env.REACT_APP_GA_TRACKING_ID);
  }, []);

  return (
    <div className="App">
      <Router>
        <PageTracker>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
          <Footer />
        </PageTracker>
      </Router>
    </div>
  );
}

export default App;
