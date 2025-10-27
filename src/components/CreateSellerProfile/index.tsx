import React from "react";

const CreateSellerProfile: React.FC = () => {
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
        Create Your Seller Profile
      </h2>
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 1.5rem auto",
          lineHeight: 1.6,
          color: "#333",
          fontSize: "1rem",
          textAlign: "center",
        }}
      >
        Set up your Coach2Coach seller profile to start earning. Add your bio,
        coaching background, and upload your first resource. Once your profile
        is complete, coaches can browse your drills and practice plans right
        from your page.
      </p>
      <div style={{ textAlign: "center" }}>
        <a
          href="/upload"
          style={{
            display: "inline-block",
            backgroundColor: "#0d1b2a",
            color: "white",
            fontWeight: 600,
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Build Your Seller Profile
        </a>
      </div>
    </section>
  );
};

export default CreateSellerProfile;
