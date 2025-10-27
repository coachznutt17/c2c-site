import React from "react";

const ContactFAQ: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "2rem 1rem",
        borderTop: "1px solid #eee",
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
        Contact & FAQ
      </h2>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: 1.6,
          color: "#333",
          fontSize: "1rem",
        }}
      >
        <p>
          Have questions about uploading, payments, or your account? We're here
          to help.
        </p>

        <ul style={{ paddingLeft: "1rem", marginTop: "1rem" }}>
          <li>
            <strong>How do I start selling?</strong> — Click the “Become a
            Seller” button on the homepage to upload your first resource.
          </li>
          <li>
            <strong>When do I get paid?</strong> — Payouts are processed monthly
            through Stripe once your balance reaches $10.
          </li>
          <li>
            <strong>What file types are supported?</strong> — PDFs, videos,
            images, and zipped lesson materials.
          </li>
          <li>
            <strong>Need support?</strong> — Email{" "}
            <a
              href="mailto:coachznutt17@gmail.com"
              style={{ color: "#0d1b2a", textDecoration: "underline" }}
            >
              coachznutt17@gmail.com
            </a>{" "}
            and we’ll respond within 24 hours.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactFAQ;
