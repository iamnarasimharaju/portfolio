import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/cyber" },
  { label: "Skills", to: "/skills" },
  { label: "Research", to: "/research" },
  { label: "Certifications", to: "/certifications" },
  { label: "Education", to: "/education" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link
          to="/"
          className="navbar-brand"
          aria-label="Go to homepage"
        >
          <span className="navbar-brand-name">
            S B NARASIMHA RAJU
          </span>

          <span className="navbar-brand-role">
            APPLICATION SECURITY
          </span>
        </Link>

        <div className="navbar-links">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `navbar-link${isActive ? " active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar-actions">
          <ThemeToggle />

          <a
            href="/portfolio/RESUME.pdf"
            className="navbar-resume"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume PDF in a new tab"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}