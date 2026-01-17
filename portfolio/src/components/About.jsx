import face from "../assets/p.jpeg"
import "../style/about.css"

export default function About(){
  return (
    <section className="about-page">
      <div className="about-heading">
  <h1>ABOUT ME</h1>
  <p>Get to know the person behind the code ✨</p>
</div>

      {/* TOP ROW */}
      <div className="about-top">
        <div className="about-left">
          <img src={face} alt="Palak" />
        </div>

        <div className="about-right">
  <p className="about-text">
    Hi, I’m Palak — a Computer Science student deeply interested in Machine Learning, UI/UX design, and modern web development.
  </p>

  <p className="about-text">
    I enjoy building projects where logic meets creativity. From training ML models to designing clean, user-focused interfaces, I love creating products that are both functional and visually engaging.
  </p>
</div>

      </div>

      {/* EDUCATION */}
      <section className="about-section">
        <h3>Education</h3>

        <div className="about-box">
          <h4>College</h4>
          <p>B.Tech in Computer Science & Engineering</p>
        </div>

        <div className="about-box">
          <h4>Schooling</h4>
          <p>Science stream with Mathematics background</p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="about-section">
        <h3>My Approach</h3>

        <div className="about-box">
          <ul className="about-list">
            <li>Understand the problem before writing code</li>
            <li>Design clean, scalable, and user-friendly solutions</li>
            <li>Balance logic with strong UI/UX principles</li>
            <li>Iterate, test, and continuously improve</li>
          </ul>
        </div>
      </section>

      {/* WORKING PROJECTS */}
   {/* WORKING PROJECTS */}
<section className="about-section">
  <h3>Working Projects</h3>

  <div className="about-box">
    <ul className="about-list">
      <li>Weather Prediction Machine Learning Model</li>
      <li>UI/UX Portfolio Website</li>
      <li>React-based Web Applications</li>
      <li>Data Analysis & Visualization Projects</li>
    </ul>
  </div>
</section>

    </section>
  )
}
