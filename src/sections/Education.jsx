import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const education = portfolioData.education || [];

  return (
    <section className="section education-section">
      <div className="section-container">
        <span className="section-eyebrow">ACADEMIC BACKGROUND</span>

        <h1 className="section-title">Education</h1>

        <p className="section-description">
          My academic foundation in computer science and cybersecurity.
        </p>

        <div className="education-timeline">
          {education.map((item, index) => (
            <article
              className="education-card"
              key={`${item.degree}-${item.institution}`}
            >
              <div className="education-marker">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="education-content">
                <div className="education-heading">
                  <div className="education-title-group">
                    <h2 className="education-degree">{item.degree}</h2>

                    <p className="education-institution">
                      {item.institution}
                    </p>
                  </div>

                  <span className="education-period">{item.period}</span>
                </div>

                {item.location && (
                  <p className="education-location">{item.location}</p>
                )}

                {item.cgpa && (
                  <div className="education-score">
                    <span className="education-score-label">
                      ACADEMIC PERFORMANCE
                    </span>

                    <span className="education-score-value">
                      CGPA: {item.cgpa}
                    </span>
                  </div>
                )}

                {item.description && (
                  <p className="education-description">
                    {item.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {education.length === 0 && (
          <p className="education-empty">
            Education details will appear here once they are available.
          </p>
        )}

        <div className="education-footer">
          <span className="education-footer-dot" />

          <p>
            Building on my academic foundation through continuous learning
            and practical experience in application security.
          </p>
        </div>
      </div>
    </section>
  );
}