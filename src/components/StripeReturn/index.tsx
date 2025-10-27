import React from "react";

const StripeReturn: React.FC = () => {
  return (
    <section
      style={{
        padding: "2rem 1rem",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #eee",
        maxWidth: "700px",
        margin: "0 auto",
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
        Payment Complete
      </h2>

      <p
        style={{
          fontSize: "1rem",
          color: "#333",
          lineHeight: 1.5,
          marginBottom: "1.5rem",
        }}
      >
        Thanks for supporting another coach. Your purchase was processed
        successfully. In the full version of Coach2Coach, this page will show
        download links for what you just bought — along with a receipt.
      </p>

      <div style={{ fontSize: ".9rem", color: "#666", lineHeight: 1.4 }}>
        If you believe something is wrong with the transaction, email{" "}
        <a
          href="mailto:coachznutt17@gmail.com"
          style={{ color: "#0d1b2a", textDecoration: "underline" }}
        >
          coachznutt17@gmail.com
        </a>{" "}
        and include your order email.
      </div>

      <div style={{ marginTop: "2rem" }}>
        <a
          href="/browse"
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
          Back to Marketplace
        </a>
      </div>
    </section>
  );
};

export default StripeReturn;
