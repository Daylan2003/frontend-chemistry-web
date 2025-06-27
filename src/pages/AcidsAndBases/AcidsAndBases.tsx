import React from "react";
const AcidsAndBases: React.FC = () => (
  <>
    {/* Colored bar below header, unique to this page */}
    <div style={{ height: "30vh", width: "100vw", background: "#009688" }} />
    <div
      style={{
        backgroundColor: "#009688",
        minHeight: "100vh",
        width: "100%",           // Use 100% instead of 100vw
        marginTop: "-1px",       // Overlap to hide any line
        padding: "2rem",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ margin: "0 0 1.5rem 0" }}>Acids and Bases</h2>
      <p>Content for Acids and Bases.</p>
    </div>
  </>
);
export default AcidsAndBases;