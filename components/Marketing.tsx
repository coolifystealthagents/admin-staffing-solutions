import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { blogPosts } from '@/lib/content';
import { ArrowIcon, CheckIcon, SparkIcon } from './Icons';
import { ReviewMarquee } from './ReviewMarquee';

const CTA = ({ id, children }: { id: string; children: React.ReactNode }) => <Link id={id} className="button primary" href="/contact-us">{children} <ArrowIcon /></Link>;
function ServiceCards() { return <div className="service-grid">{site.services.map(service => <Link className="service-card reveal" href={`/services/${service.slug}`} key={service.slug}><p className="card-kicker">Specialist workflow</p><h3>{service.name}</h3><p>{service.short}</p><span className="text-link">Explore the role <ArrowIcon /></span></Link>)}</div>; }
function Principles() { return <div className="principles">{site.principles.map(item => <div key={item}><CheckIcon /><span>{item}</span></div>)}</div>; }
function Latest() { return <div className="article-grid">{blogPosts.slice(0, 3).map(post => <Link href={`/blog/${post.slug}`} className="article-card" key={post.slug}><span className="pill">{post.category}</span><h3>{post.title}</h3><p>{post.description}</p><span className="text-link">Read the guide <ArrowIcon /></span></Link>)}</div>; }

export function HomePage() {
  return <main className={`home design-${site.design}`}>
    <section className="hero"><div className="hero-copy"><p className="eyebrow">{site.eyebrow}</p><h1>{site.hero} <em>{site.heroAccent}</em></h1><p className="hero-body">{site.heroBody}</p><div className="hero-actions"><CTA id="cta-home-hero-bookcall">Book a free consultation</CTA><Link className="quiet-link" href="/services">See specialist roles</Link></div><Principles /></div><div className="hero-visual"><Image src={site.heroImage} alt={site.heroAlt} fill priority sizes="(max-width: 900px) 100vw, 54vw" /><div className="hero-label"><SparkIcon /><span>{site.manifesto}</span></div></div></section>
    <section className="command-strip" aria-label="Operating model"><span>Clear queue</span><span>Named owner</span><span>Visible evidence</span><span>Defined escalation</span></section>
    <section className="section intro"><p className="eyebrow">Specialist support, shaped around your work</p><div><h2>Build capacity without lowering the bar.</h2><p>{site.manifesto} Your assistant works from documented priorities, clear decision rights, and a practical review rhythm.</p></div></section>
    <section className="section services"><div className="section-heading"><p className="eyebrow">Roles that fit the work</p><h2>Choose support your team can actually use.</h2></div><ServiceCards /></section>
    <section className="section method"><div className="workflow-board" aria-label="Workflow diagram"><div><strong>Intake</strong><span>Approved source</span></div><div><strong>Prepare</strong><span>Documented standard</span></div><div><strong>Review</strong><span>Accountable owner</span></div><div><strong>Improve</strong><span>Evidence loop</span></div></div><div><p className="eyebrow">A useful working model</p><h2>Define. Delegate. Improve.</h2><p>Start with recurring work that already has an owner, a standard, and a clear escalation path. Then create a small review loop that makes the handoff stronger over time.</p><ol><li><strong>Define the boundary.</strong> Separate preparation and coordination from licensed or executive judgment.</li><li><strong>Document the handoff.</strong> Set inputs, output format, review points, and exception rules.</li><li><strong>Improve with evidence.</strong> Review a focused sample and update the process when patterns emerge.</li></ol><CTA id="cta-home-method-consultation">Plan a free consultation</CTA></div></section>
    <ReviewMarquee />
    <section className="section journal"><div className="section-heading"><p className="eyebrow">Field notes</p><h2>Practical guidance for better delegation.</h2></div><Latest /></section>
    <section className="closing"><p className="eyebrow">Make room for the work only you can do</p><h2>Let us map your first specialist support role.</h2><p>A focused conversation can turn scattered tasks into a clear, reviewable role brief.</p><CTA id="cta-home-closing-schedulecall">Schedule a free call</CTA></section>
  </main>;
}
