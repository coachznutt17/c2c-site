import React, { useState } from "react";

const HowItWorksTabs: React.FC = () => {
  const [active, setActive] = useState<"buy" | "sell">("buy");

  return (
    <section
      style={{
        padding: "2rem 1rem",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #eee",
        borderBottom: "1px solid #eee",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: 700,
          marginBottom: "1.5rem",
          color: "#0d1b2a",
        }}
      >
        How It Works
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <button
          onClick={() => setActive("buy")}
          style={{
            padding: "0.6rem 1rem",
            fontWeight: 600,
            borderRadius: "6px",
            border: active === "buy" ? "2px solid #0d1b2a" : "1px solid #aaa",
            backgroundColor: active === "buy" ? "#0d1b2a" : "#f8f8f8",
            color: active === "buy" ? "#fff" : "#0d1b2a",
            cursor: "pointer",
          }}
        >
          Coaches Buying
        </button>
        <button
          onClick={() => setActive("sell")}
          style={{
            padding: "0.6rem 1rem",
            fontWeight: 600,
            borderRadius: "6px",
            border: active === "sell" ? "2px solid #0d1b2a" : "1px solid #aaa",
            backgroundColor: active === "sell" ? "#0d1b2a" : "#f8f8f8",
            color: active === "sell" ? "#fff" : "#0d1b2a",
            cursor: "pointer",
          }}
        >
          Coaches Selling
        </button>
      </div>

      {active === "buy" && (
        <div style={{ textAlign: "center", lineHeight: 1.6 }}>
          Browse hundreds of drills, playbooks, and templates from real coaches.
          <br />
          Instantly download PDFs and videos, ready to use at practice.
        </div>
      )}

      {active === "sell" && (
        <div style={{ textAlign: "center", lineHeight: 1.6 }}>
          Upload your own resources and set your price.
          <br />
          Earn 85% on every sale — paid out directly each month.
        </div>
      )}
    </section>
  );
};

export default HowItWorksTabs;
