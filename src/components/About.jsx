import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      {/* LEFT SIDE – TITLE + INTRO */}
      <div className="about-left">
        {/* ABOUT TITLE */}
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          ABOUT ME
        </motion.h1>

        {/* Card UNDER THE TITLE — improved padding */}
        <div className="title-under-card"></div>

        {/* INTRO TEXT */}
        <motion.p
          className="about-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          I'm <span className="highlight-name">Harshita Varma</span> — a BE E&TC
          graduate and a passionate Full-Stack Java Developer. I began my
          development journey in April 2025 and since then I’ve been building
          real-world applications, diving deeper into backend engineering and
          modern UI development. My focus is on scalable backend systems, clean
          REST APIs and smooth, meaningful user experiences.
        </motion.p>
      </div>

      {/* RIGHT SIDE – EDUCATION + SKILLS */}
      <div className="about-right">
        <motion.div
          className="edu-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>🎓 Education</h2>
          <p>
            <strong>BE – Electronics & Telecommunication Engineering</strong>
          </p>
          <p>S.S.V.P.S College of Engineering & Technology</p>
          <p>CGPA — 7.4 (2024)</p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-item">
            <span className="dot"></span>
            <h3>Frontend Development</h3>
            <p>HTML · CSS · JavaScript · React</p>
          </div>
          <div className="timeline-item">
            <span className="dot"></span>
            <h3>Backend & APIs</h3>
            <p>
              Java · Advanced Java · Spring Boot · Hibernate · Servlets · JDBC ·
              REST API
            </p>
          </div>
          <div className="timeline-item">
            <span className="dot"></span>
            <h3>Database</h3>
            <p>MySQL</p>
          </div>
          <div className="timeline-item">
            <span className="dot"></span>
            <h3>Tools & Technologies</h3>
            <p>Git · GitHub · Postman · VS Code</p>
          </div>
        </div>
      </div>
    </section>
  );
}
