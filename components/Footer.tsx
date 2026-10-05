import Link from "next/link";

export default function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <footer className="glass">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/about">About Us</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
              <Link href="#">XML Sitemap</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="copyright">
              &copy; 2025 Glossy Touch. All rights reserved. Crafted with modern web technologies. 
              Provided by <a rel="nofollow" href="https://templatemo.com" target="_blank">TemplateMo</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}