import React from "react";

const ElectronicConfiguration: React.FC = () => {
  return (
    <>
      {/* Colored bar below header, unique to this page */}
      <div style={{ height: "30vh", width: "100vw", background: "#9575CD" }} />
      <div
        style={{
          backgroundColor: "#9575CD",
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
        <h2 style={{ margin: "0rem 0 1.5rem 0" }}>Electronic Configuration</h2>
        <p>Content for Electronic Configuration will be added here.</p>
      </div>
    </>
  );
};

export default ElectronicConfiguration;
