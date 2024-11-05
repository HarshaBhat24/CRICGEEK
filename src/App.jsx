
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Services from "./components/Services/Services";
import MatchScores from "./components/MatchScores/MatchScores";
import PlayerStats from "./components/PlayerStats/PlayerStats";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/components/firebase";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/services" element={user ? <Services /> : <Navigate to="/login" />} />
        <Route path="/match-scores" element={user ? <MatchScores /> : <Navigate to="/login" />} />
        <Route path="/player-stats" element={user ? <PlayerStats /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;