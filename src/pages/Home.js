import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import SchoolIcon from "@material-ui/icons/School";
import GolfCourse from "@material-ui/icons/GolfCourse";
import AccountName from "@material-ui/icons/AccountCircle";


import "../styles/Home.css";
import { useTypingEffect } from "../components/typingEffect";
import Lokesh from "../assets/lokeshheadshot.jpeg";






function Home() {

  const introText = useTypingEffect("hi, my name is Lokesh", 100);
  const captionTect = useTypingEffect("This is a little bit about me...", 50);

  return (
    <div className="home">
      <div className="about">
        <h2> {introText}</h2>
        <div className="prompt">
          <a href="https://www.linkedin.com/in/lokeshnarasani/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:lokeshnarasani@gmail.com" target="_top">
            <EmailIcon />
          </a>
          <a href="https://github.com/loknara" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        </div>
        <div className="arrow">
          <span>⌄</span>
        </div>
      </div>
 
      <div className="skills">
  <div className="aboutMove">
    <h1 className="aboutText">about me</h1>
  </div>
  <div className="profileContainer">
      <div className="profileHeader">
        <img src={Lokesh} alt="Lokesh Narasani" className="profilePhoto" />
        <div className="infoSection">
          <h1>Lokesh Narasani</h1>
          <p>Dallas, TX</p>
          <p>UT Dallas (2021 - 2025)</p>
          <p>B.S in Computer Science</p>
        </div>
      </div>
      
      <div className="skillsSection">
        <h2>Skills</h2>
        <p>Languages: Python, Java, JS, C++, HTML, CSS</p>
        <p>Frameworks: Django, Flask, Spring, React, Vue, Node, Express</p>
        <p>Tools: Jest, Git, Docker, Jenkins, Postman, AWS, OpenShift, Kubernetes</p>
      </div>
      
      <div className="bioSection">
        <p>
          Hey! Welcome to my website, where you can get a grasp about who I am and what I do. Currently, I am a 
          college student studying computer science, but I look forward to becoming a full-stack software engineer.
        </p>
      </div>
    </div>
    </div>

    </div>
  );
}

export default Home;
