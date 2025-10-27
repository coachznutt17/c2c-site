import React from "react";

const FeaturedCoaches: React.FC = () => {
  const coaches = [
    { name: "Coach Williams", sport: "Basketball", quote: "Game-changing drills that saved us hours!" },
    { name: "Coach Nguyen", sport: "Baseball", quote: "Love earning money from my old practice plans." },
    { name: "Coach Rivera", sport: "Football", quote: "This platform is built for real coaches." },
  ];

  return (
    <section
      style={{
        padding: "2rem 1rem",
        backgroundColor: "#f5f8fa",
        borderTop: "1px solid #eee",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: 700,
          marginBottom: "2rem",
          color: "#0d1b2a",
        }}
      >
        Featured Coaches
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
        {coaches.map((coach) => (
          <div
            key={coach.name}
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "1rem",
              boxShadow:
                "0 8px 18px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                marginBottom: "0.25rem",
                color: "#0d1b2a",
              }}
            >
              {coach.name}
            </div>
            <div
              style={{
                fontSize: ".85rem",
                fontWeight: 500,
                color: "#555",
                marginBottom: ".5rem",
              }}
            >
              {coach.sport}
            </div>
            <p
              style={{
                fontSize: ".85rem",
                color: "#333",
                lineHeight: 1.4,
                fontStyle: "italic",
              }}
            >
              “{coach.quote}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCoaches;
