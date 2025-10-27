import React from "react";

const AccountPage: React.FC = () => {
  return (
    <section
      style={{
        padding: "2rem 1rem",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #eee",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#0d1b2a",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Your Account
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#333",
          lineHeight: 1.5,
          fontSize: "1rem",
          maxWidth: "600px",
          margin: "0 auto 2rem auto",
        }}
      >
        This is where coaches will manage profile details, payout info, and
        purchased / uploaded resources. In the full product, this page will be
        personalized per logged-in user.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            padding: "1rem",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              color: "#0d1b2a",
              marginBottom: ".5rem",
              fontSize: "1rem",
            }}
          >
            Profile Info
          </div>
          <div style={{ fontSize: ".85rem", color: "#444", lineHeight: 1.4 }}>
            Name, sport, team, coaching level, bio.
          </div>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            padding: "1rem",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              color: "#0d1b2a",
              marginBottom: ".5rem",
              fontSize: "1rem",
            }}
          >
            Earnings & Payouts
          </div>
          <div style={{ fontSize: ".85rem", color: "#444", lineHeight: 1.4 }}>
            Connect Stripe, view balance, and track monthly payouts.
          </div>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            padding: "1rem",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              color: "#0d1b2a",
              marginBottom: ".5rem",
              fontSize: "1rem",
            }}
          >
            Purchase History
          </div>
          <div style={{ fontSize: ".85rem", color: "#444", lineHeight: 1.4 }}>
            Access anything you’ve bought — drills, playbooks, templates.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
