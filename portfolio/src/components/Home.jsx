import "../style/home.css"
import face from "../assets/p2.png"
import { useEffect, useRef, useState } from "react"


const letters = [
  { char: "P", x: -265, y: 20,  r: -20, s: 2.8 },
  { char: "o", x: -165, y: 40, r: -6,  s: 2.2 },
  { char: "R", x: -110,  y: -40, r: 18,   s: 1.8 },
  { char: "t", x: 0,    y: -80, r: -6,   s: 2.7 },
  { char: "f", x: 85,   y: -40, r: 5,  s: 2 },
  { char: "O", x: 140,  y: 10, r: 8,   s: 1.7 },
  { char: "l", x: 230,  y: -40,  r: -12,  s: 2 },
  { char: "i", x: 290,  y: 10,  r: 10,  s: 1.25 },
  { char: "o", x: 310,  y: -70, r: 18,  s: 1.3 },
]

export default function Home() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200)
  }, [])
 const skillsRef = useRef(null)
const [showSkills, setShowSkills] = useState(false)
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowSkills(true)
        observer.unobserve(entry.target)
      }
    },
    {
      threshold: 0.25,
      rootMargin: "0px 0px -100px 0px",
    }
  )

  if (skillsRef.current) {
    observer.observe(skillsRef.current)
  }

  return () => observer.disconnect()
}, [])




  return (
    <>
    <section className="home">

    <div className="comic-title">

  {/* LETTERS */}
  {letters.map((l, i) => (
    <div
      key={i}
      className={`letter-group ${animate ? "fly-in" : ""}`}
      style={{
        "--x": `${l.x}px`,
        "--y": `${l.y}px`,
        "--r": `${l.r}deg`,
        "--s": l.s,
        "--delay": `${i * 0.08}s`
      }}
    >
      <span className="comic-letter">{l.char}</span>
    </div>
  ))}

  {/* 👇 PALAK — MANUAL, SEPARATE */}
  <div className="palak-manual">
    PALAK
  </div>
   <div className="year-manual">
   '26
  </div>

</div>


      <img src={face} alt="Palak" className="home-image" />
      <div className="home-buttons">
    <a href="/resume.pdf" download className="comic-btn resume-btn">
      Resume ⬇️
    </a>

    <a href="/about" className="comic-btn know-btn">
      Know Me More 👉
    </a>
  </div>
    </section>
     <section     ref={skillsRef}
  className={`skills-section ${showSkills ? "show" : ""}`}>
        <h1 className="skills-title">My Skills</h1>
        <p className="skills-subtitle">
 Hey, here’s what I’m good at
</p>

      <div className="skills-grid">

  <div className="skill-card">
    <i className="devicon-html5-plain"></i>
    <span>HTML</span>
  </div>

  <div className="skill-card">
    <i className="devicon-css3-plain"></i>
    <span>CSS</span>
  </div>

  <div className="skill-card">
    <i className="devicon-javascript-plain"></i>
    <span>JavaScript</span>
  </div>

  <div className="skill-card">
    <i className="devicon-react-original"></i>
    <span>React</span>
  </div>

  <div className="skill-card">
    <i className="devicon-python-plain"></i>
    <span>Python</span>
  </div>

  <div className="skill-card">
    <i className="devicon-cplusplus-plain"></i>
    <span>C++</span>
  </div>

  <div className="skill-card">
    <i className="devicon-git-plain"></i>
    <span>Git</span>
  </div>

  <div className="skill-card">
    <i className="devicon-mysql-plain"></i>
    <span>SQL</span>
    
  </div>
<div className="skill-card">
  <i className="devicon-nodejs-plain"></i>
  <span>Node.js</span>
</div>

<div className="skill-card">
  <i className="devicon-express-original"></i>
  <span>Express.js</span>
</div>

<div className="skill-card">
  <i className="devicon-typescript-plain"></i>
  <span>TypeScript</span>
</div>


<div className="skill-card">
  <i className="devicon-mongodb-plain"></i>
  <span>MongoDB</span>
</div>

</div>

        <div className="working-more">
  <div className="bar-loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <p>Working on more…</p>
</div>
      </section>
      </>
  )
}
