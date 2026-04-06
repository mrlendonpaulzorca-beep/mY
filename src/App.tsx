import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const fullText = "Lendon Paul Zorca";
  const [typedText, setTypedText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 90);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <div className={darkMode ? "page dark" : "page"}>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <div className="container">
        <header className="topbar">
          <div className="brand">LPZ</div>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </header>

        <section className="hero card reveal">
          <div className="hero-left">
            <p className="eyebrow">Healthcare Virtual Assistant Portfolio</p>
            <h1>
              {typedText}
              <span className="cursor">|</span>
            </h1>
            <p className="subtitle">
              Reliable healthcare support, executive assistance, and customer
              service for fast-moving teams.
            </p>

            <p className="intro">
              I help healthcare teams and businesses stay organized through
              dependable support in claims, authorizations, eligibility
              verification, documentation, and provider communication.
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary pulse"
                onClick={() => setShowModal(true)}
              >
                Let’s Work Together
              </button>
              <a href="#services" className="btn btn-secondary">
                Explore Services
              </a>
            </div>

            <div className="stats">
              <div className="stat-box">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">HIPAA</span>
                <span className="stat-label">Compliance Aware</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">Remote</span>
                <span className="stat-label">Work Ready</span>
              </div>
            </div>

            <div className="scroll-indicator">
              <span></span>
              <p>Scroll to explore</p>
            </div>
          </div>

          <div className="hero-right">
            <div className="photo-shell">
              <img
                src="/profile.png"
                alt="Lendon Paul Zorca"
                className="profile"
              />
            </div>
          </div>
        </section>

        <section id="about" className="grid-two reveal">
          <div className="card info-card lift">
            <p className="section-tag">About Me</p>
            <h2>Dependable support for healthcare teams</h2>
            <p className="muted">
              I have strong experience in healthcare support, executive
              assistance, customer service, claims processing, insurance
              authorizations, and provider communication. I am detail-oriented,
              organized, and committed to giving reliable support in fast-paced
              environments.
            </p>
          </div>

          <div className="card info-card lift">
            <p className="section-tag">Why Hire Me</p>
            <h2>What I bring to your team</h2>
            <ul className="check-list">
              <li>Strong healthcare account background</li>
              <li>Confident handling claims and eligibility concerns</li>
              <li>Professional communication with providers and clients</li>
              <li>Reliable, organized, and easy to work with</li>
            </ul>
          </div>
        </section>

        <section id="services" className="card section-card reveal">
          <p className="section-tag">Services</p>
          <h2>How I can help</h2>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏥</div>
              <h3>Healthcare VA</h3>
              <p>Administrative and workflow support for healthcare teams.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Eligibility Verification</h3>
              <p>Accurate checking of insurance coverage and benefits.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🧾</div>
              <h3>Claims Processing</h3>
              <p>Organized support for claims follow-up and documentation.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">📑</div>
              <h3>Authorizations & Appeals</h3>
              <p>Efficient support for requests, updates, and appeals.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🗂️</div>
              <h3>Executive Assistance</h3>
              <p>Reliable admin help, coordination, and task management.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">💬</div>
              <h3>Customer Service</h3>
              <p>Professional communication and issue resolution.</p>
            </div>
          </div>
        </section>

        <section id="experience" className="card section-card reveal">
          <p className="section-tag">Experience</p>
          <h2>Work Background</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Customer Service Associate – Anthem Healthcare Account</h3>
                <p className="meta">Carelon | July 2021 – February 2025</p>
                <p>
                  Managed provider inquiries related to eligibility, benefits,
                  claims, authorizations, and appeals in a high-volume setting.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Customer Service Associate – Humana Healthcare Account</h3>
                <p className="meta">Sagility | January 2020 – July 2021</p>
                <p>
                  Supported billing concerns, recouped claims, follow-up, and
                  provider communication as a top-performing agent.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="card contact-card reveal">
          <p className="section-tag">Contact</p>
          <h2>Let’s connect</h2>
          <p className="muted contact-intro">
            I’m open to healthcare support, executive assistance, and remote
            customer service opportunities.
          </p>

          <div className="contact-grid">
            <a
              className="contact-item"
              href="mailto:mrlendonpaulzorca@gmail.com"
            >
              <span className="contact-label">Email</span>
              <span>mrlendonpaulzorca@gmail.com</span>
            </a>

            <a className="contact-item" href="tel:09082825524">
              <span className="contact-label">Phone</span>
              <span>09082825524</span>
            </a>

            <a
              className="contact-item"
              href="https://www.linkedin.com/in/mrlendonpaul"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-label">LinkedIn</span>
              <span>www.linkedin.com/in/mrlendonpaul</span>
            </a>

            <a
              className="contact-item"
              href="https://www.facebook.com/vincedelacruz09"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-label">Facebook</span>
              <span>facebook.com/vincedelacruz09</span>
            </a>
          </div>
        </section>

        <footer className="footer">
          © 2026 Lendon Paul Zorca. All rights reserved.
        </footer>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ×
            </button>
            <p className="section-tag">Quick Message</p>
            <h2>Let’s work together</h2>
            <p className="muted modal-text">
              Send me a message and I’ll get back to you as soon as possible.
            </p>

            <form
              className="popup-form"
              action="https://formspree.io/f/xjgpjpar"
              method="POST"
            >
              <input type="text" name="name" placeholder="Your name" required />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />

              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                required
              ></textarea>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
