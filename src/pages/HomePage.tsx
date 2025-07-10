import React from "react";
import NavButton from "../components/NavButton";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "red",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* General Questions button centered, 2:1 ratio, between header and grid */}
      <div className="general-button-container">
        <NavButton
          label="General Questions"
          to="/general"
          color="#007BFF"
          navigate={navigate}
          style={{ aspectRatio: "2 / 1", maxWidth: "600px", minWidth: 0, minHeight: 0 }}
        />
      </div>
      <div className="button-grid">
        <NavButton
          label="Matter and Its Properties"
          to="/matter-and-its-properties"
          color="#607D8B"
          navigate={navigate}
        />
        <NavButton
          label="Atomic Structure"
          to="/atomic-structure"
          color="#673AB7"
          navigate={navigate}
        />
        <NavButton
          label="Periodic Table"
          to="/periodic-table"
          color="#00BCD4"
          navigate={navigate}
        />
        <NavButton
          label="Chemical Bonding"
          to="/chemical-bonding"
          color="#3F51B5"
          navigate={navigate}
        />
        <NavButton
          label="Chemical Reactions"
          to="/chemical-reactions"
          color="#FF5722"
          navigate={navigate}
        />
        <NavButton
          label="Mole Concept and Stoichiometry"
          to="/mole-concept-and-stoichiometry"
          color="#FFC107"
          navigate={navigate}
        />
        <NavButton
          label="Acids and Bases"
          to="/acids-and-bases"
          color="#009688"
          navigate={navigate}
        />
        <NavButton
          label="Gases and Gas Laws"
          to="/gases-and-gas-laws"
          color="#4DD0E1"
          navigate={navigate}
        />
        <NavButton
          label="Solutions and Solubility"
          to="/solutions-and-solubility"
          color="#2980b9"
          navigate={navigate}
        />
        <NavButton
          label="Laboratory Work"
          to="/laboratory-work"
          color="#388E3C"
          navigate={navigate}
        />
      </div>
      {/* Coloured div of size 32px under everything */}
      <div style={{ width: "100%", height: 128, background: "red" }} />
    </div>
  );
};

export default HomePage;