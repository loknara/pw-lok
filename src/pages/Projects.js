import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";
import CanCare from "../assets/CanCare.png";
import KiddieBank from "../assets/KiddieBank.png";
import UTDSSO from "../assets/UTDSSO.webp";
import NBA from "../assets/NBA.png";
import SF from "../assets/SF.png";
import DallasMavs from "../assets/DallasMavs.png";
import Chatbot from "../assets/chatbot.png";
import { useNavigate } from "react-router-dom";

function Experience() {
  const navigate = useNavigate();
  return (
    <div className="experience">
      <div class="container">
        <div class="custom-card">
          <div class="img-box">
            <img src={CanCare} />
          </div>
          <div class="custom-content">
            <h2>CanCare</h2>
            <p>React, Python, LlamaIndex, Flask, Firebase</p>{" "}
            <a
              onClick={() => {
                navigate("/project/0");
              }}
            >
              Read More
            </a>
          </div>
        </div>
        <div class="custom-card">
          <div class=" img-box">
            <img src={SF} />
          </div>
          <div class="custom-content">
            <h2>StateFarm ClaimGuradian</h2>
            <p>
              React Native, JavaScript, Python, GPT Embeddings, ElevenLabs
            </p>{" "}
            <a
              onClick={() => {
                navigate("/project/1");
              }}
            >
              Read More
            </a>
          </div>
        </div>
        <div class="custom-card">
          <div class="img-box">
            <img src={KiddieBank} />
          </div>
          <div class="custom-content">
            <h2>Kiddie Bank</h2>
            <p>JavaScript, Python, HTML, CSS, Django, SQLlite</p>{" "}
            <a
              onClick={() => {
                navigate("/project/2");
              }}
            >
              Read More
            </a>
          </div>
        </div>
        <div class="custom-card">
          <div class=" img-box">
            <img src={DallasMavs} />
          </div>
          <div class="custom-content">
            <h2>Dallas Mavericks Demo</h2>
            <p>React, JavaScript, Chart.js</p>{" "}
            <a
              onClick={() => {
                navigate("/project/3");
              }}
            >
              Read More
            </a>
          </div>
        </div>
        <div class="custom-card">
          <div class=" img-box">
            <img src={UTDSSO} />
          </div>
          <div class="custom-content">
            <h2>UTD SSO</h2>
            <p>Node.js, express.js</p>{" "}
            <a
              onClick={() => {
                navigate("/project/4");
              }}
            >
              Read More
            </a>
          </div>
        </div>
        <div class="custom-card">
          <div class=" img-box">
            <img src={NBA} />
          </div>
          <div class="custom-content">
            <h2>NBA Analytics Tool</h2>
            <p>React, Python, Flask, Scikit-Learn</p>{" "}
            <a
              onClick={() => {
                navigate("/project/5");
              }}
            >
              Read More
            </a>
          </div>
        </div>
        <div class="custom-card">
          <div class=" img-box">
            <img src={Chatbot} />
          </div>
          <div class="custom-content">
            <h2>Insurance Chatbot</h2>
            <p>Python, Streamlit, LlamaIndex</p>{" "}
            <a
              onClick={() => {
                navigate("/project/6");
              }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
