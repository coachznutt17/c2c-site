import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#0d1b2a",
        color: "#ffffff",
        padding: "2rem 1rem",
        marginTop: "3rem",
        borderTop: "4px solid #1b263b",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
        }}
      >
        {/* Left side: brand / mission */}
        <div>
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: 700,
              marginBottom: ".75rem",
              color: "#ffffff",
            }}
          >
            Coach2Coach
          </h3>
          <p
            style={{
              fontSize: ".9rem",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.8)",
              maxWidth: "420px",
            }}
          >
            Built by coaches, for coaches. Buy proven drills, practice plans,
            scouting reports, player development systems — or sell your own and
            keep 85% of every sale.
          </p>
        </div>

        {/* Right side: quick links */}
        <div style={{ fontSize: ".9rem", lineHeight: 1.6 }}>
          <div style={{ marginBottom: ".5rem", fontWeight: 600 }}>
            Quick links
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: ".4rem" }}>
              <a
                href="/browse"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  textDecoration: "none",
                }}
              >
                Browse Resources
              </a>
            </li>
            <li style={{ marginBottom: ".4rem" }}>
              <a
                href="/sell"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  textDecoration: "none",
                }}
              >
                Become a Seller
              </a>
            </li>
            <li style={{ marginBottom: ".4rem" }}>
              <a
                href="/account"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  textDecoration: "none",
                }}
              >
                My Account
              </a>
            </li>
            <li style={{ marginBottom: ".4rem" }}>
              <a
                href="mailto:coachznutt17@gmail.com"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  textDecoration: "none",
                }}
              >
                Contact Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "2rem auto 0 auto",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: "1rem",
          fontSize: ".8rem",
          lineHeight: 1.5,
          color: "rgba(255,255,255,0.6)",
          textAlign: "center",
        }}
      >
        <div>© {year} Coach2Coach. All rights reserved.</div>
        <div>“Where Coaches Get Paid.”</div>
      </div>
    </footer>
  );
};

export default Footer;
