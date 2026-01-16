import { useEffect, useRef, useState } from "react"
import "../style/projects.css"

import { Link } from "react-router-dom"

export default function Projects() {
    const projectsRef = useRef(null)
  const [showProjects, setShowProjects] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowProjects(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])
  return (

  <section
    ref={projectsRef}
    className={`projects-page ${showProjects ? "show" : ""}`}
  >

    <h1 className="projects-title">My Projects</h1>
    <p className="projects-subtitle">
  Some things I’ve built while learning & having fun 
</p>

    <div className="projects-grid">

      {[
        {
          title: "Weather App",
          desc: "A responsive weather app using real-time API data.",
          stack: ["React", "API", "CSS"]
        },
        {
          title: "Portfolio Website",
          desc: "Personal portfolio with comic-style animations.",
          stack: ["React", "CSS", "Animations"]
        },
        {
          title: "E-commerce UI",
          desc: "Frontend UI for an online shopping platform.",
          stack: ["React", "Context API", "CSS"]
        },
        {
          title: "ML Price Predictor",
          desc: "Machine learning model to predict prices.",
          stack: ["Python", "ML", "Pandas"]
        },
        {
          title: "Blog Platform",
          desc: "A simple blog website with authentication.",
          stack: ["React", "Node", "MongoDB"]
        },
        {
          title: "Task Manager",
          desc: "Task management app with CRUD operations.",
          stack: ["React", "Express", "MongoDB"]
        }
      ].map((project, i) => (
        <div className="project-card" key={i}>
          <h3>{project.title}</h3>
          <p>{project.desc}</p>

          <div className="tech-stack">
            {project.stack.map((tech, idx) => (
              <span key={idx}>{tech}</span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="project-buttons">
            <a href="#" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Live
            </a>
          </div>
        </div>
      ))}

    </div>

  <div className="projects-cta">
  <h2>Liked my work?</h2>
  <Link to="/contact" className="connect-link">
    Let’s connect and build something amazing ✨
  </Link>
</div>

  </section>
)


 
 
  
}
