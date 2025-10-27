import React from "react";

const FeaturedResources: React.FC = () => {
  const resources = [
    {
      title: "Infield 4-Corner Throwing Progression",
      sport: "Baseball",
      price: "$4.99",
      desc: "Improve arm accuracy and footwork with this warm-up drill.",
    },
    {
      title: "Half-Court Defensive Rotations",
      sport: "Basketball",
      price: "$3.99",
      desc: "Teach help-side defense and communication fundamentals.",
    },
    {
      title: "Conditioning & Agility Ladder Set",
      sport: "Football",
      price: "$2.99",
      desc: "Simple speed-training routine for team warm-ups.",
    },
  ];

  return (
    <section
      style={{
        padding: "2rem 1rem",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #eee",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#0d1b2a",
          marginBottom: "1.5rem",
        }}
      >
        Featured Resources
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {resources.map((r) => (
          <div
            key={r.title}
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
                fontWeight: 700,
                fontSize: "1rem",
                color: "#0d1b2a",
                marginBottom: "0.25rem",
              }}
            >
              {r.title}
            </div>
            <div
              style={{
                fontSize: ".85rem",
                fontWeight: 500,
                color: "#555",
                marginBottom: ".25rem",
              }}
            >
              {r.sport}
            </div>
            <p
              style={{
                fontSize: ".85rem",
                color: "#333",
                marginBottom: ".5rem",
                lineHeight: 1.4,
              }}
            >
              {r.desc}
            </p>
            <div style={{ fontWeight: 600 }}>{r.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedResources;
