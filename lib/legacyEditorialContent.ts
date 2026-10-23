import type { ArticleSection } from './types';

export const legacyBlogSections: Record<string, ArticleSection[]> = {
  "operations-manager-vs-admin-va": [
    {
      "heading": "Separate operating ownership from preparation",
      "paragraphs": [
        "An operations manager owns cross functional priorities, capacity choices, and process changes. An administrative virtual assistant can prepare schedules, maintain approved trackers, collect updates, and surface exceptions without inheriting those management decisions.",
        "Write the role around decisions rather than a generic task list. Name what the assistant may complete under a rule, what requires manager review, and what must stop immediately for legal, financial, personnel, or customer judgment."
      ]
    },
    {
      "heading": "Map the work before choosing the role",
      "paragraphs": [
        "List recurring work by input, output, frequency, source system, and accountable owner. Calendar preparation or status collection may fit administrative support, while resolving resource conflicts or changing delivery priorities belongs with operations leadership.",
        "Watch for tasks that look clerical but contain hidden authority. Sending an approved reminder is different from negotiating a deadline, and compiling a dashboard is different from deciding which project receives staff."
      ]
    },
    {
      "heading": "Design a controlled administrative lane",
      "paragraphs": [
        "Give the assistant a stable queue, approved templates, required fields, and clear completion signals. A useful handoff shows the source checked, action prepared, current status, missing evidence, and person who must make the next decision.",
        "Access should match the lane. Provide only the systems and fields needed for preparation, use named accounts, review permissions, and keep sensitive approvals with the designated manager."
      ]
    },
    {
      "heading": "Test management coverage",
      "paragraphs": [
        "If the need is to set priorities, redesign workflows, coach owners, or accept operational risk, hiring only administrative support leaves a management gap. If accountable leaders exist but spend time assembling routine evidence, a focused assistant role may be appropriate.",
        "Run a small sample before expanding scope. Review whether outputs are complete and decisions reach the correct owner, then change instructions when recurring exceptions reveal a weak boundary."
      ]
    },
    {
      "heading": "Choose with evidence",
      "paragraphs": [
        "Compare candidates against the actual decision map, not senior sounding titles. Ask how they would handle a missing approval, conflicting source records, an urgent request outside policy, and a task whose owner is absent.",
        "The practical choice can include both roles: a manager who owns the operating system and an assistant who keeps approved administrative flow visible. Documented acceptance and escalation make that partnership inspectable."
      ]
    }
  ],
  "admin-priority-system": [
    {
      "heading": "Define what priority means",
      "paragraphs": [
        "An administrative priority system needs written factors such as customer impact, fixed deadlines, executive commitments, dependency risk, and the authority of the requester. Urgency language alone should not move work to the front.",
        "Separate a requested priority from an approved priority. The queue should show who requested the change, which factor supports it, who may approve it, and when the ranking will be reviewed again."
      ]
    },
    {
      "heading": "Use one visible intake record",
      "paragraphs": [
        "Capture each item with a stable key, source link, requested outcome, due time, current owner, sensitivity state, and missing inputs. Returning an incomplete request is safer than inventing context to make it schedulable.",
        "Keep the original request when details change. A short history of due date, owner, and scope revisions helps reviewers distinguish genuine reprioritization from quiet queue drift."
      ]
    },
    {
      "heading": "Create bounded priority bands",
      "paragraphs": [
        "A small set of bands is easier to apply than a precise score that implies false certainty. Each band should state its entry evidence, expected response window, approval owner, and conditions that force escalation.",
        "Reserve an explicit blocked state for work that cannot proceed. Blocked items need a reason, evidence request, responsible resolver, and next review time so they do not disappear beneath active tasks."
      ]
    },
    {
      "heading": "Run a daily queue review",
      "paragraphs": [
        "Review newly arrived, overdue, blocked, and reassigned work at a predictable time. Administrative staff can prepare the queue and flag conflicts, while the accountable leader resolves competing commitments.",
        "Record priority changes during the review instead of relying on side messages. If an emergency displaces planned work, name the displaced items and owners who must be informed."
      ]
    },
    {
      "heading": "Audit whether the system is useful",
      "paragraphs": [
        "Sample missed deadlines, repeated overrides, stale blocked items, and work returned for missing inputs. Those cases reveal whether definitions, intake requirements, or decision rights need revision.",
        "Do not judge the system only by task volume. Useful measures include accepted handoffs, age by priority band, documented overrides, unresolved conflicts, and the share of work with a clear next owner."
      ]
    }
  ],
  "executive-meeting-handoff": [
    {
      "heading": "Start with the meeting purpose",
      "paragraphs": [
        "A meeting handoff begins with the decision, review, or coordination purpose approved by the meeting owner. The purpose determines who should attend, which evidence is required, and what a useful conclusion looks like.",
        "Preparation should not convert a tentative topic into a commitment. Label proposals, decisions, action requests, and unresolved questions separately so recipients know what authority each statement carries."
      ]
    },
    {
      "heading": "Assemble a versioned preparation packet",
      "paragraphs": [
        "Use an agenda version, participant list, source links, pre read owner, open questions, and decision rights. Record when each source was observed so an outdated attachment is not mistaken for the current position.",
        "Keep sensitive materials in their approved systems and link to them rather than creating extra copies. Distribution should reflect the meeting purpose and the minimum access each participant needs."
      ]
    },
    {
      "heading": "Capture decisions without overstatement",
      "paragraphs": [
        "Decision notes should identify the authorized decision owner, exact approved wording, effective time, and any condition still open. If confirmation is absent, retain unresolved rather than inferring agreement from silence.",
        "Action records need a named owner, accepted scope, due time, dependency, and evidence of acknowledgment. A person mentioned during discussion is not an action owner until acceptance is recorded."
      ]
    },
    {
      "heading": "Transfer custody after the meeting",
      "paragraphs": [
        "Send the handoff to the current owners and request correction within a defined window. Track returned wording, declined actions, changed dates, and access problems rather than silently editing the final record.",
        "Closure occurs when decisions are confirmed, actions are accepted or escalated, and temporary notes are reconciled to the system of record. The coordinator can manage that process without deciding disputed content."
      ]
    },
    {
      "heading": "Review difficult handoffs",
      "paragraphs": [
        "Sample meetings with corrected notes, absent decision makers, sensitive topics, late materials, or disputed actions. Reconstruct each handoff from agenda through acknowledgment to see where context or custody was lost.",
        "Use findings to improve agenda fields, acceptance prompts, and escalation rules. The review evaluates administrative evidence quality and does not establish that a business decision was correct."
      ]
    }
  ],
  "project-admin-status-rhythm": [
    {
      "heading": "Define every status from evidence",
      "paragraphs": [
        "Project status should be tied to dated source events, not confidence language. Define what qualifies as not started, active, blocked, ready for review, accepted, and closed for each type of milestone.",
        "An administrator may compile updates and apply approved definitions. Scope changes, risk acceptance, budget choices, and forecasts remain with the sponsor or delivery owner named in the project governance record."
      ]
    },
    {
      "heading": "Set a dependable update cadence",
      "paragraphs": [
        "Choose a cutoff that gives owners time to submit evidence and reviewers time to challenge gaps before publication. Late updates should retain their observed time rather than being backdated into the reporting window.",
        "The status packet should show milestone, owner, source update, dependency, blocker, next action, and acceptance state. Use unknown when a decisive source is unavailable."
      ]
    },
    {
      "heading": "Make dependencies and blockers visible",
      "paragraphs": [
        "A dependency needs a providing owner, receiving owner, required artifact, due time, and acceptance condition. Marking a dependency complete without receiver acceptance can conceal work that is unusable.",
        "A blocker record should state the affected milestone and smallest decision needed. Escalation routes the decision to its owner; it does not authorize the administrator to choose scope or priority."
      ]
    },
    {
      "heading": "Publish changes with lineage",
      "paragraphs": [
        "Freeze each report version and retain corrections. Readers should be able to see which evidence changed a status, who approved a date revision, and whether the new state supersedes or merely supplements the prior one.",
        "Avoid summaries that collapse missing, conflicted, and delayed evidence into green status. Counts should include stale updates, unsupported claims, rejected handoffs, and unresolved exceptions beside accepted milestones."
      ]
    },
    {
      "heading": "Use the rhythm to improve the system",
      "paragraphs": [
        "Review a varied sample of corrected, blocked, and unexpectedly changed items. Independent reconstruction can expose ambiguous definitions or private context that the formal report failed to preserve.",
        "Treat the review as an administrative control check, not proof of project success or individual performance. Any process change should have an accountable owner, trial period, and condition for reversal."
      ]
    }
  ],
  "inbox-workflow-boundaries": [
    {
      "heading": "Classify messages before assigning action",
      "paragraphs": [
        "Define approved categories using source, subject, sensitivity, and requested action. A message can be recorded as unknown or conflicted when evidence does not support a safe classification.",
        "Classification is preparation, not authority to promise an outcome. Contract interpretation, complaints, personnel matters, payment changes, and exceptions should route to designated owners."
      ]
    },
    {
      "heading": "Record visible custody",
      "paragraphs": [
        "Each material message needs a stable key, received time, current owner, acknowledgment, next permitted action, and due time. Forwarding without accepted ownership leaves custody ambiguous.",
        "Keep duplicate assignments visible until one owner is confirmed. The record should show who withdrew, what communication was sent, and whether a customer facing deadline changed."
      ]
    },
    {
      "heading": "Protect sensitive requests",
      "paragraphs": [
        "Use purpose limited access and approved storage for message bodies and attachments. Unexpected changes to recipients, credentials, banking details, or account ownership require confirmation through a known channel.",
        "Templates should reveal their limits. Staff may send approved routine language, but uncertainty, threats, unusual commitments, or requests outside the template must pause for review."
      ]
    },
    {
      "heading": "Plan for exceptions and outages",
      "paragraphs": [
        "Define reason codes for missing authority, conflicting instructions, unavailable owners, unsupported attachments, and system failure. Every exception needs the smallest decision required and a review time.",
        "During an outage, use stable temporary keys and a restricted log. Reconcile each temporary action to the restored inbox before closure so no response or assignment is silently lost."
      ]
    },
    {
      "heading": "Review the boundary with real cases",
      "paragraphs": [
        "Sample unowned messages, reopened items, late acknowledgments, sensitive changes, and responses returned for correction. Reconstruct the source, assignment, action, and acceptance without relying on private memory.",
        "Track accepted handoffs and unresolved exceptions rather than message volume alone. Adjust category rules and escalation prompts when patterns appear, while keeping accountable decisions with authorized owners."
      ]
    }
  ]
};

export const legacyResearchSections: Record<string, ArticleSection[]> = {
  "executive-administration-workflow-boundary-review-1": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This workflow-boundary review asks which actions are routine preparation, which require documented approval, and which must stop for accountable judgment in executive administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: a board-session request that displaces a confirmed investor call while the executive is in transit and the requester has not documented override authority. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one executive request linked to the calendar state, correspondence, named decision owner, and approval trail. Build a versioned dictionary for request origin, stated priority rule, time constraints, delegated authority, response deadline, approval state, and final disposition. Freeze the review period and draw records across ordinary work, urgent requests, delegated coverage, and at least one known exception. Exclude only records that fail a written eligibility rule, and report every exclusion by reason. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: a board-session request that displaces a confirmed investor call while the executive is in transit and the requester has not documented override authority. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For executive administration, an assistant may verify constraints and prepare options, while only the named executive or documented delegate may choose between competing commitments. The workflow-boundary review should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when a board-session request that displaces a confirmed investor call while the executive is in transit and the requester has not documented override authority. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this workflow-boundary review, Code each action as permitted preparation, approval required, prohibited, or unresolved. Report counts and denominators for each code, then compare the observed action with the written authority rule that applied at that time. Two reviewers should classify an overlap sample before discussion. Preserve their initial codes, publish the disagreement pairs, and change the boundary guide only through a dated adjudication note. Apply those checks to request origin, stated priority rule, time constraints, delegated authority, response deadline, approval state, and final disposition; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: a board-session request that displaces a confirmed investor call while the executive is in transit and the requester has not documented override authority. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain overlapping commitments, unclear requester authority, travel changes, unsupported urgency, and replies that could create an external commitment. Minimize and purpose-limit calendar details, correspondence, travel information, and personnel context: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Repeat the result with unresolved cases first treated as outside the boundary and then omitted. A conclusion that changes under that bounded test should be reported as unstable. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: a board-session request that displaces a confirmed investor call while the executive is in transit and the requester has not documented override authority. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that the review cannot determine whether the executive selected the best business priority or whether an unavailable conversation changed the decision. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this workflow-boundary review. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: a board-session request that displaces a confirmed investor call while the executive is in transit and the requester has not documented override authority. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "inbox-workflow-support-source-quality-audit-2": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This source-quality audit asks whether each material administrative field can be reconstructed from an authoritative, timely, and accessible source in shared-inbox administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: a forwarded renewal complaint whose original attachment is missing, whose sensitivity label changed, and whose assigned responder cannot reconstruct the first receipt time. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one material message from receipt through accepted assignment, approved response, escalation, or documented closure. Build a versioned dictionary for message source, received time, approved category, sensitivity flag, assigned owner, acknowledgment, next action, due time, and disposition. Freeze the population by system and date, then sample routine records, corrected records, reopened work, and records with missing fields. Keep duplicates and conflicts visible instead of selecting the most favorable version. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: a forwarded renewal complaint whose original attachment is missing, whose sensitivity label changed, and whose assigned responder cannot reconstruct the first receipt time. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For shared-inbox administration, support staff may classify and route under approved rules, while policy interpretation, promises, refunds, and sensitive customer decisions stay with an authorized owner. The source-quality audit should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when a forwarded renewal complaint whose original attachment is missing, whose sensitivity label changed, and whose assigned responder cannot reconstruct the first receipt time. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this source-quality audit, For every required field, code source presence, authority, observation time, version, conflict state, and reproducibility. Report complete, stale, conflicting, inaccessible, and unsupported fields separately. A second reviewer should reconstruct a subset using only the cited sources and dictionary. Record exact matches, disagreements, unavailable evidence, and corrections without giving credit for private explanation. Apply those checks to message source, received time, approved category, sensitivity flag, assigned owner, acknowledgment, next action, due time, and disposition; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: a forwarded renewal complaint whose original attachment is missing, whose sensitivity label changed, and whose assigned responder cannot reconstruct the first receipt time. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain duplicate assignment, unknown senders, absent ownership, contradictory instructions, sensitive attachments, and deadlines without an acknowledged receiver. Minimize and purpose-limit message bodies, attachments, customer identifiers, credentials, and personnel information: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Recalculate completeness under stricter source-age and authority rules. Show which fields and conclusions change so readers can distinguish robust evidence from a convenient threshold. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: a forwarded renewal complaint whose original attachment is missing, whose sensitivity label changed, and whose assigned responder cannot reconstruct the first receipt time. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that source availability does not prove that a response was appropriate, complete, or accepted by the recipient. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this source-quality audit. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: a forwarded renewal complaint whose original attachment is missing, whose sensitivity label changed, and whose assigned responder cannot reconstruct the first receipt time. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "records-administration-exception-pattern-study-3": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This exception-pattern study asks which deviations recur, where they become visible, and what evidence is needed before an owner can resolve them in records administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: a supplier record with two effective dates, an unexplained bank-detail revision, and access retained by a former approver. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one business record together with the source events used to create, revise, retain, restrict, or dispose of it. Build a versioned dictionary for record key, source artifact, version, effective date, custodian, required fields, approval evidence, access state, retention rule, and disposition. Define an exception before reviewing outcomes, freeze the period, and include reopened, returned, delayed, and unresolved work. Preserve multiple exception codes when one record has more than one failure mode. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: a supplier record with two effective dates, an unexplained bank-detail revision, and access retained by a former approver. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For records administration, administrators may maintain approved fields and flag gaps, while record owners decide interpretations, retention exceptions, and changes with legal or policy consequences. The exception-pattern study should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when a supplier record with two effective dates, an unexplained bank-detail revision, and access retained by a former approver. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this exception-pattern study, Code exception type, detection point, evidence gap, current owner, elapsed state, disposition, and recurrence. Report raw counts with eligible-record denominators and a separate unresolved total. Reviewers should independently code an overlap sample and reconcile only through the versioned exception dictionary. Publish ambiguous examples and retain the pre-adjudication codes. Apply those checks to record key, source artifact, version, effective date, custodian, required fields, approval evidence, access state, retention rule, and disposition; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: a supplier record with two effective dates, an unexplained bank-detail revision, and access retained by a former approver. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain duplicate records, conflicting effective dates, unexplained edits, missing source files, stale approvals, and access broader than the documented role. Minimize and purpose-limit customer records, personnel files, contract material, access logs, and retained source documents: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Repeat counts after changing the recurrence window and after separating system-access exceptions from process exceptions. Report whether the apparent pattern survives both tests. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: a supplier record with two effective dates, an unexplained bank-detail revision, and access retained by a former approver. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that the protocol cannot establish legal sufficiency, prove that an unavailable source never existed, or replace the accountable record owner. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this exception-pattern study. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: a supplier record with two effective dates, an unexplained bank-detail revision, and access retained by a former approver. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "meeting-coordination-handoff-reliability-brief-4": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This handoff-reliability review asks whether the next owner received complete evidence, understood the next permitted action, and explicitly accepted custody in meeting administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: a leadership meeting where a proposed action appears in the notes but the named owner never accepted its scope or due date. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one meeting handoff containing the approved purpose, participant list, source materials, confirmed decisions, accepted actions, and receiver acknowledgment. Build a versioned dictionary for agenda version, participant role, source link, decision wording, action owner, due date, dependency, correction history, distribution list, and acknowledgment. Freeze eligible handoffs by source system and date, then include accepted, returned, corrected, unacknowledged, and reopened cases. Do not infer acceptance from assignment alone. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: a leadership meeting where a proposed action appears in the notes but the named owner never accepted its scope or due date. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For meeting administration, coordinators may prepare logistics and capture approved language, while meeting owners retain authority over invitations, decisions, commitments, and sensitive distribution. The handoff-reliability review should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when a leadership meeting where a proposed action appears in the notes but the named owner never accepted its scope or due date. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this handoff-reliability review, A handoff qualifies only when required evidence is linked, the next action is explicit, ownership is acknowledged, and exceptions remain visible. Report accepted, returned, corrected, unacknowledged, and unresolved counts. A second reviewer should reconstruct the sending state and receiver acknowledgment from the retained record. Disagreements about implied acceptance must remain failures until adjudicated under a written rule. Apply those checks to agenda version, participant role, source link, decision wording, action owner, due date, dependency, correction history, distribution list, and acknowledgment; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: a leadership meeting where a proposed action appears in the notes but the named owner never accepted its scope or due date. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain tentative discussion recorded as a decision, suggested actions shown as accepted, draft dates treated as commitments, absent owners, and restricted notes sent too broadly. Minimize and purpose-limit meeting notes, recordings, personnel topics, customer matters, commercial plans, and restricted decisions: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Recalculate reliability using stricter acknowledgment windows and with corrected handoffs separated from first-pass acceptance. Report both results rather than collapsing recovery into initial quality. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: a leadership meeting where a proposed action appears in the notes but the named owner never accepted its scope or due date. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that a complete administrative handoff does not prove that a decision was strategically sound or that every off-record discussion was captured. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this handoff-reliability review. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: a leadership meeting where a proposed action appears in the notes but the named owner never accepted its scope or due date. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "customer-administration-review-consistency-report-5": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This review-consistency report asks whether independent reviewers apply the same approved category, disposition, and escalation rule to equivalent evidence in customer administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: an onboarding request where reviewers disagree whether an unsigned order form permits account setup or requires commercial approval. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one customer handoff linked to the governing agreement, approved inputs, current owner, next permitted action, and acceptance evidence. Build a versioned dictionary for customer key, agreement version, source request, authorization, required input, current state, owner, due date, communication status, and disposition. Freeze the review guide before selecting a balanced sample of routine, borderline, corrected, and unresolved records. Keep reviewers blind to one another’s codes until initial classification is complete. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: an onboarding request where reviewers disagree whether an unsigned order form permits account setup or requires commercial approval. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For customer administration, administrative staff may prepare records and approved communications, but may not interpret contracts, alter commercial terms, or decide an individual customer outcome. The review-consistency report should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when an onboarding request where reviewers disagree whether an unsigned order form permits account setup or requires commercial approval. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this review-consistency report, Record each reviewer’s category, disposition, escalation route, decisive evidence, and confidence state. Report exact agreement, disagreement pairs, missing evidence, and adjudicated results with raw counts. Use an authorized adjudicator only after initial codes are preserved. Every changed code should name the cited rule, evidence that resolved the difference, and whether the guide needs a dated revision. Apply those checks to customer key, agreement version, source request, authorization, required input, current state, owner, due date, communication status, and disposition; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: an onboarding request where reviewers disagree whether an unsigned order form permits account setup or requires commercial approval. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain mismatched agreement versions, missing authorization, unsupported account changes, incomplete onboarding inputs, disputed ownership, and promises outside approved language. Minimize and purpose-limit customer identifiers, account details, agreements, communications, payment context, and access credentials: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Repeat agreement after removing records with missing decisive evidence and under a stricter exact-match rule. A higher filtered score must not replace the all-record result. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: an onboarding request where reviewers disagree whether an unsigned order form permits account setup or requires commercial approval. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that the protocol cannot establish contractual compliance, customer satisfaction, or the correctness of a commercial decision. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this review-consistency report. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: an onboarding request where reviewers disagree whether an unsigned order form permits account setup or requires commercial approval. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "project-administration-workflow-boundary-review-6": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This workflow-boundary review asks which actions are routine preparation, which require documented approval, and which must stop for accountable judgment in project administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: a milestone shown as complete even though the delivery owner has not accepted the artifact and a blocked dependency remains open. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one project-status claim linked to a dated source update, dependency, acceptance event, and accountable owner. Build a versioned dictionary for project key, milestone, report version, source date, dependency state, blocker, owner, approval, forecast, acceptance evidence, and correction history. Freeze the review period and draw records across ordinary work, urgent requests, delegated coverage, and at least one known exception. Exclude only records that fail a written eligibility rule, and report every exclusion by reason. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: a milestone shown as complete even though the delivery owner has not accepted the artifact and a blocked dependency remains open. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For project administration, project administrators may collect updates and apply documented status rules, while sponsors and delivery owners retain scope, budget, risk-acceptance, and priority decisions. The workflow-boundary review should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when a milestone shown as complete even though the delivery owner has not accepted the artifact and a blocked dependency remains open. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this workflow-boundary review, Code each action as permitted preparation, approval required, prohibited, or unresolved. Report counts and denominators for each code, then compare the observed action with the written authority rule that applied at that time. Two reviewers should classify an overlap sample before discussion. Preserve their initial codes, publish the disagreement pairs, and change the boundary guide only through a dated adjudication note. Apply those checks to project key, milestone, report version, source date, dependency state, blocker, owner, approval, forecast, acceptance evidence, and correction history; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: a milestone shown as complete even though the delivery owner has not accepted the artifact and a blocked dependency remains open. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain stale updates, unsupported completion claims, blocked dependencies shown as on track, changed dates without approval, rejected handoffs, and mixed reporting windows. Minimize and purpose-limit commercial plans, personnel assignments, customer deliverables, risk records, budget context, and restricted project artifacts: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Repeat the result with unresolved cases first treated as outside the boundary and then omitted. A conclusion that changes under that bounded test should be reported as unstable. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: a milestone shown as complete even though the delivery owner has not accepted the artifact and a blocked dependency remains open. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that the protocol cannot establish causation, predict delivery, or prove that a reported milestone created business value. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this workflow-boundary review. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: a milestone shown as complete even though the delivery owner has not accepted the artifact and a blocked dependency remains open. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "executive-administration-source-quality-audit-7": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This source-quality audit asks whether each material administrative field can be reconstructed from an authoritative, timely, and accessible source in executive administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: an urgent calendar move supported by a chat excerpt but not by the authoritative calendar, delegation record, or requester identity. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one executive request linked to the calendar state, correspondence, named decision owner, and approval trail. Build a versioned dictionary for request origin, stated priority rule, time constraints, delegated authority, response deadline, approval state, and final disposition. Freeze the population by system and date, then sample routine records, corrected records, reopened work, and records with missing fields. Keep duplicates and conflicts visible instead of selecting the most favorable version. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: an urgent calendar move supported by a chat excerpt but not by the authoritative calendar, delegation record, or requester identity. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For executive administration, an assistant may verify constraints and prepare options, while only the named executive or documented delegate may choose between competing commitments. The source-quality audit should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when an urgent calendar move supported by a chat excerpt but not by the authoritative calendar, delegation record, or requester identity. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this source-quality audit, For every required field, code source presence, authority, observation time, version, conflict state, and reproducibility. Report complete, stale, conflicting, inaccessible, and unsupported fields separately. A second reviewer should reconstruct a subset using only the cited sources and dictionary. Record exact matches, disagreements, unavailable evidence, and corrections without giving credit for private explanation. Apply those checks to request origin, stated priority rule, time constraints, delegated authority, response deadline, approval state, and final disposition; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: an urgent calendar move supported by a chat excerpt but not by the authoritative calendar, delegation record, or requester identity. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain overlapping commitments, unclear requester authority, travel changes, unsupported urgency, and replies that could create an external commitment. Minimize and purpose-limit calendar details, correspondence, travel information, and personnel context: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Recalculate completeness under stricter source-age and authority rules. Show which fields and conclusions change so readers can distinguish robust evidence from a convenient threshold. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: an urgent calendar move supported by a chat excerpt but not by the authoritative calendar, delegation record, or requester identity. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that the review cannot determine whether the executive selected the best business priority or whether an unavailable conversation changed the decision. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this source-quality audit. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: an urgent calendar move supported by a chat excerpt but not by the authoritative calendar, delegation record, or requester identity. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "inbox-workflow-support-exception-pattern-study-8": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This exception-pattern study asks which deviations recur, where they become visible, and what evidence is needed before an owner can resolve them in shared-inbox administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: a customer message assigned to two agents, answered with conflicting language, and reopened after neither person acknowledged final custody. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one material message from receipt through accepted assignment, approved response, escalation, or documented closure. Build a versioned dictionary for message source, received time, approved category, sensitivity flag, assigned owner, acknowledgment, next action, due time, and disposition. Define an exception before reviewing outcomes, freeze the period, and include reopened, returned, delayed, and unresolved work. Preserve multiple exception codes when one record has more than one failure mode. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: a customer message assigned to two agents, answered with conflicting language, and reopened after neither person acknowledged final custody. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For shared-inbox administration, support staff may classify and route under approved rules, while policy interpretation, promises, refunds, and sensitive customer decisions stay with an authorized owner. The exception-pattern study should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when a customer message assigned to two agents, answered with conflicting language, and reopened after neither person acknowledged final custody. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this exception-pattern study, Code exception type, detection point, evidence gap, current owner, elapsed state, disposition, and recurrence. Report raw counts with eligible-record denominators and a separate unresolved total. Reviewers should independently code an overlap sample and reconcile only through the versioned exception dictionary. Publish ambiguous examples and retain the pre-adjudication codes. Apply those checks to message source, received time, approved category, sensitivity flag, assigned owner, acknowledgment, next action, due time, and disposition; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: a customer message assigned to two agents, answered with conflicting language, and reopened after neither person acknowledged final custody. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain duplicate assignment, unknown senders, absent ownership, contradictory instructions, sensitive attachments, and deadlines without an acknowledged receiver. Minimize and purpose-limit message bodies, attachments, customer identifiers, credentials, and personnel information: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Repeat counts after changing the recurrence window and after separating system-access exceptions from process exceptions. Report whether the apparent pattern survives both tests. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: a customer message assigned to two agents, answered with conflicting language, and reopened after neither person acknowledged final custody. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that source availability does not prove that a response was appropriate, complete, or accepted by the recipient. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this exception-pattern study. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: a customer message assigned to two agents, answered with conflicting language, and reopened after neither person acknowledged final custody. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "records-administration-handoff-reliability-brief-9": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This handoff-reliability review asks whether the next owner received complete evidence, understood the next permitted action, and explicitly accepted custody in records administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: a contract-renewal register transferred with the renewal date present but the source agreement, notice window, and receiving custodian acknowledgment absent. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one business record together with the source events used to create, revise, retain, restrict, or dispose of it. Build a versioned dictionary for record key, source artifact, version, effective date, custodian, required fields, approval evidence, access state, retention rule, and disposition. Freeze eligible handoffs by source system and date, then include accepted, returned, corrected, unacknowledged, and reopened cases. Do not infer acceptance from assignment alone. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: a contract-renewal register transferred with the renewal date present but the source agreement, notice window, and receiving custodian acknowledgment absent. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For records administration, administrators may maintain approved fields and flag gaps, while record owners decide interpretations, retention exceptions, and changes with legal or policy consequences. The handoff-reliability review should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when a contract-renewal register transferred with the renewal date present but the source agreement, notice window, and receiving custodian acknowledgment absent. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this handoff-reliability review, A handoff qualifies only when required evidence is linked, the next action is explicit, ownership is acknowledged, and exceptions remain visible. Report accepted, returned, corrected, unacknowledged, and unresolved counts. A second reviewer should reconstruct the sending state and receiver acknowledgment from the retained record. Disagreements about implied acceptance must remain failures until adjudicated under a written rule. Apply those checks to record key, source artifact, version, effective date, custodian, required fields, approval evidence, access state, retention rule, and disposition; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: a contract-renewal register transferred with the renewal date present but the source agreement, notice window, and receiving custodian acknowledgment absent. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain duplicate records, conflicting effective dates, unexplained edits, missing source files, stale approvals, and access broader than the documented role. Minimize and purpose-limit customer records, personnel files, contract material, access logs, and retained source documents: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Recalculate reliability using stricter acknowledgment windows and with corrected handoffs separated from first-pass acceptance. Report both results rather than collapsing recovery into initial quality. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: a contract-renewal register transferred with the renewal date present but the source agreement, notice window, and receiving custodian acknowledgment absent. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that the protocol cannot establish legal sufficiency, prove that an unavailable source never existed, or replace the accountable record owner. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this handoff-reliability review. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: a contract-renewal register transferred with the renewal date present but the source agreement, notice window, and receiving custodian acknowledgment absent. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "meeting-coordination-review-consistency-report-10": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This review-consistency report asks whether independent reviewers apply the same approved category, disposition, and escalation rule to equivalent evidence in meeting administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: a planning meeting where one reviewer codes a statement as an approved decision and another codes the same language as an unresolved proposal. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one meeting handoff containing the approved purpose, participant list, source materials, confirmed decisions, accepted actions, and receiver acknowledgment. Build a versioned dictionary for agenda version, participant role, source link, decision wording, action owner, due date, dependency, correction history, distribution list, and acknowledgment. Freeze the review guide before selecting a balanced sample of routine, borderline, corrected, and unresolved records. Keep reviewers blind to one another’s codes until initial classification is complete. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: a planning meeting where one reviewer codes a statement as an approved decision and another codes the same language as an unresolved proposal. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For meeting administration, coordinators may prepare logistics and capture approved language, while meeting owners retain authority over invitations, decisions, commitments, and sensitive distribution. The review-consistency report should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when a planning meeting where one reviewer codes a statement as an approved decision and another codes the same language as an unresolved proposal. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this review-consistency report, Record each reviewer’s category, disposition, escalation route, decisive evidence, and confidence state. Report exact agreement, disagreement pairs, missing evidence, and adjudicated results with raw counts. Use an authorized adjudicator only after initial codes are preserved. Every changed code should name the cited rule, evidence that resolved the difference, and whether the guide needs a dated revision. Apply those checks to agenda version, participant role, source link, decision wording, action owner, due date, dependency, correction history, distribution list, and acknowledgment; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: a planning meeting where one reviewer codes a statement as an approved decision and another codes the same language as an unresolved proposal. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain tentative discussion recorded as a decision, suggested actions shown as accepted, draft dates treated as commitments, absent owners, and restricted notes sent too broadly. Minimize and purpose-limit meeting notes, recordings, personnel topics, customer matters, commercial plans, and restricted decisions: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Repeat agreement after removing records with missing decisive evidence and under a stricter exact-match rule. A higher filtered score must not replace the all-record result. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: a planning meeting where one reviewer codes a statement as an approved decision and another codes the same language as an unresolved proposal. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that a complete administrative handoff does not prove that a decision was strategically sound or that every off-record discussion was captured. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this review-consistency report. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: a planning meeting where one reviewer codes a statement as an approved decision and another codes the same language as an unresolved proposal. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "customer-administration-workflow-boundary-review-11": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This workflow-boundary review asks which actions are routine preparation, which require documented approval, and which must stop for accountable judgment in customer administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: a customer asks to change service scope during onboarding and the administrator has approved setup instructions but no authority to alter commercial terms. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one customer handoff linked to the governing agreement, approved inputs, current owner, next permitted action, and acceptance evidence. Build a versioned dictionary for customer key, agreement version, source request, authorization, required input, current state, owner, due date, communication status, and disposition. Freeze the review period and draw records across ordinary work, urgent requests, delegated coverage, and at least one known exception. Exclude only records that fail a written eligibility rule, and report every exclusion by reason. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: a customer asks to change service scope during onboarding and the administrator has approved setup instructions but no authority to alter commercial terms. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For customer administration, administrative staff may prepare records and approved communications, but may not interpret contracts, alter commercial terms, or decide an individual customer outcome. The workflow-boundary review should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when a customer asks to change service scope during onboarding and the administrator has approved setup instructions but no authority to alter commercial terms. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this workflow-boundary review, Code each action as permitted preparation, approval required, prohibited, or unresolved. Report counts and denominators for each code, then compare the observed action with the written authority rule that applied at that time. Two reviewers should classify an overlap sample before discussion. Preserve their initial codes, publish the disagreement pairs, and change the boundary guide only through a dated adjudication note. Apply those checks to customer key, agreement version, source request, authorization, required input, current state, owner, due date, communication status, and disposition; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: a customer asks to change service scope during onboarding and the administrator has approved setup instructions but no authority to alter commercial terms. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain mismatched agreement versions, missing authorization, unsupported account changes, incomplete onboarding inputs, disputed ownership, and promises outside approved language. Minimize and purpose-limit customer identifiers, account details, agreements, communications, payment context, and access credentials: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Repeat the result with unresolved cases first treated as outside the boundary and then omitted. A conclusion that changes under that bounded test should be reported as unstable. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: a customer asks to change service scope during onboarding and the administrator has approved setup instructions but no authority to alter commercial terms. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that the protocol cannot establish contractual compliance, customer satisfaction, or the correctness of a commercial decision. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this workflow-boundary review. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: a customer asks to change service scope during onboarding and the administrator has approved setup instructions but no authority to alter commercial terms. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "project-administration-source-quality-audit-12": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This source-quality audit asks whether each material administrative field can be reconstructed from an authoritative, timely, and accessible source in project administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: a weekly status report cites an undated spreadsheet for completion while the issue tracker records an open blocker and no acceptance event. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one project-status claim linked to a dated source update, dependency, acceptance event, and accountable owner. Build a versioned dictionary for project key, milestone, report version, source date, dependency state, blocker, owner, approval, forecast, acceptance evidence, and correction history. Freeze the population by system and date, then sample routine records, corrected records, reopened work, and records with missing fields. Keep duplicates and conflicts visible instead of selecting the most favorable version. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: a weekly status report cites an undated spreadsheet for completion while the issue tracker records an open blocker and no acceptance event. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For project administration, project administrators may collect updates and apply documented status rules, while sponsors and delivery owners retain scope, budget, risk-acceptance, and priority decisions. The source-quality audit should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when a weekly status report cites an undated spreadsheet for completion while the issue tracker records an open blocker and no acceptance event. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this source-quality audit, For every required field, code source presence, authority, observation time, version, conflict state, and reproducibility. Report complete, stale, conflicting, inaccessible, and unsupported fields separately. A second reviewer should reconstruct a subset using only the cited sources and dictionary. Record exact matches, disagreements, unavailable evidence, and corrections without giving credit for private explanation. Apply those checks to project key, milestone, report version, source date, dependency state, blocker, owner, approval, forecast, acceptance evidence, and correction history; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: a weekly status report cites an undated spreadsheet for completion while the issue tracker records an open blocker and no acceptance event. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain stale updates, unsupported completion claims, blocked dependencies shown as on track, changed dates without approval, rejected handoffs, and mixed reporting windows. Minimize and purpose-limit commercial plans, personnel assignments, customer deliverables, risk records, budget context, and restricted project artifacts: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Recalculate completeness under stricter source-age and authority rules. Show which fields and conclusions change so readers can distinguish robust evidence from a convenient threshold. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: a weekly status report cites an undated spreadsheet for completion while the issue tracker records an open blocker and no acceptance event. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that the protocol cannot establish causation, predict delivery, or prove that a reported milestone created business value. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this source-quality audit. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: a weekly status report cites an undated spreadsheet for completion while the issue tracker records an open blocker and no acceptance event. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "executive-administration-exception-pattern-study-13": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This exception-pattern study asks which deviations recur, where they become visible, and what evidence is needed before an owner can resolve them in executive administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: three recurring travel changes arrive after ticketing, each with different requester authority and no consistent record of who accepted the cost consequence. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one executive request linked to the calendar state, correspondence, named decision owner, and approval trail. Build a versioned dictionary for request origin, stated priority rule, time constraints, delegated authority, response deadline, approval state, and final disposition. Define an exception before reviewing outcomes, freeze the period, and include reopened, returned, delayed, and unresolved work. Preserve multiple exception codes when one record has more than one failure mode. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: three recurring travel changes arrive after ticketing, each with different requester authority and no consistent record of who accepted the cost consequence. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For executive administration, an assistant may verify constraints and prepare options, while only the named executive or documented delegate may choose between competing commitments. The exception-pattern study should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when three recurring travel changes arrive after ticketing, each with different requester authority and no consistent record of who accepted the cost consequence. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this exception-pattern study, Code exception type, detection point, evidence gap, current owner, elapsed state, disposition, and recurrence. Report raw counts with eligible-record denominators and a separate unresolved total. Reviewers should independently code an overlap sample and reconcile only through the versioned exception dictionary. Publish ambiguous examples and retain the pre-adjudication codes. Apply those checks to request origin, stated priority rule, time constraints, delegated authority, response deadline, approval state, and final disposition; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: three recurring travel changes arrive after ticketing, each with different requester authority and no consistent record of who accepted the cost consequence. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain overlapping commitments, unclear requester authority, travel changes, unsupported urgency, and replies that could create an external commitment. Minimize and purpose-limit calendar details, correspondence, travel information, and personnel context: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Repeat counts after changing the recurrence window and after separating system-access exceptions from process exceptions. Report whether the apparent pattern survives both tests. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: three recurring travel changes arrive after ticketing, each with different requester authority and no consistent record of who accepted the cost consequence. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that the review cannot determine whether the executive selected the best business priority or whether an unavailable conversation changed the decision. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this exception-pattern study. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: three recurring travel changes arrive after ticketing, each with different requester authority and no consistent record of who accepted the cost consequence. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "inbox-workflow-support-handoff-reliability-brief-14": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This handoff-reliability review asks whether the next owner received complete evidence, understood the next permitted action, and explicitly accepted custody in shared-inbox administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: a sensitive complaint is routed before its attachment is scanned, then transferred again without the second owner acknowledging the response deadline. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one material message from receipt through accepted assignment, approved response, escalation, or documented closure. Build a versioned dictionary for message source, received time, approved category, sensitivity flag, assigned owner, acknowledgment, next action, due time, and disposition. Freeze eligible handoffs by source system and date, then include accepted, returned, corrected, unacknowledged, and reopened cases. Do not infer acceptance from assignment alone. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: a sensitive complaint is routed before its attachment is scanned, then transferred again without the second owner acknowledging the response deadline. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For shared-inbox administration, support staff may classify and route under approved rules, while policy interpretation, promises, refunds, and sensitive customer decisions stay with an authorized owner. The handoff-reliability review should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when a sensitive complaint is routed before its attachment is scanned, then transferred again without the second owner acknowledging the response deadline. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this handoff-reliability review, A handoff qualifies only when required evidence is linked, the next action is explicit, ownership is acknowledged, and exceptions remain visible. Report accepted, returned, corrected, unacknowledged, and unresolved counts. A second reviewer should reconstruct the sending state and receiver acknowledgment from the retained record. Disagreements about implied acceptance must remain failures until adjudicated under a written rule. Apply those checks to message source, received time, approved category, sensitivity flag, assigned owner, acknowledgment, next action, due time, and disposition; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: a sensitive complaint is routed before its attachment is scanned, then transferred again without the second owner acknowledging the response deadline. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain duplicate assignment, unknown senders, absent ownership, contradictory instructions, sensitive attachments, and deadlines without an acknowledged receiver. Minimize and purpose-limit message bodies, attachments, customer identifiers, credentials, and personnel information: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Recalculate reliability using stricter acknowledgment windows and with corrected handoffs separated from first-pass acceptance. Report both results rather than collapsing recovery into initial quality. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: a sensitive complaint is routed before its attachment is scanned, then transferred again without the second owner acknowledging the response deadline. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that source availability does not prove that a response was appropriate, complete, or accepted by the recipient. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this handoff-reliability review. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: a sensitive complaint is routed before its attachment is scanned, then transferred again without the second owner acknowledging the response deadline. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "records-administration-review-consistency-report-15": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This review-consistency report asks whether independent reviewers apply the same approved category, disposition, and escalation rule to equivalent evidence in records administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: two reviewers apply different retention and access codes to the same personnel record because they cite different policy versions. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one business record together with the source events used to create, revise, retain, restrict, or dispose of it. Build a versioned dictionary for record key, source artifact, version, effective date, custodian, required fields, approval evidence, access state, retention rule, and disposition. Freeze the review guide before selecting a balanced sample of routine, borderline, corrected, and unresolved records. Keep reviewers blind to one another’s codes until initial classification is complete. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: two reviewers apply different retention and access codes to the same personnel record because they cite different policy versions. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For records administration, administrators may maintain approved fields and flag gaps, while record owners decide interpretations, retention exceptions, and changes with legal or policy consequences. The review-consistency report should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when two reviewers apply different retention and access codes to the same personnel record because they cite different policy versions. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this review-consistency report, Record each reviewer’s category, disposition, escalation route, decisive evidence, and confidence state. Report exact agreement, disagreement pairs, missing evidence, and adjudicated results with raw counts. Use an authorized adjudicator only after initial codes are preserved. Every changed code should name the cited rule, evidence that resolved the difference, and whether the guide needs a dated revision. Apply those checks to record key, source artifact, version, effective date, custodian, required fields, approval evidence, access state, retention rule, and disposition; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: two reviewers apply different retention and access codes to the same personnel record because they cite different policy versions. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain duplicate records, conflicting effective dates, unexplained edits, missing source files, stale approvals, and access broader than the documented role. Minimize and purpose-limit customer records, personnel files, contract material, access logs, and retained source documents: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Repeat agreement after removing records with missing decisive evidence and under a stricter exact-match rule. A higher filtered score must not replace the all-record result. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: two reviewers apply different retention and access codes to the same personnel record because they cite different policy versions. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that the protocol cannot establish legal sufficiency, prove that an unavailable source never existed, or replace the accountable record owner. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this review-consistency report. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: two reviewers apply different retention and access codes to the same personnel record because they cite different policy versions. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "meeting-coordination-workflow-boundary-review-16": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This workflow-boundary review asks which actions are routine preparation, which require documented approval, and which must stop for accountable judgment in meeting administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: a coordinator is asked to publish minutes that convert tentative budget discussion into a commitment before the meeting owner approves the wording. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one meeting handoff containing the approved purpose, participant list, source materials, confirmed decisions, accepted actions, and receiver acknowledgment. Build a versioned dictionary for agenda version, participant role, source link, decision wording, action owner, due date, dependency, correction history, distribution list, and acknowledgment. Freeze the review period and draw records across ordinary work, urgent requests, delegated coverage, and at least one known exception. Exclude only records that fail a written eligibility rule, and report every exclusion by reason. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: a coordinator is asked to publish minutes that convert tentative budget discussion into a commitment before the meeting owner approves the wording. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For meeting administration, coordinators may prepare logistics and capture approved language, while meeting owners retain authority over invitations, decisions, commitments, and sensitive distribution. The workflow-boundary review should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when a coordinator is asked to publish minutes that convert tentative budget discussion into a commitment before the meeting owner approves the wording. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this workflow-boundary review, Code each action as permitted preparation, approval required, prohibited, or unresolved. Report counts and denominators for each code, then compare the observed action with the written authority rule that applied at that time. Two reviewers should classify an overlap sample before discussion. Preserve their initial codes, publish the disagreement pairs, and change the boundary guide only through a dated adjudication note. Apply those checks to agenda version, participant role, source link, decision wording, action owner, due date, dependency, correction history, distribution list, and acknowledgment; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: a coordinator is asked to publish minutes that convert tentative budget discussion into a commitment before the meeting owner approves the wording. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain tentative discussion recorded as a decision, suggested actions shown as accepted, draft dates treated as commitments, absent owners, and restricted notes sent too broadly. Minimize and purpose-limit meeting notes, recordings, personnel topics, customer matters, commercial plans, and restricted decisions: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Repeat the result with unresolved cases first treated as outside the boundary and then omitted. A conclusion that changes under that bounded test should be reported as unstable. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: a coordinator is asked to publish minutes that convert tentative budget discussion into a commitment before the meeting owner approves the wording. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that a complete administrative handoff does not prove that a decision was strategically sound or that every off-record discussion was captured. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this workflow-boundary review. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: a coordinator is asked to publish minutes that convert tentative budget discussion into a commitment before the meeting owner approves the wording. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "customer-administration-source-quality-audit-17": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This source-quality audit asks whether each material administrative field can be reconstructed from an authoritative, timely, and accessible source in customer administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: an account-change request contains a customer email and internal note but lacks the governing agreement version and evidence of authorized approval. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one customer handoff linked to the governing agreement, approved inputs, current owner, next permitted action, and acceptance evidence. Build a versioned dictionary for customer key, agreement version, source request, authorization, required input, current state, owner, due date, communication status, and disposition. Freeze the population by system and date, then sample routine records, corrected records, reopened work, and records with missing fields. Keep duplicates and conflicts visible instead of selecting the most favorable version. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: an account-change request contains a customer email and internal note but lacks the governing agreement version and evidence of authorized approval. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For customer administration, administrative staff may prepare records and approved communications, but may not interpret contracts, alter commercial terms, or decide an individual customer outcome. The source-quality audit should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when an account-change request contains a customer email and internal note but lacks the governing agreement version and evidence of authorized approval. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this source-quality audit, For every required field, code source presence, authority, observation time, version, conflict state, and reproducibility. Report complete, stale, conflicting, inaccessible, and unsupported fields separately. A second reviewer should reconstruct a subset using only the cited sources and dictionary. Record exact matches, disagreements, unavailable evidence, and corrections without giving credit for private explanation. Apply those checks to customer key, agreement version, source request, authorization, required input, current state, owner, due date, communication status, and disposition; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: an account-change request contains a customer email and internal note but lacks the governing agreement version and evidence of authorized approval. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain mismatched agreement versions, missing authorization, unsupported account changes, incomplete onboarding inputs, disputed ownership, and promises outside approved language. Minimize and purpose-limit customer identifiers, account details, agreements, communications, payment context, and access credentials: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Recalculate completeness under stricter source-age and authority rules. Show which fields and conclusions change so readers can distinguish robust evidence from a convenient threshold. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: an account-change request contains a customer email and internal note but lacks the governing agreement version and evidence of authorized approval. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that the protocol cannot establish contractual compliance, customer satisfaction, or the correctness of a commercial decision. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this source-quality audit. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: an account-change request contains a customer email and internal note but lacks the governing agreement version and evidence of authorized approval. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "project-administration-exception-pattern-study-18": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This exception-pattern study asks which deviations recur, where they become visible, and what evidence is needed before an owner can resolve them in project administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: multiple projects report green status despite stale source dates, rejected deliverables, and dependencies whose owners have not supplied recovery dates. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one project-status claim linked to a dated source update, dependency, acceptance event, and accountable owner. Build a versioned dictionary for project key, milestone, report version, source date, dependency state, blocker, owner, approval, forecast, acceptance evidence, and correction history. Define an exception before reviewing outcomes, freeze the period, and include reopened, returned, delayed, and unresolved work. Preserve multiple exception codes when one record has more than one failure mode. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: multiple projects report green status despite stale source dates, rejected deliverables, and dependencies whose owners have not supplied recovery dates. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For project administration, project administrators may collect updates and apply documented status rules, while sponsors and delivery owners retain scope, budget, risk-acceptance, and priority decisions. The exception-pattern study should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when multiple projects report green status despite stale source dates, rejected deliverables, and dependencies whose owners have not supplied recovery dates. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this exception-pattern study, Code exception type, detection point, evidence gap, current owner, elapsed state, disposition, and recurrence. Report raw counts with eligible-record denominators and a separate unresolved total. Reviewers should independently code an overlap sample and reconcile only through the versioned exception dictionary. Publish ambiguous examples and retain the pre-adjudication codes. Apply those checks to project key, milestone, report version, source date, dependency state, blocker, owner, approval, forecast, acceptance evidence, and correction history; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: multiple projects report green status despite stale source dates, rejected deliverables, and dependencies whose owners have not supplied recovery dates. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain stale updates, unsupported completion claims, blocked dependencies shown as on track, changed dates without approval, rejected handoffs, and mixed reporting windows. Minimize and purpose-limit commercial plans, personnel assignments, customer deliverables, risk records, budget context, and restricted project artifacts: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Repeat counts after changing the recurrence window and after separating system-access exceptions from process exceptions. Report whether the apparent pattern survives both tests. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: multiple projects report green status despite stale source dates, rejected deliverables, and dependencies whose owners have not supplied recovery dates. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that the protocol cannot establish causation, predict delivery, or prove that a reported milestone created business value. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this exception-pattern study. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: multiple projects report green status despite stale source dates, rejected deliverables, and dependencies whose owners have not supplied recovery dates. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "executive-administration-handoff-reliability-brief-19": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This handoff-reliability review asks whether the next owner received complete evidence, understood the next permitted action, and explicitly accepted custody in executive administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: an executive briefing passes to a delegate with source links intact but without the unresolved decision, response deadline, or explicit acceptance of responsibility. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one executive request linked to the calendar state, correspondence, named decision owner, and approval trail. Build a versioned dictionary for request origin, stated priority rule, time constraints, delegated authority, response deadline, approval state, and final disposition. Freeze eligible handoffs by source system and date, then include accepted, returned, corrected, unacknowledged, and reopened cases. Do not infer acceptance from assignment alone. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: an executive briefing passes to a delegate with source links intact but without the unresolved decision, response deadline, or explicit acceptance of responsibility. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For executive administration, an assistant may verify constraints and prepare options, while only the named executive or documented delegate may choose between competing commitments. The handoff-reliability review should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when an executive briefing passes to a delegate with source links intact but without the unresolved decision, response deadline, or explicit acceptance of responsibility. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this handoff-reliability review, A handoff qualifies only when required evidence is linked, the next action is explicit, ownership is acknowledged, and exceptions remain visible. Report accepted, returned, corrected, unacknowledged, and unresolved counts. A second reviewer should reconstruct the sending state and receiver acknowledgment from the retained record. Disagreements about implied acceptance must remain failures until adjudicated under a written rule. Apply those checks to request origin, stated priority rule, time constraints, delegated authority, response deadline, approval state, and final disposition; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: an executive briefing passes to a delegate with source links intact but without the unresolved decision, response deadline, or explicit acceptance of responsibility. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain overlapping commitments, unclear requester authority, travel changes, unsupported urgency, and replies that could create an external commitment. Minimize and purpose-limit calendar details, correspondence, travel information, and personnel context: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Recalculate reliability using stricter acknowledgment windows and with corrected handoffs separated from first-pass acceptance. Report both results rather than collapsing recovery into initial quality. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: an executive briefing passes to a delegate with source links intact but without the unresolved decision, response deadline, or explicit acceptance of responsibility. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that the review cannot determine whether the executive selected the best business priority or whether an unavailable conversation changed the decision. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this handoff-reliability review. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: an executive briefing passes to a delegate with source links intact but without the unresolved decision, response deadline, or explicit acceptance of responsibility. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ],
  "inbox-workflow-support-review-consistency-report-20": [
    {
      "heading": "Protocol question and scope",
      "paragraphs": [
        "This review-consistency report asks whether independent reviewers apply the same approved category, disposition, and escalation rule to equivalent evidence in shared-inbox administration. It is a bounded administrative protocol, not evidence that the organization already performs well. Define the business unit, systems, review window, eligible records, exclusions, and accountable report owner before inspecting outcomes. The protocol must not be used to make legal, personnel, financial, or individual customer decisions. Use a concrete boundary case during scoping: reviewers disagree whether an auto-forwarded message is a new item, a duplicate, or an escalation because the queue guide does not define thread identity. Name the records that make it eligible, the authority rule being tested, and the condition that would keep it out of the reported population."
      ]
    },
    {
      "heading": "Observation unit and evidence",
      "paragraphs": [
        "The observation unit is one material message from receipt through accepted assignment, approved response, escalation, or documented closure. Build a versioned dictionary for message source, received time, approved category, sensitivity flag, assigned owner, acknowledgment, next action, due time, and disposition. Freeze the review guide before selecting a balanced sample of routine, borderline, corrected, and unresolved records. Keep reviewers blind to one another’s codes until initial classification is complete. Each coded value must retain its source, observation time, reviewer, transformation, and correction history so a second person can reconstruct the result without private notes. For evidence reconstruction, follow this case end to end: reviewers disagree whether an auto-forwarded message is a new item, a duplicate, or an escalation because the queue guide does not define thread identity. Preserve the first observable state, every later correction, and the source that supports each change instead of retaining only the final screen."
      ]
    },
    {
      "heading": "Decision boundary",
      "paragraphs": [
        "For shared-inbox administration, support staff may classify and route under approved rules, while policy interpretation, promises, refunds, and sensitive customer decisions stay with an authorized owner. The review-consistency report should record the written rule in force, the smallest unresolved decision, the owner authorized to decide it, and the time when an unresolved item must be revisited. Preparation, communication under approved language, approval, and closure must remain separate states rather than being inferred from activity. The authority checkpoint becomes visible when reviewers disagree whether an auto-forwarded message is a new item, a duplicate, or an escalation because the queue guide does not define thread identity. Record what staff may prepare, the exact choice reserved to the owner, and the approved escalation route before any communication or closure occurs."
      ]
    },
    {
      "heading": "Measurement and reviewer checks",
      "paragraphs": [
        "For this review-consistency report, Record each reviewer’s category, disposition, escalation route, decisive evidence, and confidence state. Report exact agreement, disagreement pairs, missing evidence, and adjudicated results with raw counts. Use an authorized adjudicator only after initial codes are preserved. Every changed code should name the cited rule, evidence that resolved the difference, and whether the guide needs a dated revision. Apply those checks to message source, received time, approved category, sensitivity flag, assigned owner, acknowledgment, next action, due time, and disposition; do not convert missing, conflicting, not-applicable, or unresolved evidence into a favorable result. Publish the dictionary version and enough category detail to show what the aggregate includes. The reviewer worksheet should be able to classify this example independently: reviewers disagree whether an auto-forwarded message is a new item, a duplicate, or an escalation because the queue guide does not define thread identity. A disagreement must identify the conflicting code, decisive source, applicable rule version, and adjudicator rather than being silently averaged away."
      ]
    },
    {
      "heading": "Exceptions, privacy, and security",
      "paragraphs": [
        "The review should deliberately retain duplicate assignment, unknown senders, absent ownership, contradictory instructions, sensitive attachments, and deadlines without an acknowledged receiver. Minimize and purpose-limit message bodies, attachments, customer identifiers, credentials, and personnel information: use study keys, restrict raw access, log exports, avoid copying secrets into analysis files, and set deletion dates. Repeat agreement after removing records with missing decisive evidence and under a stricter exact-match rule. A higher filtered score must not replace the all-record result. Any operational follow-up should name an owner and evidence request without exposing protected material in the public report. Keep the adverse path in the exception file: reviewers disagree whether an auto-forwarded message is a new item, a duplicate, or an escalation because the queue guide does not define thread identity. Restrict the underlying material, but retain enough keyed evidence to show detection time, current custodian, corrective action, and whether the same condition recurred."
      ]
    },
    {
      "heading": "Limitations and responsible use",
      "paragraphs": [
        "The central limitation is that source availability does not prove that a response was appropriate, complete, or accepted by the recipient. Selection bias, inaccessible records, local definitions, system changes, reviewer learning, and correlated work further restrict interpretation of this review-consistency report. Report the population, sample, exclusions, missingness, counterexamples, disagreement, sensitivity results, and unresolved cases. Use the findings to improve documented administration and escalation paths, not to assign fault or claim causation. Even a complete administrative record of this case has a narrow meaning: reviewers disagree whether an auto-forwarded message is a new item, a duplicate, or an escalation because the queue guide does not define thread identity. It can support process repair and clearer escalation, but it cannot prove motive, business merit, legal compliance, or an outcome beyond the sampled period."
      ]
    }
  ]
};
