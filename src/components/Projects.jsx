import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./Projects.css";

// 🔹 BANK IMAGES (carousel)
import bank1 from "../assets/projects/bank1.jpg";
import bank2 from "../assets/projects/bank2.jpg";
import bank3 from "../assets/projects/bank3.jpg";
import bank4 from "../assets/projects/bank4.jpg";
import bank5 from "../assets/projects/bank5.jpg";

// 🔹 FITNESS images
import fitnessThumbnail from "../assets/projects/fitness.jpg";
import fitness1 from "../assets/projects/fitness1.jpg";
import fitness2 from "../assets/projects/fitness2.jpg";
import fitness3 from "../assets/projects/fitness3.jpg";
import fitness4 from "../assets/projects/fitness4.jpg";
import fitness5 from "../assets/projects/fitness5.jpg";

const projects = [
  {
    id: 1,
    title: "Fitness Microservices Backend",
    stack:
      "Spring Boot • Microservices • MongoDB / SQL • Keycloak • RabbitMQ • Docker",
    summary:
      "Distributed backend with secure login, async RabbitMQ messaging & Eureka service discovery.",
    details:
      "A distributed backend built using multiple Spring Boot microservices communicating asynchronously with RabbitMQ. User, Activity & AI services run on separate databases (SQL + MongoDB). Authentication and token management are handled using Keycloak, while Eureka enables service registry and load balancing. Docker ensures easy deployment across environments.",
    github: "https://github.com/Har03shita/FitTrack-AI",
    watch:
      "https://drive.google.com/file/d/1Gb6WV0Zqon-uij1HlNyPjv6b1pW9gTMF/view",
    download:
      "https://drive.google.com/uc?export=download&id=1Gb6WV0Zqon-uij1HlNyPjv6b1pW9gTMF",
    thumbnail: fitnessThumbnail,
    gallery: [fitness1, fitness2, fitness3, fitness4, fitness5],
  },
  {
    id: 2,
    title: "Bank Management System",
    stack: "Java • Spring Boot • MySQL • React",
    summary:
      "A banking system with login, deposits, withdrawals, transfers & transaction history.",
    details:
      "The system enables users to sign up, log in, deposit, withdraw, transfer money and view transaction history. Authentication is implemented using Spring Security. Transactions are logged securely and displayed on the UI in real time. Account balance updates instantly after each transaction.",
    github: "https://github.com/Har03shita/Banking-Project",
    watch:
      "https://drive.google.com/file/d/1ZLnhwfMVrvmIovPzebyS6PGkR-f2QrJq/view",
    download:
      "https://drive.google.com/uc?export=download&id=1ZLnhwfMVrvmIovPzebyS6PGkR-f2QrJq",
    thumbnail: bank1,
    gallery: [bank1, bank2, bank3, bank4, bank5],
  },
];

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    emblaApi && emblaApi.reInit();
  }, [emblaApi, openProject]);

  return (
    <section id="projects" className="timeline-wrapper">
      <h2 className="timeline-heading">Projects</h2>

      <div className="timeline">
        {projects.map((p, index) => (
          <div
            key={p.id}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            } fade-in`}
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              className="timeline-image"
              onClick={() => setOpenProject(p)}
            />

            <div className="timeline-content">
              <h3 className="timeline-title" onClick={() => setOpenProject(p)}>
                {p.title}
              </h3>
              <p className="timeline-stack">{p.stack}</p>
              <p className="timeline-summary">{p.summary}</p>

              <button
                className="open-popup-btn"
                style={{
                  background: "#ffffff",
                  color: "#2d1b17",
                  fontWeight: "600",
                  borderRadius: "12px",
                  padding: "10px 20px",
                }}
                onClick={() => setOpenProject(p)}
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {openProject && (
        <div className="popup-overlay" onClick={() => setOpenProject(null)}>
          <div
            className="popup-card slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="popup-close"
              onClick={() => setOpenProject(null)}
            >
              ✕
            </button>

            <div className="embla mb-6">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {openProject.gallery.map((img, i) => (
                    <div className="embla__slide" key={i}>
                      <img src={img} className="popup-img" />
                    </div>
                  ))}
                </div>
              </div>

              <button className="embla__prev" onClick={scrollPrev}>
                ←
              </button>
              <button className="embla__next" onClick={scrollNext}>
                →
              </button>
            </div>

            <h3 className="popup-title">{openProject.title}</h3>
            <p className="popup-details">{openProject.details}</p>

            <div className="popup-actions">
              <a href={openProject.github} target="_blank" rel="noreferrer">
                <button className="git-btn">🔗 GitHub</button>
              </a>

              <a href={openProject.watch} target="_blank" rel="noreferrer">
                <button className="watch-btn">▶ Watch Demo</button>
              </a>

              <a href={openProject.download}>
                <button className="download-btn">⬇ Download</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
