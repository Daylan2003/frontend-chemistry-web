import React from "react";
import { useNavigate } from "react-router-dom";
import TopicButton from "../../components/TopicButton";

const buttonLabels = [
  "Covalent Bonding",
  "Ionic Bonding",
];

const ChemicalBonding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Colored bar below header, unique to this page */}
      <div style={{ height: "30vh", width: "100vw", background: "#3F51B5" }} />
      <div
        style={{
          backgroundColor: "#3F51B5",
          minHeight: "100vh",
          width: "100vw",
          marginTop: "-1px", // Overlap to hide any line
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          boxSizing: "border-box",
          padding: "2rem",
        }}
      >
        <h2 style={{ marginBottom: "2rem", marginTop: "-1rem" }}>
          Chemical Bonding
        </h2>
        <div
          style={{
            width: "100%",
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <TopicButton
            label="Covalent Bonding"
            onClick={() =>
              navigate("/chemical-bonding/covalent-bonding")
            }
          />
          <TopicButton
            label="Ionic Bonding"
            onClick={() =>
              navigate("/chemical-bonding/ionic-bonding")
            }
          />
        </div>
      </div>
    </>
  );
};

export default ChemicalBonding;