import { motion } from "framer-motion";
import "./FeaturedProjects.css";

const projects = [
  {
    number: "01",
    category: "WEB SECURITY TOOL",
    title: "ThreatLens",
    description:
      "A web security analysis platform designed to help assess website security through checks such as security headers, SSL/TLS, DNS, and cookie configurations.",
    image: "/portfolio/threatlens.png",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    status: "LIVE PROJECT",
    demo: "https://threat-lens-black.vercel.app",
    github: "https://github.com/iamnarasimharaju/ThreatLens",
    featured: true,
  },
  {
    number: "02",
    category: "WEB APPLICATION PENTESTING",
    title: "DVWA Security Assessment",
    description:
      "A hands-on web application security testing lab focused on understanding and validating vulnerabilities such as SQL injection, cross-site scripting, and security misconfigurations.",
    image: null,
    technologies: ["Burp Suite", "SQLmap", "Nmap", "DVWA"],
    status: "PRACTICE LAB",
    demo: null,
    github: null,
    featured: false,
  },
  {
    number: "03",
    category: "PASSWORD SECURITY",
    title: "PasswordGuard Pro",
    description:
      "A password security suite featuring password strength analysis, secure password generation, password auditing, and additional tools to support better password security.",
    image: "/portfolio/passwordguard-pro.png",
    technologies: ["React", "JavaScript", "zxcvbn", "jsPDF"],
    status: "LIVE PROJECT",
    demo: "https://password-guard-pro.vercel.app",
    github: "https://github.com/iamnarasimharaju/PasswordGuard-Pro",
    featured: false,
  },
];

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div className="featured-project-visual">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
        />

        <span className="project-visual-number">{project.number}</span>

        <span className="project-visual-status">{project.status}</span>
      </div>
    );
  }

  return (
    <div className="featured-project-visual project-lab-visual">
      <div className="lab-visual-content">
        <span className="lab-terminal-label">SECURITY ASSESSMENT</span>

        <div className="lab-terminal-window">
          <div className="lab-terminal-header">
            <span />
            <span />
            <span />
            <p>pentest-lab</p>
          </div>

          <div className="lab-terminal-body">
            <p>
              <span className="terminal-prompt">$</span> inspect application
            </p>
            <p>
              <span className="terminal-success">✓</span> Map attack surface
            </p>
            <p>
              <span className="terminal-success">✓</span> Test input handling
            </p>
            <p>
              <span className="terminal-success">✓</span> Validate findings
            </p>
            <p className="terminal-cursor">_</p>
          </div>
        </div>
      </div>

      <span className="project-visual-number">{project.number}</span>
      <span className="project-visual-status">{project.status}</span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`featured-project-card ${
        project.featured ? "featured-project-primary" : ""
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <ProjectVisual project={project} />

      <div className="featured-project-content">
        <div className="featured-project-category">
          <span className="category-indicator" />
          {project.category}
        </div>

        <h3>{project.title}</h3>

        <p className="featured-project-description">
          {project.description}
        </p>

        <div className="featured-project-tech">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="featured-project-actions">
          {project.demo && (
            <a
              className="project-action-primary"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <span aria-hidden="true">↗</span>
            </a>
          )}

          {project.github && (
            <a
              className="project-action-secondary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          )}

          {!project.demo && !project.github && (
            <span className="project-lab-note">
              Hands-on security lab
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function FeaturedProjects() {
  return (
    <section className="featured-projects-section" id="featured-projects">
      <div className="featured-projects-container">
        <motion.div
          className="featured-projects-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-eyebrow">
            <span className="heading-indicator" />
            SELECTED WORK
          </span>

          <h2>
            Security in <span>practice.</span>
          </h2>

          <p>
            Security tools I've built and hands-on testing projects that
            demonstrate my approach to understanding, testing, and improving
            application security.
          </p>
        </motion.div>

        <div className="featured-projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="featured-projects-footer">
          <span>BUILD. TEST. LEARN. REPEAT.</span>
          <a
            href="https://github.com/iamnarasimharaju"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore more on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}