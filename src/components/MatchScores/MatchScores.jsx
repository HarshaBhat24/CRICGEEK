





// Old waiting status


// import React, { useState, useEffect } from 'react';
// import './MatchScores.css';
// import vs_image from "../../assets/vs.png";

// const MatchScores = () => {
//   const [matchData, setMatchData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMatchScores = async () => {
//       try {
//         const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=3b8e73dd-0b21-43a2-b9cf-23739fb32c70&offset=0');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         if (data.status !== "success") {
//           throw new Error(data.status);
//         }
//         setMatchData(data.data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMatchScores();
//   }, []);

//   if (loading) {
//     return <p>Loading match scores...</p>;
//   }

//   if (error) {
//     return <p>Error loading match scores: {error.message}</p>;
//   }

//   if (!matchData || matchData.length === 0) {
//     return <p>No current match scores available.</p>;
//   }

//   return (
//     <div className='match-scores-container'>
//       <h2>Current Match Scores</h2>
//       {matchData.map((match) => (
//         <div className="match" key={match.id}>
//           <h3>{match.name}</h3>
//           <div className="match-details">
//             {match.teamInfo.map((team, index) => (
//               <div key={team.name} className={`team${index + 1}`}>
//                 <h4>{team.name}</h4>
//                 {match.score[index] && (
//                   <p>
//                     <span className='label'>Score:</span> {match.score[index].r}/{match.score[index].w} 
//                     ({match.score[index].o} overs)
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//           <p>{match.status}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MatchScores;



//vs image


import React, { useState, useEffect } from 'react';
import './MatchScores.css';
import vs_image from "../../assets/vs.png";
import not_found from '../../assets/Animation.gif';


const MatchScores = () => {
  const [matchData, setMatchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatchScores = async () => {
      try {
        const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=cbb1acfd-c668-41be-905f-a7d61bec2e33&offset=0');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.status !== "success") {
          throw new Error(data.status);
        }
        setMatchData(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMatchScores();
  }, []);

  if (loading) {
    return <p>Loading match scores...</p>;
  }

  if (error) {
    return(
      <div className="not_found">
        <p>Status:{error.message}</p>
        <img src={not_found} alt="error 404" />
      </div>
    );
  }

  if (!matchData || matchData.length === 0) {
    return <p>No current match scores available.</p>;
  }

  return (
    <div className='match-scores-container'>
      <h2>Current Match Scores</h2>
      {matchData.map((match) => (
        <div className="match" key={match.id}>
          <h3>{match.name}</h3>
          <div className="match-details">
            <div className="team1">
              <h4>{match.teamInfo[0]?.name}</h4>
              {match.score[0] && (
                <p>
                  <span className='label'>Score:</span> {match.score[0].r}/{match.score[0].w} 
                  ({match.score[0].o} overs)
                </p>
              )}
            </div>
            <img src={vs_image} alt="vs" className="vs-image" />
            <div className="team2">
              <h4>{match.teamInfo[1]?.name}</h4>
              {match.score[1] && (
                <p>
                  <span className='label'>Score:</span> {match.score[1].r}/{match.score[1].w} 
                  ({match.score[1].o} overs)
                </p>
              )}
            </div>
          </div>
          <p>{match.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MatchScores;


// import React, { useState, useEffect } from 'react';
// import './MatchScores.css';
// import vs_image from "../../assets/vs.png";
// import not_found from '../../assets/Animation.gif';


// const MatchScores = () => {
//   const [matchData, setMatchData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMatchScores = async () => {
//       try {
//         const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=cbb1acfd-c668-41be-905f-a7d61bec2e37&offset=0');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         if (data.status !== "success") {
//           throw new Error(data.status);
//         }
//         setMatchData(data.data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMatchScores();
//   }, []);

//   if (loading) {
//     return <p>Loading match scores...</p>;
//   }

//   if (error) {
//     return(
//       <div className="not_found">
//         <p>Status:{error.message}</p>
//         <img src={not_found} alt="error 404" />
//       </div>
//     );
//   }

//   if (!matchData || matchData.length === 0) {
//     return <p>No current match scores available.</p>;
//   }

//   return (
//     <div className='match-scores-container'>
//       <h2>Current Match Scores</h2>
//       {matchData.map((match) => (
//         <div className="match" key={match.id}>
//           <h3>{match.name}</h3>
//           <div className="match-details">
//             <div className="team1">
//               <h4>{match.teamInfo[0]?.name}</h4>
//               {match.score[0] && (
//                 <p>
//                   <span className='label'>Score:</span> {match.score[0].r}/{match.score[0].w} 
//                   ({match.score[0].o} overs)
//                 </p>
//               )}
//             </div>
//             <img src={vs_image} alt="vs" className="vs-image" />
//             <div className="team2">
//               <h4>{match.teamInfo[1]?.name}</h4>
//               {match.score[1] && (
//                 <p>
//                   <span className='label'>Score:</span> {match.score[1].r}/{match.score[1].w} 
//                   ({match.score[1].o} overs)
//                 </p>
//               )}
//             </div>
//           </div>
//           <p>{match.status}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MatchScores;
