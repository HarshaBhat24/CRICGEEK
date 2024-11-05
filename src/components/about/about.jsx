import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_image from "../../assets/about_image.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Us</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-container">
        <div className="about-left">
          <h2>Our Mission</h2>
          <p>
            CricGeek is a comprehensive cricket website offering live scores,
            commentary, match reports, and player statistics. It features a
            user-friendly interface with interactive visualizations. Covering
            all levels of cricket, CricGeek provides accurate, timely
            information for fans worldwide, from breaking news to historical
            data and expert analysis.
          </p>
        </div>
        <div className="about-right">
          <img src={about_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About
