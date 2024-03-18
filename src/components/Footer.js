import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
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
