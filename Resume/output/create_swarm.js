const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        AlignmentType, LevelFormat, BorderStyle, WidthType } = require('C:/Users/maraj/AppData/Roaming/npm/node_modules/docx');
const fs = require('fs');

const DUSTY_BLUE = "537685";
const GRAY = "969FA7";
const BLACK = "000000";
const DARK_GRAY = "555555";
const H = "Gill Sans MT";
const B = "Calibri";

const TOP_MARGIN = Math.round(0.6 * 1440);  // 864
const LR_MARGIN  = Math.round(0.8 * 1440);  // 1152
const USABLE_W   = 12240 - 2 * LR_MARGIN;   // 9936
const COL_W      = Math.round(USABLE_W / 2); // 4968

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
  skHead("Product Strategy & Leadership"),
  skItem("Multi-Year Product Roadmap, Enterprise Strategy, P&L Ownership"),
  skItem("AI Product Lifecycle Ownership, AI Roadmapping"),
  skItem("Go-to-Market Execution, Sales Enablement"),
  skItem('Executive Advisory, "Build vs. Buy" Analysis'),
  skItem("OKR Framework, Agile Methodologies"),
  skHead("AI & Agentic Intelligence"),
  skItem("Agentic Workflows & LLM Orchestration"),
  skItem("Predictive Analytics & ML Product Integration"),
  skItem("Rapid Pilot-to-Production Cycles"),
  skItem("Azure AI Foundry, OpenAI, n8n, Python"),
];

const col2 = [
  skHead("Industry & Domain Expertise"),
  skItem("Agriculture, Grain Logistics & Commodity Trading"),
  skItem("Bulk Supply Chain, TMS, ERP (SAP, Oracle, JDE, Agris)"),
  skItem("Chemicals Manufacturing & Distribution (Industrial)"),
  skItem("CTRMs (Ion, Right Angle, Allegro)"),
  skItem("Logistics (Truck, Rail, Barge)"),
  skHead("Execution & Engineering Leadership"),
  skItem("Full Product Lifecycle (0-1 + Enterprise)"),
  skItem("Product & Engineering Team Leadership"),
  skItem("Customer Discovery, UAT, A/B Testing"),
  skItem("Cross-Functional Team Leadership"),
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
    children: [new TextRun({ text: "AI Product Leader | Agriculture, Supply Chain & Agentic Intelligence", font: H, size: 20, color: GRAY })]
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
      text: "With over 20 years in product leadership and engineering, I have built and scaled B2B SaaS platforms, including recent AI-powered platforms at the intersection of agriculture, chemical commodity trading, and supply chain logistics. At Kontango, I directed the end-to-end roadmap for a data-intensive freight optimization platform and TowFlow.ai, an AI-powered barge operations product. I lead engineering teams, while serving as the primary executive face to our customers. As a lifelong farmer with deep roots in the industries SWARM serves, I bring the domain authority, technical fluency, and strategic range to lead ENGINE and AVA from roadmap to market leadership.",
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
  desc("Premier boutique consultancy delivering AI strategy and agentic automation for enterprise agriculture, commodity trading, and logistics | Jan 2020-Present"),
  bul("Accelerated AI Framework", "Developed and executes a 3-phase framework (assess, prototype, operationalize) to deliver AI and agentic workflow solutions from pilot to production for enterprise ag and supply chain clients."),
  bul("Executive Advisory", 'Consults with C-suite leaders across agriculture and logistics to identify high-value AI use cases, define multi-year AI product roadmaps, and navigate complex "build vs. buy" decisions.'),
  bul("Agentic Deployment", "Architects and deploys predictive AI engines and agentic automation leveraging Azure AI Foundry, OpenAI, and n8n, coaching engineering teams on modern AI tooling and LLM orchestration."),

  // Kontango
  co("Kontango", "President, Head of Freight Product and Customer Success"),
  desc("B2B SaaS freight intelligence platform for agriculture and commodity trading | Apr 2023-Dec 2024"),
  bul("Product Roadmap Leadership", "Directed the end-to-end product roadmap for a data-intensive freight optimization platform and TowFlow.ai, an AI-powered barge operations SaaS platform, leading discovery, prioritization, and delivery in close partnership with engineering and data science teams."),
  bul("ML-Driven Market Intelligence", "Owned the roadmap for predictive ML integration in freight market analysis, driving requirements and data mapping with the CEO and accelerating customer adoption through rapid pilot-to-production cycles."),
  bul("Customer Operations", "Owned all customer operations, providing end-to-end onboarding, success management, and CXO-level advisory to enterprise agriculture and commodity trading customers."),
  bul("Engineering Partnership", "Served as the primary bridge between business requirements and technical execution, leading cross-functional engineering and data science teams to deliver scalable, data-driven product features."),

  // Roger
  co("Roger", "General Manager, Product Manager (Compliance and Integrations)"),
  desc("B2B SaaS grain logistics platform (JV: Cargill, The Andersons, Scoular, CGB, Koch) | Mar 2020-Mar 2023"),
  bul("Platform Growth", "Owned P&L for the compliance product line, launching onRamp and increasing platform revenue ~20% in under 12 months by streamlining carrier onboarding for agriculture and grain logistics enterprises."),
  bul("Cross-Functional Leadership", "Led cross-functional teams of onshore and offshore engineers and designers, establishing OKRs and KPIs to align product performance with measurable business outcomes."),
  bul("Customer Discovery", "Led continuous discovery sessions with agriculture business stakeholders across five of North America's largest ag enterprises, translating grain logistics and compliance challenges into prioritized product capabilities."),

  // Fast Solutions
  co("Fast Solutions", "Partner, Director of Business Solutions"),
  desc("Enterprise technology consulting serving agriculture, commodities, and logistics | Jun 2013-Jan 2020"),
  bul("Enterprise Transformation", "Drove multi-year product and technology roadmaps for enterprise ag and commodity trading clients, modernizing legacy ERP and mainframe systems to modern platforms including SAP and Oracle."),
  bul("Domain Leadership", "Served as the primary technical consultant and domain expert, delivering TMS, CTRM, and custom integrations for grain trading, chemicals manufacturing, and bulk logistics operations."),

  // Tyson
  co("Tyson Foods", "Business Analyst / Software Engineer | Jul 2010-Jun 2013"),
  bul("Supply Chain Integration", "Key liaison between business stakeholders across sales, manufacturing, and logistics, defining requirements for ERP and mainframe integrations within a highly regulated protein and food supply chain."),

  // CF Industries
  co("CF Industries", "Software Developer / Security Analyst | Apr 2001-Jun 2010"),
  bul("Agricultural Chemicals Systems", "Engineered robust software solutions and SAP integrations for the leading agricultural chemicals manufacturer, building foundational expertise in ag commodity systems and enterprise compliance."),

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

const resumeDoc = new Document({
  numbering,
  sections: [{
    properties: { page: { margin: { top: TOP_MARGIN, right: LR_MARGIN, bottom: TOP_MARGIN, left: LR_MARGIN } } },
    children: resumeChildren
  }]
});

// Cover Letter
const clDoc = new Document({
  sections: [{
    properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    children: [
      new Paragraph({ spacing: { before: 0, after: 20 }, children: [new TextRun({ text: "Mara Jorgensen", bold: true, font: B, size: 24 })] }),
      new Paragraph({ spacing: { before: 0, after: 10 }, children: [new TextRun({ text: "mara.jorgensen@gmail.com | 712-898-2341 | linkedin.com/in/mara-jorgensen", font: B, size: 22 })] }),
      new Paragraph({ spacing: { before: 0, after: 240 }, children: [new TextRun({ text: "March 30, 2026", font: B, size: 22 })] }),
      new Paragraph({ spacing: { before: 0, after: 240 }, children: [new TextRun({ text: "ATTN: Head of Product Management Hiring Manager", font: B, size: 22 })] }),
      new Paragraph({ spacing: { before: 0, after: 240 }, children: [new TextRun({ text: "Hi Shail,", font: B, size: 22 })] }),
      new Paragraph({
        spacing: { before: 0, after: 240 },
        children: [new TextRun({ text: "As an AgTech leader and farm owner, the Head of Product Management role at SWARM Engineering is a direct match for the problems you are solving. I have spent over two decades solving the operational challenges your customers face, from optimizing grain logistics and commodity distribution to modernizing the technology driving agriculture and chemical commodity supply chains.", font: B, size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 0, after: 240 },
        children: [new TextRun({ text: "I have directed the end-to-end product roadmap for two B2B SaaS platforms at Kontango: a data-intensive freight optimization product and TowFlow.ai, an AI-powered barge operations platform for ag and commodity trading enterprises. Throughout my career, I have led both product and engineering teams while serving as the primary executive face to customers, translating real operational pain into scalable product decisions.", font: B, size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 0, after: 240 },
        children: [new TextRun({ text: "I served as General Manager of Product at Roger, a SaaS platform backed by Cargill, The Andersons, Scoular, and Koch, delivering grain logistics compliance and carrier onboarding solutions for North America's largest ag enterprises, growing P&L by approximately 20% in under 12 months. Through my consulting practice, I now lead AI strategy and agentic workflow deployments for ag and supply chain clients.", font: B, size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 0, after: 240 },
        children: [new TextRun({ text: "Thank you for your time and consideration. I look forward to discussing how my background directly aligns with SWARM's mission.", font: B, size: 22 })]
      }),
      new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: "Sincerely,", font: B, size: 22 })] }),
      new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text: "Mara Jorgensen", font: B, size: 22 })] }),
    ]
  }]
});

const outDir = "g:/My Drive/GitHub/ExecutiveAssistant/Resume/output";

Promise.all([
  Packer.toBuffer(resumeDoc).then(buf => {
    fs.writeFileSync(`${outDir}/Jorgensen Resume - SWARM 2026-03.docx`, buf);
    console.log("Resume saved.");
  }),
  Packer.toBuffer(clDoc).then(buf => {
    fs.writeFileSync(`${outDir}/Jorgensen Cover Letter - SWARM 2026-03.docx`, buf);
    console.log("Cover letter saved.");
  })
]).catch(err => console.error(err));
