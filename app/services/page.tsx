import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ArrowIcon } from '@/components/Icons';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Administrative staffing services', description: `Explore remote administrative support roles shaped for ${site.audience}.`, alternates: { canonical: '/services' } };

const decisionGuides = [
  ['Start with the queue, not a job title', 'List where work arrives, who owns the outcome, which systems hold the source record, and what proves completion. A useful role begins with a recurring queue that can be observed and reviewed.'],
  ['Separate preparation from judgment', 'Coordination, drafting, organizing, updating authorized fields, and following up can often be delegated. Strategy, legal or HR judgment, financial approval, contracts, security administration, and customer remedies remain with authorized internal owners.'],
  ['Match access to the first workflow', 'Grant only the systems and records required for the agreed starting queue. Use named accounts, least-privilege permissions, and a documented path for exceptions rather than broad access intended for future work.'],
  ['Plan management capacity', 'A remote specialist still needs an accountable manager, current instructions, timely answers, sampled review, and a way to escalate ambiguity. If the internal team cannot provide those controls, narrow the launch scope first.']
];

const operatingControls = [
  ['Intake', 'Define required fields, accepted sources, priority rules, and what happens when information is incomplete.'],
  ['Authority', 'State what the specialist may prepare or update, what requires approval, and who makes the final decision.'],
  ['Evidence', 'Keep links, timestamps, status changes, and handoff notes that let a reviewer reconstruct important work.'],
  ['Review', 'Sample completed items, inspect exceptions, correct the process, and expand only after the first queue is stable.']
];

const examples = [
  ['Calendar pressure', 'Choose executive support when the recurring problem is scheduling, briefing preparation, travel coordination, and follow-up under an executive owner.'],
  ['Unowned messages', 'Choose inbox support when messages need classification, assignment, approved replies, follow-up dates, and a visible escalation path.'],
  ['Scattered source records', 'Choose records support when files, naming, indexes, approved fields, and retention handoffs need consistent administration.'],
  ['Meetings without closure', 'Choose meeting support when agendas, materials, decisions, action owners, deadlines, and acceptance need one reliable workflow.'],
  ['Customer setup drift', 'Choose customer administration when onboarding checkpoints, approved updates, renewal dates, and unresolved exceptions need coordination without transferring commercial authority.'],
  ['Project status ambiguity', 'Choose project administration when milestones, dependencies, evidence links, action logs, and escalation notes need a dependable reporting rhythm.']
];

const faqs = [
  ['Which role should we start with?', 'Start with the queue that is frequent, documentable, and costly to leave fragmented. If several services appear relevant, choose the one that owns the first measurable outcome and treat adjacent tasks as later scope.'],
  ['Can one specialist support more than one workflow?', 'Possibly, after the first workflow has stable instructions, access, review, and capacity. Combining unrelated queues at launch makes ownership and quality harder to diagnose.'],
  ['What should stay internal?', 'Keep executive judgment, employment decisions, legal and compliance interpretation, financial authorization, contracts, security administration, and promises that bind the business with qualified internal owners.'],
  ['How do we evaluate a launch?', 'Agree on observable measures before work starts: queue age, missing inputs, exception rate, review findings, handoff acceptance, and whether the source record supports reconstruction. These are operating signals, not guaranteed performance outcomes.']
];

export default function ServicesPage() { return <main>
  <PageHero eyebrow="Services" title="Specialist support for work that must stay organized." description="Choose a focused administrative role, then define the systems, boundaries, and review points that make the handoff reliable." image="/images/services-index.svg" imageAlt="Administrative service map connecting six specialist work queues to owners and review points" imageFit="contain" />

  <section className="section service-intro"><div><p className="eyebrow">A role, not a task pile</p><h2>Design capacity around an operating queue.</h2></div><div><p>Each service starts with work already moving through your business. We identify its source, accountable owner, completion standard, decision boundary, and escalation path before expanding scope.</p><p>The service pages below describe practical inputs, deliverables, controls, scenarios, and exclusions. They are planning guides, not promises that every task or system is suitable for delegation.</p></div></section>

  <section className="content-wrap content-grid" aria-label="Administrative staffing services">{site.services.map(service => <Link className="content-card" href={`/services/${service.slug}`} key={service.slug}><p className="card-kicker">Administrative specialist</p><h2>{service.name}</h2><p>{service.short}</p><ul>{service.tasks.slice(0, 3).map(task => <li key={task}>{task}</li>)}</ul><span className="text-link">View role details <ArrowIcon /></span></Link>)}</section>

  <section className="section service-prose">
    <section><p className="eyebrow">Decision guide</p><h2>Test whether the work is ready before choosing a role.</h2><div className="about-grid">{decisionGuides.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="control-panel"><div><p className="eyebrow">What can move</p><h2>Preparation and coordination</h2><p>A specialist can organize approved inputs, prepare drafts, maintain authorized records, coordinate dates, track actions, and surface exceptions. Instructions should identify the source of truth and the evidence expected at handoff.</p></div><div><p className="eyebrow">What stays accountable</p><h2>Judgment and approval</h2><p>Your organization retains management, privacy, security, legal, HR, financial, contractual, and customer authority. A remote role supports the decision process; it does not inherit authority merely because it can access the workflow.</p></div></section>

    <section><p className="eyebrow">Choose by operating problem</p><h2>Six common starting points.</h2><div className="scenario-grid">{examples.map(([title, copy], index) => <article key={title}><p className="card-kicker">Example {index + 1}</p><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="workflow-section"><p className="eyebrow">A controlled launch</p><h2>Build the handoff before adding volume.</h2><p>A launch should be small enough to inspect. Use real but appropriate work, keep sensitive data out until access is approved, and make exceptions visible instead of improvising around them.</p><div className="workflow-board">{operatingControls.map(([title, copy]) => <div key={title}><strong>{title}</strong><span>{copy}</span></div>)}</div><p>After the pilot, compare the completed record with the agreed standard. Fix unclear inputs, permissions, ownership, or review before adding adjacent queues.</p></section>

    <section className="faq"><p className="eyebrow">Service planning questions</p><h2>Questions to resolve before matching.</h2>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
  </section>

  <section className="section operating-model"><div className="section-heading"><p className="eyebrow">How matching works</p><h2>A controlled path from need to useful capacity.</h2></div><div className="workflow-board"><div><strong>Discover</strong><span>Map the workflow</span></div><div><strong>Design</strong><span>Set scope and controls</span></div><div><strong>Match</strong><span>Review role-aligned talent</span></div><div><strong>Launch</strong><span>Pilot and improve</span></div></div><Link className="button primary" href="/contact-us">Design your first role</Link></section>
</main>; }
