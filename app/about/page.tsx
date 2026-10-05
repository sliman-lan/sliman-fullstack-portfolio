export default function About() {
  return (
    <div className="container" style={{ padding: "40px 20px 20px" }}>
      {/* BIO & HIGHLIGHTS SECTION */}
      <section className="about-content">
        <div className="about-text glass">
          <h2>Engineering Ideas Into Production-Ready Code</h2>
          <p>
            I am a passionate Full-Stack Web Developer and Software Engineer with comprehensive 
            experience in crafting end-to-end web applications. My background spans modern 
            frontend engineering, robust backend REST API architectures, database optimization, 
            and computer science instruction.
          </p>
          <p>
            Whether building lightning-fast Server-Side Rendered (SSR) web solutions with React 
            and Next.js, or architecting secure enterprise backend services using Node.js/Express 
            and Python Django, I prioritize clean code standards, scalable performance, and 
            exceptional user experience.
          </p>
          <p>
            Driven by continuous learning and problem-solving, I combine technical precision 
            with modern design trends to deliver reliable, production-ready software solutions.
          </p>
        </div>

        {/* METRICS & ACHIEVEMENTS */}
        <div className="stats">
          <div className="stat-card glass">
            <div className="stat-number">Full-Stack</div>
            <div className="stat-label">React, Next.js, Node & Django</div>
          </div>
          <div className="stat-card glass">
            <div className="stat-number">M.Sc.</div>
            <div className="stat-label">Computer Science Candidate</div>
          </div>
          <div className="stat-card glass">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Field Experience</div>
          </div>
          <div className="stat-card glass">
            <div className="stat-number">100%</div>
            <div className="stat-label">Clean Code & Delivery Rate</div>
          </div>
        </div>
      </section>

      {/* CORE EXPERIENCE & ACADEMIC BACKGROUND */}
      <section className="team-section">
        <h2>Professional Background</h2>
        <div className="team-grid">
          <div className="team-member glass">
            <div className="team-avatar">⚛️</div>
            <h3>Frontend Specialist</h3>
            <p className="role">React & Next.js</p>
            <p className="bio">
              Expertise in building dynamic, responsive, and SEO-optimized user interfaces 
              using Next.js App Router, Redux, and modern styling architectures.
            </p>
          </div>

          <div className="team-member glass">
            <div className="team-avatar">🐍</div>
            <h3>Backend Engineer</h3>
            <p className="role">Node.js & Python Django</p>
            <p className="bio">
              Skilled in developing robust REST APIs, user authentication, database models, 
              and server-side logic using Node.js Express and Django REST Framework.
            </p>
          </div>

          <div className="team-member glass">
            <div className="team-avatar">🎓</div>
            <h3>Instructor & Developer</h3>
            <p className="role">Computer Science & Programming</p>
            <p className="bio">
              Experienced in teaching C++ and programming concepts, bringing structured, 
              algorithmic, and fundamental problem-solving approaches to software engineering.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}