
import React, { useState, useEffect } from "react";
import "./PlayerStats.css";
import not_found from "../../assets/Animation.gif";

const PlayerStats = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayerStats = async () => {
      try {
        const response = await fetch(
          `https://api.cricapi.com/v1/players?apikey=cbb1acfd-c668-41be-905f-a7d61bec2e35&offset=0`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.status !== "success") {
          throw new Error(data.status);
        }

        const playersWithDetails = await Promise.all(
          data.data.slice(0, 10).map(async (player) => {
            const detailResponse = await fetch(
              `https://api.cricapi.com/v1/players_info?apikey=cbb1acfd-c668-41be-905f-a7d61bec2e35&id=${player.id}`,
            );
            if (!detailResponse.ok) {
              throw new Error("Failed to fetch player details");
            }
            const detailData = await detailResponse.json();
            return { ...player, details: detailData.data };
          }),
        );

        setPlayers(playersWithDetails);
      } catch (error) {
        console.error("Error fetching player stats:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayerStats();
  }, []);

  if (loading) {
    return <p>Loading player stats...</p>;
  }

  if (error) {
    return (
      <div className="not_found">
        <p>Error: Data not found</p>
        <img src={not_found} alt="error 404" />
      </div>
    );
  }

  if (!players || players.length === 0) {
    return <p>No player stats available.</p>;
  }

  return (
    <div className="player-stats-container">
      <h2>Player Information (Top 10)</h2>
      <div className="player-list">
        {players.map((player) => (
          <div key={player.id} className="player-item">
            <h3>{player.name}</h3>
            <p>
              <span className="label">Country:</span> {player.country}
            </p>
            <p>
              <span className="label">Date of Birth:</span>{" "}
              {player.details?.dateOfBirth
                ? new Date(player.details.dateOfBirth).toLocaleDateString()
                : "Not available"}
            </p>
            <p>
              <span className="label">Role:</span>{" "}
              {player.details?.role || "Not specified"}
            </p>
            <p>
              <span className="label">Batting Style:</span>{" "}
              {player.details?.battingStyle || "Not specified"}
            </p>
            <p>
              <span className="label">Bowling Style:</span>{" "}
              {player.details?.bowlingStyle || "Not specified"}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerStats;