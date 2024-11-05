
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import service2 from "../../assets/services2.jpg";
import service3 from "../../assets/virat_kohli.jpg";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services-title">
        <h1>Our Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services_gap">
        <Link to="/match-scores">
          <div className="service">
            <img src={service2} alt="Cricket Match and Scores" />
            <div className="caption">
              <p>Cricket Match and Scores</p>
            </div>
          </div>
        </Link>
        <Link to="/player-stats">
          <div className="service">
            <img src={service3} alt="Player Stats and Records" />
            <div className="caption">
              <p>Player Stats and Records</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;