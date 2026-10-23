import { portfolioData } from "../data/portfolioData";

const PROJECT_ORDER = [
  "ThreatLens",
  "PasswordGuard Pro",
  "Web Application Penetration Testing (DVWA Lab)",
  "SOC Log Monitoring & Threat Detection System",
];

function formatTools(tools) {
  if (Array.isArray(tools)) {
    return tools;
  }

  if (typeof tools === "string" && tools.trim()) {
    return tools.split(",").map((tool) => tool.trim());
  }

  return [];
}

function getProjectDetails(project) {
  if (project.title === "ThreatLens") {
    return {
      label: "WEB SECURITY PLATFORM",
      icon: "01",
    };
  }

  if (project.title === "PasswordGuard Pro") {
    return {
      label: "PASSWORD SECURITY",
      icon: "02",
    };
  }

  if (project.title.includes("DVWA")) {
    return {
      label: "WEB APPLICATION PENTESTING",
      icon: "03",
    };
  }

  return {
    label: "SECURITY OPERATIONS",
    icon: "04",
  };
}

function ProjectLinks({ project }) {
  if (!project.github && !project.demo) {
    return null;
  }

  return (
    <div className="cyber-project-links">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="cyber-project-link cyber-project-link-secondary"
          aria-label={`View ${project.title} source code on GitHub`}
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      )}

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="cyber-project-link cyber-project-link-primary"
          aria-label={`Open ${project.title} live demo`}
        >
          Live Demo <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const details = getProjectDetails(project);
  const tools = formatTools(project.tools);

  const keyPoints =
    project.features ||
    project.vulnerabilities ||
    project.whatIDid ||
    project.highlights ||
    [];

  return (
    <article className="cyber-project-card">
      <div className="cyber-project-card-header">
        <span className="cyber-project-number">
          {details.icon || String(index + 1).padStart(2, "0")}
        </span>

        <span className="cyber-project-category">{details.label}</span>

        {project.status && (
          <span className="cyber-project-status">{project.status}</span>
        )}
      </div>

      {project.image && (
        <div className="cyber-project-image-wrapper">
          <img
            src={`/portfolio/${project.image}`}
            alt={`${project.title} project preview`}
            className="cyber-project-image"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>
      )}

      <div className="cyber-project-content">
        <h2 className="cyber-project-title">{project.title}</h2>

        {project.subtitle && (
          <p className="cyber-project-subtitle">{project.subtitle}</p>
        )}

        <p className="cyber-project-description">{project.description}</p>

        {tools.length > 0 && (
          <div className="cyber-project-tools-section">
            <h3 className="cyber-project-small-heading">
              TECHNOLOGIES & TOOLS
            </h3>

            <div className="cyber-project-tools">
              {tools.map((tool) => (
                <span className="cyber-project-tool" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {keyPoints.length > 0 && (
          <div className="cyber-project-details-section">
            <h3 className="cyber-project-small-heading">
              {project.vulnerabilities
                ? "VULNERABILITIES TESTED"
                : project.whatIDid
                  ? "WHAT I DID"
                  : project.highlights
                    ? "KEY HIGHLIGHTS"
                    : "KEY FEATURES"}
            </h3>

            <ul className="cyber-project-feature-list">
              {keyPoints.map((point) => (
                <li key={point}>
                  <span className="cyber-project-check" aria-hidden="true">
                    ↗
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.attacksDetected?.length > 0 && (
          <div className="cyber-project-details-section">
            <h3 className="cyber-project-small-heading">
              ATTACK PATTERNS INVESTIGATED
            </h3>

            <div className="cyber-project-tools">
              {project.attacksDetected.map((attack) => (
                <span className="cyber-project-tool" key={attack}>
                  {attack}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.investigationWorkflow?.length > 0 && (
          <details className="cyber-project-workflow">
            <summary>View investigation workflow</summary>

            <ol>
              {project.investigationWorkflow.map((step, stepIndex) => (
                <li key={`${stepIndex}-${step}`}>{step}</li>
              ))}
            </ol>
          </details>
        )}

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default function CyberSecurityProjects() {
  const allProjects = portfolioData.cyberProjects || [];

  // Only show the four selected projects.
  // Identity & Access Management simulation is intentionally excluded.
  const projects = PROJECT_ORDER.map((title) =>
    allProjects.find((project) => project.title === title)
  ).filter(Boolean);

  return (
    <section className="section cyber-projects-section">
      <div className="section-container">
        <span className="section-eyebrow">SECURITY ENGINEERING</span>

        <h1 className="section-title">Cybersecurity Projects</h1>

        <p className="section-description">
          Security tools, web application testing, and hands-on projects
          focused on identifying risks and understanding security weaknesses.
        </p>

        <div className="cyber-projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {projects.length === 0 && (
          <p className="cyber-projects-empty">
            Projects will appear here once they are available.
          </p>
        )}
      </div>
    </section>
  );
}