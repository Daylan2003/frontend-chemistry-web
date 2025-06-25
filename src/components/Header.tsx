import React from 'react';
import HamburgerMenu from './HamburgerMenu';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <div
    style={{
      position: "sticky",
      top: 0,
      zIndex: 1000, // Ensure it stays above other content
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#ccc",
      paddingBottom: "8px",
      marginBottom: "16px",
      borderBottomLeftRadius: "24px",   // Bevel bottom left
      borderBottomRightRadius: "24px",  // Bevel bottom right
      boxShadow: "0 8px 24px -4px rgba(0,0,0,0.5)", // Stronger black shadow at bottom
    }}
  >
    <h1
      className="header-title"
      style={{
        fontSize: "8vh", // 1/8 of viewport height for desktop
        margin: 0,
        textAlign: "left",
        paddingLeft: "24px",
      }}
    >
      {title}
    </h1>
    <div className="hamburger-menu-container" style={{ paddingRight: "24px" }}>
      <HamburgerMenu />
    </div>
  </div>
);

export default Header;