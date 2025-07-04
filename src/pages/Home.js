import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1>hi, i'm</h1>
          <h1 className="name">lokesh</h1>
          <h1 className="name">narasani</h1>
          <p className="role">software engineer @ jpmorgan chase</p>
          <p className="description">exploring the world of possibilities</p>
        </header>

        {/* About Section */}
        <section className="about-section">
          <h2>me</h2>
          <div className="about-content">
            <h3>Lokesh Narasani</h3>
            <p>
              hi, i'm lokesh. i'm a software engineer @ jpmorgan chase.
              <br /><br />
              i've worked as a software engineering intern @ jpmorgan chase, dallas mavericks, and PNC, and co-founded two startups - one that failed (spin) and one that exited for $1.6m (diet ai).
              <br /><br />
              i enjoy building products, solving hard problems, talking about the stock market, and working on projects that make an impact.
            </p>
          </div>
        </section>

        <section className="experience-section">
          <h2>currently @</h2>
          <div className="experience-list">
            <div className="experience-item">
              <div className="company">
                <h3>JPMorgan Chase & Co.</h3>
                <p className="position">Software Engineering </p>
                <p className="duration">July 2025</p>
                <p className="description">Work tbd on chase rewards</p>
                <p className="location">Plano, TX</p>
              </div>
            </div>
          
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience-section">
          <h2>previously @</h2>
          <div className="experience-list">
            <div className="experience-item">
              <div className="company">
                <h3>JPMorgan Chase & Co.</h3>
                <p className="position">Software Engineering Intern</p>
                <p className="duration">June 2024 - August 2024</p>
                <p className="description">AWS/Terraform framework, deployment automation</p>
                <p className="location">Plano, TX</p>
              </div>
            </div>
            <div className="experience-item">
              <div className="company">
                <h3>Dallas Mavericks</h3>
                <p className="position">Software Engineering Intern</p>
                <p className="duration">February 2024 - June 2024</p>
                <p className="description">React/Flask analytics dashboard, NBA stats processing</p>
                <p className="location">Dallas, TX</p>
              </div>
            </div>
            <div className="experience-item">
              <div className="company">
                <h3>PNC</h3>
                <p className="position">Software Engineering Intern</p>
                <p className="duration">May 2023 - August 2023</p>
                <p className="description">Cloud cost tracking, NL-to-SQL chatbot, performance optimization</p>
                <p className="location">Dallas, TX</p>
              </div>
            </div>
          </div>
        </section>

        {/* Startup Section */}
        <section className="startup-section">
          <h2>startup</h2>
          <div className="startup-list">
            <div className="startup-item">
              <div className="company">
                <h3>Diet AI (Exited)</h3>
                <p className="position">Founding Engineer</p>
                <p className="description">Seed-funded nutrition coach, $100K+ MRR, $1.6M acquisition</p>
                <a href="https://www.dietapp.ai/" target="_blank" rel="noopener noreferrer" className="link">Website</a>
              </div>
            </div>
            <div className="startup-item">
              <div className="company">
                <h3>Spin (Failed)</h3>
                <p className="position">Founder/Founding Engineer</p>
                <p className="description">LLM-driven cloud orchestration platform, multi-cloud automation</p>
                <a href="https://tryspin.io/" target="_blank" rel="noopener noreferrer" className="link">Website</a>
              </div>
            </div>
          </div>
        </section>

        
        {/* Projects Section */}
        <section className="projects-section">
          <h2>projects</h2>
          <div className="projects-list">
            <div className="project-item">
              <h3>DecentraHealth</h3>
              <p className="project-description">Zoom-like video consult platform with IPFS, computer vision wound analysis</p>
              <p className="project-tech">Node.js, Express.js, OpenCV, Flask, Pinata, TailwindCSS</p>
              <a href="https://youtu.be/l2mwDE8qzEA?si=LyWGvD1XmMgKgSJr" target="_blank" rel="noopener noreferrer" className="project-link">Demo</a>
            </div>
            <div className="project-item">
              <h3>CanCare</h3>
              <p className="project-description">Cancer patient mentor-matching platform using BERT-based compatibility algorithms</p>
              <p className="project-tech">React, Python, LlamaIndex, Flask, Firebase</p>
              <a href="https://github.com/cfgtexas23/Team-20/tree/main" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
            <div className="project-item">
              <h3>StateFarm ClaimGuardian</h3>
              <p className="project-description">Insurance claims platform for small businesses with GPT embeddings</p>
              <p className="project-tech">React Native, Python, GPT Embeddings, ElevenLabs</p>
              <a href="https://devpost.com/software/sf-1nmvi7?ref_content=my-projects-tab&ref_feature=my_projects" target="_blank" rel="noopener noreferrer" className="project-link">Demo</a>
            </div>
            <div className="project-item">
              <h3>Kiddie Bank</h3>
              <p className="project-description">Financial education web app for children aged 8-16</p>
              <p className="project-tech">Python, Django, JavaScript, HTML, CSS, SQLite</p>
              <a href="https://github.com/loknara/KiddieBank" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
            <div className="project-item">
              <h3>NBA Analytics Tool</h3>
              <p className="project-description">Sports betting analysis with 67% game prediction accuracy</p>
              <p className="project-tech">React, Python, Flask, Scikit-Learn</p>
              <a href="https://github.com/loknara/Prop-er" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
            <div className="project-item">
              <h3>UTD SSO</h3>
              <p className="project-description">SSO service provider for 5,000+ UTD students across EPICS projects</p>
              <p className="project-tech">Node.js, Express.js</p>
              <a href="https://github.com/UTDallasEPICS/epics-sso" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h2>skills</h2>
          <div className="skills-grid">
            <span>Python</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>C++</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Flask</span>
            <span>Django</span>
            <span>AWS</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>Git</span>
            <span>Spring Boot</span>
            <span>Express.js</span>
            <span>Firebase</span>
            <span>LangChain</span>
          </div>
        </section>


        {/* Contact */}
        <footer className="contact-section">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/lokeshnarasani/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="mailto:lokeshnarasani@gmail.com">
              <EmailIcon />
            </a>
            <a href="https://github.com/loknara" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          </div>
          <p className="location">down to relocate anywhere</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
