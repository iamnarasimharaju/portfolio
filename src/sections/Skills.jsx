const skillGroups = [
  {
    number: "01",
    title: "Application Security",
    subtitle: "CORE FOCUS",
    description: "Web application security testing and vulnerability assessment.",
    skills: [
      "Web Application Penetration Testing",
      "OWASP Top 10",
      "SQL Injection",
      "Cross-Site Scripting (XSS)",
      "Authentication & Session Testing",
      "Security Misconfiguration",
      "CVSS Scoring",
      "Vulnerability Assessment",
    ],
  },
  {
    number: "02",
    title: "Penetration Testing Tools",
    subtitle: "SECURITY TOOLKIT",
    description: "Tools for intercepting requests, reconnaissance, and testing.",
    skills: [
      "Burp Suite",
      "Nmap",
      "SQLmap",
      "Metasploit",
      "DVWA",
      "Nessus",
    ],
  },
  {
    number: "03",
    title: "Security Analysis & Networking",
    subtitle: "DETECTION AND ANALYSIS",
    description: "Network fundamentals, traffic analysis, and security monitoring.",
    skills: [
      "Wireshark",
      "Splunk",
      "ELK Stack",
      "SIEM Fundamentals",
      "Log Analysis",
      "TCP/IP",
      "DNS",
      "MITRE ATT&CK Fundamentals",
    ],
  },
  {
    number: "04",
    title: "Programming & Development",
    subtitle: "TECHNICAL FOUNDATION",
    description: "Languages and technologies used in development projects.",
    skills: [
      "Python",
      "JavaScript",
      "SQL",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
    ],
  },
  {
    number: "05",
    title: "Security Reporting",
    subtitle: "DOCUMENTATION",
    description: "Organizing findings and communicating security risks clearly.",
    skills: [
      "Vulnerability Documentation",
      "CVSS Severity Assessment",
      "OWASP Mapping",
      "Remediation Recommendations",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section skills-section">
      <div className="section-container">
        <span className="section-eyebrow">TECHNICAL CAPABILITIES</span>

        <h1 className="section-title">Skills</h1>

        <p className="section-description">
          What I use, and where I've used it.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skills-card" key={group.number}>
              <div className="skills-card-top">
                <span className="skills-number">{group.number}</span>
                <span className="skills-subtitle">{group.subtitle}</span>
              </div>

              <h2 className="skills-card-title">{group.title}</h2>

              <p className="skills-card-description">
                {group.description}
              </p>

              <div className="skills-tags">
                {group.skills.map((skill) => (
                  <span className="skills-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-note">
          <span className="skills-note-indicator" aria-hidden="true" />
          <p>
            Currently focused on strengthening my practical web application
            penetration testing skills and deepening my understanding of
            application security.
          </p>
        </div>
      </div>
    </section>
  );
}