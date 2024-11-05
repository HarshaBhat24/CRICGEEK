


import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import vs_image from "../../assets/vs.png";
import About from "../About/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Title from "../Title/Title";
import Footer from "../Footer/Footer";

const Home = () => {
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=67a412bc-6b7d-4cf7-9662-d704187f43ab&offset=0');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('API response data:', data);
        setMatchData(data.data.length > 0 ? data.data[0] : null);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching match data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchMatchData();
  }, []);

  if (loading) {
    return <p>Loading match data...</p>;
  }

  if (error) {
    return <p>Error loading match data: {error.message}</p>;
  }

  if (!matchData) {
    return <p>No current match available.</p>;
  }

  return (
    <div>
      <div className='home'>
        <Navbar />
        <div className="home-container">
          <h1 className='sub-title'>Welcome to CrickGeek</h1>
          <div className="current-match">
            <h2>Current Match</h2>
            <div className="match-details">
              <div className="team1">
                <h3>{matchData.teams[0]}</h3>
                <p>Score: {matchData.score[0]?.r}/{matchData.score[0]?.w} ({matchData.score[0]?.o} overs)</p>
              </div>
              <div className="vs">
                <img src={vs_image} alt="vs" />
              </div>
              <div className="team2">
                <h3>{matchData.teams[1]}</h3>
                <p>Score: {matchData.score[1]?.r}/{matchData.score[1]?.w} ({matchData.score[1]?.o} overs)</p>
              </div>
            </div>
            <p className='match-data'>{matchData.status}</p>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <div className="container">
        <Title subtitle="Contact US" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
