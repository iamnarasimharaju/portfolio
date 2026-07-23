import { portfolioData } from "../data/portfolioData";

export default function CyberSecurityProjects() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "8rem 2rem 4rem"
      }}
    >
      <h2
        style={{
          fontSize: "2.4rem",
          marginBottom: "2rem",
          textAlign: "center"
        }}
      >
        Cybersecurity Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: "2rem"
        }}
      >
        {portfolioData.cyberProjects.map((project, index) => (
          <div
            key={index}
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1.5rem",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(12px)",
              transition: "0.3s"
            }}
          >
            {/* Title */}

            <div>
              <h3
                style={{
                  fontSize: "1.45rem",
                  marginBottom: "6px"
                }}
              >
                {project.title}
              </h3>

              {project.subtitle && (
                <p
                  style={{
                    color: "#60a5fa",
                    fontWeight: "600"
                  }}
                >
                  {project.subtitle}
                </p>
              )}
            </div>

            {/* Status */}

            {(project.status || project.level) && (
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap"
                }}
              >
                {project.status && (
                  <span
                    style={{
                      background: "#16a34a",
                      color: "#fff",
                      padding: "5px 12px",
                      borderRadius: "20px",
                      fontSize: "0.8rem"
                    }}
                  >
                    ✅ {project.status}
                  </span>
                )}

                {project.level && (
                  <span
                    style={{
                      background: "#2563eb",
                      color: "#fff",
                      padding: "5px 12px",
                      borderRadius: "20px",
                      fontSize: "0.8rem"
                    }}
                  >
                    ⭐ {project.level}
                  </span>
                )}
              </div>
            )}

            {/* Technology Badges */}

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px"
              }}
            >
              {Array.isArray(project.tools)
                ? project.tools.map((tool, i) => (
                    <span
                      key={i}
                      style={{
                        background: "rgba(59,130,246,0.15)",
                        color: "#60a5fa",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        fontWeight: "600"
                      }}
                    >
                      {tool}
                    </span>
                  ))
                : (
                  <span
                    style={{
                      background: "rgba(59,130,246,0.15)",
                      color: "#60a5fa",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "600"
                    }}
                  >
                    {project.tools}
                  </span>
                )}
            </div>

            {/* Screenshot */}

            {project.image && (
              <div
                style={{
                  position: "relative"
                }}
              >
                <img
                  src={`/portfolio/${project.image}`}
                  alt={project.title}
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.08)"
                  }}
                />

                {project.title ===
                  "SOC Log Monitoring & Threat Detection System" && (
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "#ef4444",
                      color: "#fff",
                      padding: "6px 10px",
                      borderRadius: "8px",
                      fontSize: "0.75rem",
                      fontWeight: "600"
                    }}
                  >
                    LIVE ALERTS
                  </span>
                )}
              </div>
            )}

            {/* Description */}

            <p
              style={{
                lineHeight: "1.8"
              }}
            >
              {project.description}
            </p>

            {/* Features */}

            {project.features && (
              <div>
                <h4 style={{ color: "#3b82f6" }}>
                  Key Features
                </h4>

                <ul style={{ paddingLeft: "18px" }}>
                  {project.features.map((feature, i) => (
                    <li key={i}>✔️ {feature}</li>
                  ))}
                </ul>
              </div>
            )}

                        {/* What I Did */}

            {project.whatIDid && (
              <div>
                <h4 style={{ color: "#3b82f6" }}>
                  What I Did
                </h4>

                <ul style={{ paddingLeft: "18px" }}>
                  {project.whatIDid.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: "8px"
                      }}
                    >
                      ✔️ {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Attacks Detected */}

            {project.attacksDetected && (
              <div>
                <h4 style={{ color: "#ef4444" }}>
                  Attacks Detected
                </h4>

                <ul style={{ paddingLeft: "18px" }}>
                  {project.attacksDetected.map((attack, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: "8px"
                      }}
                    >
                      🔴 {attack}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Investigation Workflow */}

            {project.investigationWorkflow && (
              <div>
                <h4 style={{ color: "#22c55e" }}>
                  Investigation Workflow
                </h4>

                <ul style={{ paddingLeft: "18px" }}>
                  {project.investigationWorkflow.map((step, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: "8px"
                      }}
                    >
                      ➜ {step}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Vulnerabilities */}

            {project.vulnerabilities && (
              <div>
                <h4 style={{ color: "#f97316" }}>
                  Vulnerabilities Identified
                </h4>

                <ul style={{ paddingLeft: "18px" }}>
                  {project.vulnerabilities.map((vuln, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: "8px"
                      }}
                    >
                      ⚠️ {vuln}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Highlights */}

            {project.highlights && (
              <div>
                <h4 style={{ color: "#a855f7" }}>
                  Highlights
                </h4>

                <ul style={{ paddingLeft: "18px" }}>
                  {project.highlights.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: "8px"
                      }}
                    >
                      ✔️ {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
                        {/* GitHub & Live Demo Buttons */}

            {(project.github || project.demo) && (
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginTop: "12px"
                }}
              >
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "12px",
                      background: "#111827",
                      color: "#ffffff",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontWeight: "600",
                      transition: "0.3s"
                    }}
                  >
                    💻 View Source Code
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "12px",
                      background: "#2563eb",
                      color: "#ffffff",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontWeight: "600",
                      transition: "0.3s"
                    }}
                  >
                    🚀 Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}