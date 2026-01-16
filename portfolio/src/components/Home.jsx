import "../style/home.css"
import face from "../assets/p.jpeg"
import { useEffect, useState } from "react"

const text = "PoRtFoLiO"

export default function Home() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300)
  }, [])

  return (
    <section className="home">

      {/* TEXT ARC */}
      <div className="letters-container">
        {text.split("").map((char, i) => {

          // SEMI OVAL (180° arc)
          const startAngle = -180
          const endAngle = 0
          const angle =
            startAngle +
            (i * (endAngle - startAngle)) / (text.length - 1)

          const radiusX = 260
          const radiusY = 150

          const x = radiusX * Math.cos(angle * Math.PI / 180)
          const y = radiusY * Math.sin(angle * Math.PI / 180)

          // random start
          const startX = (Math.random() - 0.5) * window.innerWidth
          const startY = (Math.random() - 0.5) * window.innerHeight

          return (
            <span
              key={i}
              className={`letter ${animate ? "place" : ""}`}
              style={{
                "--start-x": `${startX}px`,
                "--start-y": `${startY}px`,
                "--final-x": `${x}px`,
                "--final-y": `${y}px`,
                "--delay": `${i * 0.07}s`
              }}
            >
              {char}
            </span>
          )
        })}
      </div>

      {/* IMAGE */}
      <img src={face} alt="Palak" className="home-image" />

    </section>
  )
}
