import Link from "next/link";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/inspiration", label: "Inspiration" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="COCHIN INTERIOR home">
        COCHIN <span>INTERIOR</span>
      </Link>
      <nav aria-label="Main navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <Link className="header-cta" href="/contact">Start a project <span aria-hidden="true">↗</span></Link>
      <details className="mobile-menu">
        <summary aria-label="Open menu"><i /><i /></summary>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/contact">Start a project ↗</Link>
        </nav>
      </details>
    </header>
  );
}
