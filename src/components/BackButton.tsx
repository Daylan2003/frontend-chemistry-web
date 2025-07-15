import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface BackButtonProps {
  borderColor?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ borderColor = "#b0bec5" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  // Hide on homepage
  if (location.pathname === "/") return null;

  return (
    <button
      className="back-button-fixed"
      onClick={() => navigate(-1)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "fixed",
        bottom: "32px",
        left: "32px",
        zIndex: 1200,
        padding: "0.75rem 1.5rem",
        borderRadius: "12px",
        border: `2px solid ${hover ? "white" : borderColor}`,
        background: "#ccc",
        color: "black",
        fontWeight: "bold",
        fontSize: "1.1rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        cursor: "pointer",
        transition: "background 0.2s, box-shadow 0.2s, border 0.2s",
      }}
      aria-label="Go back"
    >
      &#8592; Back
    </button>
  );
};

export default BackButton;