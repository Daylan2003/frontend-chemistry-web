import React from "react";
const AtomicStructure: React.FC = () => (
  <>
    {/* Colored bar below header, unique to this page */}
    <div style={{ height: "30vh", width: "100vw", background: "#673AB7" }} />
    <div
      style={{
        backgroundColor: "#673AB7",
        minHeight: "100vh",
        width: "100%",
        marginTop: "-1px", // Overlap to hide any line
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
      <p>Content for Atomic Structure.</p>
    </div>
  </>
);
export default AtomicStructure;