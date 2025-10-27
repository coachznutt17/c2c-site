import React from "react";

const BrowseResources: React.FC = () => {
  const sample = [
    {
      title: "Varsity Pitcher Weekly Throwing Plan",
      sport: "Baseball",
      level: "HS / Travel",
      price: "$3.99",
    },
    {
      title: "Full-Court Press Breaker (Diagram + Rules)",
      sport: "Basketball",
      level: "Varsity",
      price: "$4.99",
    },
    {
      title: "Speed & Agility Warmup Circuit",
      sport: "Football",
      level: "All Levels",
      price: "$2.99",
    },
  ];

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
          color: "#0d1b2a",
          marginBottom: "1rem",
        }}
      >
        Browse Resources
      </h2>

      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 2rem auto",
          lineHeight: 1.6,
          color: "#333",
          fontSize: "1rem",
        }}
      >
        Search drills, practice plans, scouting templates, and game-planning
        tools from real coaches. Download instantly and use today at practice.
      </p>

      {/* Fake list of example marketplace cards */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {sample.map((item) => (
          <div
            key={item.title}
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
                fontWeight: 700,
                color: "#0d1b2a",
                marginBottom: ".25rem",
                fontSize: "1rem",
              }}
            >
              {item.title}
            </div>

            <div
              style={{
                fontSize: ".8rem",
                color: "#555",
                marginBottom: ".5rem",
                lineHeight: 1.4,
              }}
            >
              {item.sport} • {item.level}
            </div>

            <div
              style={{
                fontWeight: 600,
                fontSize: ".9rem",
                color: "#0d1b2a",
              }}
            >
              {item.price}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
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
          View Full Marketplace
        </a>
      </div>
    </section>
  );
};

export default BrowseResources;
