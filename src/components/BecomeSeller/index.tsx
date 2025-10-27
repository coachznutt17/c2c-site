import React from "react";

const BecomeSeller: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: "#0d1b2a",
        color: "white",
        padding: "2rem 1rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          marginBottom: "1rem",
        }}
      >
        Get Paid for What You Already Coach
      </h2>

      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto 1.5rem auto",
          color: "rgba(255,255,255,0.85)",
          lineHeight: 1.5,
          fontSize: "1rem",
        }}
      >
        Upload your drills, practice plans, playbooks, scouting sheets, or
        video breakdowns — and keep 85% of every sale. Coaches everywhere
        need what you’re already doing at practice.
      </p>

      <a
        href="/upload"
        style={{
          display: "inline-block",
          backgroundColor: "#ffffff",
          color: "#0d1b2a",
          fontWeight: 600,
          fontSize: ".9rem",
          padding: "0.75rem 1rem",
          borderRadius: "8px",
          textDecoration: "none",
          border: "2px solid white",
        }}
      >
        Become a Seller
      </a>

      <div
        style={{
          marginTop: "1rem",
          fontSize: ".8rem",
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.4,
        }}
      >
        You keep ownership. We help you get paid.
      </div>
    </section>
  );
};

export default BecomeSeller;
