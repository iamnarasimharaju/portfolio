import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import ProofStrip from "./sections/ProofStrip";

import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import SoftwareProjects from "./sections/SoftwareProjects";
import CyberSecurityProjects from "./sections/CyberSecurityProjects";
import Research from "./sections/Research";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

import "./styles/theme.css";

/* Scroll management */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = decodeURIComponent(hash.slice(1));

      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash]);

  return null;
}

/* Shared page layout */
function PageLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">{children}</main>
    </>
  );
}

/* Homepage — no project cards */
function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
    </>
  );
}

/* Not found page */
function NotFound() {
  return (
    <section
      className="not-found"
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <span className="section-eyebrow">ERROR 404</span>

      <h1
        style={{
          fontSize: "clamp(3rem, 8vw, 6rem)",
          margin: "20px 0",
        }}
      >
        Page not found.
      </h1>

      <p style={{ marginBottom: "28px" }}>
        The page you're looking for doesn't exist or may have moved.
      </p>

      <Link to="/" className="button button-primary">
        Return Home
      </Link>
    </section>
  );
}

/* Application routes */
export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <PageLayout>
              <HomePage />
            </PageLayout>
          }
        />

        {/* Experience */}
        <Route
          path="/experience"
          element={
            <PageLayout>
              <Experience />
            </PageLayout>
          }
        />

        {/* Skills */}
        <Route
          path="/skills"
          element={
            <PageLayout>
              <Skills />
            </PageLayout>
          }
        />

        {/* Education */}
        <Route
          path="/education"
          element={
            <PageLayout>
              <Education />
            </PageLayout>
          }
        />

        {/* Software Projects — retained for existing links */}
        <Route
          path="/software"
          element={
            <PageLayout>
              <SoftwareProjects />
            </PageLayout>
          }
        />

        {/* Cybersecurity Projects */}
        <Route
          path="/cyber"
          element={
            <PageLayout>
              <CyberSecurityProjects />
            </PageLayout>
          }
        />

        {/* Research */}
        <Route
          path="/research"
          element={
            <PageLayout>
              <Research />
            </PageLayout>
          }
        />

        {/* Certifications */}
        <Route
          path="/certifications"
          element={
            <PageLayout>
              <Certifications />
            </PageLayout>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <PageLayout>
              <Contact />
            </PageLayout>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <PageLayout>
              <NotFound />
            </PageLayout>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}