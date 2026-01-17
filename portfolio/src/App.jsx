import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"

import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/footer"

export default function App(){
  return(
    <Router>

      {/* ✈️ COMIC PAPER PLANE BACKGROUND */}
      <div className="paper-plane-bg">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="paper-plane">heyyy</span>
        ))}
      </div>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>

    </Router>
  )
}
