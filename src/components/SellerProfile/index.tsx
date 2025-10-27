import React from "react";

const SellerProfile: React.FC = () => {
  return (
    <section
      style={{
        padding: "2rem 1rem",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #eee",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {/* Left side: coach bio */}
        <div>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#0d1b2a",
              marginBottom: ".5rem",
              lineHeight: 1.3,
            }}
          >
            Meet a Coach2Coach Seller
          </h2>
          <div
            style={{
              fontWeight: 600,
              color: "#0d1b2a",
              marginBottom: ".25rem",
              fontSize: "1rem",
            }}
          >
            Coach Sam Mitchell — Varsity Baseball
          </div>
          <div
            style={{
              fontSize: ".9rem",
              color: "#444",
              marginBottom: "1rem",
              lineHeight: 1.4,
            }}
          >
            “I uploaded my infield progression, bunt coverages, and practice
            templates. Other coaches started buying them the same week. This is
            literally stuff I was already using every day.”
          </div>

          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              fontSize: ".9rem",
              color: "#333",
              lineHeight: 1.5,
            }}
          >
            <li>Earns 85% of every sale</li>
            <li>Resources used by travel ball + HS programs</li>
            <li>No exclusivity — still his content</li>
          </ul>
        </div>

        {/* Right side: example “profile card” */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            padding: "1rem",
            boxShadow:
              "0 8px 18px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: "#0d1b2a",
              marginBottom: ".25rem",
              fontSize: "1rem",
            }}
          >
            Coach Sam Mitchell
          </div>
          <div
            style={{
              fontSize: ".8rem",
              color: "#555",
              marginBottom: ".75rem",
            }}
          >
            Varsity Baseball • 14 years experience
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              backgroundColor: "#fff",
              padding: ".75rem",
              fontSize: ".8rem",
              lineHeight: 1.4,
              marginBottom: ".75rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: ".25rem" }}>
              Top Resource:
            </div>
            <div style={{ fontWeight: 500, color: "#0d1b2a" }}>
              Infield 4-Corner Throwing Progression
            </div>
            <div style={{ color: "#444" }}>Warmup / Footwork / Timing</div>
            <div style={{ fontWeight: 600, marginTop: ".25rem" }}>$4.99</div>
          </div>

          <div
            style={{
              fontSize: ".75rem",
              color: "#666",
              lineHeight: 1.4,
            }}
          >
            “I honestly didn’t think anybody would pay for this. Turns out a lot
            of coaches are looking for exactly the same drills.”
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerProfile;
