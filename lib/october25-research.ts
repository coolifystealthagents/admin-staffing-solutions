import type { ResearchPost } from './types';

export const october25ResearchPosts: ResearchPost[] = [
  {
    "slug": "admin-request-classification-reliability",
    "title": "Measuring Admin Request Classification Reliability",
    "summary": "A method for testing whether requests are classified consistently enough to route safely.",
    "cluster": "Inbox research",
    "publishedAt": "2026-10-25",
    "finding": "A method for testing whether requests are classified consistently enough to route safely.",
    "thumbnail": "/thumbnails/october-25/admin-request-classification-reliability.svg",
    "sections": [
      {
        "heading": "Research scope and unit",
        "paragraphs": [
          "Measuring Admin Request Classification Reliability asks whether two reviewers classify the same requests into the same category and owner. The unit is one declared administrative record or event, not an individual performance rating. The method fixes the observation window, source system, exclusions, and the owner who may act on the result.",
          "The output is a reproducible evidence register and decision note. It does not establish legal compliance, employment suitability, or a universal benchmark for every administrative team."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Collect request category, sensitivity, owner, and escalation state for each sampled record. Include routine, returned, escalated, corrected, and unresolved cases so the sample is not limited to completed work. Preserve original timestamps and the source version used at the time.",
          "Mark conflicting or missing evidence explicitly. Do not infer a field from a later system state, and do not merge two records just to produce a cleaner dataset."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Two reviewers classify the same frozen sample and record their reasons separately. Measure classification agreement and reviewer agreement before drawing a conclusion. Resolve disagreements against the written definition; if the rule remains unclear, revise the rule before expanding the sample.",
          "Separate preparation from judgment. A reviewer may classify, count, and route a question, but only the named owner can decide an exception or change the underlying control."
        ]
      },
      {
        "heading": "Limitations and decision use",
        "paragraphs": [
          "Report counts, denominators, missing-data rates, and limitations. A bounded sample cannot establish causation, and a clean record does not prove that the underlying operational outcome was correct.",
          "Give the owner a short result, the affected population, the main gap, one proposed control change, and a retest date. Change one control at a time and stop if the evidence cannot be produced consistently."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics, Office and Administrative Support Occupations",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/"
      },
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. Government Accountability Office, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ]
  },
  {
    "slug": "calendar-conflict-resolution-latency",
    "title": "Measuring Calendar Conflict Resolution Latency",
    "summary": "A method for separating detection, owner response, and final scheduling time.",
    "cluster": "Calendar research",
    "publishedAt": "2026-10-25",
    "finding": "A method for separating detection, owner response, and final scheduling time.",
    "thumbnail": "/thumbnails/october-25/calendar-conflict-resolution-latency.svg",
    "sections": [
      {
        "heading": "Research scope and unit",
        "paragraphs": [
          "Measuring Calendar Conflict Resolution Latency asks how much conflict time reflects detection, decision wait, or rescheduling. The unit is one declared administrative record or event, not an individual performance rating. The method fixes the observation window, source system, exclusions, and the owner who may act on the result.",
          "The output is a reproducible evidence register and decision note. It does not establish legal compliance, employment suitability, or a universal benchmark for every administrative team."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Collect detected time, owner, priority, decision, and close time for each sampled record. Include routine, returned, escalated, corrected, and unresolved cases so the sample is not limited to completed work. Preserve original timestamps and the source version used at the time.",
          "Mark conflicting or missing evidence explicitly. Do not infer a field from a later system state, and do not merge two records just to produce a cleaner dataset."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Two reviewers classify the same frozen sample and record their reasons separately. Measure resolution latency and reviewer agreement before drawing a conclusion. Resolve disagreements against the written definition; if the rule remains unclear, revise the rule before expanding the sample.",
          "Separate preparation from judgment. A reviewer may classify, count, and route a question, but only the named owner can decide an exception or change the underlying control."
        ]
      },
      {
        "heading": "Limitations and decision use",
        "paragraphs": [
          "Report counts, denominators, missing-data rates, and limitations. A bounded sample cannot establish causation, and a clean record does not prove that the underlying operational outcome was correct.",
          "Give the owner a short result, the affected population, the main gap, one proposed control change, and a retest date. Change one control at a time and stop if the evidence cannot be produced consistently."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics, Office and Administrative Support Occupations",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/"
      },
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. Government Accountability Office, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ]
  },
  {
    "slug": "vendor-renewal-evidence-completeness",
    "title": "Measuring Vendor Renewal Evidence Completeness",
    "summary": "A method for testing whether a renewal packet supports an owner decision.",
    "cluster": "Vendor research",
    "publishedAt": "2026-10-25",
    "finding": "A method for testing whether a renewal packet supports an owner decision.",
    "thumbnail": "/thumbnails/october-25/vendor-renewal-evidence-completeness.svg",
    "sections": [
      {
        "heading": "Research scope and unit",
        "paragraphs": [
          "Measuring Vendor Renewal Evidence Completeness asks whether a reviewer can find the contract, usage, issues, and approval before renewal. The unit is one declared administrative record or event, not an individual performance rating. The method fixes the observation window, source system, exclusions, and the owner who may act on the result.",
          "The output is a reproducible evidence register and decision note. It does not establish legal compliance, employment suitability, or a universal benchmark for every administrative team."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Collect contract, usage, issue, approval, and renewal date for each sampled record. Include routine, returned, escalated, corrected, and unresolved cases so the sample is not limited to completed work. Preserve original timestamps and the source version used at the time.",
          "Mark conflicting or missing evidence explicitly. Do not infer a field from a later system state, and do not merge two records just to produce a cleaner dataset."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Two reviewers classify the same frozen sample and record their reasons separately. Measure evidence completeness and reviewer agreement before drawing a conclusion. Resolve disagreements against the written definition; if the rule remains unclear, revise the rule before expanding the sample.",
          "Separate preparation from judgment. A reviewer may classify, count, and route a question, but only the named owner can decide an exception or change the underlying control."
        ]
      },
      {
        "heading": "Limitations and decision use",
        "paragraphs": [
          "Report counts, denominators, missing-data rates, and limitations. A bounded sample cannot establish causation, and a clean record does not prove that the underlying operational outcome was correct.",
          "Give the owner a short result, the affected population, the main gap, one proposed control change, and a retest date. Change one control at a time and stop if the evidence cannot be produced consistently."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics, Office and Administrative Support Occupations",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/"
      },
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. Government Accountability Office, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ]
  },
  {
    "slug": "meeting-note-decision-traceability",
    "title": "Measuring Meeting Note Decision Traceability",
    "summary": "A method for testing whether a decision can be reconstructed from the note and source record.",
    "cluster": "Meeting research",
    "publishedAt": "2026-10-25",
    "finding": "A method for testing whether a decision can be reconstructed from the note and source record.",
    "thumbnail": "/thumbnails/october-25/meeting-note-decision-traceability.svg",
    "sections": [
      {
        "heading": "Research scope and unit",
        "paragraphs": [
          "Measuring Meeting Note Decision Traceability asks whether a reviewer can identify the question, decision, owner, and follow-up. The unit is one declared administrative record or event, not an individual performance rating. The method fixes the observation window, source system, exclusions, and the owner who may act on the result.",
          "The output is a reproducible evidence register and decision note. It does not establish legal compliance, employment suitability, or a universal benchmark for every administrative team."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Collect question, decision, owner, due date, and source for each sampled record. Include routine, returned, escalated, corrected, and unresolved cases so the sample is not limited to completed work. Preserve original timestamps and the source version used at the time.",
          "Mark conflicting or missing evidence explicitly. Do not infer a field from a later system state, and do not merge two records just to produce a cleaner dataset."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Two reviewers classify the same frozen sample and record their reasons separately. Measure traceability rate and reviewer agreement before drawing a conclusion. Resolve disagreements against the written definition; if the rule remains unclear, revise the rule before expanding the sample.",
          "Separate preparation from judgment. A reviewer may classify, count, and route a question, but only the named owner can decide an exception or change the underlying control."
        ]
      },
      {
        "heading": "Limitations and decision use",
        "paragraphs": [
          "Report counts, denominators, missing-data rates, and limitations. A bounded sample cannot establish causation, and a clean record does not prove that the underlying operational outcome was correct.",
          "Give the owner a short result, the affected population, the main gap, one proposed control change, and a retest date. Change one control at a time and stop if the evidence cannot be produced consistently."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics, Office and Administrative Support Occupations",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/"
      },
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. Government Accountability Office, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ]
  },
  {
    "slug": "admin-access-review-coverage",
    "title": "Measuring Admin Access Review Coverage",
    "summary": "A method for testing whether granted access matches the approved task and review date.",
    "cluster": "Access research",
    "publishedAt": "2026-10-25",
    "finding": "A method for testing whether granted access matches the approved task and review date.",
    "thumbnail": "/thumbnails/october-25/admin-access-review-coverage.svg",
    "sections": [
      {
        "heading": "Research scope and unit",
        "paragraphs": [
          "Measuring Admin Access Review Coverage asks whether every active admin account has an owner, purpose, approval, and review date. The unit is one declared administrative record or event, not an individual performance rating. The method fixes the observation window, source system, exclusions, and the owner who may act on the result.",
          "The output is a reproducible evidence register and decision note. It does not establish legal compliance, employment suitability, or a universal benchmark for every administrative team."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Collect account, role, purpose, approver, and review date for each sampled record. Include routine, returned, escalated, corrected, and unresolved cases so the sample is not limited to completed work. Preserve original timestamps and the source version used at the time.",
          "Mark conflicting or missing evidence explicitly. Do not infer a field from a later system state, and do not merge two records just to produce a cleaner dataset."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Two reviewers classify the same frozen sample and record their reasons separately. Measure review coverage and reviewer agreement before drawing a conclusion. Resolve disagreements against the written definition; if the rule remains unclear, revise the rule before expanding the sample.",
          "Separate preparation from judgment. A reviewer may classify, count, and route a question, but only the named owner can decide an exception or change the underlying control."
        ]
      },
      {
        "heading": "Limitations and decision use",
        "paragraphs": [
          "Report counts, denominators, missing-data rates, and limitations. A bounded sample cannot establish causation, and a clean record does not prove that the underlying operational outcome was correct.",
          "Give the owner a short result, the affected population, the main gap, one proposed control change, and a retest date. Change one control at a time and stop if the evidence cannot be produced consistently."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics, Office and Administrative Support Occupations",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/"
      },
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. Government Accountability Office, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ]
  }
];
