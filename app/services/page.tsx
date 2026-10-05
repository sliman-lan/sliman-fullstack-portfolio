export default function Services() {
  const servicesList = [
    {
      icon: "⚛️",
      title: "Frontend Web Development",
      description: "Building fast, responsive, and SEO-friendly user interfaces using Next.js App Router and React.",
      features: [
        "Server-Side Rendering (SSR) & SSG",
        "State Management & Custom Hooks",
        "Responsive & Glassmorphic UI/UX",
        "Core Web Vitals Optimization"
      ]
    },
    {
      icon: "🐍",
      title: "Backend & API Architecture",
      description: "Designing secure, scalable, and production-ready server applications with Node.js and Python Django.",
      features: [
        "RESTful & GraphQL API Design",
        "Django REST Framework & Express.js",
        "Authentication (JWT, OAuth 2.0)",
        "Microservices & Middleware Logic"
      ]
    },
    {
      icon: "🗄️",
      title: "Database Engineering",
      description: "Architecting efficient database schemas, data migrations, and query performance tuning.",
      features: [
        "Relational Databases (PostgreSQL, MySQL)",
        "NoSQL Solutions (MongoDB)",
        "ORM Integration (Prisma, Django ORM)",
        "Data Indexing & Security"
      ]
    },
    {
      icon: "💻",
      title: "Full-Stack Custom Solutions",
      description: "End-to-end web application development tailored for businesses, dashboards, and SaaS products.",
      features: [
        "Custom Management Dashboards",
        "E-Commerce & Service Platforms",
        "Third-Party API & Payment Gateway Integration",
        "Clean, Maintainable Codebase"
      ]
    },
    {
      icon: "⚡",
      title: "Performance & Refactoring",
      description: "Auditing, optimizing, and modernizing existing web applications for maximum speed and stability.",
      features: [
        "Code Refactoring & Bug Fixing",
        "Lighthouse Score Enhancement",
        "Cross-Browser Compatibility",
        "Security Hardening & CORS Configuration"
      ]
    },
    {
      icon: "🎓",
      title: "Technical Consulting & Support",
      description: "Providing expert code reviews, architecture planning, and technical guidance for software projects.",
      features: [
        "System Architecture Design",
        "C++ & Algorithm Guidance",
        "Deployment & CI/CD Setup",
        "Technical Documentation & Mentorship"
      ]
    }
  ];

  return (
    <div className="container" style={{ padding: "40px 20px 20px" }}>
      {/* HEADER SECTION */}
      <section className="hero glass" style={{ gridTemplateColumns: "1fr", textAlign: "center" }}>
        <h1>Engineering Services</h1>
        <p>Comprehensive Full-Stack Development and Software Engineering Solutions Tailored to Your Business Goals</p>
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid">
        {servicesList.map((service, index) => (
          <div className="service-card glass" key={index}>
            <div className="service-header">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
            </div>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, fIndex) => (
                <li key={fIndex}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}