import face from "../assets/p.jpeg"
import "../style/about.css"

export default function About(){
  return (
    <div className="about-page">
      <div className="about-left">
        <img src={face} alt="Palak" />
      </div>

      <div className="about-right">
   <p className="about-text">
  {"Hi, I’m Palak — a passionate Computer Science student who loves Machine Learning, creative UI design, and building beautiful digital experiences. I enjoy blending logic with aesthetics to create products that are both intelligent and visually powerful. I’m always curious, always learning, and always trying to push my creativity to the next level."
    .split("")
    .map((char, i) => (
      <span key={i}>{char === " " ? "\u00A0" : char}</span>
    ))}
</p>
      </div>
    </div>
  )
}
