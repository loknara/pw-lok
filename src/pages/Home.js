// import React from "react";
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Unstable_Grid2';
// import "../styles/Home.css";
// import { useTypingEffect } from "../components/typingEffect";
// import Lokesh from "../assets/lokeshheadshot.jpeg";
// import { styled } from '@mui/material/styles';

// import Paper from '@mui/material/Paper';
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// function Home() {

//   const introText = useTypingEffect("hi, my name is Lokesh", 100);
//   const captionTect = useTypingEffect("This is a little bit about me...", 50);

//   return (
//     <div className="home">
//       <div className="about">
//         <h2> {introText}</h2>
//         <div className="prompt">
//           <a href="https://www.linkedin.com/in/lokeshnarasani/" target="_blank" rel="noopener noreferrer">
//             <LinkedInIcon />
//           </a>
//           <a href="mailto:lokeshnarasani@gmail.com" target="_top">
//             <EmailIcon />
//           </a>
//           <a href="https://github.com/loknara" target="_blank" rel="noopener noreferrer">
//             <GitHubIcon />
//           </a>
//         </div>
//         <div className="arrow">
//           <span>⌄</span>
//         </div>
//       </div>

//       <div className="skills">
//   <div className="aboutMove">
//     <h1 className="aboutText">about me</h1>
//   </div>
//   <div className="profileContainer">
//   <Box md={{ flexGrow: 10 }}>
//       <Grid container spacing={3}>
//         <Grid md={12}>
//           <Item>xs=8</Item>
//         </Grid>
//         <Grid md={4}>
//           <Item>xs=4</Item>
//         </Grid>
//         <Grid md={4}>
//           <Item>xs=4</Item>
//         </Grid>
//         <Grid md={8}>
//           <Item>xs=8</Item>
//         </Grid>
//       </Grid>
//     </Box>
//       {/* <div className="profileHeader">
//         <img src={Lokesh} alt="Lokesh Narasani" className="profilePhoto" />
//         <div className="infoSection">
//           <h1>Lokesh Narasani</h1>
//           <p>Dallas, TX</p>
//           <p>UT Dallas (2021 - 2025)</p>
//           <p>B.S in Computer Science</p>
//         </div>
//       </div>

//       <div className="skillsSection">
//         <h2>Skills</h2>
//         <p>Languages: Python, Java, JS, C++, HTML, CSS</p>
//         <p>Frameworks: Django, Flask, Spring, React, Vue, Node, Express</p>
//         <p>Tools: Jest, Git, Docker, Jenkins, Postman, AWS, OpenShift, Kubernetes</p>
//       </div>

//       <div className="bioSection">
//         <p>
//           Hey! Welcome to my website, where you can get a grasp about who I am and what I do. Currently, I am a
//           college student studying computer science, but I look forward to becoming a full-stack software engineer.
//         </p>
//       </div> */}
//     </div>
//     </div>

//     </div>
//   );
// }

// export default Home;

import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2"; // Note: Ensure this import path is correct as per your MUI version
import "../styles/Home.css";
import { useTypingEffect } from "../components/typingEffect";
import Lokesh from "../assets/lokeshheadshot.jpeg";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ParallaxEffect from "../components/Paralax";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  animation: "circular-motion 5s infinite linear",
  "@keyframes circular-motion": {
    "0%": { transform: "translateX(0px) translateY(0px)" },
    "25%": { transform: "translateX(5px) translateY(-5px) " },
    "50%": { transform: "translateX(10px) translateY(0px)" },
    "75%": { transform: "translateX(5px) translateY(5px)" },
    "100%": { transform: "translateX(0px) translateY(0px)" },
  },
}));

function Home() {
  const introText = useTypingEffect("Hi, my name is Lokesh", 100);
  const captionText = useTypingEffect("This is a little bit about me...", 50);

  return (
    <div>
      <div className="home">
        <div class="blob-c">
          <div class="shape-blob"></div>
          <div class="shape-blob one"></div>
          <div class="shape-blob two"></div>
          <div class="shape-blob three"></div>
          <div class="shape-blob four"></div>
          <div class="shape-blob five"></div>
          <div class="shape-blob six"></div>
        </div>
        <div className="about">
          <h2>{introText}</h2>
          <div className="prompt">
            <a
              href="https://www.linkedin.com/in/lokeshnarasani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:lokeshnarasani@gmail.com" target="_top">
              <EmailIcon />
            </a>
            <a
              href="https://github.com/loknara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
          <div className="arrow">
            <span>⌄</span>
          </div>
        </div>
      </div>

      <div className="skills">
        <div className="aboutMove">
          <h1 className="aboutText">About me</h1>
        </div>
        <div className="profileContainer">
          <div className="about-img">
            <img
              src={Lokesh}
              alt="coding illustration"
              className="coding-illustration"
            />
          </div>
          <div className="about-info">
            <p className="about-description">
              Hello! My name is Lokesh Narasani, and I am an undergraduate
              student at the University of Texas at Dallas studying Computer
              Science. Im currenlty a Software Engineering Intern with the
              Dallas Mavericks!
            </p>
            <p className="about-description">
              I am familiar with and have used React, Vue, HTLM, CSS, Tailwind,
              axios, fetch, and other tools in the frontend.
            </p>

            <p className="about-description">
              I have used and am familiar with Java, Python, Flask, Django, C++,
              Sping Boot, Node, Express, and JS and various other tools as well.
            </p>

            <p className="about-description">
              In my free time I like to watch basketball, play golf, go for
              hikes, and play video games. PS. Dont ask me about my golf
              handicap I am working on it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
