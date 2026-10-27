import { site } from './site';
import type { BlogPost, ResearchPost } from './types';
import { october12BlogPosts } from './october12BlogPosts';
import { october12ResearchPosts } from './october12ResearchPosts';
import { legacyBlogSections, legacyResearchSections } from './legacyEditorialContent';
import { october26BlogPosts } from './october26-blog';
import { october25BlogPosts } from './october25-blog';
import { october22BlogPosts } from './october22-blog';
import { october26ResearchPosts } from './october26-research';
import { october25ResearchPosts } from './october25-research';
import { october22ResearchPosts } from './october22-research';

export const blogPosts: BlogPost[] = [
  ...october26BlogPosts,
  ...october25BlogPosts,
  ...october22BlogPosts,
  {
    ...{
      "slug": "operations-manager-vs-admin-va",
      "title": "Operations manager vs admin VA",
      "description": "A practical guide to operations manager vs admin va for business owners, operations leaders, and executive teams.",
      "category": "Role design",
      "publishedAt": "2026-10-04",
      "readTime": "9 min read",
      "thumbnail": "/images/editorial/operations-manager-vs-admin-va.svg",
      "faq": [
        {
          "q": "When does the work require an operations manager?",
          "a": "Use an operations manager when the role must set priorities, change processes, resolve resource conflicts, or accept operational risk."
        },
        {
          "q": "What is a safe starting scope for an administrative VA?",
          "a": "Begin with a repeatable preparation queue whose sources, output checklist, reviewer, and escalation triggers are already known."
        },
        {
          "q": "Can the two roles work together?",
          "a": "Yes. The manager can own the operating decisions while the assistant maintains approved records, prepares options, and routes exceptions."
        }
      ],
      "internalService": "/services/executive-administration",
      "internalSibling": "/blog/admin-priority-system",
      "source": {
        "label": "United States Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    },
    sections: legacyBlogSections["operations-manager-vs-admin-va"],
  },
  {
    ...{
      "slug": "admin-priority-system",
      "title": "Build an administrative priority system",
      "description": "A practical guide to build an administrative priority system for business owners, operations leaders, and executive teams.",
      "category": "Administrative systems",
      "publishedAt": "2026-10-05",
      "readTime": "10 min read",
      "thumbnail": "/images/editorial/admin-priority-system.svg",
      "faq": [
        {
          "q": "Who should approve a priority change?",
          "a": "The owner with authority over the affected commitment should approve it, with the reason and displaced work recorded in the queue."
        },
        {
          "q": "How many priority bands are useful?",
          "a": "Use the smallest set that teams can apply consistently, with evidence rules and response expectations written for every band."
        },
        {
          "q": "What happens to blocked work?",
          "a": "Keep it visible with a reason, responsible resolver, evidence request, and scheduled review time."
        }
      ],
      "internalService": "/services/inbox-workflow-support",
      "internalSibling": "/blog/executive-meeting-handoff",
      "source": {
        "label": "United States Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    },
    sections: legacyBlogSections["admin-priority-system"],
  },
  {
    ...{
      "slug": "executive-meeting-handoff",
      "title": "Create an executive meeting handoff",
      "description": "A practical guide to create an executive meeting handoff for business owners, operations leaders, and executive teams.",
      "category": "Executive support",
      "publishedAt": "2026-10-06",
      "readTime": "11 min read",
      "thumbnail": "/images/editorial/executive-meeting-handoff.svg",
      "faq": [
        {
          "q": "Is a discussion note an approved decision?",
          "a": "No. Record a decision only when the authorized owner confirms the wording and scope; otherwise retain it as proposed or unresolved."
        },
        {
          "q": "When is an action assigned?",
          "a": "Assignment is complete when the named owner acknowledges the action, scope, due time, and relevant dependencies."
        },
        {
          "q": "What should the coordinator retain?",
          "a": "Retain the approved agenda version, linked sources, confirmed decisions, accepted actions, corrections, and final distribution record."
        }
      ],
      "internalService": "/services/records-administration",
      "internalSibling": "/blog/project-admin-status-rhythm",
      "source": {
        "label": "United States Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    },
    sections: legacyBlogSections["executive-meeting-handoff"],
  },
  {
    ...{
      "slug": "project-admin-status-rhythm",
      "title": "A project administration status rhythm",
      "description": "A practical guide to a project administration status rhythm for business owners, operations leaders, and executive teams.",
      "category": "Project coordination",
      "publishedAt": "2026-10-07",
      "readTime": "12 min read",
      "thumbnail": "/images/editorial/project-admin-status-rhythm.svg",
      "faq": [
        {
          "q": "Can an administrator decide project status?",
          "a": "An administrator may apply an approved status rule to evidence, but sponsors and delivery owners retain scope, risk, budget, and forecast decisions."
        },
        {
          "q": "How should missing updates appear?",
          "a": "Use an unknown or stale state with the missing source, responsible owner, affected milestone, and next review time."
        },
        {
          "q": "What makes a dependency complete?",
          "a": "Completion requires the promised artifact or event plus acknowledgment from the receiving owner under the documented acceptance rule."
        }
      ],
      "internalService": "/services/meeting-coordination",
      "internalSibling": "/blog/inbox-workflow-boundaries",
      "source": {
        "label": "United States Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    },
    sections: legacyBlogSections["project-admin-status-rhythm"],
  },
  {
    ...{
      "slug": "inbox-workflow-boundaries",
      "title": "Design inbox workflow boundaries",
      "description": "A practical guide to design inbox workflow boundaries for business owners, operations leaders, and executive teams.",
      "category": "Administrative systems",
      "publishedAt": "2026-10-08",
      "readTime": "13 min read",
      "thumbnail": "/images/editorial/inbox-workflow-boundaries.svg",
      "faq": [
        {
          "q": "Does forwarding a message transfer ownership?",
          "a": "No. Custody changes only when the next owner acknowledges the message and its permitted next action."
        },
        {
          "q": "Which inbox requests should pause?",
          "a": "Pause requests with uncertain authority, sensitive account changes, conflicting instructions, unusual commitments, or missing decisive evidence."
        },
        {
          "q": "How should outage work be closed?",
          "a": "Reconcile every temporary key, action, response, and assignment to the restored system before marking the item closed."
        }
      ],
      "internalService": "/services/customer-administration",
      "internalSibling": "/blog/operations-manager-vs-admin-va",
      "source": {
        "label": "United States Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    },
    sections: legacyBlogSections["inbox-workflow-boundaries"],
  }
];
blogPosts.sort((a, b) => Number(b.slug.startsWith('adminstaffingsolutions-')) - Number(a.slug.startsWith('adminstaffingsolutions-')) || String(b.publishedAt).localeCompare(String(a.publishedAt)));
export const researchPosts: ResearchPost[] = [
  ...october26ResearchPosts,
  ...october25ResearchPosts,
  ...october22ResearchPosts,
  {
    ...{
      "slug": "executive-administration-workflow-boundary-review-1",
      "title": "Executive administration: workflow boundary review",
      "summary": "A boundary review for executive administration maps which parts of calendar requests, briefing materials, travel changes, and executive follow-ups can move to a specialist and which decisions must remain with an authorized owner.",
      "cluster": "Executive support",
      "publishedAt": "2026-10-01",
      "thumbnail": "/images/editorial/executive-administration-workflow-boundary-review-1.svg",
      "finding": "The executive administration boundary is reviewable when a specialist may prepare options, maintain approved records, and coordinate follow-up, while priority calls, sensitive judgments, and executive commitments are explicitly withheld and escalated.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["executive-administration-workflow-boundary-review-1"],
  },
  {
    ...{
      "slug": "inbox-workflow-support-source-quality-audit-2",
      "title": "Inbox workflow support: source quality audit",
      "summary": "A source-traceability audit follows new messages, classifications, assignments, approved replies, and follow-up dates from intake to handoff, testing whether each status can be tied to an authoritative record rather than memory or chat alone.",
      "cluster": "Administrative systems",
      "publishedAt": "2026-10-02",
      "thumbnail": "/images/editorial/inbox-workflow-support-source-quality-audit-2.svg",
      "finding": "Traceability in shared inbox support depends on retaining the message origin, category, assigned owner, response authority, and closure status; without that chain, a reviewer cannot reliably reconstruct why the status changed.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["inbox-workflow-support-source-quality-audit-2"],
  },
  {
    ...{
      "slug": "records-administration-exception-pattern-study-3",
      "title": "Records administration: exception pattern study",
      "summary": "An operational-controls protocol defines access, instructions, review, and escalation for incoming files, naming changes, index entries, approved metadata, and retention handoffs so that routine coordination does not silently acquire decision authority.",
      "cluster": "Project coordination",
      "publishedAt": "2026-10-03",
      "thumbnail": "/images/editorial/records-administration-exception-pattern-study-3.svg",
      "finding": "Controls for records and documentation support become testable when least-privilege access and sampled review cover the source file, version, approved field change, custodian, and disposition status, with retention interpretation, legal classification, deletion approval, and policy exceptions kept outside the support role.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["records-administration-exception-pattern-study-3"],
  },
  {
    ...{
      "slug": "meeting-coordination-handoff-reliability-brief-4",
      "title": "Meeting coordination: handoff reliability brief",
      "summary": "A handoff-reliability brief examines how agenda requests, pre-reads, attendance changes, decisions, action owners, and due dates cross from preparation to an accountable owner, including acceptance, missing inputs, and returned work.",
      "cluster": "Role design",
      "publishedAt": "2026-10-04",
      "thumbnail": "/images/editorial/meeting-coordination-handoff-reliability-brief-4.svg",
      "finding": "A dependable meeting coordination handoff names the receiver, required evidence, acceptance signal, and exception route before the specialist marks work complete.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["meeting-coordination-handoff-reliability-brief-4"],
  },
  {
    ...{
      "slug": "customer-administration-review-consistency-report-5",
      "title": "Customer administration: review consistency report",
      "summary": "A support-review consistency report compares repeated samples of onboarding checkpoints, authorized profile updates, renewal dates, service questions, and exceptions to determine whether different reviewers apply the same completion and exception rules.",
      "cluster": "Executive support",
      "publishedAt": "2026-10-05",
      "thumbnail": "/images/editorial/customer-administration-review-consistency-report-5.svg",
      "finding": "Consistency in customer administration improves when reviewers use the same evidence fields: customer request, approved instruction, field change, internal owner, and resolution state; and document why an item was accepted, returned, or escalated.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["customer-administration-review-consistency-report-5"],
  },
  {
    ...{
      "slug": "project-administration-workflow-boundary-review-6",
      "title": "Project administration: workflow boundary review",
      "summary": "A boundary review for project administration maps which parts of milestone updates, dependency notices, evidence links, action logs, and escalation dates can move to a specialist and which decisions must remain with an authorized owner.",
      "cluster": "Administrative systems",
      "publishedAt": "2026-10-06",
      "thumbnail": "/images/editorial/project-administration-workflow-boundary-review-6.svg",
      "finding": "The project administration boundary is reviewable when a specialist may collect updates, maintain approved trackers, link evidence, and flag overdue dependencies, while scope changes, resource decisions, risk acceptance, budget approval, and delivery commitments are explicitly withheld and escalated.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["project-administration-workflow-boundary-review-6"],
  },
  {
    ...{
      "slug": "executive-administration-source-quality-audit-7",
      "title": "Executive administration: source quality audit",
      "summary": "A source-traceability audit follows calendar requests, briefing materials, travel changes, and executive follow-ups from intake to handoff, testing whether each status can be tied to an authoritative record rather than memory or chat alone.",
      "cluster": "Project coordination",
      "publishedAt": "2026-10-07",
      "thumbnail": "/images/editorial/executive-administration-source-quality-audit-7.svg",
      "finding": "Traceability in executive administration depends on retaining the request source, decision owner, approved option, and completion note; without that chain, a reviewer cannot reliably reconstruct why the status changed.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["executive-administration-source-quality-audit-7"],
  },
  {
    ...{
      "slug": "inbox-workflow-support-exception-pattern-study-8",
      "title": "Inbox workflow support: exception pattern study",
      "summary": "An operational-controls protocol defines access, instructions, review, and escalation for new messages, classifications, assignments, approved replies, and follow-up dates so that routine coordination does not silently acquire decision authority.",
      "cluster": "Role design",
      "publishedAt": "2026-10-08",
      "thumbnail": "/images/editorial/inbox-workflow-support-exception-pattern-study-8.svg",
      "finding": "Controls for shared inbox support become testable when least-privilege access and sampled review cover the message origin, category, assigned owner, response authority, and closure status, with novel promises, sensitive disclosures, and customer or executive decisions kept outside the support role.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["inbox-workflow-support-exception-pattern-study-8"],
  },
  {
    ...{
      "slug": "records-administration-handoff-reliability-brief-9",
      "title": "Records administration: handoff reliability brief",
      "summary": "A handoff-reliability brief examines how incoming files, naming changes, index entries, approved metadata, and retention handoffs cross from preparation to an accountable owner, including acceptance, missing inputs, and returned work.",
      "cluster": "Executive support",
      "publishedAt": "2026-10-01",
      "thumbnail": "/images/editorial/records-administration-handoff-reliability-brief-9.svg",
      "finding": "A dependable records and documentation support handoff names the receiver, required evidence, acceptance signal, and exception route before the specialist marks work complete.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["records-administration-handoff-reliability-brief-9"],
  },
  {
    ...{
      "slug": "meeting-coordination-review-consistency-report-10",
      "title": "Meeting coordination: review consistency report",
      "summary": "A support-review consistency report compares repeated samples of agenda requests, pre-reads, attendance changes, decisions, action owners, and due dates to determine whether different reviewers apply the same completion and exception rules.",
      "cluster": "Administrative systems",
      "publishedAt": "2026-10-02",
      "thumbnail": "/images/editorial/meeting-coordination-review-consistency-report-10.svg",
      "finding": "Consistency in meeting coordination improves when reviewers use the same evidence fields: agenda source, material version, decision owner, accepted action, and due date; and document why an item was accepted, returned, or escalated.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["meeting-coordination-review-consistency-report-10"],
  },
  {
    ...{
      "slug": "customer-administration-workflow-boundary-review-11",
      "title": "Customer administration: workflow boundary review",
      "summary": "A boundary review for customer administration maps which parts of onboarding checkpoints, authorized profile updates, renewal dates, service questions, and exceptions can move to a specialist and which decisions must remain with an authorized owner.",
      "cluster": "Project coordination",
      "publishedAt": "2026-10-03",
      "thumbnail": "/images/editorial/customer-administration-workflow-boundary-review-11.svg",
      "finding": "The customer administration boundary is reviewable when a specialist may coordinate approved steps, update permitted fields, track dates, and route unresolved issues, while commercial terms, refunds, contractual promises, identity decisions, and exception approval are explicitly withheld and escalated.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["customer-administration-workflow-boundary-review-11"],
  },
  {
    ...{
      "slug": "project-administration-source-quality-audit-12",
      "title": "Project administration: source quality audit",
      "summary": "A source-traceability audit follows milestone updates, dependency notices, evidence links, action logs, and escalation dates from intake to handoff, testing whether each status can be tied to an authoritative record rather than memory or chat alone.",
      "cluster": "Role design",
      "publishedAt": "2026-10-04",
      "thumbnail": "/images/editorial/project-administration-source-quality-audit-12.svg",
      "finding": "Traceability in project administration depends on retaining the update source, milestone owner, evidence link, dependency state, and escalation record; without that chain, a reviewer cannot reliably reconstruct why the status changed.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["project-administration-source-quality-audit-12"],
  },
  {
    ...{
      "slug": "executive-administration-exception-pattern-study-13",
      "title": "Executive administration: exception pattern study",
      "summary": "An operational-controls protocol defines access, instructions, review, and escalation for calendar requests, briefing materials, travel changes, and executive follow-ups so that routine coordination does not silently acquire decision authority.",
      "cluster": "Executive support",
      "publishedAt": "2026-10-05",
      "thumbnail": "/images/editorial/executive-administration-exception-pattern-study-13.svg",
      "finding": "Controls for executive administration become testable when least-privilege access and sampled review cover the request source, decision owner, approved option, and completion note, with priority calls, sensitive judgments, and executive commitments kept outside the support role.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["executive-administration-exception-pattern-study-13"],
  },
  {
    ...{
      "slug": "inbox-workflow-support-handoff-reliability-brief-14",
      "title": "Inbox workflow support: handoff reliability brief",
      "summary": "A handoff-reliability brief examines how new messages, classifications, assignments, approved replies, and follow-up dates cross from preparation to an accountable owner, including acceptance, missing inputs, and returned work.",
      "cluster": "Administrative systems",
      "publishedAt": "2026-10-06",
      "thumbnail": "/images/editorial/inbox-workflow-support-handoff-reliability-brief-14.svg",
      "finding": "A dependable shared inbox support handoff names the receiver, required evidence, acceptance signal, and exception route before the specialist marks work complete.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["inbox-workflow-support-handoff-reliability-brief-14"],
  },
  {
    ...{
      "slug": "records-administration-review-consistency-report-15",
      "title": "Records administration: review consistency report",
      "summary": "A support-review consistency report compares repeated samples of incoming files, naming changes, index entries, approved metadata, and retention handoffs to determine whether different reviewers apply the same completion and exception rules.",
      "cluster": "Project coordination",
      "publishedAt": "2026-10-07",
      "thumbnail": "/images/editorial/records-administration-review-consistency-report-15.svg",
      "finding": "Consistency in records and documentation support improves when reviewers use the same evidence fields: source file, version, approved field change, custodian, and disposition status; and document why an item was accepted, returned, or escalated.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["records-administration-review-consistency-report-15"],
  },
  {
    ...{
      "slug": "meeting-coordination-workflow-boundary-review-16",
      "title": "Meeting coordination: workflow boundary review",
      "summary": "A boundary review for meeting coordination maps which parts of agenda requests, pre-reads, attendance changes, decisions, action owners, and due dates can move to a specialist and which decisions must remain with an authorized owner.",
      "cluster": "Role design",
      "publishedAt": "2026-10-08",
      "thumbnail": "/images/editorial/meeting-coordination-workflow-boundary-review-16.svg",
      "finding": "The meeting coordination boundary is reviewable when a specialist may assemble approved materials, coordinate logistics, record accepted actions, and follow up, while substantive decisions, commitments, policy interpretation, and disputed action ownership are explicitly withheld and escalated.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["meeting-coordination-workflow-boundary-review-16"],
  },
  {
    ...{
      "slug": "customer-administration-source-quality-audit-17",
      "title": "Customer administration: source quality audit",
      "summary": "A source-traceability audit follows onboarding checkpoints, authorized profile updates, renewal dates, service questions, and exceptions from intake to handoff, testing whether each status can be tied to an authoritative record rather than memory or chat alone.",
      "cluster": "Executive support",
      "publishedAt": "2026-10-01",
      "thumbnail": "/images/editorial/customer-administration-source-quality-audit-17.svg",
      "finding": "Traceability in customer administration depends on retaining the customer request, approved instruction, field change, internal owner, and resolution state; without that chain, a reviewer cannot reliably reconstruct why the status changed.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["customer-administration-source-quality-audit-17"],
  },
  {
    ...{
      "slug": "project-administration-exception-pattern-study-18",
      "title": "Project administration: exception pattern study",
      "summary": "An operational-controls protocol defines access, instructions, review, and escalation for milestone updates, dependency notices, evidence links, action logs, and escalation dates so that routine coordination does not silently acquire decision authority.",
      "cluster": "Administrative systems",
      "publishedAt": "2026-10-02",
      "thumbnail": "/images/editorial/project-administration-exception-pattern-study-18.svg",
      "finding": "Controls for project administration become testable when least-privilege access and sampled review cover the update source, milestone owner, evidence link, dependency state, and escalation record, with scope changes, resource decisions, risk acceptance, budget approval, and delivery commitments kept outside the support role.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["project-administration-exception-pattern-study-18"],
  },
  {
    ...{
      "slug": "executive-administration-handoff-reliability-brief-19",
      "title": "Executive administration: handoff reliability brief",
      "summary": "A handoff-reliability brief examines how calendar requests, briefing materials, travel changes, and executive follow-ups cross from preparation to an accountable owner, including acceptance, missing inputs, and returned work.",
      "cluster": "Project coordination",
      "publishedAt": "2026-10-03",
      "thumbnail": "/images/editorial/executive-administration-handoff-reliability-brief-19.svg",
      "finding": "A dependable executive administration handoff names the receiver, required evidence, acceptance signal, and exception route before the specialist marks work complete.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["executive-administration-handoff-reliability-brief-19"],
  },
  {
    ...{
      "slug": "inbox-workflow-support-review-consistency-report-20",
      "title": "Inbox workflow support: review consistency report",
      "summary": "A support-review consistency report compares repeated samples of new messages, classifications, assignments, approved replies, and follow-up dates to determine whether different reviewers apply the same completion and exception rules.",
      "cluster": "Role design",
      "publishedAt": "2026-10-04",
      "thumbnail": "/images/editorial/inbox-workflow-support-review-consistency-report-20.svg",
      "finding": "Consistency in shared inbox support improves when reviewers use the same evidence fields: message origin, category, assigned owner, response authority, and closure status; and document why an item was accepted, returned, or escalated.",
      "sources": [
        {
          "label": "United States Small Business Administration",
          "url": "https://www.sba.gov/business-guide/manage-your-business"
        },
        {
          "label": "United States Department of Labor",
          "url": "https://www.dol.gov/general/topic/workhours"
        },
        {
          "label": "National Institute of Standards and Technology",
          "url": "https://www.nist.gov/privacy-framework"
        }
      ]
    },
    sections: legacyResearchSections["inbox-workflow-support-review-consistency-report-20"],
  }
];
researchPosts.sort((a, b) => Number(b.slug.startsWith('adminstaffingsolutions-')) - Number(a.slug.startsWith('adminstaffingsolutions-')) || String(b.publishedAt).localeCompare(String(a.publishedAt)));

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' }
];

export const secondaryNav = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/research', label: 'Research' }
];

blogPosts.unshift(...october12BlogPosts);
researchPosts.unshift(...october12ResearchPosts);

export function serviceBySlug(slug: string) { return site.services.find((service) => service.slug === slug); }
export function blogBySlug(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function researchBySlug(slug: string) { return researchPosts.find((post) => post.slug === slug); }
