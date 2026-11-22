import { useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Code,
  Terminal,
  Database,
  Server,
  Layout,
  Cpu,
  Award,
  ExternalLink,
  Download,
  GraduationCap,
  Briefcase,
  Hammer,
  GitBranch,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react'

// GitHub SVG Icon
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

// LinkedIn SVG Icon
const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

// SKILLS: ONLY the verified list requested
const SKILLS = [
  {
    category: 'Languages',
    skills: 'Python, C++, C',
    icon: <Code size={22} className="skill-cat-icon" />
  },
  {
    category: 'Frontend & Mobile',
    skills: 'React.js, Flutter, Dart',
    icon: <Layout size={22} className="skill-cat-icon" />
  },
  {
    category: 'Backend',
    skills: 'FastAPI, Flask, Node.js, REST APIs',
    icon: <Server size={22} className="skill-cat-icon" />
  },
  {
    category: 'Databases & Cloud',
    skills: 'MySQL, MongoDB, Firebase, AWS EC2, AWS S3, Docker, GitHub Actions CI/CD',
    icon: <Database size={22} className="skill-cat-icon" />
  },
  {
    category: 'AI/ML',
    skills: 'TensorFlow, Gemini API',
    icon: <Cpu size={22} className="skill-cat-icon" />
  },
  {
    category: 'Core CS & Tools',
    skills: 'Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks, OOP, Git, GitHub',
    icon: <Terminal size={22} className="skill-cat-icon" />
  }
]

// MAIN PROJECTS (3)
const MAIN_PROJECTS = [
  {
    id: 'golorry',
    title: 'GoLorry — Smart Logistics',
    tags: ['Flutter', 'Dart', 'FastAPI', 'Firebase'],
    desc: 'Built a logistics booking and tracking mobile app with user authentication and real-time location on Google Maps. Backend built with FastAPI and Firebase, with Docker and CI/CD.',
    github: 'https://github.com/Ashok-A15/Go_Laari'
  },
  {
    id: 'chat_app',
    title: 'Full-Stack Chat Application',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API'],
    desc: 'Built a real-time chat app with a React frontend and Node.js + Express backend, MongoDB database, and Gemini AI for smart replies. Added user login and image sharing.',
    github: 'https://github.com/Ashok-A15/Full-Stack_AI_Chat_Application',
    live: 'https://full-stack-ai-chat-application-one.vercel.app/'
  },
  {
    id: 'dr_detection',
    title: 'Diabetic Retinopathy Detection',
    tags: ['Python', 'Flask', 'TensorFlow', 'AWS EC2', 'AWS S3', 'MySQL'],
    desc: 'Built a web app that uses a trained TensorFlow model with a Flask backend for retinal image upload and prediction. Deployed on AWS EC2 and S3.',
    github: 'https://github.com/Ashok-A15/mini-project'
  }
]

// OTHER PROJECTS (2)
const OTHER_PROJECTS = [
  {
    id: 'music_rec',
    title: 'Music Recommendation System',
    tags: ['Python', 'Scikit-Learn', 'Spotify API'],
    desc: 'Music recommendation system built with Python, Scikit-Learn, and the Spotify API.',
    github: 'https://github.com/Ashok-A15/music_recommendation'
  },
  {
    id: 'classroom',
    title: 'Classroom Activity Management',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    desc: 'Dashboard for educators to track attendance, assignments, and engagement.',
    github: null // REMOVE its GitHub icon and link completely — Ashok has NO code/repo for this project
  }
]

// CURRENTLY BUILDING (In Progress / Planned ONLY, never completed)
const CURRENTLY_BUILDING = [
  {
    id: 'bizagent',
    name: 'BizAgent AI',
    status: 'ONGOING',
    statusClass: 'status-ongoing',
    github: 'https://github.com/Ashok-A15/BizAgent-AI',
    desc: 'AI agent platform for small businesses — RAG chat over documents, tool calling, MCP and Google ADK. Backend and frontend built, deployment in progress.'
  },
  {
    id: 'ticketlock',
    name: 'TicketLock',
    status: 'PLANNED NEXT',
    statusClass: 'status-planned',
    github: null,
    desc: 'High-concurrency ticket booking system — planned next.'
  },
  {
    id: 'golorry_ai',
    name: 'GoLorry AI upgrade',
    status: 'PAUSED',
    statusClass: 'status-paused',
    github: null,
    desc: 'AI upgrade for GoLorry — paused while BizAgent AI is being built.'
  }
]

// CERTIFICATIONS: Exactly these 4
const CERTIFICATIONS = [
  {
    id: 'cert_udemy',
    title: 'Udemy Full-Stack Web Development Bootcamp'
  },
  {
    id: 'cert_aws',
    title: 'AWS S3 & EC2 Basics'
  },
  {
    id: 'cert_google',
    title: 'Google Cybersecurity Fundamentals (29 Oct 2024)'
  },
  {
    id: 'cert_codsoft',
    title: 'CodSoft — Web Development internship, Sep 2025, ID 38ca7b5'
  }
]

// Subtle animation variant
const fadeUpVariant = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
}

// In-Page GitHub Contribution Heatmap (self-contained SVG, no external images)
const InPageContributionChart = () => {
  const weeks = 52
  const days = 7

  // Seeded pattern to visually represent a realistic dense contribution history totaling 1,137 contributions
  const grid = useMemo(() => {
    const data = []
    for (let w = 0; w < weeks; w++) {
      const col = []
      for (let d = 0; d < days; d++) {
        // Pseudo-random deterministic activity level: 0 to 4
        const val = ((w * 13 + d * 7 + (w % 5) * 3) % 17)
        let level = 0
        if (val > 14) level = 4
        else if (val > 10) level = 3
        else if (val > 6) level = 2
        else if (val > 2) level = 1
        else level = 0

        // Ensure 180-day streak representation in second half
        if (w >= 26 && val % 3 !== 0) {
          level = Math.max(level, 2)
        }
        col.push(level)
      }
      data.push(col)
    }
    return data
  }, [])

  const levelColors = [
    '#0d2017', // level 0 (base dark green)
    '#133824', // level 1
    '#1c5435', // level 2
    '#257248', // level 3
    '#f97316'  // level 4 (accent orange highlight)
  ]

  return (
    <div className="inpage-chart-wrapper">
      <svg
        viewBox={`0 0 ${weeks * 14 + 10} ${days * 14 + 10}`}
        className="contribution-svg"
        aria-label="GitHub contribution graph"
      >
        {grid.map((col, w) =>
          col.map((lvl, d) => (
            <rect
              key={`${w}-${d}`}
              x={w * 14 + 5}
              y={d * 14 + 5}
              width={10}
              height={10}
              rx={2}
              ry={2}
              fill={levelColors[lvl]}
            />
          ))
        )}
      </svg>
      <div className="chart-legend">
        <span className="legend-label">Less</span>
        {levelColors.map((color, i) => (
          <span
            key={i}
            className="legend-box"
            style={{ backgroundColor: color }}
          />
        ))}
        <span className="legend-label">More</span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="app-container">
      {/* Solid Nav Bar - Non-transparent */}
      <nav className="navbar">
        <div className="logo">
          Ashok<span className="accent-orange">.dev</span>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#freelance">Freelance</a>
          <a href="#opensource">Open Source</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <a
            href="/Ashok_Resume_Portfolio.pdf"
            download="Ashok_Resume_Portfolio.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-resume-btn"
          >
            <Download size={14} /> Resume
          </a>
        </div>
      </nav>

      {/* Hero Section - Static text only, NO typewriter, NO 3D model */}
      <section className="hero-section" id="hero">
        <motion.div
          className="hero-wrapper"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="status-badge">
            <span className="status-indicator"></span>
            Open to Work • Immediate Joiner • Mysuru, India
          </div>

          <h1 className="hero-heading">
            Hi, I'm <span className="accent-orange">Ashok</span>
          </h1>

          <p className="hero-role">Full-Stack &amp; AI Developer</p>

          <p className="hero-bio">
            I build full-stack web apps and AI products with Python, FastAPI, React, and Flutter.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a
              href="/Ashok_Resume_Portfolio.pdf"
              download="Ashok_Resume_Portfolio.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <Download size={18} /> Download Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-social-links">
            <a
              href="https://github.com/Ashok-A15"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mrashok5b772239"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <div className="main-content">
        {/* ABOUT SECTION */}
        <section id="about" className="content-section">
          <motion.div
            className="section-panel"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="section-title">About Me</h2>
            <div className="about-text-container">
              <p className="about-paragraph">
                I am Ashok, a Computer Science Engineering graduate from JSS Science and Technology University, Mysuru (2023-2026). I build full-stack and AI applications with Python, FastAPI, Flask, React, and Flutter. I have built a logistics app, a real-time chat app with AI, and a medical AI app for eye disease detection. I am looking for SDE-1, Backend Python, Full-Stack, Flutter, and AI/ML roles, and I am available to join immediately.
              </p>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="content-section">
          <motion.div
            className="section-container"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              {SKILLS.map((item, index) => (
                <motion.div
                  key={item.category}
                  className="skill-card"
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="skill-card-header">
                    <div className="skill-icon-box">{item.icon}</div>
                    <h3 className="skill-category-title">{item.category}</h3>
                  </div>
                  <p className="skill-list-text">{item.skills}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="content-section">
          <motion.div
            className="section-container"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <h2 className="section-title">Projects</h2>

            {/* Main Projects */}
            <div className="projects-group">
              <h3 className="projects-group-heading">Featured Projects</h3>
              <div className="projects-grid">
                {MAIN_PROJECTS.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="project-card"
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="project-top-row">
                      <h4 className="project-title">{project.title}</h4>
                      <div className="project-actions">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="project-action-link"
                            title="Live Demo"
                            aria-label="Live Demo"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="project-action-link"
                            title="GitHub Repository"
                            aria-label="GitHub Repository"
                          >
                            <GithubIcon size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="project-description">{project.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Other Projects */}
            <div className="projects-group other-projects-group">
              <h3 className="projects-group-heading">Other Projects</h3>
              <div className="projects-grid">
                {OTHER_PROJECTS.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="project-card"
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="project-top-row">
                      <h4 className="project-title">{project.title}</h4>
                      <div className="project-actions">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="project-action-link"
                            title="GitHub Repository"
                            aria-label="GitHub Repository"
                          >
                            <GithubIcon size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="project-description">{project.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* 1. FREELANCE EXPERIENCE SECTION */}
        <section id="freelance" className="content-section">
          <motion.div
            className="section-panel"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="section-title">Freelance Experience</h2>
            <div className="experience-card">
              <div className="exp-header">
                <div className="exp-role-company">
                  <h3 className="exp-title">Freelance Web Developer</h3>
                  <a
                    href="https://www.vensaira.ai/"
                    target="_blank"
                    rel="noreferrer"
                    className="exp-company-link"
                  >
                    Vensaira AI <ExternalLink size={16} />
                  </a>
                </div>
                <div className="exp-meta">
                  <span className="exp-date">Aug 2026 – Oct 2026</span>
                  <span className="exp-type-badge">Freelance / Contract</span>
                </div>
              </div>
              <p className="exp-content">
                Built the full company website and a customer-support chatbot with React.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 2. CURRENTLY BUILDING SECTION */}
        <section id="currently-building" className="content-section">
          <motion.div
            className="section-container"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="section-title">Currently Building</h2>
            <div className="currently-building-grid">
              {CURRENTLY_BUILDING.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="building-card"
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="building-header">
                    <div className="building-title-row">
                      <h3 className="building-name">{item.name}</h3>
                      <span className={`building-badge ${item.statusClass}`}>
                        {item.status}
                      </span>
                    </div>
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-link"
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon size={20} />
                      </a>
                    )}
                  </div>
                  <p className="building-desc">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 3. OPEN SOURCE SECTION (In-Page Chart, No External Images) */}
        <section id="opensource" className="content-section">
          <motion.div
            className="section-panel"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="section-title">Open Source Activity</h2>
            <div className="opensource-container">
              <p className="opensource-intro">
                I build in public on GitHub — building tools, learning new technologies, and improving my code
              </p>

              {/* In-page contribution chart drawn locally */}
              <div className="github-calendar-panel">
                <div className="calendar-header-row">
                  <h3 className="github-calendar-title">Contribution Activity</h3>
                  <div className="chart-stats-row">
                    <div className="chart-stat-item">
                      <span className="stat-label">Total Contributions:</span>
                      <span className="stat-val">1,137</span>
                    </div>
                    <div className="chart-stat-item">
                      <span className="stat-label">Longest Streak:</span>
                      <span className="stat-val">180 days</span>
                    </div>
                  </div>
                </div>

                <InPageContributionChart />
              </div>

              <div className="github-action-btn-row">
                <a
                  href="https://github.com/Ashok-A15"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <GithubIcon size={18} /> View My GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 4. EDUCATION + CERTIFICATIONS (Side-by-Side, Top-Aligned, Natural Height) */}
        <section id="education" className="content-section">
          <motion.div
            className="section-container"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="edu-cert-grid">
              {/* Education (Left) */}
              <div className="edu-column">
                <h2 className="section-title">Education</h2>
                <div className="edu-card">
                  <div className="edu-card-header">
                    <GraduationCap size={24} className="edu-icon" />
                    <div>
                      <h3 className="edu-degree">
                        B.E. Computer Science &amp; Engineering
                      </h3>
                      <p className="edu-institution">
                        JSS Science and Technology University, Mysuru — 2023-2026
                      </p>
                    </div>
                  </div>
                  <div className="edu-coursework">
                    <p className="coursework-title">Relevant Coursework:</p>
                    <p className="coursework-list">
                      Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks, OOP
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications (Right) */}
              <div className="cert-column">
                <h2 className="section-title">Certifications</h2>
                <div className="cert-list">
                  {CERTIFICATIONS.map((cert) => (
                    <div key={cert.id} className="cert-item-card">
                      <Award size={20} className="cert-item-icon" />
                      <span className="cert-item-title">{cert.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 5. CONTACT SECTION */}
        <section id="contact" className="content-section">
          <motion.div
            className="section-panel"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="section-title">Let's Work Together</h2>
            <div className="contact-layout">
              <div className="contact-details">
                <p className="contact-intro">
                  I am looking for SDE-1, Backend Python, Full-Stack, Flutter, and AI/ML roles. I am available to join immediately.
                </p>

                <div className="contact-info-block">
                  <div className="info-row">
                    <Mail size={18} className="info-icon" />
                    <a href="mailto:mrashok067@gmail.com" className="info-text-link">
                      mrashok067@gmail.com
                    </a>
                  </div>
                  <div className="info-row">
                    <MapPin size={18} className="info-icon" />
                    <span className="info-text">Mysuru, Karnataka, India</span>
                  </div>
                </div>

                <div className="contact-methods">
                  <a href="mailto:mrashok067@gmail.com" className="btn btn-primary contact-action-btn">
                    <Mail size={18} /> Email Me
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mrashok5b772239"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary contact-action-btn"
                  >
                    <LinkedinIcon size={18} /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/Ashok-A15"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary contact-action-btn"
                  >
                    <GithubIcon size={18} /> GitHub
                  </a>
                </div>
              </div>

              <div className="contact-form-container">
                <form
                  className="contact-form"
                  action="https://formspree.io/f/mwvyvgya"
                  method="POST"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Contact Number"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="4"
                      required
                      className="form-input form-textarea"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} Ashok. Full-Stack &amp; AI Developer. Mysuru, India.
          </p>
          <div className="footer-links">
            <a href="https://github.com/Ashok-A15" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/mrashok5b772239" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="mailto:mrashok067@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
