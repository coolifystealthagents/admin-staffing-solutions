export type ServiceDetail = {
  audience: string[]; inputs: string[]; deliverables: string[]; controls: string[]; boundaries: string[]; scenarios: { title: string; copy: string }[]; faq: { q: string; a: string }[];
};

const sharedControls = [
  'A written acceptance checklist for the selected workflow',
  'A named internal reviewer and a predictable sample review rhythm',
  'Visible source references, status, next owner, and exception notes',
  'Least-privilege access with account ownership retained by your team'
];

export const serviceDetails: Record<string, ServiceDetail> = {
  'executive-administration': {
    audience: ['Executives whose calendars and action queues change frequently', 'Operations leaders coordinating decisions across several owners', 'Founders who need preparation and follow through without delegating authority'],
    inputs: ['Approved calendar access and scheduling rules', 'Meeting purpose, attendee context, travel constraints, and priority definitions', 'An action register with owners, due dates, and escalation triggers'],
    deliverables: ['Conflict-checked calendar proposals', 'Meeting briefs with source links and open decisions', 'Current action logs and concise exception summaries', 'Prepared routine communications for owner approval'],
    controls: sharedControls,
    boundaries: ['The assistant does not make executive decisions or commit the company', 'Sensitive correspondence, employment matters, legal questions, and financial approvals route to authorized owners', 'Priority conflicts outside written rules pause for review'],
    scenarios: [{ title: 'Calendar congestion', copy: 'Create a conflict register, collect constraints, and present review-ready options while the executive retains the final decision.' }, { title: 'Meeting preparation drift', copy: 'Standardize agendas, source links, attendee context, and open decisions so preparation is useful and repeatable.' }, { title: 'Action loss after meetings', copy: 'Maintain a visible action register with the exact owner, due date, evidence, and escalation status.' }],
    faq: [{ q: 'Can the assistant accept meetings for an executive?', a: 'Only within written scheduling rules. Ambiguous priorities, sensitive attendees, and exceptions go to the executive or delegated owner.' }, { q: 'What is a safe first workflow?', a: 'Begin with one calendar or meeting-preparation queue where constraints and an internal reviewer are already known.' }, { q: 'How is quality assessed?', a: 'Sample conflict checks, source accuracy, action ownership, and escalation timing against an agreed checklist.' }]
  },
  'inbox-workflow-support': {
    audience: ['Leaders with high-volume shared or individual inboxes', 'Teams losing requests between email and systems of record', 'Managers who need a visible queue without surrendering response authority'],
    inputs: ['Approved inbox access, category rules, and sender sensitivity guidance', 'Response templates, service standards, and escalation matrix', 'The designated system of record for next actions'],
    deliverables: ['Categorized messages and a prioritized review queue', 'Draft responses grounded in approved guidance', 'Recorded next actions, owners, and follow-up dates', 'Immediate flags for security, legal, financial, or customer-risk exceptions'],
    controls: sharedControls,
    boundaries: ['No invented policy, pricing, commitments, or legal interpretation', 'Credentials, access changes, payment requests, and suspicious messages escalate immediately', 'Final responses remain subject to the approval level you define'],
    scenarios: [{ title: 'Shared inbox backlog', copy: 'Classify the queue, identify stale items, and establish ownership without silently closing ambiguous requests.' }, { title: 'Inconsistent follow through', copy: 'Move approved next actions into a visible register with owners and due dates.' }, { title: 'Repeated routine questions', copy: 'Prepare drafts from controlled templates and flag gaps in the source guidance.' }],
    faq: [{ q: 'Will the assistant send replies?', a: 'Sending rights depend on your approval model. Many teams start with draft-only support and expand after review evidence is strong.' }, { q: 'What messages should always escalate?', a: 'Security concerns, legal notices, payment changes, confidential personnel matters, and any request outside written authority.' }, { q: 'How do we avoid losing context?', a: 'Require source links, category, current status, next owner, and due date in the system of record.' }]
  },
  'records-administration': {
    audience: ['Operations teams with inconsistent files or incomplete fields', 'Businesses preparing records for accountable review', 'Managers who need dependable retrieval and change traceability'],
    inputs: ['Approved source documents and a defined system of record', 'Naming, retention, field, and version standards', 'Rules for duplicates, missing information, and restricted data'],
    deliverables: ['Organized records with consistent names and metadata', 'Completed authorized fields with source references', 'Duplicate, missing-data, and exception logs', 'Review queues for records requiring owner judgment'],
    controls: sharedControls,
    boundaries: ['The assistant does not determine legal retention policy or certify compliance', 'Restricted data follows your privacy and security controls', 'Unclear sources and conflicting records remain open and are escalated'],
    scenarios: [{ title: 'File naming migration', copy: 'Inventory source files, apply approved naming rules, and preserve a change log for review.' }, { title: 'Incomplete operational records', copy: 'Check required fields, link valid sources, and return exceptions to the correct owner.' }, { title: 'Duplicate sources', copy: 'Identify likely duplicates and prepare a review set without deleting records outside written authority.' }],
    faq: [{ q: 'Can staff clean up legacy files?', a: 'Yes, when source boundaries, naming rules, restricted-data handling, and deletion authority are explicit.' }, { q: 'Who owns retention decisions?', a: 'Your legal, compliance, privacy, security, and business owners retain policy and deletion decisions.' }, { q: 'What should a quality sample inspect?', a: 'Naming, field accuracy, source lineage, access classification, duplicate handling, and exception notes.' }]
  },
  'meeting-coordination': {
    audience: ['Teams spending too much time arranging recurring meetings', 'Cross-functional groups with weak agenda and action discipline', 'Leaders who need decisions and commitments captured consistently'],
    inputs: ['Meeting purpose, required attendees, constraints, and cadence', 'Agenda template, source materials, and note-taking rules', 'Decision and action-register standards'],
    deliverables: ['Coordinated invitations and logistics', 'Review-ready agendas and pre-read packets', 'Decision and action records with accountable owners', 'Follow-up reminders and unresolved-item summaries'],
    controls: sharedControls,
    boundaries: ['The assistant records decisions but does not make them', 'Confidential sessions and restricted notes follow designated access rules', 'Ambiguous commitments are confirmed with the accountable owner'],
    scenarios: [{ title: 'Recurring operations meeting', copy: 'Collect updates, prepare a focused agenda, and roll unresolved actions forward with visible ownership.' }, { title: 'Cross-team decision meeting', copy: 'Assemble source material and record the decision, rationale, owner, and follow-up evidence.' }, { title: 'External attendee coordination', copy: 'Manage approved logistics while sensitive context and commitments remain with the host.' }],
    faq: [{ q: 'Can the assistant write meeting minutes?', a: 'Yes. The accountable chair should confirm sensitive decisions, commitments, and any material ambiguity.' }, { q: 'What happens when an owner is unclear?', a: 'The action stays open and is escalated rather than assigned by assumption.' }, { q: 'How do meetings become more useful?', a: 'Tie each agenda item to a purpose, source, desired decision, owner, and documented next step.' }]
  },
  'customer-administration': {
    audience: ['Customer teams with repetitive account and onboarding administration', 'Managers needing consistent records across service handoffs', 'Businesses that want faster preparation without delegating remedies or commitments'],
    inputs: ['Approved customer systems, fields, templates, and service standards', 'Identity, privacy, and access procedures', 'Escalation rules for complaints, credits, contracts, and sensitive data'],
    deliverables: ['Current authorized customer fields and request records', 'Prepared onboarding and routine update communications', 'Visible request status, next owner, and evidence', 'Exception queues for commitments or judgment'],
    controls: sharedControls,
    boundaries: ['No pricing, contract, refund, credit, or service-remedy decisions', 'Identity, privacy, security, and payment concerns escalate to authorized staff', 'Customer commitments must come from approved guidance or an accountable owner'],
    scenarios: [{ title: 'Onboarding administration', copy: 'Track required items, prepare approved updates, and flag missing information before the first review.' }, { title: 'Account record hygiene', copy: 'Update authorized fields from valid sources and preserve traceability.' }, { title: 'Routine request routing', copy: 'Document the request and place it with the correct owner without promising an unapproved result.' }],
    faq: [{ q: 'Can staff communicate with customers?', a: 'Yes, within approved templates, channels, and authority. Exceptions and material commitments route to your team.' }, { q: 'Can staff issue refunds or credits?', a: 'No, unless a separate, tightly controlled authorization expressly allows it. The standard role prepares evidence for an authorized decision.' }, { q: 'How is customer data protected?', a: 'Use least-privilege access, approved systems, data handling rules, and regular access review under your security program.' }]
  },
  'project-administration': {
    audience: ['Project leaders whose status is scattered across tools', 'Teams needing consistent milestone and risk follow through', 'Managers who want decision-ready reporting without outsourcing delivery accountability'],
    inputs: ['Approved plan, milestones, owners, dependencies, and status definitions', 'Source systems and reporting cadence', 'Risk, issue, decision, and escalation rules'],
    deliverables: ['Current milestone and dependency records', 'Evidence-linked status summaries', 'Risk, issue, action, and decision registers', 'Follow-up queues with accountable owners and due dates'],
    controls: sharedControls,
    boundaries: ['The assistant reports status but does not declare unsupported progress', 'Scope, budget, staffing, vendor, and priority decisions stay with authorized leaders', 'Conflicting sources are disclosed and escalated'],
    scenarios: [{ title: 'Weekly status preparation', copy: 'Collect approved evidence, identify stale updates, and prepare a concise report that separates fact from open judgment.' }, { title: 'Milestone drift', copy: 'Surface dependency changes, missing owners, and due-date exceptions for the project lead.' }, { title: 'Decision traceability', copy: 'Maintain a decision register with source, date, accountable owner, and affected work.' }],
    faq: [{ q: 'Is this a project manager replacement?', a: 'No. The role supports administration and visibility while scope, tradeoffs, leadership, and delivery accountability remain with your project owner.' }, { q: 'What counts as status evidence?', a: 'An approved system update, completed artifact, owner confirmation, or other source your governance model accepts.' }, { q: 'How should risks be handled?', a: 'Record the condition and evidence, then escalate through the defined path without inventing probability or business impact.' }]
  }
};
