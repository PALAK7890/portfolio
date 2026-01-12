import "./App.css"
import face from "./assets/p.jpeg"
import face2 from "./assets/pp.png"

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

function Navbar(){
  return(
    <nav>
      <h2>PORTFOLIO</h2>
      <div>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  )
}

function SectionFaces(){
  return(
    <>
      <img src={face2} className="side-face left-face" />
      <img src={face2} className="side-face right-face" />
    </>
  )
}

function Home(){
  return(
    <section id="home" className="page">

      <div className="center">
        <div className="face">
          <img src={face} />
        </div>
        <h1>I am a ML developer</h1>
        <p>I love building intelligent & beautiful things</p>
        <a href="#about">Click to know About Me</a>
      </div>
    </section>
  )
}

function About(){
  return(
    <section id="about" className="page">
      <SectionFaces />
      <div className="center">
        <h2>About Me …</h2>
        <p>
          Hi, I’m Palak — a CSE student who loves Machine Learning,
          creative UI/UX and building cool digital experiences.
        </p>
      </div>
    </section>
  )
}

function Skills(){
  return(
    <section id="skills" className="page">

      <div className="center">
        <h2>What My Skills Include</h2>

        <div className="skill">
          <span>Python</span><div className="bar"><div/></div>
        </div>
        <div className="skill">
          <span>Machine Learning</span><div className="bar"><div/></div>
        </div>
        <div className="skill">
          <span>React</span><div className="bar"><div/></div>
        </div>
        <div className="skill">
          <span>UI / UX</span><div className="bar"><div/></div>
        </div>
      </div>
    </section>
  )
}

function Projects(){
  return(
    <section id="projects" className="page">
      <div className="center">
        <h2>My Projects</h2>

        <div className="project-grid">

          <div className="project-card">
            <h3>ArtFeel</h3>
            <p>Emotion based creative blogging platform.</p>
            <div className="links">
              <a href="https://github.com/PALAK7890/artfeel" target="_blank">GitHub</a>
              <a href="https://artfeel.vercel.app" target="_blank">Live</a>
            </div>
          </div>

          <div className="project-card">
            <h3>ML Predictor</h3>
            <p>Machine learning based prediction app.</p>
            <div className="links">
              <a href="#" target="_blank">GitHub</a>
              <a href="#" target="_blank">Live</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Portfolio</h3>
            <p>My personal UI/UX & ML portfolio.</p>
            <div className="links">
              <a href="#" target="_blank">GitHub</a>
              <a href="#" target="_blank">Live</a>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}


function Contact(){
  return(
    <section className="page split">
      
      <div className="half left">
        <h2>My Coding Journey</h2>
        <p>
          I actively practice Data Structures & Algorithms on LeetCode
          and love solving real-world problems using efficient code.
        </p>

        <div className="leetcode-card">
          <h3>LeetCode</h3>
          <p>170+ Problems Solved</p>
          <a href="#" target="_blank">Visit Profile</a>
        </div>
      </div>

      <div className="half right">
        <h2>Contact Me</h2>
        <p>palak@email.com</p>
        <p>GitHub • LinkedIn • Kaggle</p>
      </div>

    </section>
  )
}

