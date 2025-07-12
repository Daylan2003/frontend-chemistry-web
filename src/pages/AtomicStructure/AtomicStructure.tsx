import React from "react";
import { useNavigate } from "react-router-dom";

const AtomicStructure: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Colored bar below header, unique to this page */}
      <div style={{ height: "30vh", width: "100vw", background: "#673AB7" }} />
      <div
        style={{
          backgroundColor: "#673AB7",
          minHeight: "100vh",
          width: "100%",
          marginTop: "-1px",
          padding: "2rem",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ margin: "0rem 0 1.5rem 0" }}>Atomic Structure</h2>
        <div
          style={{
            width: "100%",
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <button
            onClick={() => navigate("/atomic-structure/subatomic-particles")}
            style={{
              width: "100%",
              padding: "1.2rem",
              fontSize: "1.3rem",
              borderRadius: "12px",
              border: "none",
              background: "#E1BEE7",
              color: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "5px solid white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "none";
            }}
          >
            Subatomic Particles
          </button>
          <button
            onClick={() => navigate("/atomic-structure/electronic-configuration")}
            style={{
              width: "100%",
              padding: "1.2rem",
              fontSize: "1.3rem",
              borderRadius: "12px",
              border: "none",
              background: "#E1BEE7",
              color: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "5px solid white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "none";
            }}
          >
            Electronic Configuration
          </button>
        </div>
      </div>
    </>
  );
};

export default AtomicStructure;