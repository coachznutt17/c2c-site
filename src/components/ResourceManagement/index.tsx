import React from "react";

const ResourceManagement: React.FC = () => {
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
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#0d1b2a",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Manage Your Resources
      </h2>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 1.5rem auto",
          fontSize: "1rem",
          lineHeight: 1.6,
          color: "#333",
          textAlign: "center",
        }}
      >
        In the full version of Coach2Coach, this is where you&apos;ll edit
        titles, change prices, update descriptions, replace files, and see your
        download stats. You stay in control of your content at all times.
      </p>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
            backgroundColor: "#f9f9f9",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              fontSize: "1rem",
              color: "#0d1b2a",
              marginBottom: ".5rem",
            }}
          >
            Edit Resource
          </div>
          <div
            style={{
              fontSize: ".85rem",
              color: "#444",
              lineHeight: 1.4,
              marginBottom: ".5rem",
            }}
          >
            Update title, description, and price any time.
          </div>
          <div style={{ fontSize: ".8rem", color: "#666" }}>
            Example: Change “Varsity Warmup Plan” from $2.99 to $3.99.
          </div>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
            backgroundColor: "#f9f9f9",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              fontSize: "1rem",
              color: "#0d1b2a",
              marginBottom: ".5rem",
            }}
          >
            Track Sales
          </div>
          <div
            style={{
              fontSize: ".85rem",
              color: "#444",
              lineHeight: 1.4,
              marginBottom: ".5rem",
            }}
          >
            View total downloads and earnings for each file you’ve uploaded.
          </div>
          <div style={{ fontSize: ".8rem", color: "#666" }}>
            Payouts handled securely through Stripe.
          </div>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
            backgroundColor: "#f9f9f9",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              fontSize: "1rem",
              color: "#0d1b2a",
              marginBottom: ".5rem",
            }}
          >
            Replace Files
          </div>
          <div
            style={{
              fontSize: ".85rem",
              color: "#444",
              lineHeight: 1.4,
              marginBottom: ".5rem",
            }}
          >
            Uploaded the wrong version? Swap it without losing your listing.
          </div>
          <div style={{ fontSize: ".8rem", color: "#666" }}>
            Keep your content up-to-date for buyers.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceManagement;
