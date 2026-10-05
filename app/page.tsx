import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const skills = [
    {
      title: "React & Next.js",
      icon: "⚛️",
      desc: "App Router, Server-Side Rendering (SSR), State Management, and High-Performance UI Component Engineering."
    },
    {
      title: "Node.js & Express",
      icon: "🟢",
      desc: "Scalable RESTful APIs, Microservices, Real-time WebSockets, Middleware, and Authentication Systems."
    },
    {
      title: "Python & Django",
      icon: "🐍",
      desc: "Django REST Framework, Secure ORM Architecture, Background Tasks, and Enterprise Backend Development."
    },
    {
      title: "Database Engineering",
      icon: "🗄️",
      desc: "Relational & NoSQL Systems (PostgreSQL, MySQL, MongoDB), Query Optimization, Schema Design, and ORM Integration."
    },
    {
      title: "Web Security & Auth",
      icon: "🔒",
      desc: "OAuth 2.0, JWT Authentication, Secure Cookie Storage, CORS Policies, Data Encryption, and Modern Best Practices."
    },
    {
      title: "DevOps & Workflow",
      icon: "🚀",
      desc: "Git/GitHub Version Control, CI/CD Deployment Pipelines (Vercel, Render), Environment Management, and Docker."
    }
  ];

  return (
    <div className="container" style={{ padding: "40px 20px 20px" }}>
      {/* HERO SECTION */}
      <section className="hero glass">
        <div className="hero-image">
          <Image
            src="/images/templatemo-futuristic-girl.jpg"
            alt="Full-Stack Engineering Experience"
            width={440}
            height={440}
            priority
          />
        </div>
        <div className="hero-content">
          <h1>Full-Stack Web Developer & Software Engineer</h1>
          <p>
            I specialize in crafting high-performance frontend interfaces using React & Next.js, 
            backed by robust and secure server architectures with Node.js and Python Django.
          </p>
          <Link href="/about" className="cta-button">
            Explore Experience
          </Link>
        </div>
      </section>

      {/* TECHNICAL SKILLS SECTION */}
      <section className="features">
        {skills.map((skill, index) => (
          <div className="feature-card glass" key={index}>
            <div className="feature-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}