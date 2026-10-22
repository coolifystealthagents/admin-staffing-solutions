import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ReviewMarquee } from '@/components/ReviewMarquee';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'About', description: `How ${site.name} approaches specialist remote administrative support.`, alternates: { canonical: '/about' } };
export default function AboutPage() { return <main>
  <PageHero eyebrow={`About ${site.name}`} title="Administrative capacity needs an operating system." description={`We help ${site.audience} shape focused remote support roles around real workflows, useful boundaries, and clear review points.`} />
  <section className="section intro"><p className="eyebrow">Our point of view</p><div><h2>Better delegation starts with a better role.</h2><p>Generic task lists fail when they ignore source systems, decision rights, quality evidence, and exception paths. We start with one real queue and design a role that a capable person can perform consistently.</p></div></section>
  <section className="content-wrap about-grid"><article><p className="eyebrow">Workflow first</p><h2>Specialist context matters</h2><p>Administrative work connects people, systems, records, and decisions. The role brief must explain where work enters, what complete means, who reviews it, and when it changes hands.</p></article><article><p className="eyebrow">Deliberate matching</p><h2>Selection follows the work</h2><p>A reliable assistant needs more than availability. Matching considers communication, systems familiarity, detail orientation, and the operating rhythm required by the documented role.</p></article><article><p className="eyebrow">Accountable management</p><h2>Your team keeps control</h2><p>Remote staff prepare, coordinate, document, and follow through. Executive, legal, HR, financial, security, and other sensitive decisions remain with your authorized owners.</p></article></section>
  <section className="section parent-story"><div className="parent-story-image"><Image src="/brand/stealth-agents-team-bacolod.webp" alt="Official Stealth Agents team in Bacolod" fill sizes="(max-width: 900px) 100vw, 50vw" /></div><div><Image src="/brand/stealth-agents-logo-black.png" alt="Stealth Agents" width={210} height={57} /><p className="eyebrow">Our parent company</p><h2>Backed by Stealth Agents.</h2><p>{site.name} is a subsidiary of Stealth Agents. The parent team contributes the recruiting and remote-staffing operating experience behind this focused administrative practice.</p><p>Official team, Bacolod. The image and testimonials on this site are first-party material published by Stealth Agents and are not independent evidence of outcomes.</p><Link className="button primary" href="/contact-us">Plan a consultation</Link></div></section>
  <ReviewMarquee />
</main>; }
