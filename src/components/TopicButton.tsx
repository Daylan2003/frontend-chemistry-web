import React from "react";

interface TopicButtonProps {
  label: string;
  onClick?: () => void;
}

const TopicButton: React.FC<TopicButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    style={{
      width: "100%",
      padding: "1.2rem",
      fontSize: "1.3rem",
      borderRadius: "12px",
      border: "none",
      background: "#455A64",
      color: "white",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      cursor: "pointer",
      transition: "all 0.2s"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.border = "5px solid white";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.border = "none";
    }}
  >
    {label}
  </button>
);

export default TopicButton;