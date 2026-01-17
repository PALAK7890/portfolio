import { useEffect, useRef, useState } from "react"
import emailjs from "emailjs-com"
import "../style/contact.css"

export default function Contact() {

  /* ============================= */
  /* INTERSECTION OBSERVER */
  /* ============================= */
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

  /* ============================= */
  /* POPUP STATE */
  /* ============================= */
  const [popup, setPopup] = useState({
    show: false,
    success: true,
    message: ""
  })

  /* ============================= */
  /* EMAIL JS */
  /* ============================= */
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_hq2lje4",
        "template_a7gcsw7",
        formRef.current,
        "y3M4kLsTb6RINNmVU"
      )
      .then(() => {
        setPopup({
          show: true,
          success: true,
          message: "Message sent successfully 🚀"
        })
        formRef.current.reset()

        // auto close popup
        setTimeout(() => {
          setPopup(p => ({ ...p, show: false }))
        }, 3000)
      })
      .catch(() => {
        setPopup({
          show: true,
          success: false,
          message: "Something went wrong 😢"
        })

        setTimeout(() => {
          setPopup(p => ({ ...p, show: false }))
        }, 3000)
      })
  }

  /* ============================= */
  /* JSX */
  /* ============================= */
  return (
    <>
      <section
        ref={contactRef}
        className={`contact-page ${showContact ? "show" : ""}`}
      >

        {/* HEADER */}
        <section className="contact-header">
          <h1 className="contact-title">Let’s Connect</h1>
          <p className="contact-subtitle">
            Got an idea or just want to say hi? 💬
          </p>
        </section>

        {/* MAIN LAYOUT */}
        <section className="contact-layout">

          {/* LEFT: FORM */}
          <div className="contact-form-wrap">
            <section className="contact-form-box">
              <h3>Send a message</h3>

              <form ref={formRef} onSubmit={sendEmail}>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>

                <button type="submit">
                  Send Message
                </button>

              </form>
            </section>
          </div>

          {/* RIGHT: INFO */}
          <section className="contact-right">

            <div className="contact-mini-wrap">
              <section className="contact-mini-box">
                <h4>Email</h4>
                <p>dahiyapalak7@gmail.com</p>
              </section>
            </div>

            <div className="contact-mini-wrap">
              <section className="contact-mini-box">
                <h4>Phone</h4>
                <p>+91 9991107912</p>
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

      {/* ============================= */}
      {/* COMIC POPUP */}
      {/* ============================= */}
      {popup.show && (
        <div className="comic-popup-overlay">
          <div className={`comic-popup ${popup.success ? "success" : "error"}`}>
            <h3>{popup.success ? "Yay!" : "Oops!"}</h3>
            <p>{popup.message}</p>

            <button onClick={() => setPopup(p => ({ ...p, show: false }))}>
              Okay ✨
            </button>
          </div>
        </div>
      )}
    </>
  )
}
