import React from "react";
import { NavigateFunction } from "react-router-dom";

interface NavButtonProps {
  label: string;
  to: string;
  color: string;
  navigate: NavigateFunction;
}

const NavButton: React.FC<NavButtonProps> = ({ label, to, color, navigate }) => {
  return (
    <button
      className="nav-button"
      onClick={() => navigate(to)}
      style={{
        width: "100%",
        aspectRatio: "1 / 1",
        minWidth: 0,      // Allow shrinking
        minHeight: 0,     // Allow shrinking
        fontSize: "6vw",
        backgroundColor: color,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        boxShadow: `0 2px 6px -1px rgba(0,0,0,0.5), 0 -2px 6px -1px rgba(0,0,0,0.5), 2px 0 6px -1px rgba(0,0,0,0.5), -2px 0 6px -1px rgba(0,0,0,0.5)`
      }}
    >
      {label}
    </button>
  );
};

export default NavButton;
