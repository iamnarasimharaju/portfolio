import { motion } from "framer-motion";
import "./ProofStrip.css";

const achievements = [
  {
    value: "02",
    label: "Security Tools Built",
  },
  {
    value: "05+",
    label: "Lab Findings Documented",
  },
  {
    value: "IEEE",
    label: "Published Research",
  },
  {
    value: "MCA",
    label: "Cybersecurity",
  },
];

export default function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Professional highlights">
      <div className="proof-strip-container">
        {achievements.map((item, index) => (
          <motion.div
            className="proof-item"
            key={item.value}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <span className="proof-value">{item.value}</span>
            <span className="proof-label">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}