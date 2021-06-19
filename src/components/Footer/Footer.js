import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <span className="name">The Briefing© - by Vandan & Rishit</span>
      <span className="name">Submission for IDKWhatIDid</span>
      <hr style={{ width: "90%" }} />
      <div className="icon-container">
        <a href="#" target="__blank">
          <i class="git-icon fab fa-github fa-3x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
