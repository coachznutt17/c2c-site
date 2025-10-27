import React from "react";

const About: React.FC = () => {
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
          color: "#0d1b2a",
          marginBottom: "1rem",
        }}
      >
        About Coach2Coach
      </h2>
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: 1.6,
          color: "#333",
          fontSize: "1rem",
          textAlign: "center",
        }}
      >
        Coach2Coach was built by coaches, for coaches. Our mission is simple:
        empower coaches to share their drills, practice plans, and playbooks
        while getting paid for their expertise. Whether you're leading a
        youth-league team or a varsity program, this marketplace connects you
        with ready-to-use resources created by real coaches who have been in
        your shoes.
      </p>
    </section>
  );
};

export default About;
