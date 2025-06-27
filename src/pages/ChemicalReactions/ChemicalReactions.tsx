import React from "react";
const ChemicalReactions: React.FC = () => (
  <>
    <div style={{ height: "30vh", width: "100vw", background: "#FF5722" }} />
    <div
      style={{
        backgroundColor: "#FF5722",
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
      <h2 style={{ margin: "0rem 0 1.5rem 0" }}>Chemical Reactions</h2>
      <p>Content for Chemical Reactions.</p>
    </div>
  </>
);
export default ChemicalReactions;