import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';
import { serviceDetails } from '@/lib/service-details';


export function generateStaticParams() { return site.services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const service = serviceBySlug(slug); return service ? { title: service.name, description: service.short, alternates: { canonical: `/services/${slug}` } } : {}; }

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();
  const related = site.services.filter(item => item.slug !== slug).slice(0, 3);
  return <main className="service-detail">
    <PageHero eyebrow="Administrative staffing service" title={service.name} description={service.short} image={service.heroImage} imageAlt={service.heroAlt} imageFit="contain"><Link id={`cta-services-${service.slug}-bookcall`} className="button primary" href="/contact-us">Discuss this role</Link></PageHero>
    <section className="content-wrap service-prose">
      <section><p className="eyebrow">Role fit</p><h2>Who this role is for</h2><p>This service is designed for teams that can name the recurring queue, the accountable internal owner, and the evidence that shows complete work. It adds preparation and coordination capacity without moving executive or regulated judgment away from your organization.</p><ul>{detail.audience.map(item => <li key={item}>{item}</li>)}</ul></section>
      <section className="split-section"><div><p className="eyebrow">Handoff design</p><h2>Inputs and access</h2><p>A reliable handoff begins with controlled sources, explicit access, and examples of acceptable work. Credentials should never be placed in a role brief or consultation form.</p><ul>{detail.inputs.map(item => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">Visible output</p><h2>Deliverables</h2><p>Outputs should make status, evidence, ownership, and exceptions easy for your manager to inspect.</p><ul>{detail.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div></section>
      <section className="control-panel"><div><p className="eyebrow">Review system</p><h2>Quality controls</h2><p>Start with a small batch, review a focused sample, and update the operating instructions when a pattern appears. Quality review should improve the system rather than merely correct one task.</p><ul>{detail.controls.map(item => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">Authority</p><h2>Decision boundaries</h2><p>Your accountable leaders retain strategy, approvals, system ownership, and sensitive decisions. Escalation is a successful outcome when the work falls outside the documented path.</p><ul>{detail.boundaries.map(item => <li key={item}>{item}</li>)}</ul></div></section>
      <section><p className="eyebrow">A practical launch</p><h2>Common starting scenarios</h2><div className="scenario-grid">{detail.scenarios.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></section>
      <section className="workflow-section"><p className="eyebrow">Controlled onboarding</p><h2>From role brief to stable workflow</h2><div className="workflow-board"><div><strong>Map</strong><span>Queue, owner, sources</span></div><div><strong>Match</strong><span>Skills and working rhythm</span></div><div><strong>Pilot</strong><span>Small batch and review</span></div><div><strong>Improve</strong><span>Evidence-led coaching</span></div></div><p>The consultation maps one concrete workflow before candidate matching. During launch, your team retains account ownership and reviews the first outputs against a short checklist. Scope expands only after the original workflow is stable and management capacity is available.</p><Link id={`cta-services-${service.slug}-consultation`} className="button primary" href="/contact-us">Plan a free consultation</Link></section>
      <section className="faq"><p className="eyebrow">Role questions</p><h2>Frequently asked questions</h2>{detail.faq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</section>
      <section><p className="eyebrow">Build the right support mix</p><h2>Related services</h2><div className="related-grid">{related.map(item => <Link href={`/services/${item.slug}`} key={item.slug}><h3>{item.name}</h3><p>{item.short}</p></Link>)}</div></section>
    </section>
  </main>;
}
