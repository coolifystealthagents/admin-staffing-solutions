import type { BlogPost } from './types';

export const october22BlogPosts: BlogPost[] = [
  {
    "slug": "admin-shared-inbox-triage",
    "title": "Triage the Administrative Shared Inbox",
    "description": "A queue design for incoming requests, categories, ownership, and response expectations.",
    "category": "People operations",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/admin-shared-inbox-triage.webp",
    "sections": [
      {
        "heading": "Set the shared inbox triage scope",
        "paragraphs": [
          "Triage the Administrative Shared Inbox starts with a written boundary. Name the request, the approved source, the owner, the evidence, and the point where the work must stop. A clear entry rule keeps routine administration separate from decisions that require authority.",
          "The main risk is that sensitive requests can wait behind routine mail or reach the wrong owner. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes sender, request category, received time, owner, response, and closure state. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "The operations lead confirms the decision or exception. The administrative role can classify requests, check approved guidance, and route exceptions, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about policy, priority, and employment decisions remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples from the workflow. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review age by category, misroutes, and missing information. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a client message mixes a meeting request with a contract question. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one request category with a known owner. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for shared inbox triage?",
        "a": "Decisions about policy, priority, and employment decisions and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including sender, request category, received time, owner, response, and closure state."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that age by category, misroutes, and missing information are visible and reproducible."
      }
    ],
    "internalService": "/services/inbox-workflow-support",
    "internalSibling": "/blog/calendar-coverage-handoff",
    "source": {
      "label": "U.S. Government Accountability Office",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  },
  {
    "slug": "calendar-coverage-handoff",
    "title": "Hand Off Calendar Coverage Across Time Zones",
    "description": "A coverage plan for calendars, ownership, conflicts, and backup authority.",
    "category": "Meeting coordination",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/calendar-coverage-handoff.webp",
    "sections": [
      {
        "heading": "Set the calendar coverage scope",
        "paragraphs": [
          "Hand Off Calendar Coverage Across Time Zones starts with a written boundary. Name the request, the approved source, the owner, the evidence, and the point where the work must stop. A clear entry rule keeps routine administration separate from decisions that require authority.",
          "The main risk is that a meeting can be missed when two assistants assume the other owns the calendar. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes calendar, time zone, owner, backup, meeting purpose, and confirmation. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "The executive operations owner confirms the decision or exception. The administrative role can check conflicts, prepare options, and send approved invitations, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about accepting priorities, rescheduling sensitive meetings, and executive preferences remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples from the workflow. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review conflicts, unconfirmed meetings, and coverage gaps. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, an executive travels while a recurring meeting changes time zone. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one executive calendar and one backup. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for calendar coverage?",
        "a": "Decisions about accepting priorities, rescheduling sensitive meetings, and executive preferences and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including calendar, time zone, owner, backup, meeting purpose, and confirmation."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that conflicts, unconfirmed meetings, and coverage gaps are visible and reproducible."
      }
    ],
    "internalService": "/services/meeting-coordination",
    "internalSibling": "/blog/meeting-notes-action-register",
    "source": {
      "label": "U.S. Government Accountability Office",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  },
  {
    "slug": "meeting-notes-action-register",
    "title": "Keep a Meeting Notes and Action Register",
    "description": "A repeatable record for decisions, actions, owners, and follow-up.",
    "category": "Meeting coordination",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/meeting-notes-action-register.webp",
    "sections": [
      {
        "heading": "Set the meeting action tracking scope",
        "paragraphs": [
          "Keep a Meeting Notes and Action Register starts with a written boundary. Name the request, the approved source, the owner, the evidence, and the point where the work must stop. A clear entry rule keeps routine administration separate from decisions that require authority.",
          "The main risk is that an action can be discussed and then lost because no owner or due date was recorded. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes meeting, decision, action, owner, due date, and completion evidence. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "The meeting owner confirms the decision or exception. The administrative role can capture approved notes, format the register, and send reminders, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about decisions, commitments, and priority changes remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples from the workflow. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review open actions, overdue items, and decisions without owners. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a decision is recorded but the follow-up owner is unclear. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one recurring meeting. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for meeting action tracking?",
        "a": "Decisions about decisions, commitments, and priority changes and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including meeting, decision, action, owner, due date, and completion evidence."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that open actions, overdue items, and decisions without owners are visible and reproducible."
      }
    ],
    "internalService": "/services/meeting-coordination",
    "internalSibling": "/blog/admin-backup-coverage-plan",
    "source": {
      "label": "U.S. Government Accountability Office",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  },
  {
    "slug": "travel-booking-evidence-pack",
    "title": "Assemble a Travel Booking Evidence Pack",
    "description": "A record for approvals, itineraries, costs, cancellations, and traveler preferences.",
    "category": "Executive administration",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/travel-booking-evidence-pack.webp",
    "sections": [
      {
        "heading": "Set the travel booking support scope",
        "paragraphs": [
          "Assemble a Travel Booking Evidence Pack starts with a written boundary. Name the request, the approved source, the owner, the evidence, and the point where the work must stop. A clear entry rule keeps routine administration separate from decisions that require authority.",
          "The main risk is that a booking can be changed or cancelled without the approval or cost record. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes traveler, approver, itinerary, fare, cancellation terms, and booking reference. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "The executive operations owner confirms the decision or exception. The administrative role can compare approved options, prepare the itinerary, and route cost questions, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about travel policy, exceptions, and final booking approval remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples from the workflow. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review booking changes, cost variances, and missing approvals. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a flight changes and the hotel cancellation window is about to close. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one trip type. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for travel booking support?",
        "a": "Decisions about travel policy, exceptions, and final booking approval and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including traveler, approver, itinerary, fare, cancellation terms, and booking reference."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that booking changes, cost variances, and missing approvals are visible and reproducible."
      }
    ],
    "internalService": "/services/executive-administration",
    "internalSibling": "/blog/expense-report-intake-queue",
    "source": {
      "label": "U.S. Government Accountability Office",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  },
  {
    "slug": "expense-report-intake-queue",
    "title": "Design an Expense Report Intake Queue",
    "description": "A workflow for receipts, coding, approvals, missing evidence, and reimbursement status.",
    "category": "Records administration",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/expense-report-intake-queue.webp",
    "sections": [
      {
        "heading": "Set the expense report intake scope",
        "paragraphs": [
          "Design an Expense Report Intake Queue starts with a written boundary. Name the request, the approved source, the owner, the evidence, and the point where the work must stop. A clear entry rule keeps routine administration separate from decisions that require authority.",
          "The main risk is that a report can be approved without a receipt or coded to the wrong cost center. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes employee, expense, receipt, date, coding, approver, and status. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "The finance or operations owner confirms the decision or exception. The administrative role can check completeness, prepare the coding, and route exceptions, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about policy interpretation, reimbursement, and coding approval remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples from the workflow. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review missing receipts, age, rework, and approval time. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a receipt is missing during a month-end submission. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one expense category. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for expense report intake?",
        "a": "Decisions about policy interpretation, reimbursement, and coding approval and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including employee, expense, receipt, date, coding, approver, and status."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that missing receipts, age, rework, and approval time are visible and reproducible."
      }
    ],
    "internalService": "/services/records-administration",
    "internalSibling": "/blog/travel-booking-evidence-pack",
    "source": {
      "label": "U.S. Government Accountability Office",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  },
  {
    "slug": "document-version-control",
    "title": "Control Administrative Document Versions",
    "description": "A version-control process for templates, policies, and client-facing documents.",
    "category": "Records administration",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/document-version-control.webp",
    "sections": [
      {
        "heading": "Set the document version control scope",
        "paragraphs": [
          "Control Administrative Document Versions starts with a written boundary. Name the request, the approved source, the owner, the evidence, and the point where the work must stop. A clear entry rule keeps routine administration separate from decisions that require authority.",
          "The main risk is that an outdated template can be sent after a policy or brand change. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes document, version, owner, effective date, approval, and storage location. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "The document owner confirms the decision or exception. The administrative role can compare versions, prepare the update, and route approvals, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about policy content, branding, and release decisions remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples from the workflow. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review outdated documents, duplicate versions, and missing approvals. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a client receives an old template after a policy update. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one document family. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for document version control?",
        "a": "Decisions about policy content, branding, and release decisions and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including document, version, owner, effective date, approval, and storage location."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that outdated documents, duplicate versions, and missing approvals are visible and reproducible."
      }
    ],
    "internalService": "/services/records-administration",
    "internalSibling": "/blog/records-retention-admin-review",
    "source": {
      "label": "U.S. Government Accountability Office",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  },
  {
    "slug": "vendor-onboarding-admin-checklist",
    "title": "Build a Vendor Onboarding Admin Checklist",
    "description": "A checklist for vendor details, documents, approvals, and system setup.",
    "category": "Records administration",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/vendor-onboarding-admin-checklist.webp",
    "sections": [
      {
        "heading": "Set the vendor onboarding administration scope",
        "paragraphs": [
          "Build a Vendor Onboarding Admin Checklist starts with a written boundary. Name the request, the approved source, the owner, the evidence, and the point where the work must stop. A clear entry rule keeps routine administration separate from decisions that require authority.",
          "The main risk is that a vendor can be paid or given access before the required record is complete. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes vendor, contact, tax document, bank change, approval, and system access. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "The procurement or operations owner confirms the decision or exception. The administrative role can collect approved details, check completeness, and route sensitive changes, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about vendor approval, tax treatment, and bank verification remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples from the workflow. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review missing documents, onboarding time, and access exceptions. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a vendor requests a bank change during onboarding. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one vendor category. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for vendor onboarding administration?",
        "a": "Decisions about vendor approval, tax treatment, and bank verification and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including vendor, contact, tax document, bank change, approval, and system access."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that missing documents, onboarding time, and access exceptions are visible and reproducible."
      }
    ],
    "internalService": "/services/records-administration",
    "internalSibling": "/blog/office-supply-reorder-control",
    "source": {
      "label": "U.S. Government Accountability Office",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  },
  {
    "slug": "office-supply-reorder-control",
    "title": "Control Office Supply Reorders",
    "description": "A reorder process for approved items, budget limits, suppliers, and delivery confirmation.",
    "category": "People operations",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/office-supply-reorder-control.webp",
    "sections": [
      {
        "heading": "Set the office supply reordering scope",
        "paragraphs": [
          "Control Office Supply Reorders starts with a written boundary. Name the request, the approved source, the owner, the evidence, and the point where the work must stop. A clear entry rule keeps routine administration separate from decisions that require authority.",
          "The main risk is that a routine reorder can exceed a budget or duplicate an existing order. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes item, quantity, supplier, price, budget, approver, and delivery status. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "The office operations owner confirms the decision or exception. The administrative role can check stock, prepare the order, and confirm delivery, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about budget exceptions, supplier changes, and approval thresholds remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples from the workflow. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review duplicate orders, budget variance, and delivery exceptions. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, two teams reorder the same item in one week. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one category and one supplier. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for office supply reordering?",
        "a": "Decisions about budget exceptions, supplier changes, and approval thresholds and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including item, quantity, supplier, price, budget, approver, and delivery status."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that duplicate orders, budget variance, and delivery exceptions are visible and reproducible."
      }
    ],
    "internalService": "/services/customer-administration",
    "internalSibling": "/blog/vendor-onboarding-admin-checklist",
    "source": {
      "label": "U.S. Government Accountability Office",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  },
  {
    "slug": "client-onboarding-admin-pack",
    "title": "Assemble a Client Onboarding Admin Pack",
    "description": "A welcome and setup pack for contacts, documents, access, and first meetings.",
    "category": "Customer administration",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/client-onboarding-admin-pack.webp",
    "sections": [
      {
        "heading": "Set the client onboarding administration scope",
        "paragraphs": [
          "Assemble a Client Onboarding Admin Pack starts with a written boundary. Name the request, the approved source, the owner, the evidence, and the point where the work must stop. A clear entry rule keeps routine administration separate from decisions that require authority.",
          "The main risk is that a client can receive incomplete access or conflicting first-step instructions. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes client, contact, agreement, documents, access, welcome pack, and owner. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "The client operations owner confirms the decision or exception. The administrative role can prepare approved documents, coordinate access, and route questions, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about contract terms, pricing, and client-specific exceptions remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples from the workflow. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review pack completeness, access readiness, and first-meeting confirmation. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a new client receives a welcome email before the shared folder is ready. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one client segment. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for client onboarding administration?",
        "a": "Decisions about contract terms, pricing, and client-specific exceptions and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including client, contact, agreement, documents, access, welcome pack, and owner."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that pack completeness, access readiness, and first-meeting confirmation are visible and reproducible."
      }
    ],
    "internalService": "/services/customer-administration",
    "internalSibling": "/blog/document-version-control",
    "source": {
      "label": "U.S. Government Accountability Office",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  },
  {
    "slug": "records-retention-admin-review",
    "title": "Review Administrative Records Retention",
    "description": "A practical review of record types, retention rules, access, and deletion evidence.",
    "category": "Records administration",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/records-retention-admin-review.webp",
    "sections": [
      {
        "heading": "Set the records retention scope",
        "paragraphs": [
          "Review Administrative Records Retention starts with a written boundary. Name the request, the approved source, the owner, the evidence, and the point where the work must stop. A clear entry rule keeps routine administration separate from decisions that require authority.",
          "The main risk is that a record can remain accessible after its retention period or be deleted too early. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes record type, owner, retention rule, trigger, location, access, and deletion evidence. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "The records owner confirms the decision or exception. The administrative role can map record locations, compare rules, and prepare a retention list, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about legal holds, deletion approval, and retention exceptions remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples from the workflow. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review records past due, shadow copies, and access exceptions. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a shared drive contains years of client files with no owner. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one record type. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for records retention?",
        "a": "Decisions about legal holds, deletion approval, and retention exceptions and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including record type, owner, retention rule, trigger, location, access, and deletion evidence."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that records past due, shadow copies, and access exceptions are visible and reproducible."
      }
    ],
    "internalService": "/services/records-administration",
    "internalSibling": "/blog/document-version-control",
    "source": {
      "label": "U.S. Government Accountability Office",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  },
  {
    "slug": "executive-briefing-pack",
    "title": "Build an Executive Briefing Pack",
    "description": "A repeatable pack for decisions, context, metrics, and follow-up.",
    "category": "Executive administration",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/executive-briefing-pack.webp",
    "sections": [
      {
        "heading": "Set the executive briefing preparation scope",
        "paragraphs": [
          "Build an Executive Briefing Pack starts with a written boundary. Name the request, the approved source, the owner, the evidence, and the point where the work must stop. A clear entry rule keeps routine administration separate from decisions that require authority.",
          "The main risk is that a briefing can present an unsupported claim or omit the decision needed. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes topic, decision, source, owner, metric definition, caveat, and due date. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "The executive or chief of staff confirms the decision or exception. The administrative role can assemble approved material, check sources, and flag gaps, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about decisions, recommendations, and external commitments remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples from the workflow. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review missing sources, late changes, and unresolved decisions. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a briefing includes a metric with a changed denominator. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one recurring briefing. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for executive briefing preparation?",
        "a": "Decisions about decisions, recommendations, and external commitments and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including topic, decision, source, owner, metric definition, caveat, and due date."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that missing sources, late changes, and unresolved decisions are visible and reproducible."
      }
    ],
    "internalService": "/services/executive-administration",
    "internalSibling": "/blog/meeting-notes-action-register",
    "source": {
      "label": "U.S. Government Accountability Office",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  },
  {
    "slug": "admin-backup-coverage-plan",
    "title": "Plan Administrative Backup Coverage",
    "description": "A backup plan for inboxes, calendars, approvals, and handoffs during absence.",
    "category": "People operations",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/admin-backup-coverage-plan.webp",
    "sections": [
      {
        "heading": "Set the administrative backup coverage scope",
        "paragraphs": [
          "Plan Administrative Backup Coverage starts with a written boundary. Name the request, the approved source, the owner, the evidence, and the point where the work must stop. A clear entry rule keeps routine administration separate from decisions that require authority.",
          "The main risk is that a backup can have access without the context or authority to act. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes role, backup, scope, authority, handoff, and return date. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "The operations lead confirms the decision or exception. The administrative role can prepare the handoff, confirm access, and track open items, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about approvals, sensitive communications, and priority changes remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples from the workflow. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review handoff completeness, missed items, and access gaps. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, an executive assistant is out while a board meeting approaches. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one role and one absence. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for administrative backup coverage?",
        "a": "Decisions about approvals, sensitive communications, and priority changes and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including role, backup, scope, authority, handoff, and return date."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that handoff completeness, missed items, and access gaps are visible and reproducible."
      }
    ],
    "internalService": "/services/project-administration",
    "internalSibling": "/blog/calendar-coverage-handoff",
    "source": {
      "label": "U.S. Government Accountability Office",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  }
];
