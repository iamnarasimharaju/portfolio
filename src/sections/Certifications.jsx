import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  const certifications = portfolioData.certifications || [];

  return (
    <section className="section certifications-section">
      <div className="section-container">
        <span className="section-eyebrow">PROFESSIONAL DEVELOPMENT</span>

        <h1 className="section-title">Certifications</h1>

        <p className="section-description">
          Certifications, training, and learning experiences that support my
          journey in cybersecurity and software engineering.
        </p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <article className="certification-card" key={cert.title || index}>
              <div className="certification-card-header">
                <span className="certification-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="certification-label">
                  CERTIFICATION
                </span>
              </div>

              {cert.image && (
                <a
                  href={cert.file ? `/portfolio/${cert.file}` : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-image-link"
                  aria-label={`View certificate for ${cert.title}`}
                  onClick={(event) => {
                    if (!cert.file) event.preventDefault();
                  }}
                >
                  <div className="certification-image-container">
                    <img
                      src={`/portfolio/${cert.image}`}
                      alt={`${cert.title} certificate`}
                      className="certification-image"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />

                    <span className="certification-image-overlay">
                      View Preview ↗
                    </span>
                  </div>
                </a>
              )}

              <div className="certification-content">
                <h2 className="certification-title">{cert.title}</h2>

                <p className="certification-issuer">
                  <span className="certification-issuer-label">
                    ISSUED BY
                  </span>
                  <span>{cert.issuer}</span>
                </p>

                {cert.description && (
                  <p className="certification-description">
                    {cert.description}
                  </p>
                )}

                <div className="certification-actions">
                  {cert.file ? (
                    <a
                      href={`/portfolio/${cert.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certification-button"
                    >
                      View Certificate
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="certification-unavailable">
                      Certificate file unavailable
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {certifications.length === 0 && (
          <p className="certifications-empty">
            Certifications will appear here once they are available.
          </p>
        )}

        <div className="certifications-footer">
          <span className="certifications-footer-dot" />
          <p>
            Continuously learning and developing practical skills in
            cybersecurity and application security.
          </p>
        </div>
      </div>
    </section>
  );
}