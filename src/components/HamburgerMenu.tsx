import React, { useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button
        className="hamburger-menu-btn"
        onClick={() => setOpen(true)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "8px",
          zIndex: 101,
        }}
        aria-label="Open menu"
      >
        <div
          className="hamburger-icon-container"
          style={{
            width: 30,
            height: 22,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <span
            className="hamburger-line"
            style={{
              display: "block",
              height: 4,
              width: "100%",
              borderRadius: 2,
            }}
          />
          <span
            className="hamburger-line"
            style={{
              display: "block",
              height: 4,
              width: "100%",
              borderRadius: 2,
            }}
          />
          <span
            className="hamburger-line"
            style={{
              display: "block",
              height: 4,
              width: "100%",
              borderRadius: 2,
            }}
          />
        </div>
      </button>
      {open && (
        <div
          className="hamburger-menu-drawer"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "45vw", // One third of the viewport width
            height: "100vh",
            background: "white",
            zIndex: 200,
            transition: "transform 0.3s ease",
            transform: open ? "translateX(0)" : "translateX(100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            boxShadow: "-2px 0 8px rgba(0,0,0,0.15)",
          }}
        >
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: "2rem",
              padding: "24px 32px 0 0",
              cursor: "pointer",
              alignSelf: "flex-end",
            }}
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav style={{ width: "100%", padding: "48px 0 0 0" }}>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                textAlign: "center",
              }}
            >
              <li style={{ margin: "32px 0" }}>
                <a
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontSize: "2rem",
                  }}
                >
                  Home
                </a>
              </li>
              <li style={{ margin: "32px 0" }}>
                <a
                  href="/about"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontSize: "2rem",
                  }}
                >
                  About
                </a>
              </li>
              <li style={{ margin: "32px 0" }}>
                <a
                  href="/contact"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontSize: "2rem",
                  }}
                >
                  Submit a Question
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;