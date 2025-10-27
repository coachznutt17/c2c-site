import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      style={{
        width: "100%",
        padding: "2rem 1rem",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "1.8rem",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#0d1b2a",
              marginBottom: "0.75rem",
            }}
          >
            Ready-to-use drills, playbooks, and practice plans
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.5,
              color: "#333",
              marginBottom: "1rem",
            }}
          >
            Stop wasting hours planning practice. Download proven drills and
            coaching resources built by real coaches — and keep 85% of every
            sale when you sell your own.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href="/browse"
              style={{
                display: "inline-block",
                backgroundColor: "#0d1b2a",
                color: "white",
                fontWeight: 600,
                fontSize: ".9rem",
                padding: "0.6rem 1rem",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Browse Resources
            </a>

            <a
              href="/upload"
              style={{
                display: "inline-block",
                backgroundColor: "#ffffff",
                color: "#0d1b2a",
                fontWeight: 600,
                fontSize: ".9rem",
                padding: "0.6rem 1rem",
                borderRadius: "6px",
                border: "1px solid #0d1b2a",
                textDecoration: "none",
              }}
            >
              Start Selling
            </a>
          </div>
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            backgroundColor: "#fff",
            fontSize: ".8rem",
            lineHeight: 1.4,
            boxShadow:
              "0 10px 24px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: ".5rem" }}>
            Example Resource:
          </div>
          <div style={{ fontWeight: 500, color: "#0d1b2a" }}>
            “Infield 4-Corner Throwing Progression”
          </div>
          <div style={{ color: "#444", marginBottom: ".5rem" }}>
            Varsity Baseball • Warmup & Footwork
          </div>
          <div style={{ fontWeight: 600, fontSize: ".8rem" }}>$4.99</div>
          <div style={{ fontSize: ".7rem", color: "#666" }}>
            Instant PDF download • Print or show on iPad
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
