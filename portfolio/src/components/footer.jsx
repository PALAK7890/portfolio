import "../style/footer.css"

export default function Footer() {
  return (
    <>
    <footer className="footer">

      {/* LEFT */}
<div className="footer-col footer-left">
  <h2 className="footer-name">Palak</h2>

  <p className="footer-about">
    A passionate developer who loves building<br />
    playful, meaningful web experiences.
  </p>

  {/* SOCIAL ICONS */}
  <div className="footer-socials">
    <a
      href="https://github.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
    >
      <i className="devicon-github-original"></i>
    </a>

    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
    >
      <i className="devicon-linkedin-plain"></i>
    </a>

    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
    >
      <i className="devicon-instagram-plain"></i>
    </a>
  </div>
</div>


      {/* CENTER */}
      <div className="footer-col footer-center">
        <h3 className="footer-heading">Navigation</h3>
        <ul className="footer-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="footer-col footer-right">
        <h3 className="footer-heading">Contact</h3>
        <p className="footer-contact">
  <i className="devicon-google-plain"></i>
  <span>dahiyapalak7@email.com</span>
</p>

<p className="footer-contact">
  <span>📞 +91 9991107912</span>
</p>
      </div>

    </footer>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Palak. All rights reserved.</p>
      </div>
      </>
  )
}
