"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header>
      <div className="container">
        <nav className="glass">
          {/* BRAND LOGO & NAME */}
          <Link href="/" className="logo">
            <div className="logo-icon">
              {/* Modern Developer Icon </ > */}
              <svg viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <polyline points="16 14 8 24 16 34" />
                <polyline points="32 14 40 24 32 34" />
                <line x1="26" y1="12" x2="22" y2="36" />
              </svg>
            </div>
            <span>Sliman.dev</span>
          </Link>

          {/* NAVIGATION LINKS */}
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