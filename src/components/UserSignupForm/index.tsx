import React from "react";

const UserSignupForm: React.FC = () => {
  return (
    <section
      style={{
        maxWidth: "500px",
        margin: "2rem auto",
        padding: "2rem 1.5rem",
        border: "1px solid #ddd",
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "0 10px 24px rgba(0,0,0,0.04)",
        fontFamily:
          "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "#0d1b2a",
          marginBottom: "0.5rem",
          textAlign: "center",
        }}
      >
        Create Your Coach Account
      </h2>

      <p
        style={{
          fontSize: ".9rem",
          lineHeight: 1.5,
          color: "#444",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        In the full version of Coach2Coach, this form will let you sign up,
        unlock membership ($5.99/mo), upload resources, and get paid.
      </p>

      <div style={{ fontSize: ".85rem", color: "#666", lineHeight: 1.4 }}>
        <div style={{ marginBottom: "0.75rem" }}>
          <label
            style={{
              display: "block",
              fontWeight: 600,
              marginBottom: ".25rem",
              color: "#0d1b2a",
            }}
          >
            Email
          </label>
          <input
            disabled
            placeholder="coach@example.com"
            style={{
              width: "100%",
              padding: "0.6rem 0.75rem",
              borderRadius: "8px",
              border: "1px solid #bbb",
              fontSize: ".9rem",
              backgroundColor: "#f5f5f5",
              color: "#666",
            }}
          />
        </div>

        <div style={{ marginBottom: "0.75rem" }}>
          <label
            style={{
              display: "block",
              fontWeight: 600,
              marginBottom: ".25rem",
              color: "#0d1b2a",
            }}
          >
            Password
          </label>
          <input
            disabled
            placeholder="••••••••"
            type="password"
            style={{
              width: "100%",
              padding: "0.6rem 0.75rem",
              borderRadius: "8px",
              border: "1px solid #bbb",
              fontSize: ".9rem",
              backgroundColor: "#f5f5f5",
              color: "#666",
            }}
          />
        </div>

        <button
          disabled
          style={{
            width: "100%",
            marginTop: "1rem",
            backgroundColor: "#0d1b2a",
            color: "#fff",
            fontWeight: 600,
            fontSize: ".95rem",
            padding: "0.75rem",
            borderRadius: "8px",
            border: "none",
            cursor: "not-allowed",
            opacity: 0.6,
          }}
        >
          Sign Up (Coming Soon)
        </button>

        <p
          style={{
            fontSize: ".75rem",
            textAlign: "center",
            color: "#777",
            marginTop: "1rem",
            lineHeight: 1.4,
          }}
        >
          Already a member? Log in and access every resource instantly.
        </p>
      </div>
    </section>
  );
};

export default UserSignupForm;
