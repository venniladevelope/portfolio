import { useEffect, useState } from 'react';
import './App.css';
import profilePhoto from './assets/profile-photo.jpeg';

const skills = [
  {
    title: 'Frontend',
    items: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend & Databases',
    items: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'APIs & Integrations',
    items: ['REST APIs', 'Auth0 SSO', 'Stripe', 'Third-party auth', 'Payment flows'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Schema design', 'Debugging'],
  },
];

const projects = [
  {
    name: 'Transportation Management Platform',
    stack: 'React.js, Node.js, MongoDB',
    summary:
      'A full-stack logistics platform that connects shippers and carriers for freight booking, request workflows, vehicle management, and real-time shipment tracking.',
  },
  {
    name: 'E-Commerce Platform',
    stack: 'Laravel, Vue.js, PostgreSQL',
    summary:
      'Feature-rich commerce system with product catalogs, shopping cart workflows, Auth0 SSO, order management, admin controls, and REST API integrations.',
  },
  {
    name: 'Inventory & Sales Management System',
    stack: 'PHP, MySQL',
    summary:
      'Operational inventory and sales application for product records, stock levels, ledger reports, CRUD modules, and business tracking.',
  },
];

const metrics = [
  { value: '1+', label: 'Years Experience' },
  { value: '3', label: 'Major Projects' },
  { value: '8+', label: 'Core Technologies' },
];

const aboutHighlights = [
  'Full-stack feature development',
  'Secure login and payment flows',
  'Database design and API integration',
];

const experienceHighlights = [
  'Architect, develop, and maintain end-to-end web applications using React.js, Node.js, Express.js, PHP, and Laravel.',
  'Design and integrate RESTful APIs, third-party authentication protocols, Auth0 SSO, and Stripe payment solutions.',
  'Optimize database queries, schema designs, and application performance across MySQL, PostgreSQL, and MongoDB.',
  'Collaborate with clients and technical teams to gather requirements, debug issues, and ship updates through Git workflows.',
];

const ContactIcon = ({ type }) => {
  const paths = {
    phone: (
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.8c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.2 2.2z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
  };

  return (
    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  );
};

function App() {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (!formStatus.message) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setFormStatus({ type: '', message: '' });
    }, 4500);

    return () => window.clearTimeout(timeout);
  }, [formStatus.message]);

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);
    setFormStatus({ type: '', message: '' });

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    const form = event.currentTarget;

    try {
      const response = await fetch('https://formsubmit.co/ajax/venniladevelope@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _replyto: email,
          _subject: `Portfolio enquiry from ${name}`,
          _template: 'table',
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send message');
      }

      form.reset();
      setFormStatus({
        type: 'success',
        message: 'Message sent successfully. I will get back to you soon.',
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Message could not be sent now. Please try again in a minute.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="portfolio-shell">
      <section className="hero" id="home">
        <nav className="top-nav" aria-label="Primary navigation">
          {/* <a href="#home" className="brand">
            VV
          </a> */}
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Available for full-time software engineering roles</p>
            <h1>
              <span>Vennila</span>
              <span>Velu</span>
            </h1>
            <p className="hero-text">
              Full stack developer building secure, scalable web applications with React,
              TypeScript, Node.js, Laravel, REST APIs, Auth0 SSO, Stripe, and production-ready
              database workflows.
            </p>
            <div className="hero-tags" aria-label="Core strengths">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Laravel</span>
              <span>MongoDB</span>
            </div>
            <div className="hero-actions">
              <a href="#contact" className="button primary">
                Email Me
              </a>
              {/* <a href="mailto:venniladevelope@gmail.com" className="button secondary">
                Email Me
              </a> */}
            </div>
          </div>

          <aside className="hero-visual" aria-label="Profile summary">
            <div className="portrait-card">
              <img
                src={profilePhoto}
                alt="Vennila Velu"
                onError={(event) => {
                  event.currentTarget.hidden = true;
                  event.currentTarget.nextElementSibling.hidden = false;
                }}
              />
             
            </div>
            <div className="hero-summary">
              <p className="availability">Full Stack Developer</p>
              <h2>APIs, authentication, payment flows, and data-heavy business apps.</h2>
            </div>
            <div className="metric-row" aria-label="Career highlights">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="about-section">
        <div className="about-header">
          <p className="eyebrow">About</p>
          <h2>I build web apps that connect clean interfaces with dependable backend systems.</h2>
        </div>
        <div className="about-body">
          <p>
            Currently at Santhila Databot Private Limited, I work across React, Node.js,
            Laravel, REST APIs, Auth0 SSO, Stripe payment gateways, database workflows, and
            deployment tasks. I care about clean interfaces, reliable backend logic, and
            features that stay easy to maintain after launch.
          </p>
          <div className="about-details" aria-label="About details">
            <div>
              <span>Role</span>
              <strong>Full Stack Developer</strong>
            </div>
            <div>
              <span>Company</span>
              <strong>Santhila Databot</strong>
            </div>
          </div>
        </div>
        <div className="about-focus" aria-label="About focus areas">
          {aboutHighlights.map((highlight, index) => (
            <span key={highlight}>
              <b>0{index + 1}</b>
              {highlight}
            </span>
          ))}
        </div>
      </section>

      <section className="experience-section" id="work">
        <div className="experience-label">
          <p className="eyebrow">Work Experience</p>
          <span>2025</span>
        </div>
        <div className="experience-console">
          <div className="experience-head">
            <div>
              <span className="date">July 2025 - Present</span>
              <h2>Santhila Databot Private Limited</h2>
            </div>
            <strong className="role">Full Stack Developer</strong>
          </div>
          <div className="experience-track">
            {experienceHighlights.map((highlight, index) => (
              <article className="experience-row" key={highlight}>
                <span>0{index + 1}</span>
                <p>{highlight}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Technology stack</h2>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Selected builds</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <span className="project-number">0{index + 1}</span>
              <h3>{project.name}</h3>
              <p className="stack">{project.stack}</p>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="credentials-section">
        <div className="education">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>BCA, Erode Arts and Science College</h2>
          </div>
          <p>Bachelor of Computer Applications, 2019 - 2022, Grade: 66%</p>
          <p>HSC: 68%, Municipal Girls Higher Secondary School, 2018 - 2019</p>
          <p>SSLC: 82%, Kalaimagal Girls Higher Secondary School, 2016 - 2017</p>
        </div>
        <div className="awards">
          <div className="section-heading">
            <p className="eyebrow">Certifications & Awards</p>
            <h2>Beyond the code</h2>
          </div>
          <p>IBM Certification for MERN Full Stack from SLA Institute, Chennai</p>
          <p>Silambam National Gold Medalist</p>
          <p>Kabaddi division awards and Best Dancer recognition</p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let us build something useful.</h2>
          <div className="contact-links">
            <a href="tel:+919600939805">
              <ContactIcon type="phone" />
              <span>+91 96009 39805</span>
            </a>
            <a href="mailto:venniladevelope@gmail.com">
              <ContactIcon type="mail" />
              <span>venniladevelope@gmail.com</span>
            </a>
            <span>
              <ContactIcon type="location" />
              <span>Karungalpalayam, Erode - 638003</span>
            </span>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="your@email.com" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="5" placeholder="Tell me about your project" required />
          </label>
          <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
      {formStatus.message && (
        <div className={`toast-notification ${formStatus.type}`} role="status" aria-live="polite">
          <span>{formStatus.type === 'success' ? 'Sent' : 'Not Sent'}</span>
          <p>{formStatus.message}</p>
          <button
            type="button"
            aria-label="Close notification"
            onClick={() => setFormStatus({ type: '', message: '' })}
          >
            x
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
