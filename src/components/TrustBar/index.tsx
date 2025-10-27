import React from "react";

const TrustBar: React.FC = () => {
  const partners = [
    "High School Coaches Association",
    "Travel Ball Network",
    "Georgia Baseball Coaches",
    "Elite Performance Labs",
  ];

  return (
    <section
      style={{
        backgroundColor: "#0d1b2a",
        color: "white",
        padding: "1rem 0",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: "1.1rem",
          marginBottom: "0.5rem",
        }}
      >
        Trusted by Coaches Across the Nation
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
          fontSize: ".9rem",
          opacity: 0.9,
        }}
      >
        {partners.map((p) => (
          <div key={p}>{p}</div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
