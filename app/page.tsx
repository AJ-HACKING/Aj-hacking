import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { capabilities, processSteps, serviceGroups } from "@/content/site";

export default function Home() {
  return <>
    <section className="hero"><div className="hero-art" aria-hidden="true"><div className="architectural-line line-a" /><div className="architectural-line line-b" /><div className="architectural-line line-c" /></div><div className="hero-content"><p className="eyebrow">COCHIN INTERIOR / KOCHI, KERALA</p><h1>INTERIORS.<br />EXECUTION.<br /><em>BUILT AROUND YOU.</em></h1><p className="hero-copy">Interior contracting, turnkey execution and renovation for residential and commercial spaces.</p><div className="button-row"><Link className="button button-primary" href="/contact">Start a project <span>↗</span></Link><Link className="button button-text" href="/projects">Explore our work <span>↓</span></Link></div></div><p className="hero-note">A considered approach to spaces</p></section>

    <section className="statement section"><SectionHeading eyebrow="Our point of view" title="MORE THAN INTERIORS." /><p className="statement-copy">COCHIN INTERIOR brings interior contracting, turnkey execution, renovation and related works together through one coordinated approach—so every part of a space can move forward with clarity.</p></section>

    <section className="capabilities"><div className="capability-intro"><p className="eyebrow">Core capabilities</p><p>From individual interior works to complete execution, our services are organised around the needs of your space.</p></div><div className="capability-grid">{capabilities.map((item) => <article className="capability" key={item.number}><div className="capability-image" aria-label="Image placeholder awaiting COCHIN INTERIOR visual assets" role="img"><span>{item.number}</span></div><div className="capability-body"><h3>{item.title}</h3><p>{item.description}</p><Link href="/services" aria-label={`Explore ${item.title} services`}>Explore <span>↗</span></Link></div></article>)}</div></section>

    <section className="services section"><SectionHeading eyebrow="Services" title="A COMPLETE SCOPE, CLEARLY ORGANISED." copy="From individual elements to coordinated execution, explore the work we can discuss for your space." /><div className="service-list">{serviceGroups.map((group, index) => <div className="service-group" key={group.title}><p className="service-index">0{index + 1}</p><div><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div><Link href="/services" aria-label={`Explore ${group.title} services`}>↗</Link></div>)}</div><Link className="button button-outline" href="/services">View all services <span>↗</span></Link></section>

    <section className="selected-work section"><SectionHeading eyebrow="Selected work" title="WORK, WHEN IT'S READY TO BE SHOWN." copy="Our project archive will feature genuine COCHIN INTERIOR work. Project imagery and details will be added as they are available for publication." /><div className="work-placeholder"><span>PROJECT ARCHIVE</span><p>Genuine project photography and details coming soon.</p></div></section>

    <section className="process section"><SectionHeading eyebrow="How we work" title="FROM FIRST CONVERSATION TO HANDOVER." /><ol>{processSteps.map((step, index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong></li>)}</ol><Link className="button button-text" href="/process">Our process <span>↗</span></Link></section>

    <section className="quality section"><div><p className="eyebrow">Materials & quality</p><h2>WHAT GOES INTO A SPACE MATTERS.</h2></div><p>Materials, hardware, specifications, workmanship and scope clarity all shape the outcome. Our materials and quality approach will be detailed here as project-specific information becomes available.</p><Link className="button button-outline" href="/materials-quality">Materials & quality <span>↗</span></Link></section>

    <section className="video-section section"><SectionHeading eyebrow="Film" title="COCHIN INTERIOR, IN MOTION." copy="Our advertisement film will be presented here in its original vertical composition, with an optimised web version and poster image." /><div className="video-placeholder" role="img" aria-label="Vertical advertisement video placeholder"><div><span>VERTICAL FILM</span><button type="button" disabled aria-label="Video player will be available when the advertisement asset is supplied">Play film <b>▶</b></button></div></div></section>

    <section className="about-preview section"><p className="eyebrow">About COCHIN INTERIOR</p><h2>BUILT ON A MORE COORDINATED WAY OF WORKING.</h2><p>Learn about our approach, capabilities and the people behind the company as verified company information becomes available.</p><Link className="button button-text" href="/about">About us <span>↗</span></Link></section>

    <section className="inspiration-preview section"><SectionHeading eyebrow="Inspiration" title="A LIBRARY OF POSSIBILITIES." copy="A curated gallery of design references, clearly identified as inspiration and organised by room and style." /><div className="inspiration-grid"><div>MODERN</div><div>WARM</div><div>MINIMAL</div></div><Link className="button button-outline" href="/inspiration">Explore inspiration <span>↗</span></Link></section>

    <section className="final-cta"><p className="eyebrow">Start a conversation</p><h2>LET'S BUILD<br /><em>YOUR SPACE.</em></h2><div className="button-row"><Link className="button button-gold" href="/contact">Start a project <span>↗</span></Link><a className="button button-light" href="tel:+919895182659">Call <span>↗</span></a><a className="button button-light" href="https://wa.me/919895182659">WhatsApp <span>↗</span></a></div></section>
  </>;
}
