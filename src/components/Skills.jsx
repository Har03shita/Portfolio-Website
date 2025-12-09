import React from "react";
import "./Skills.css";

// Update the logo paths once you add the images in /assets/skills
const skills = [
  { name: "Java", logo: "/assets/skills/java.svg" },
  { name: "Spring Boot", logo: "/assets/skills/springboot.svg" },
  { name: "Hibernate", logo: "/assets/skills/hibernate.svg" },
  { name: "MySQL", logo: "/assets/skills/mysql.svg" },
  { name: "PostgreSQL", logo: "/assets/skills/postgresql.svg" },
  { name: "MongoDB", logo: "/assets/skills/mongodb.svg" },
  { name: "JavaScript", logo: "/assets/skills/javascript.svg" },
  { name: "React", logo: "/assets/skills/react.svg" },
  { name: "Tailwind CSS", logo: "/assets/skills/tailwind.svg" },
  { name: "Docker", logo: "/assets/skills/docker.svg" },
  { name: "RabbitMQ", logo: "/assets/skills/rabbitmq.svg" },
  { name: "Keycloak", logo: "/assets/skills/keycloak.svg" },
  { name: "Postman", logo: "/assets/skills/postman.svg" },
];

export default function Skills() {
  // Duplicate array so the animation can loop smoothly
  const loopSkills = [...skills, ...skills];

  return (
    <section className="skills-section">
      <div className="skills-inner">
        <h2 className="skills-heading">Skills &amp; Technologies</h2>

        <div className="skills-marquee">
          <div className="skills-track">
            {loopSkills.map((skill, index) => (
              <div className="skill-pill" key={index}>
                <div className="skill-logo">
                  <img src={skill.logo} alt={skill.name} loading="lazy" />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
