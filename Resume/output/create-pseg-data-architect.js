const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        AlignmentType, LevelFormat, BorderStyle, WidthType } = require('C:/Users/maraj/AppData/Roaming/npm/node_modules/docx');
const fs = require('fs');

const DUSTY_BLUE = "537685";
const GRAY = "969FA7";
const BLACK = "000000";
const DARK_GRAY = "555555";
const H = "Gill Sans MT";
const B = "Calibri";

const TOP_MARGIN = Math.round(0.6 * 1440);
const LR_MARGIN  = Math.round(0.8 * 1440);
const USABLE_W   = 12240 - 2 * LR_MARGIN;
const COL_W      = Math.round(USABLE_W / 2);

const noBorder  = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

const numbering = {
  config: [{
    reference: "bul",
    levels: [{
      level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 360, hanging: 200 } } }
    }]
  }]
};

function secHeader(text) {
  return new Paragraph({
    spacing: { before: 140, after: 40 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: DUSTY_BLUE } },
    children: [new TextRun({ text, bold: true, font: H, size: 22, color: DUSTY_BLUE, allCaps: true })]
  });
}

function co(company, title) {
  return new Paragraph({
    spacing: { before: 120, after: 0 },
    children: [
      new TextRun({ text: company, bold: true, font: B, size: 22, color: DUSTY_BLUE }),
      new TextRun({ text: " | " + title, bold: true, font: B, size: 22, color: DUSTY_BLUE })
    ]
  });
}

function desc(text) {
  return new Paragraph({
    spacing: { before: 0, after: 40 },
    children: [new TextRun({ text, italics: true, font: B, size: 20, color: DARK_GRAY })]
  });
}

function bul(leadIn, text) {
  return new Paragraph({
    numbering: { reference: "bul", level: 0 },
    spacing: { before: 0, after: 30 },
    children: [
      new TextRun({ text: leadIn + ": ", bold: true, font: B, size: 21 }),
      new TextRun({ text, font: B, size: 21 })
    ]
  });
}

function skHead(text) {
  return new Paragraph({
    spacing: { before: 80, after: 20 },
    children: [new TextRun({ text, bold: true, font: B, size: 20 })]
  });
}

function skItem(text) {
  return new Paragraph({
    numbering: { reference: "bul", level: 0 },
    spacing: { before: 0, after: 16 },
    children: [new TextRun({ text, font: B, size: 20 })]
  });
}

function skCell(items) {
  return new TableCell({
    borders: noBorders,
    width: { size: COL_W, type: WidthType.DXA },
    children: items
  });
}

const col1 = [
  skHead("Data Architecture"),
  skItem("Source-to-Target Design"),
  skItem("Data Domain Modeling"),
  skItem("Data Product Design"),
  skItem("Analytics Use Case Development"),
  skHead("ETRM/CTRM Domain"),
  skItem("Trades, Positions, Prices, Settlements"),
  skItem("ERP Financial Integration"),
  skItem("Commodity Trading Operations"),
];

const col2 = [
  skHead("AI Readiness"),
  skItem("AI Governance Frameworks"),
  skItem("Governed Data Consumption Patterns"),
  skItem("Prompt-Safe Data Boundaries"),
  skItem("AI Use Case Backlog Development"),
  skHead("Architecture Delivery"),
  skItem("Practical Delivery Roadmaps"),
  skItem("Executive Advisory"),
  skItem("Regulated Environment Delivery"),
];

const skillsTable = new Table({
  columnWidths: [COL_W, COL_W],
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  rows: [new TableRow({ children: [skCell(col1), skCell(col2)] })]
});

const resumeChildren = [
  // Header
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 20 },
    children: [new TextRun({ text: "MARA JORGENSEN", bold: true, font: H, size: 40, color: BLACK })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 10 },
    children: [new TextRun({ text: "Data Strategy & AI Leader | ETRM/CTRM & Commodity Trading", font: H, size: 20, color: GRAY })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 100 },
    children: [new TextRun({ text: "+1-712-898-2341 | mara.jorgensen@gmail.com | linkedin.com/in/mara-jorgensen", font: H, size: 20, color: GRAY })]
  }),

  // Summary
  secHeader("Summary"),
  new Paragraph({
    spacing: { before: 60, after: 80 },
    children: [new TextRun({
      text: "With over 20 years of experience in agriculture, commodity trading, and logistics systems, I provide data strategy, roadmaps, and strategic guidance for complex trading and logistics environments. I translate ETRM/CTRM workflows into governed data architectures and analytics-ready data products. Over the past two years, I have expanded into enterprise AI strategy, bringing AI readiness assessments and governed AI orchestration to commodity trading and supply chain clients.",
      font: B, size: 21
    })]
  }),

  // Skills
  secHeader("Skills"),
  skillsTable,

  // Professional Experience
  secHeader("Professional Experience"),

  // SCC
  co("Strategic Consulting Corp.", "CEO, AI & Technical Implementation Strategist"),
  desc("Premier boutique consultancy delivering data architecture, AI strategy, and agentic automation for enterprise commodity trading and logistics | Jan 2020-Present"),
  bul("Data Architecture & Roadmap Delivery", "Delivers data architecture assessments for commodity trading and supply chain clients, producing sequenced implementation roadmaps executives can fund and launch without additional discovery."),
  bul("Executive Advisory", "Consults with C-suite leaders across commodity trading and logistics to define AI readiness programs and practical build vs. buy strategy for data infrastructure."),
  bul("AI Governance & Orchestration Design", "Conducts thorough governance discovery with enterprise clients to assess current data access patterns, then delivers a tailored AI guardrail framework and governed consumption model for safe, controlled AI deployment."),
  bul("Agentic AI Deployment", "Architects and deploys agentic workflows for enterprise commodity trading and logistics clients, moving initiatives from pilot to production using modern AI tooling."),

  // Kontango
  co("Kontango", "President, Head of Freight Product and Customer Success"),
  desc("B2B SaaS freight intelligence platform for commodity trading and agriculture | Apr 2023-Present"),
  bul("Data Platform Architecture", "Directed the end-to-end product roadmap for a data-intensive, ML-powered freight optimization platform, defining data domains and governed analytics consumption patterns for operational reporting."),
  bul("Source System Integration", "Owned the mapping and ingestion of data across the freight platform's source systems, establishing data domain ownership, refresh cadence, and consumption patterns."),
  bul("ML Analytics Ownership", "Led engineering and data science teams to integrate predictive ML into the platform, owning data product requirements from pilot through production."),
  bul("Data Mapping & Requirements", "Led data mapping requirements with the CEO and business stakeholders, aligning commercial data flows with the platform's domain architecture."),

  // Roger
  co("Roger", "General Manager, Product Management (Compliance and Integrations)"),
  desc("B2B SaaS grain logistics platform (JV: Cargill, The Andersons, Scoular, CGB, Koch) | Mar 2020-Mar 2023"),
  bul("Integrations Team Leadership", "Managed the integrations team, owning the architecture and delivery of over a dozen connected system integrations for enterprise agriculture logistics clients."),
  bul("Integration Architecture", "Defined integration mapping and data movement requirements across multiple enterprise systems, establishing movement logic for the grain logistics platform."),
  bul("Data Product Requirements", "Led discovery with enterprise stakeholders from five of North America's largest ag enterprises, translating complex logistics workflows into structured data product requirements."),
  bul("Compliance & Data Governance", "Partnered with legal, security, and compliance teams to establish data privacy controls, regulatory adherence, and access governance across all platform integrations."),
  bul("Cross-Functional Leadership", "Led cross-functional teams of 30+ onshore and offshore engineers and designers through full delivery cycles, from requirements definition through UAT and production release."),

  // Fast Solutions
  co("Fast Solutions", "Partner, Director of Business Solutions"),
  desc("Enterprise technology consulting serving commodity trading, agriculture, and logistics | Jun 2013-Jan 2020"),
  bul("ETRM/CTRM Domain Architecture", "Served as the primary technical consultant and domain expert for ETRM/CTRM environments, delivering data architecture and integration roadmaps for grain trading and chemicals manufacturing clients."),
  bul("ERP Financial Integration", "Led ERP implementation and integration efforts at enterprise commodity trading clients, defining data movement logic and accounting data mappings connecting trading systems to financial platforms."),
  bul("Global Risk Position Servers", "Led teams that delivered global risk position servers and enterprise reporting platforms for commodity trading clients, spanning full implementation and configuration."),
  bul("Analytics & Reporting Delivery", "Directed delivery of enterprise analytics and reporting solutions for commodity trading clients, owning both the technical design and configuration."),
  bul("Commodity Trading Domain", "Served as the primary domain expert for commodity trading operations, with deep specialization in risk management, hedging, settlement, and procure-to-pay workflows for trading desk clients."),

  // Tyson
  co("Tyson Foods", "Business Analyst / Software Engineer | Jul 2010-Jun 2013"),
  bul("Supply Chain Integration", "Key liaison between business stakeholders across sales, manufacturing, and logistics, defining requirements for ERP and mainframe integrations within a highly regulated protein and food supply chain."),
  bul("Reporting & Analytics", "Built reporting and analytics platforms to support operational decision-making across supply chain, procurement, and logistics functions within a Fortune 100 environment."),

  // CF Industries
  co("CF Industries", "Software Developer / Security Analyst | Apr 2001-Jun 2010"),
  bul("Agricultural Systems & Compliance", "Engineered enterprise software and ERP integrations for the leading agricultural chemicals manufacturer, building foundational expertise in commodity trading systems, data governance, and regulatory compliance."),
  bul("Enterprise Commodity Systems", "Engineered software solutions for the leading agricultural chemicals manufacturer, building foundational expertise in enterprise trading systems, hedging workflows, and operational data architecture."),

  // Education
  secHeader("Education"),
  new Paragraph({
    spacing: { before: 60, after: 20 },
    children: [
      new TextRun({ text: "Masters in Management", bold: true, font: B, size: 21 }),
      new TextRun({ text: " | Bellevue University, Bellevue, Nebraska", font: B, size: 21 })
    ]
  }),
  new Paragraph({
    spacing: { before: 0, after: 0 },
    children: [
      new TextRun({ text: "BS in Computer Science and Mathematics", bold: true, font: B, size: 21 }),
      new TextRun({ text: " | Morningside University, Sioux City, Iowa", font: B, size: 21 })
    ]
  }),
];

const doc = new Document({
  numbering,
  sections: [{
    properties: { page: { margin: { top: TOP_MARGIN, right: LR_MARGIN, bottom: TOP_MARGIN, left: LR_MARGIN } } },
    children: resumeChildren
  }]
});

const outPath = "g:/My Drive/GitHub/CareerCoach/Resume/output/Jorgensen Resume - PSEG Data Strategy 2026-06.docx";

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(outPath, buf);
  console.log("Resume saved:", outPath);
}).catch(err => console.error(err));
