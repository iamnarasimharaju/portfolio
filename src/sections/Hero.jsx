import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        minHeight: "100vh",
        padding: "8rem 2rem 4rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      {/* NAME */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "700"
        }}
      >
        {hero.name}
      </h1>

      {/* ROLE */}
      <h2
        style={{
          marginTop: "0.5rem",
          color: "var(--primary)",
          fontWeight: "600"
        }}
      >
        {hero.role}
      </h2>

      {/* SUMMARY — FIXED FOR BOTH MODES */}
      <p
        className="text-muted"
        style={{
          maxWidth: "700px",
          marginTop: "1.2rem",
          fontSize: "1.05rem",
          lineHeight: "1.6"
        }}
      >
        {hero.summary}
      </p>

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "2.2rem",
          flexWrap: "wrap"
        }}
      >
        <a
          href={hero.links.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          GitHub
        </a>

        <a
          href={hero.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
        >
          LinkedIn
        </a>

        <a
          href={hero.links.cyberResume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          Resume
</a>
      </div>
    </motion.section>
  );
}
