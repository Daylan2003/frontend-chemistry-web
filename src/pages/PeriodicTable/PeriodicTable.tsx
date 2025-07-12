import React from "react";
import { useNavigate } from "react-router-dom";
import TopicButton from "../../components/TopicButton";

const PeriodicTable: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ height: "30vh", width: "100vw", background: "#00BCD4" }} />
      <div
        style={{
          backgroundColor: "#00BCD4",
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
          Periodic Table
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
            label="Groups and Periods"
            onClick={() =>
              navigate("/periodic-table/groups-and-periods")
            }
          />
          <TopicButton
            label="Metals and Nonmetals"
            onClick={() =>
              navigate("/periodic-table/metals-and-nonmetals")
            }
          />
        </div>
      </div>
    </>
  );
};

export default PeriodicTable;