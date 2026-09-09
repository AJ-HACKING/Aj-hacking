import Link from "next/link";

export default async function PlaceholderPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const label = slug.join(" / ").replace(/-/g, " ");
  return <section className="section" style={{ minHeight: "65vh", paddingTop: "160px" }}>
    <p className="eyebrow">COCHIN INTERIOR</p>
    <h1 style={{ color: "var(--forest)", fontSize: "clamp(52px, 8vw, 110px)", textTransform: "uppercase" }}>{label}</h1>
    <p style={{ maxWidth: "560px", fontSize: "17px" }}>This page is planned for a later implementation phase. The foundation route is in place; verified content will be added before publication.</p>
    <Link className="button button-outline" href="/">Return home <span>↗</span></Link>
  </section>;
}
