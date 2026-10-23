import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";

const technologies = [
  "Burp Suite",
  "OWASP Top 10",
  "Nmap",
  "SQLmap",
  "Web Security",
  "HTTP",
];

const profile = {
  name: "S B Narasimha Raju",
  role: "Trainee Application Security Penetration Tester",
  company: "Excelsoft Technologies",
  location: "Mysuru, India",
  focus: ["Web Application Pentesting", "OWASP Top 10"],
  tools: ["Burp Suite", "Nmap", "SQLmap"],
  approach: "Test · Validate · Report",
  currently: "Building depth in API security testing",
};

export default function Hero() {
  const github = "https://github.com/iamnarasimharaju";
  const linkedin = "https://linkedin.com/in/narasimharaju1";

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Left: Introduction */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="hero-eyebrow">
            <span className="hero-status-dot" />
            APPLICATION SECURITY &amp; WEB PENETRATION TESTING
          </div>

          <h1 className="hero-title">
            S B Narasimha Raju<span className="hero-title-dot">.</span>
          </h1>

          <h2 className="hero-headline">
            Securing applications.
            <br />
            <span>Thinking like an attacker.</span>
          </h2>

          <p className="hero-description">
            Trainee Application Security Penetration Tester at Excelsoft
            Technologies, Mysuru. Focused on web application security,
            vulnerability assessment, and hands-on penetration testing. I test
            applications, validate security weaknesses, and document findings
            to support stronger application security.
          </p>

          {/* Areas of focus */}
          <div className="hero-tags" aria-label="Areas of focus">
            {[
              "Web Application Pentesting",
              "Burp Suite",
              "OWASP Top 10",
              "VAPT",
            ].map((tag) => (
              <span className="hero-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="hero-actions">
            <Link to="/cyber" className="hero-button hero-button-primary">
              View Projects <span aria-hidden="true">↗</span>
            </Link>

            <a
              href={github}
              className="hero-button hero-button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>

            <a
              href={linkedin}
              className="hero-button hero-button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Bottom note */}
          <div className="hero-bottom-note">
            <span className="hero-bottom-line" />
            <span>SECURITY-MINDED. ALWAYS LEARNING.</span>
          </div>
        </motion.div>

        {/* Right: Technical profile */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <div className="hero-profile-card">
            {/* Window header */}
            <div className="hero-profile-header">
              <div className="hero-window-controls" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <span className="hero-profile-filename">
                security-profile.json
              </span>

              <span className="hero-profile-indicator">JSON</span>
            </div>

            {/* JSON-style profile */}
            <div className="hero-profile-body">
              <div className="hero-code-line">
                <span className="hero-line-number">01</span>
                <span className="hero-code-brace">{"{"}</span>
              </div>

              <div className="hero-code-line">
                <span className="hero-line-number">02</span>
                <span className="hero-code-indent">
                  <span className="hero-code-key">"name"</span>
                  <span className="hero-code-colon">: </span>
                  <span className="hero-code-string">
                    "{profile.name}"
                  </span>
                  <span className="hero-code-comma">,</span>
                </span>
              </div>

              <div className="hero-code-line">
                <span className="hero-line-number">03</span>
                <span className="hero-code-indent">
                  <span className="hero-code-key">"role"</span>
                  <span className="hero-code-colon">: </span>
                  <span className="hero-code-string">
                    "Trainee AppSec Pentester"
                  </span>
                  <span className="hero-code-comma">,</span>
                </span>
              </div>

              <div className="hero-code-line">
                <span className="hero-line-number">04</span>
                <span className="hero-code-indent">
                  <span className="hero-code-key">"company"</span>
                  <span className="hero-code-colon">: </span>
                  <span className="hero-code-string">
                    "{profile.company}"
                  </span>
                  <span className="hero-code-comma">,</span>
                </span>
              </div>

              <div className="hero-code-line">
                <span className="hero-line-number">05</span>
                <span className="hero-code-indent">
                  <span className="hero-code-key">"location"</span>
                  <span className="hero-code-colon">: </span>
                  <span className="hero-code-string">
                    "{profile.location}"
                  </span>
                  <span className="hero-code-comma">,</span>
                </span>
              </div>

              <div className="hero-code-line">
                <span className="hero-line-number">06</span>
                <span className="hero-code-indent">
                  <span className="hero-code-key">"focus"</span>
                  <span className="hero-code-colon">: [</span>
                </span>
              </div>

              {profile.focus.map((item, index) => (
                <div className="hero-code-line" key={item}>
                  <span className="hero-line-number">
                    {String(7 + index).padStart(2, "0")}
                  </span>

                  <span className="hero-code-indent hero-code-array-item">
                    <span className="hero-code-string">"{item}"</span>

                    {index < profile.focus.length - 1 && (
                      <span className="hero-code-comma">,</span>
                    )}
                  </span>
                </div>
              ))}

              <div className="hero-code-line">
                <span className="hero-line-number">09</span>
                <span className="hero-code-indent">
                  <span className="hero-code-brace">],</span>
                </span>
              </div>

              <div className="hero-code-line">
                <span className="hero-line-number">10</span>
                <span className="hero-code-indent">
                  <span className="hero-code-key">"approach"</span>
                  <span className="hero-code-colon">: </span>
                  <span className="hero-code-string">
                    "{profile.approach}"
                  </span>
                </span>
              </div>

              <div className="hero-code-line">
                <span className="hero-line-number">11</span>
                <span className="hero-code-brace">{"}"}</span>
              </div>
            </div>

            {/* Tools and technologies */}
            <div className="hero-tools-panel">
              <div className="hero-tools-heading">
                <span className="hero-status-dot" />
                TOOLS &amp; TECHNOLOGIES
              </div>

              <div className="hero-tools-list">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            {/* Current learning */}
            <div className="hero-currently">
              <span className="hero-currently-label">CURRENTLY</span>
              <p>{profile.currently}</p>
            </div>
          </div>

          {/* Caption */}
          <div className="hero-visual-caption">
            <span>APPLICATION SECURITY</span>
            <span>·</span>
            <span>CONTINUOUS LEARNING</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll to professional highlights */}
      <a
        href="#professional-highlights"
        className="hero-scroll-link"
        onClick={(event) => {
          event.preventDefault();

          document
            .getElementById("professional-highlights")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
        }}
      >
        <span className="hero-scroll-indicator" />
        <span>PROFESSIONAL HIGHLIGHTS</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}