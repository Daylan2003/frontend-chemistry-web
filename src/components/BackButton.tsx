import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide on homepage
  if (location.pathname === "/") return null;

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        position: "fixed",
        bottom: "32px",
        left: "32px",
        zIndex: 1200,
        padding: "0.75rem 1.5rem",
        borderRadius: "12px",
        border: "2px solid #b0bec5",
        background: "#ccc", // Match header background color
        color: "black",
        fontWeight: "bold",
        fontSize: "1.1rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        cursor: "pointer",
        transition: "background 0.2s, box-shadow 0.2s",
      }}
      aria-label="Go back"
    >
      &#8592; Back
    </button>
  );
};

export default BackButton;