import React from "react";
import NavButton from "../../components/NavButton";
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
        <div className="button-grid">
          <NavButton
            label="Subatomic Particles"
            to="/atomic-structure/subatomic-particles"
            color="#7E57C2"
            navigate={navigate}
          />
          <NavButton
            label="Electronic Configuration"
            to="/atomic-structure/electronic-configuration"
            color="#9575CD"
            navigate={navigate}
          />
        </div>
      </div>
    </>
  );
};

export default AtomicStructure;