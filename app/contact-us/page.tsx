import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { ReviewMarquee } from '@/components/ReviewMarquee';
import { site } from '@/lib/site';
import './contact.css';

export const metadata: Metadata = { title: 'Contact Us | Administrative Staffing Consultation', description: 'Talk with Admin Staffing Solutions about a controlled remote administrative staffing workflow.', alternates: { canonical: '/contact-us' } };
const steps = [
  ['Workflow discovery', 'Map the queue, current owners, systems, completion standard, and exception paths.'],
  ['Role design', 'Define responsibilities, inputs, outputs, access, decision rights, review, and escalation.'],
  ['Candidate matching', 'Review remote professionals whose strengths fit the role and working rhythm.'],
  ['Controlled launch', 'Begin with documented work, a small batch, sampled quality, and an accountable manager.']
];
const faqs = [
  ['What administrative work can remote staff support?', 'Staff can coordinate calendars, organize approved inbox queues, maintain records, prepare meetings, update authorized customer fields, and track project actions.'],
  ['Can administrative staff make executive or regulated decisions?', 'No. Strategy, legal or HR judgments, financial approvals, contracts, customer commitments, security administration, and executive decisions stay with qualified and authorized owners.'],
  ['Can we start with one workflow?', 'Yes. A focused first workflow lets your team test documentation, access, review, communication, management capacity, and quality before the role expands.'],
  ['What happens after this form?', 'After a successful submission, you reach a confirmation page where you can choose a consultation time. The scheduling calendar is not shown before the form is completed.']
];

export default function ContactPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'ContactPage', name: `Contact ${site.name}`, url: `https://${site.domain}/contact-us`, description: 'Administrative staffing consultation.' };
  return <main className="contact-page">
    <section className="contact-conversion-fold" id="consultation-form">
      <div className="contact-container conversion-grid">
        <div className="conversion-story">
          <p className="eyebrow">Contact Us</p>
          <h1>Turn recurring administration into a controlled role.</h1>
          <p className="conversion-intro">Tell us where work is fragmented. We will help map a focused support role around visible ownership, useful evidence, and clear decision boundaries.</p>
          <ul className="conversion-signals" aria-label="Consultation scope">
            <li>One focused workflow</li><li>Clear decision boundaries</li><li>Reviewable handoffs</li>
          </ul>
          <div className="contact-command-art"><Image src="/images/contact-command-desk.svg" alt="Delegation command desk showing an intake queue, owners, evidence, and escalation" fill priority sizes="(max-width: 900px) 100vw, 44vw" /></div>
          <ReviewMarquee compact />
        </div>
        <div className="contact-form-card">
          <p className="eyebrow">Start here</p>
          <h2>Book a free consultation</h2>
          <p>Complete the form first. After successful submission, the confirmation page will offer scheduling.</p>
          <LeadForm source="contact-page-consultation" />
        </div>
      </div>
    </section>
    <section className="contact-section credibility"><div className="contact-container credibility-grid"><div className="credibility-image"><Image src="/brand/stealth-agents-team-bacolod.webp" alt="Official Stealth Agents team in Bacolod" fill sizes="(max-width: 900px) 100vw, 48vw" /></div><div><div className="parent-proof-plate" aria-label="Stealth Agents official team in Bacolod"><Image className="parent-proof-logo" src="/brand/stealth-agents-logo-black.png" alt="Stealth Agents" width={220} height={60} /><strong>Official team, Bacolod</strong></div><p className="eyebrow">Parent company</p><h2>Administrative focus, backed by Stealth Agents.</h2><p>{site.name} is a subsidiary of Stealth Agents. The parent organization contributes remote-staffing recruiting and operating experience while this site focuses on administrative role design.</p><p>This first-party team image and the reviews above are published by Stealth Agents. They are not independently verified performance claims.</p><Link className="button primary" href="#consultation-form">Start the consultation form</Link></div></div></section>
    <section className="contact-section"><div className="contact-container consultation-copy"><p className="eyebrow">Administrative staffing consultation</p><h2>Bring one real workflow.</h2><p>Start with recurring work that consumes attention across calendars, inboxes, records, meetings, customer administration, or projects. We will separate delegable preparation and coordination from sensitive judgment and approval.</p><h3>What to expect</h3><ul><li>A practical review of the queue, owners, systems, and handoffs.</li><li>Clear access, communication, approval, and escalation boundaries.</li><li>A candidate matching path shaped by the workflow and operating rhythm.</li><li>A controlled launch plan with an accountable internal manager.</li></ul><p className="contact-note"><strong>Keep sensitive data out of this form.</strong> Do not include credentials, private correspondence, customer records, financial data, or protected information.</p></div></section>
    <section className="contact-section"><div className="contact-container"><p className="eyebrow">A controlled path forward</p><h2>After you reach out</h2><div className="step-grid">{steps.map(([title, copy]) => <article key={title} className="step-card"><p className="card-kicker">Process stage</p><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="contact-section boundaries"><div className="contact-container narrow"><p className="eyebrow">Accountability stays clear</p><h2>Responsibility and boundaries</h2><p>Remote administrative staff can coordinate, prepare, organize, update authorized systems, communicate from approved guidance, track actions, and flag exceptions. They do not make executive, legal, HR, financial, compliance, privacy, or security decisions; sign contracts; move money; approve customer remedies; or act outside documented authority.</p></div></section>
    <section className="contact-section faq"><div className="contact-container narrow"><p className="eyebrow">Administrative staffing questions</p><h2>Frequently asked questions</h2>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
