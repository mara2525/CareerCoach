# CargoCheck Follow-Up Questions

**From:** Mara Jorgensen **Date:** January 28, 2026 **Re:** e-POD
Product Backlog - Clarifying Questions

------------------------------------------------------------------------

## 1. Context & Scope

**e-POD Components:**

1.  Is the e-POD always comprised of BOL + COA + Scale Ticket +
    Signature, or are some components optional in certain scenarios?
2.  Are there edge cases where only a subset is required?

**Roles:**

3.  Is there a functional difference between a Carrier role and a Driver
    role, or are they the same?
4.  For owner-operators who are both carrier and driver, how should
    access control be handled?

------------------------------------------------------------------------

## 2. Azure DevOps (ADO) & User Story Format

1.  Will I receive ADO login credentials to input user stories directly?
2.  How do you prioritize: Features \> Epics or Epics \> Features? (I've
    seen both structures)
3.  The SOW mentions "Feature definition includes functional
    capabilities" - is this at a higher level than user stories?
4.  Do you have a user story template/format I should follow, or should
    I use the standard format Sam shared?
5.  Should I put user stories directly in ADO or in a spreadsheet for
    your review first? (Given the tight timeline, I'm fine with either,
    but there's more risk if I input directly without review)
6.  Who will review the user stories before implementation? (Sam, Kathy,
    John, Celeste?)
7.  What technical assumptions should I operate under? (mobile-first,
    web app capabilities, existing integrations, etc.)

------------------------------------------------------------------------

## 3. Digital Signature Feature

1.  How is the BOL currently signed, and how does the signature
    requirement differ from that process?
2.  Do you want multiple signature capture options analyzed (with one
    recommended), or has a decision already been made?
3.  If multiple options, what are the prioritized selection criteria?
    a.  Budget
    b.  Time to implement
    c.  Use of current technology/features available
    d.  Other constraints?
4.  What happens when signature capture fails? (device failure,
    connectivity issue, refusal to sign)
5.  Do you want a claims/dispute process for contested signatures, or is
    that out of scope?
6.  Is unmanned delivery (no signature) an acceptable scenario?
7.  Integration assumptions:
    a.  Mobile-only rendering/collection, or also web app viewing?
8.  If a customer already collects signatures digitally via Platform
    Science or another system, will CargoCheck integrate with that, or
    require a separate signature?

------------------------------------------------------------------------

## 4. Scale Ticket Automation Feature

1.  My assumption: the driver will snap a photo with their phone, same
    as current workflow. Correct?
2.  Do you want 2+ options mapped out (OCR, AI, manual entry), or has a
    direction been chosen?
3.  If OCR: Do you have an existing OCR system/platform to leverage?
4.  If AI: What AI systems/tools are available to the team?
5.  We discussed API integration and telemetry in previous meetings -
    are those out of scope for this backlog, or should they be included
    as future-phase options?
6.  Who is the human in the loop monitoring automated scale ticket
    capture? (Operator, Admin, Celeste?)
7.  What are your accuracy requirements for acceptance criteria? (e.g.,
    95% OCR accuracy, manual review threshold)
8.  Do you have special validation rules for scale ticket data?
9.  What happens on error? (OCR fails, unreadable ticket, data doesn't
    validate) - is error handling in scope?
10. Do you have offline data handling for low-connectivity areas? (data
    stored on device, synced when connection restored)
11. Are there specific scales you currently integrate with that I should
    design for?

------------------------------------------------------------------------

## 5. e-POD Audit Trail & Artifacts Feature

1.  Do you want multiple options for this feature, or have you decided
    on a specific approach?

**Access method options (confirm which to include):**

2.  On-screen retrieval in web app (for CargoCheck Admin? Shipper?
    Both?)
3.  Digital "bundle" - would this be a ZIP file? How would it be
    distributed? (download, email, API?)
4.  Single PDF per delivery - If email distribution is included, what
    triggers the email?
5.  CSV/XLS export with date range filtering - Power BI report
    integration?
6.  Should all four access methods be delivered at once, or phased
    rollout?

**Data access & governance:**

7.  What data is available to the shipper vs. the carrier? (different
    views/permissions?)
8.  When you say "audit," I assume every measurable event is logged on
    the backend with Power BI reporting. Is that correct?
9.  Are there restrictions on who can access what data?
10. What is the data retention policy or other compliance requirements?
11. Are there backend considerations I should account for in the
    backlog?

------------------------------------------------------------------------

## 6. Access Control & Roles (RBAC)

1.  This was mentioned in the SOW but didn't have a specific standalone
    deliverable. Do you want a dedicated document on RBAC, or should I
    weave role-based permissions into each feature's user stories?
2.  What RBAC is currently implemented, and is there documentation I can
    review?

------------------------------------------------------------------------

## 7. Strategic Alignment (Based on Trans Systems Meeting)

1.  After the Trans Systems meeting, who is the primary customer for
    this backlog: shippers (like PBS) or carriers?
2.  What differentiates CargoCheck's e-POD from Platform Science's
    existing digitized workflow?
3.  Is the QR tank tag still core to the product strategy, or has the
    focus shifted entirely to e-POD?

------------------------------------------------------------------------

## 8. Timeline & Delivery

1.  Is February 6 still the target delivery date for the complete
    backlog?
2.  Are there customer commitments (like PBS) driving this deadline?
3.  What is most urgent: Signature, Scale Ticket, e-POD Audit Trail, or
    Access Control?

------------------------------------------------------------------------

**Next Steps:**

1.  Please respond via Teams or email with answers to these questions
2.  I'll attend Friday's 11am technical Q&A and 3pm team sync to clarify
    any remaining items
3.  Once clarified, I'll begin building out the feature definitions and
    user stories
