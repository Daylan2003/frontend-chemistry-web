import React from "react";
import { useNavigate } from "react-router-dom";
import TopicButton from "../../components/TopicButton";

const buttonLabels = [
  "Definition of Matter",
  "Chemical Properties",
  "States of Matter",
  "Changes of State",
  "Mixtures and Pure Substances",
];

const MatterAndItsProperties: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#607D8B",
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: "2rem",
        color: "white",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ marginBottom: "2rem" }}>Matter and Its Properties</h2>
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
          label="Definition of Matter"
          onClick={() =>
            navigate("/matter-and-its-properties/definition-of-matter")
          }
        />
        {buttonLabels.slice(1).map((label) => (
          <TopicButton key={label} label={label} />
        ))}
      </div>
    </div>
  );
};

export default MatterAndItsProperties;