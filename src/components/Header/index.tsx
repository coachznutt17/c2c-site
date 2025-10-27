import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#ffffff",
      }}
    >
      <div style={{ fontWeight: 600, fontSize: "1rem" }}>
        Coach2Coach
      </div>

      <nav style={{ display: "flex", gap: "1rem", fontSize: ".9rem" }}>
        <a href="/" style={{ textDecoration: "none", color: "#0d1b2a" }}>
          Marketplace
        </a>
        <a href="/upload" style={{ textDecoration: "none", color: "#0d1b2a" }}>
          Sell Content
        </a>
        <a href="/login" style={{ textDecoration: "none", color: "#0d1b2a" }}>
          Sign In
        </a>
      </nav>
    </header>
  );
};

export default Header;
