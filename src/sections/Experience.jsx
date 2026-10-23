const experiences = [
  {
    role: "Trainee – Application Security Penetration Tester",
    company: "Excelsoft Technologies",
    location: "Mysuru, India",
    period: "September 2026 – Present",
    current: true,
    description:
      "Working as a trainee in the Application Security team, developing practical skills in web application penetration testing and security assessment.",
    focus: [
      "Application Security",
      "Web Application Penetration Testing",
      "OWASP Top 10",
      "Burp Suite",
    ],
  },
  {
    role: "Junior Software Engineer (Trainee)",
    company: "Stellaris Technologies",
    location: "India",
    period: "Jan 2026 – May 2026",
    current: false,
    description:
      "Software engineering training focused on backend development and secure coding practices.",
    focus: [
      "C# / .NET",
      "Input Validation",
      "Parameterized Queries",
      "Error Handling",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section experience-section">
      <div className="section-container">
        <span className="section-eyebrow">CAREER JOURNEY</span>

        <h1 className="section-title">Experience</h1>

        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <article className="experience-card" key={item.company}>
              <div className="experience-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="experience-content">
                <div className="experience-heading">
                  <div className="experience-title-group">
                    <div className="experience-role-row">
                      <h2>{item.role}</h2>

                      {item.current && (
                        <span className="experience-current-badge">
                          CURRENT ROLE
                        </span>
                      )}
                    </div>

                    <p className="experience-company">
                      {item.company}
                      <span className="experience-separator">·</span>
                      {item.location}
                    </p>
                  </div>

                  <span className="experience-period">
                    {item.period}
                  </span>
                </div>

                <p className="experience-description">
                  {item.description}
                </p>

                <div className="experience-tags">
                  {item.focus.map((skill) => (
                    <span className="experience-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="experience-footer">
          <span className="experience-footer-dot" />

          <p>
            Focused on continuous learning, practical security testing,
            and building a strong foundation in application security.
          </p>
        </div>
      </div>
    </section>
  );
}