import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ArrowIcon } from '@/components/Icons';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Administrative staffing services', description: `Explore remote administrative support roles shaped for ${site.audience}.`, alternates: { canonical: '/services' } };
export default function ServicesPage() { return <main>
  <PageHero eyebrow="Services" title="Specialist support for work that must stay organized." description="Choose a focused administrative role, then define the systems, boundaries, and review points that make the handoff reliable." />
  <section className="section service-intro"><div><p className="eyebrow">A role, not a task pile</p><h2>Design capacity around an operating queue.</h2></div><p>Each service starts with the work already moving through your business. We identify its source, accountable owner, completion standard, decision boundary, and escalation path before expanding scope.</p></section>
  <section className="content-wrap content-grid">{site.services.map(service => <Link className="content-card" href={`/services/${service.slug}`} key={service.slug}><p className="card-kicker">Administrative specialist</p><h2>{service.name}</h2><p>{service.short}</p><ul>{service.tasks.slice(0, 3).map(task => <li key={task}>{task}</li>)}</ul><span className="text-link">View role details <ArrowIcon /></span></Link>)}</section>
  <section className="section operating-model"><div className="section-heading"><p className="eyebrow">How matching works</p><h2>A controlled path from need to useful capacity.</h2></div><div className="workflow-board"><div><strong>Discover</strong><span>Map the workflow</span></div><div><strong>Design</strong><span>Set scope and controls</span></div><div><strong>Match</strong><span>Review role-aligned talent</span></div><div><strong>Launch</strong><span>Pilot and improve</span></div></div><Link className="button primary" href="/contact-us">Design your first role</Link></section>
</main>; }
