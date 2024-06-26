import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/lokeshnarasani/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:lokeshnarasani@gmail.com" target="_top">
            <EmailIcon />
          </a>
          <a href="https://github.com/loknara" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
      </div>
      {/* <p> &copy; 2022 </p> */}
    </div>
  );
}

export default Footer;
