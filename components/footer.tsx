import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <p className="wordmark">COCHIN <span>INTERIOR</span></p>
        <p>Interior contracting, turnkey execution and renovation for residential and commercial spaces.</p>
      </div>
      <div className="footer-grid">
        <address>5th Floor, Kandamkulathy Towers,<br />M.G. Road, Kochi - 682011,<br />Ernakulam, Kerala</address>
        <div><a href="tel:+919895182659">+91 98951 82659</a><br /><a href="tel:+916282591940">+91 62825 91940</a><br /><a href="mailto:contact@cochininterior.in">contact@cochininterior.in</a></div>
        <div className="footer-links"><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} COCHIN INTERIOR</span><span>cochininterior.in</span></div>
    </footer>
  );
}
