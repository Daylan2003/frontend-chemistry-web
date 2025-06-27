import React from "react";
const PeriodicTable: React.FC = () => (
  <>
    <div style={{ height: "30vh", width: "100vw", background: "#00BCD4" }} />
    <div
      style={{
        backgroundColor: "#00BCD4",
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
      <h2 style={{ margin: "0rem 0 1.5rem 0" }}>Periodic Table</h2>
      <p>Content for Periodic Table.</p>
    </div>
  </>
);
export default PeriodicTable;