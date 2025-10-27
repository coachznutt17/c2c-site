import React from "react";

const UploadResource: React.FC = () => {
  return (
    <section
      style={{
        padding: "2rem 1rem",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #eee",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#0d1b2a",
          marginBottom: "1rem",
        }}
      >
        Upload a New Resource
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto 1.5rem auto",
          lineHeight: 1.6,
          color: "#333",
          fontSize: "1rem",
        }}
      >
        Coming soon — here’s where coaches will upload their drills, playbooks,
        and templates. In the full MVP, this form will connect directly to your
        Supabase + Stripe backend so sellers can post and sell instantly.
      </p>

      <a
        href="/dashboard"
        style={{
          display: "inline-block",
          backgroundColor: "#0d1b2a",
          color: "#fff",
          fontWeight: 600,
          padding: "0.75rem 1.25rem",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Back to Dashboard
      </a>
    </section>
  );
};

export default UploadResource;
