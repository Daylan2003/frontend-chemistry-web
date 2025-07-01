import React, { useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

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
                  onClick={e => { e.preventDefault(); setAboutOpen(true); }}
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
      {aboutOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            zIndex: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "3rem 2.5rem",
              maxWidth: "90vw",
              maxHeight: "80vh",
              width: "600px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              position: "relative",
            }}
          >
            <button
              onClick={() => setAboutOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: "2rem",
                color: "#333",
                cursor: "pointer",
                position: "absolute",
                top: 16,
                right: 24,
              }}
              aria-label="Close about modal"
            >
              &times;
            </button>
            <div style={{ width: "100%", textAlign: "left", color: "#222", fontSize: "1.25rem", marginTop: "2.5rem" }}>
              <h2>About This Website</h2>
              <p>This is some arbitrary text about the website. You can put any information you want here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;