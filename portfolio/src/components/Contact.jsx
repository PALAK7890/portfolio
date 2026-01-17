import { useEffect, useRef, useState } from "react"
import "../style/contact.css"


export default function Contact() {
    const contactRef = useRef(null)
  const [showContact, setShowContact] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContact(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])
  return (
    <section   ref={contactRef}
  className={`contact-page ${showContact ? "show" : ""}`}>

      <section className="contact-header">
        <h1 className="contact-title">Let’s Connect</h1>
        <p className="contact-subtitle">
          Got an idea or just want to say hi? 💬
        </p>
      </section>

      <section className="contact-layout">

        {/* LEFT: FORM (FULL SECTION) */}
       <div className="contact-form-wrap">
  <section className="contact-form-box">
    <h3>Send a message</h3>

    <input type="text" placeholder="Your Name" />
    <input type="email" placeholder="Your Email" />
    <textarea placeholder="Your Message"></textarea>

    <button>Send Message</button>
  </section>
</div>

        {/* RIGHT: INFO SECTIONS */}
        <section className="contact-right">

  <div className="contact-mini-wrap">
    <section className="contact-mini-box">
      <h4>Email</h4>
      <p>palak@email.com</p>
    </section>
  </div>

  <div className="contact-mini-wrap">
    <section className="contact-mini-box">
      <h4>Phone</h4>
      <p>+91 9XXXXXXXXX</p>
    </section>
  </div>

  <div className="contact-mini-wrap">
    <section className="contact-mini-box">
      <h4>Socials</h4>
      <div className="contact-socials">
        <a href="#"><i className="devicon-github-original"></i></a>
        <a href="#"><i className="devicon-linkedin-plain"></i></a>
        <a href="#"><i className="devicon-instagram-plain"></i></a>
      </div>
    </section>
  </div>

</section>


      </section>
    </section>
  )
}
