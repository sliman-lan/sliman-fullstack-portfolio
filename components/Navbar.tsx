"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header>
      <div className="container">
        <nav className="glass">
          <Link href="/" className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 48 48" fill="white" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="5" opacity="0.9"/>
                <circle cx="32" cy="16" r="4" opacity="0.8"/>
                <circle cx="16" cy="32" r="4" opacity="0.7"/>
                <circle cx="32" cy="32" r="5" opacity="0.85"/>
                <circle cx="24" cy="8" r="2" opacity="1"/>
                <circle cx="8" cy="24" r="2" opacity="0.9"/>
                <circle cx="40" cy="24" r="2" opacity="0.9"/>
                <circle cx="24" cy="40" r="2" opacity="1"/>
                <circle cx="8" cy="8" r="1" opacity="0.6"/>
                <circle cx="40" cy="8" r="1" opacity="0.6"/>
                <circle cx="8" cy="40" r="1" opacity="0.6"/>
                <circle cx="40" cy="40" r="1" opacity="0.6"/>
              </svg>
            </div>
            <span>Glossy Touch</span>
          </Link>
          <div className="nav-links">
            <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
            <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
            <Link href="/services" className={pathname === "/services" ? "active" : ""}>Services</Link>
            <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}