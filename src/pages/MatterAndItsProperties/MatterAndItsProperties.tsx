import React from "react";
import { useNavigate } from "react-router-dom";
import TopicButton from "../../components/TopicButton";

const buttonLabels = [
  "Definition of Matter",
  "Chemical Properties",
];

const MatterAndItsProperties: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Colored bar below header, unique to this page */}
      <div style={{ height: "30vh", width: "100vw", background: "#607D8B" }} />
      <div
        style={{
          backgroundColor: "#607D8B",
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
          Matter and Its Properties
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
            label="Definition of Matter"
            onClick={() =>
              navigate("/matter-and-its-properties/definition-of-matter")
            }
          />
          <TopicButton
            label="Chemical Properties"
            onClick={() =>
              navigate("/matter-and-its-properties/chemical-properties")
            }
          />
        </div>
      </div>
    </>
  );
};

export default MatterAndItsProperties;