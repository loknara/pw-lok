import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./home.scss";
import { useTypingEffect } from "../components/typingEffect";
import Lokesh from "../assets/lokeshheadshot.jpeg";
import Sign from "../assets/sign.png";
import Card from "../components/Card";
import ContactCard from "../components/ContactCard";
import ProfileCard from "../components/ProfileCard";
import PortfolioCard from "../components/PortfolioCard";

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
        <div className="header">
          <h2 style={{ fontWeight: "bold" }}>{introText}</h2>
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
      <section>
        <section className="section  container">
          <div className="hero-section">
            <div
              className="left-section"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <a>
                <Card
                  title="Lokesh Narasani"
                  subtitle=""
                  desc="Junior at UT Dallas Studying Computer Science"
                  image={Lokesh}
                  smallcard
                  direction={"row"}
                />
              </a>
            </div>
            <div className="right-section">
              <div className="top-section card">
                <div className="banner">
                  <div className="marquee">
                    <div>
                      <span>
                        <p>
                          All About <b>Me</b>
                        </p>
                      </span>
                      <span>
                        <p>
                          All About <b>Me</b>
                        </p>
                      </span>
                      <span>
                        <p>
                          All About <b>Me</b>
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-section">
                <div
                  className="card-section"
                  data-aos="zoom-in"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <a href="/experience">
                    <Card
                      title="Credentials"
                      subtitle="More about me"
                      desc=""
                      direction="column"
                      image={Sign}
                      smallcard
                    />
                  </a>

                  <PortfolioCard />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="middlesection container">
          <div
            className="left"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Card title="About Me" smallcard>
              <div>
                <h4>
                  I am a Junior at The University of Texas at Dallas, majoring
                  in Computer science, and currenlty work with the Dallas
                  Mavericks as a Software Engineering Intern. I enjoy playing
                  video games, watching basketball, and getting out on the golf
                  course!
                </h4>
              </div>
            </Card>
            {/* <Card
              title="About Me"
              desc="I am a Junior at The University of Texas at Dallas, majoring in Computer science, and currenlty work with the Dallas Mavericks as a Software Engineering Intern. I enjoy playing video games, watching basketball, and getting out on the golf course!"
              // smallcard
              // image={Lokesh}
            /> */}
          </div>
          <div
            className="middle"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Card title="TechStack" subtitle="what i know" smallcard>
              <div className="languages">
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>SCSS</h4>
                <h4>NodeJs</h4>
                <h4>React</h4>
                <h4>SQL</h4>
                <h4>Firebase</h4>
                <h4>Express JS</h4>
                <h4>Javascript</h4>
                <h4>LlamaIndex</h4>
                <h4>Python</h4>
                <h4>Flask</h4>
                <h4>Django</h4>
              </div>
            </Card>
          </div>
          <ProfileCard />
        </section>
        <section className="bottom-section container">
          <div
            className="left"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="card card-wrapper">
              <div className="card">
                <h1>4</h1>
                <h4>internships</h4>
              </div>
              <div className="card">
                <h1>2025</h1>
                <h4>Graduate</h4>
              </div>
              {/* <div className="card">
                <h1></h1>
                <h4></h4>
              </div> */}
            </div>
          </div>
          <ContactCard />
        </section>
      </section>
    </div>
  );
}

export default Home;
