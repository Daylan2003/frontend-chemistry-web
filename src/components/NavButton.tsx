import React from "react";
import { NavigateFunction } from "react-router-dom";

interface NavButtonProps {
  label: string;
  to: string;
  color: string;
  navigate: NavigateFunction;
  style?: React.CSSProperties;
}

const NavButton: React.FC<NavButtonProps> = ({ label, to, color, navigate, style }) => {
  return (
    <button
      className="nav-button"
      onClick={() => navigate(to)}
      style={{
        width: "100%",
        aspectRatio: "1 / 1",
        minWidth: 0,      // Allow shrinking
        minHeight: 0,     // Allow shrinking
        fontSize: "2rem",
        backgroundColor: color,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        boxShadow: `0 2px 6px -1px rgba(0,0,0,0.5), 0 -2px 6px -1px rgba(0,0,0,0.5), 2px 0 6px -1px rgba(0,0,0,0.5), -2px 0 6px -1px rgba(0,0,0,0.5)`,
        ...style,
      }}
    >
      {label}
    </button>
  );
};

export default NavButton;
