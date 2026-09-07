import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "8rem 2rem 4rem"
      }}
    >
      <h2
        style={{
          fontSize: "2.3rem",
          marginBottom: "2rem"
        }}
      >
        Certifications
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}
      >
        {portfolioData.certifications.map((cert, index) => (
          <div
            key={index}
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease",
              cursor: "default"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Certificate Image */}
            {cert.image && (
              <a
                href={`/portfolio/${cert.file}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block"
                }}
              >
                <img
                  src={`/portfolio/${cert.image}`}
                  alt={cert.title}
                  style={{
                    width: "100%",
                    height: "270px",
                    objectFit: "contain",
                    borderRadius: "10px",
                    marginBottom: "1rem",
                    display: "block"
                  }}
                  onError={(e) => {
                    console.error(
                      `Certificate image failed to load: /portfolio/${cert.image}`
                    );
                    e.currentTarget.style.display = "none";
                  }}
                />
              </a>
            )}

            {/* Title */}
            <h3
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.4",
                marginBottom: "0.4rem"
              }}
            >
              {cert.title}
            </h3>

            {/* Issuer */}
            <p
              style={{
                opacity: 0.8,
                marginBottom: "0.8rem"
              }}
            >
              <strong>Issuer:</strong> {cert.issuer}
            </p>

            {/* Description */}
            <p
              style={{
                lineHeight: "1.6",
                opacity: 0.9,
                flexGrow: 1
              }}
            >
              {cert.description}
            </p>

            {/* View Certificate */}
            <a
              href={`/portfolio/${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                marginTop: "1rem",
                display: "inline-block",
                textAlign: "center",
                textDecoration: "none",
                width: "fit-content"
              }}
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}