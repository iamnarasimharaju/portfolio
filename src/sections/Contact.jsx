const contactDetails = [
  {
    number: "01",
    label: "EMAIL",
    value: "rajusbnarasimha@gmail.com",
    href: "mailto:rajusbnarasimha@gmail.com",
    action: "Send an email",
    icon: "✉",
  },
  {
    number: "02",
    label: "LINKEDIN",
    value: "linkedin.com/in/iamnarasimharaju",
    href: "https://linkedin.com/in/iamnarasimharaju",
    action: "Connect with me",
    icon: "in",
  },
  {
    number: "03",
    label: "GITHUB",
    value: "github.com/iamnarasimharaju",
    href: "https://github.com/iamnarasimharaju",
    action: "Explore my projects",
    icon: "</>",
  },
];

export default function Contact() {
  return (
    <section className="section contact-section">
      <div className="section-container">
        <span className="section-eyebrow">GET IN TOUCH</span>

        <h1 className="section-title">Contact</h1>

        <p className="section-description">
          Working on application security or VAPT? I'd like to hear about it.
        </p>

        <div className="contact-intro">
          <div className="contact-status">
            <span className="contact-status-dot" />
            <span>OPEN TO PROFESSIONAL CONNECTIONS</span>
          </div>

          <h2>
            Let's talk <span>security.</span>
          </h2>

          <p>
            I'm a Trainee Application Security Penetration Tester interested
            in web application security, vulnerability assessment, and
            penetration testing. Feel free to reach out to discuss security,
            projects, or professional opportunities.
          </p>

          <a
            href="mailto:rajusbnarasimha@gmail.com"
            className="contact-primary-button"
          >
            Get in touch
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="contact-grid">
          {contactDetails.map((item) => (
            <article className="contact-card" key={item.number}>
              <div className="contact-card-header">
                <span className="contact-card-number">{item.number}</span>

                <span className="contact-card-icon" aria-hidden="true">
                  {item.icon}
                </span>
              </div>

              <span className="contact-card-label">{item.label}</span>

              <a
                href={item.href}
                target={item.label === "EMAIL" ? undefined : "_blank"}
                rel={
                  item.label === "EMAIL"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="contact-card-value"
              >
                {item.value}
              </a>

              <a
                href={item.href}
                target={item.label === "EMAIL" ? undefined : "_blank"}
                rel={
                  item.label === "EMAIL"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="contact-card-action"
              >
                {item.action}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="contact-bottom">
          <div className="contact-location">
            <span className="contact-location-icon" aria-hidden="true">
              ⌖
            </span>

            <div>
              <span className="contact-bottom-label">LOCATION</span>
              <p>Mysuru, Karnataka, India</p>
            </div>
          </div>

          <a
            href="/portfolio/RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-resume-button"
          >
            View Resume
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <footer className="contact-footer">
          <p>© 2026 S B Narasimha Raju</p>
          <p>Application Security · Web Penetration Testing</p>
        </footer>
      </div>
    </section>
  );
}