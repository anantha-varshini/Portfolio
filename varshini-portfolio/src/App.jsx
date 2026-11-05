import React from "react";
import "./App.css";

function App() {
  const skills = {
    "Programming Languages": ["Python", "JavaScript", "TypeScript"],
    Frontend: ["HTML5", "CSS3", "Bootstrap", "React.js", "Redux", "Next.js"],
    Backend: ["Node.js", "Express.js"],
    Databases: ["MongoDB", "PostgreSQL"],
    Tools: ["Git", "GitHub"],
  };

const projects = [
  {
    number: "01",
    name: "TRAVEL GO",
    category: "Travel Booking Website",
    image: "/travelgosc.png",
    liveUrl: "https://travel-go-szbm.onrender.com",
    githubUrl: "https://github.com/anantha-varshini/travelgo-frontend",
    description:
      "A full-stack travel booking platform built using the MERN stack with a responsive and user-friendly interface.",
    features: [
      "Secure authentication and authorization",
      "Protected routes and form validation",
      "RESTful APIs with MongoDB integration",
      "User, destination and booking management",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    number: "02",
    name: "FOOD EXPRESS",
    category: "Food Ordering Website",
    image: "/foodexpresssc.png",
    liveUrl: "https://food-express-nhqn.onrender.com",
    githubUrl: "https://github.com/anantha-varshini/Food-Express",
    description:
      "A full-stack online food ordering application with user registration, login, and JWT-based authentication.",
    features: [
      "JWT authentication and authorization",
      "Frontend and backend validation",
      "RESTful API development",
      "Food items, cart and order management",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    number: "03",
    name: "LUXE",
    category: "E-commerce Fashion Store",
    image: "/luxesc.png",
    liveUrl: "https://luxe-av-1518.vercel.app/",
    githubUrl: "https://github.com/anantha-varshini/luxe",
    description:
      "A modern full-stack fashion e-commerce website featuring category-based products and a seamless shopping experience.",
    features: [
      "Product search and filters",
      "Wishlist and shopping cart",
      "Checkout and Razorpay payment integration",
      "Order tracking and customer profiles",
    ],
    tech: ["Next.js", "React.js", "Redux Toolkit", "MongoDB", "Razorpay"],
  },
];

  const certifications = [
    "Python Course Completion – PrepInsta Prime",
    "IBM Practitioner and Co-creator Badge",
    "Published Patent – Decentralized Credential Integrity System using Blockchain Technology",
    "Python Workshop – NIT Trichy",
    "Technical Event Certification – Coimbatore Institute of Technology",
  ];

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          AV<span></span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact" className="nav-contact">
            Contact Me ↗
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero section" id="home">
        <div className="hero-content">
          <p className="intro">
            <span className="status-dot"></span> AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1>
            Hi, I'm <span>Anantha Varshini</span>
          </h1>

          <h2>MERN Stack Developer</h2>

          <p className="hero-description">
            I build responsive, scalable, and user-friendly web applications
            using modern frontend and backend technologies. Passionate about
            creating meaningful digital experiences and solving real-world
            problems through code.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work ↗
            </a>

            <a href="#contact" className="secondary-btn">
              Let's Connect
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/anantha-varshini"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/anantha-varshini-j"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* PROFILE PHOTO */}
        <div className="hero-visual">
          <div className="profile">
            <img src="/av photo.jpg" alt="Anantha Varshini" />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section about-section" id="about">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Building ideas into digital experiences.</h3>

            <p>
              I'm a MERN Stack Developer with hands-on experience in building
              responsive, scalable, and user-friendly web applications.
            </p>

            <p>
              My technical expertise includes React.js, Next.js, Node.js,
              Express.js, MongoDB, and PostgreSQL. I enjoy developing RESTful
              APIs, implementing authentication systems, managing databases,
              and creating reusable React components.
            </p>

            <p>
              I'm passionate about continuous learning, logical thinking, and
              developing solutions that deliver a great user experience.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>03</h3>
              <p>Full Stack Projects</p>
            </div>

            <div className="stat-card">
              <h3>8.5</h3>
              <p>Academic CGPA</p>
            </div>

            <div className="stat-card">
              <h3>05</h3>
              <p>Certifications & Achievements</p>
            </div>

            <div className="stat-card">
              <h3>2026</h3>
              <p>Graduation Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p>MY TECHNICAL EXPERTISE</p>
          <h2>
            Skills & <span>Technologies</span>
          </h2>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-card" key={category}>
              <h3>{category}</h3>

              <div className="skill-tags">
                {items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="soft-skills">
          <h3>Soft Skills</h3>

          <div className="skill-tags">
            {[
              "Problem Solving",
              "Design Thinking",
              "Time Management",
              "Logical Thinking",
              "Team Collaboration",
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
<section className="section projects-section" id="projects">
  <div className="section-heading">
    <p>WHAT I'VE BUILT</p>

    <h2>
      Featured <span>Projects</span>
    </h2>

    <p className="heading-description">
      A showcase of my full-stack development projects and technical work.
    </p>
  </div>

  <div className="projects-grid">
    {projects.map((project) => (
      <div className="project-card" key={project.number}>

        {/* PROJECT SCREENSHOT */}
        <div className="project-image">
          <img
            src={project.image}
            alt={`${project.name} homepage screenshot`}
          />
        </div>

        {/* PROJECT DETAILS */}
        <div className="project-content">

          <div className="project-top">
            <span className="project-number">{project.number}</span>
            <span className="project-symbol">↗</span>
          </div>

          <h3>{project.name}</h3>

          <p className="project-category">
            {project.category}
          </p>

          <p className="project-description">
            {project.description}
          </p>

          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          {/* TECHNOLOGIES */}
          <div className="project-tech">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          {/* PROJECT LINKS */}
          <div className="project-links">

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="project-btn primary-project-btn"
              >
                Live Demo ↗
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="project-btn secondary-project-btn"
              >
                GitHub ↗
              </a>
            )}

          </div>

        </div>
      </div>
    ))}
  </div>
</section>

      {/* CERTIFICATIONS SECTION */}
      <section
        className="section certifications-section"
        id="certifications"
      >
        <div className="section-heading">
          <p>MY ACHIEVEMENTS</p>
          <h2>
            Certifications & <span>Achievements</span>
          </h2>
        </div>

        <div className="cert-list">
          {certifications.map((cert, index) => (
            <div className="cert-item" key={index}>
              <div className="cert-icon">✦</div>

              <div>
                <h3>{cert}</h3>
              </div>

              <span className="cert-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="section education-section" id="education">
        <div className="section-heading">
          <p>MY ACADEMIC BACKGROUND</p>
          <h2>
            My <span>Education</span>
          </h2>
        </div>

        <div className="education-timeline">
          <div className="education-card">
            <span className="education-year">2022 – 2026</span>
            <h3>B.Tech – Information Technology</h3>
            <h4>SNS College of Engineering</h4>
            <p>CGPA: 8.5</p>
          </div>

          <div className="education-card">
            <span className="education-year">2022</span>
            <h3>Higher Secondary & SSLC</h3>
            <h4>Annai Violet Matric Higher Secondary School</h4>
            <p>SSLC: 83% | HSC: 71%</p>
            <p>Coimbatore, India</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section contact-section" id="contact">
        <div className="contact-box">
          <p className="contact-label">HAVE A PROJECT IN MIND?</p>

          <h2>
            Let's Build Something <span>Amazing.</span>
          </h2>

          <p>
            I'm interested in connecting with people, exploring opportunities,
            and working on exciting projects. Feel free to reach out!
          </p>

          <a href="mailto:ananthavarshini13@gmail.com" className="primary-btn">
            Say Hello ↗
          </a>

          <div className="contact-details">
            <a href="mailto:ananthavarshini13@gmail.com">
              ✉ ananthavarshini13@gmail.com
            </a>

            <a href="tel:+918608104112">☎ +91 8608104112</a>

            <a
              href="https://linkedin.com/in/anantha-varshini-j"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/anantha-varshini"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          AV<span></span>
        </a>

        <p>Designed & Developed by Anantha Varshini J</p>

        <p>© 2026 All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;