import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { getAllBlogPosts } from "../helpers/blogHelpers";
import "../styles/Home.scss";

const experiences = [
  {
    date: "Jul 2025 — Present",
    company: "Telepathic",
    link: "https://itstelepathic.com/",
    role: "Founding Engineer",
    description: "Helping companies get found in the new era of search",
    location: "San Francisco, CA",
    current: true,
  },
  {
    date: "Jun — Aug 2024",
    company: "JPMorgan Chase & Co.",
    role: "Software Engineering Intern",
    description: "AWS/Terraform framework, deployment automation",
    location: "Plano, TX",
  },
  {
    date: "Feb — Jun 2024",
    company: "Dallas Mavericks",
    role: "Software Engineering Intern",
    description: "React/Flask analytics dashboard, NBA stats processing",
    location: "Dallas, TX",
  },
  {
    date: "May — Aug 2023",
    company: "PNC",
    role: "Software Engineering Intern",
    description: "Cloud cost tracking, NL-to-SQL chatbot, performance optimization",
    location: "Dallas, TX",
  },
  {
    company: "Diet AI",
    link: "https://www.dietapp.ai/",
    role: "Everything",
    description: "Seed-funded AI calorie tracker, $100K+ MRR, $1.6M acquisition",
    tag: "Acquired",
  },
  {
    company: "Spin",
    link: "https://tryspin.io/",
    role: "Founder",
    description: "LLM-driven cloud orchestration platform, multi-cloud automation",
    tag: "Venture",
  },
];

const projects = [
  {
    name: "DecentraHealth",
    description: "Zoom-like video consult platform with IPFS, computer vision wound analysis",
    tech: "Node.js, Express.js, OpenCV, Flask, Pinata, TailwindCSS",
    link: "https://youtu.be/l2mwDE8qzEA?si=LyWGvD1XmMgKgSJr",
  },
  {
    name: "CanCare",
    description: "Cancer patient mentor-matching platform using BERT-based compatibility algorithms",
    tech: "React, Python, LlamaIndex, Flask, Firebase",
    link: "https://github.com/cfgtexas23/Team-20/tree/main",
  },
  {
    name: "StateFarm ClaimGuardian",
    description: "Insurance claims platform for small businesses with GPT embeddings",
    tech: "React Native, Python, GPT Embeddings, ElevenLabs",
    link: "https://devpost.com/software/sf-1nmvi7?ref_content=my-projects-tab&ref_feature=my_projects",
  },
  {
    name: "Kiddie Bank",
    description: "Financial education web app for children aged 8-16",
    tech: "Python, Django, JavaScript, HTML, CSS, SQLite",
    link: "https://github.com/loknara/KiddieBank",
  },
  {
    name: "NBA Analytics Tool",
    description: "Sports betting analysis with 67% game prediction accuracy",
    tech: "React, Python, Flask, Scikit-Learn",
    link: "https://github.com/loknara/Prop-er",
  },
  {
    name: "UTD SSO",
    description: "SSO service provider for 5,000+ UTD students across EPICS projects",
    tech: "Node.js, Express.js",
    link: "https://github.com/UTDallasEPICS/epics-sso",
  },
];

function Home() {
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    const fetchLatestPost = async () => {
      const result = await getAllBlogPosts();
      if (result.success && result.posts.length > 0) {
        setLatestPost(result.posts[0]);
      }
    };
    fetchLatestPost();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "Recently";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="home">
      <div className="home__container">
        <section className="hero">
          <h1 className="hero__name">Lokesh Narasani</h1>
          <p className="hero__tagline">
            Founding Engineer at{" "}
            <a
              href="https://itstelepathic.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telepathic
            </a>
            . Helping companies get found in the new era of search.
          </p>
          <div className="hero__social">
            <a
              href="https://twitter.com/lokeshnarasani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon />
              <span>Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lokeshnarasani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/loknara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
            <a href="mailto:lokeshnarasani@gmail.com">
              <EmailIcon />
              <span>Email</span>
            </a>
          </div>
        </section>

        <section className="section">
          <h2 className="section__label">About</h2>
          <p className="section__text">
            I've worked as a software engineering intern at JPMorgan Chase, the
            Dallas Mavericks, and PNC. I was an investor and all-around
            generalist at Diet AI, which exited for $1.6M. I enjoy building
            products, solving hard problems, talking about the stock market, and
            working on projects that make an impact.
          </p>
        </section>

        {latestPost && (
          <section className="section">
            <h2 className="section__label">Latest Post</h2>
            <Link to={`/blog/${latestPost.id}`} className="post-card">
              {latestPost.featuredImage && (
                <div className="post-card__image">
                  <img
                    src={latestPost.featuredImage}
                    alt={latestPost.title}
                  />
                </div>
              )}
              <div className="post-card__content">
                <h3>{latestPost.title}</h3>
                <span className="post-card__date">
                  {formatDate(latestPost.createdAt)}
                </span>
              </div>
              <ArrowOutwardIcon className="post-card__arrow" />
            </Link>
          </section>
        )}

        <section className="section">
          <h2 className="section__label">Experience</h2>
          <div className="exp-list">
            {experiences.map((exp, i) => (
              <div className="exp-item" key={i}>
                <div className="exp-item__left">
                  {exp.current && <span className="exp-item__now" />}
                  <span className="exp-item__date">{exp.date}</span>
                </div>
                <div className="exp-item__right">
                  <h3>
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.company}
                        <ArrowOutwardIcon />
                      </a>
                    ) : (
                      exp.company
                    )}
                    {exp.tag && (
                      <span className="exp-item__tag">{exp.tag}</span>
                    )}
                  </h3>
                  <span className="exp-item__role">{exp.role}</span>
                  <p>{exp.description}</p>
                  {exp.location && (
                    <span className="exp-item__location">{exp.location}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section__label">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                key={i}
              >
                <div className="project-card__header">
                  <h3>{project.name}</h3>
                  <ArrowOutwardIcon />
                </div>
                <p>{project.description}</p>
                <span className="project-card__tech">{project.tech}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
