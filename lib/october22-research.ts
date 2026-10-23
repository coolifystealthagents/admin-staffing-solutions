import type { ResearchPost } from './types';

export const october22ResearchPosts: ResearchPost[] = [
  {
    "slug": "inbox-response-classification",
    "title": "Classifying Administrative Inbox Responses",
    "summary": "A method for categorizing requests, owners, sensitivity, and closure evidence.",
    "cluster": "Inbox research",
    "publishedAt": "2026-10-22",
    "finding": "Inbox classification is reproducible only when the request taxonomy, sensitivity rule, owner, and closure evidence are declared before sampling.",
    "thumbnail": "/thumbnails/october-22/inbox-response-classification.webp",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "A method for categorizing requests, owners, sensitivity, and closure evidence.",
          "The unit of analysis is a declared administrative record or event. The review does not evaluate individual employees, legal compliance, or the quality of a management decision."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define the population from a fixed export and record the query date, filters, source system, and exclusions. Sample across categories, owners, and exception states.",
          "For each record, capture the source, timestamp, owner, current state, and completion evidence. Missing evidence remains a finding rather than an exclusion."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Apply a short checklist and test it on a small calibration sample. Record reviewer disagreement and revise unclear definitions before expanding.",
          "Separate preparation from judgment. The reviewer can classify the record and route the question, but the authorized owner decides the outcome."
        ]
      },
      {
        "heading": "Limitations and use",
        "paragraphs": [
          "The review describes the sampled records, not the whole population. A closed status is not proof that the underlying question was resolved.",
          "Report counts with denominators and assign corrective actions an owner and retest date. Do not present the result as a legal or compliance conclusion."
        ]
      }
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "Records Management Policy and Guidance",
        "url": "https://www.archives.gov/records-mgmt/policy"
      }
    ]
  },
  {
    "slug": "meeting-action-closure-review",
    "title": "Reviewing Meeting Action Closure",
    "summary": "A method for testing whether decisions and actions have owners, dates, and completion evidence.",
    "cluster": "Meeting research",
    "publishedAt": "2026-10-22",
    "finding": "Meeting action closure is reviewable when the decision, action, owner, due date, and completion evidence are linked in one record.",
    "thumbnail": "/thumbnails/october-22/meeting-action-closure-review.webp",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "A method for testing whether decisions and actions have owners, dates, and completion evidence.",
          "The unit of analysis is a declared administrative record or event. The review does not evaluate individual employees, legal compliance, or the quality of a management decision."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define the population from a fixed export and record the query date, filters, source system, and exclusions. Sample across categories, owners, and exception states.",
          "For each record, capture the source, timestamp, owner, current state, and completion evidence. Missing evidence remains a finding rather than an exclusion."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Apply a short checklist and test it on a small calibration sample. Record reviewer disagreement and revise unclear definitions before expanding.",
          "Separate preparation from judgment. The reviewer can classify the record and route the question, but the authorized owner decides the outcome."
        ]
      },
      {
        "heading": "Limitations and use",
        "paragraphs": [
          "The review describes the sampled records, not the whole population. A closed status is not proof that the underlying question was resolved.",
          "Report counts with denominators and assign corrective actions an owner and retest date. Do not present the result as a legal or compliance conclusion."
        ]
      }
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "Records Management Policy and Guidance",
        "url": "https://www.archives.gov/records-mgmt/policy"
      }
    ]
  },
  {
    "slug": "document-version-compliance-audit",
    "title": "Auditing Administrative Document Versions",
    "summary": "A method for comparing active documents with approved versions, owners, and effective dates.",
    "cluster": "Records research",
    "publishedAt": "2026-10-22",
    "finding": "Document version review is meaningful only when the active inventory, approved version, effective date, and owner are compared.",
    "thumbnail": "/thumbnails/october-22/document-version-compliance-audit.webp",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "A method for comparing active documents with approved versions, owners, and effective dates.",
          "The unit of analysis is a declared administrative record or event. The review does not evaluate individual employees, legal compliance, or the quality of a management decision."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define the population from a fixed export and record the query date, filters, source system, and exclusions. Sample across categories, owners, and exception states.",
          "For each record, capture the source, timestamp, owner, current state, and completion evidence. Missing evidence remains a finding rather than an exclusion."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Apply a short checklist and test it on a small calibration sample. Record reviewer disagreement and revise unclear definitions before expanding.",
          "Separate preparation from judgment. The reviewer can classify the record and route the question, but the authorized owner decides the outcome."
        ]
      },
      {
        "heading": "Limitations and use",
        "paragraphs": [
          "The review describes the sampled records, not the whole population. A closed status is not proof that the underlying question was resolved.",
          "Report counts with denominators and assign corrective actions an owner and retest date. Do not present the result as a legal or compliance conclusion."
        ]
      }
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "Records Management Policy and Guidance",
        "url": "https://www.archives.gov/records-mgmt/policy"
      }
    ]
  },
  {
    "slug": "admin-access-review",
    "title": "Reviewing Administrative System Access",
    "summary": "A method for matching administrative roles to current duties, approvals, and removal triggers.",
    "cluster": "Access research",
    "publishedAt": "2026-10-22",
    "finding": "Administrative access review requires effective permissions, business purpose, approver, and removal evidence, not role names alone.",
    "thumbnail": "/thumbnails/october-22/admin-access-review.webp",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "A method for matching administrative roles to current duties, approvals, and removal triggers.",
          "The unit of analysis is a declared administrative record or event. The review does not evaluate individual employees, legal compliance, or the quality of a management decision."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define the population from a fixed export and record the query date, filters, source system, and exclusions. Sample across categories, owners, and exception states.",
          "For each record, capture the source, timestamp, owner, current state, and completion evidence. Missing evidence remains a finding rather than an exclusion."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Apply a short checklist and test it on a small calibration sample. Record reviewer disagreement and revise unclear definitions before expanding.",
          "Separate preparation from judgment. The reviewer can classify the record and route the question, but the authorized owner decides the outcome."
        ]
      },
      {
        "heading": "Limitations and use",
        "paragraphs": [
          "The review describes the sampled records, not the whole population. A closed status is not proof that the underlying question was resolved.",
          "Report counts with denominators and assign corrective actions an owner and retest date. Do not present the result as a legal or compliance conclusion."
        ]
      }
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "Records Management Policy and Guidance",
        "url": "https://www.archives.gov/records-mgmt/policy"
      }
    ]
  },
  {
    "slug": "records-retention-boundary-review",
    "title": "Reviewing Administrative Retention Boundaries",
    "summary": "A method for mapping record types, retention rules, access, and deletion evidence.",
    "cluster": "Records research",
    "publishedAt": "2026-10-22",
    "finding": "Retention review is useful when each record type has a rule, owner, location, access purpose, and deletion evidence.",
    "thumbnail": "/thumbnails/october-22/records-retention-boundary-review.webp",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "A method for mapping record types, retention rules, access, and deletion evidence.",
          "The unit of analysis is a declared administrative record or event. The review does not evaluate individual employees, legal compliance, or the quality of a management decision."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define the population from a fixed export and record the query date, filters, source system, and exclusions. Sample across categories, owners, and exception states.",
          "For each record, capture the source, timestamp, owner, current state, and completion evidence. Missing evidence remains a finding rather than an exclusion."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Apply a short checklist and test it on a small calibration sample. Record reviewer disagreement and revise unclear definitions before expanding.",
          "Separate preparation from judgment. The reviewer can classify the record and route the question, but the authorized owner decides the outcome."
        ]
      },
      {
        "heading": "Limitations and use",
        "paragraphs": [
          "The review describes the sampled records, not the whole population. A closed status is not proof that the underlying question was resolved.",
          "Report counts with denominators and assign corrective actions an owner and retest date. Do not present the result as a legal or compliance conclusion."
        ]
      }
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "Records Management Policy and Guidance",
        "url": "https://www.archives.gov/records-mgmt/policy"
      }
    ]
  }
];
