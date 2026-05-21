const { Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell, WidthType, BorderStyle, LevelFormat } = require('docx');
const fs = require('fs');

const dustyBlue = "537685";
const bullet = { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 260 } } } }] };

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Calibri", size: 20 } } },
    paragraphStyles: [{
      id: "companyName", name: "Company Name", basedOn: "Normal",
      run: { size: 20, color: dustyBlue, font: "Gill Sans MT" },
      paragraph: { spacing: { before: 240, after: 0 } }
    }, {
      id: "companyDesc", name: "Company Description", basedOn: "Normal",
      run: { size: 20, italics: true, color: "000000", font: "Calibri" },
      paragraph: { spacing: { before: 0, after: 0 } }
    }, {
      id: "dates", name: "Dates", basedOn: "Normal",
      run: { size: 20, color: "000000", font: "Calibri" },
      paragraph: { spacing: { before: 0, after: 120 } }
    }]
  },
  numbering: { config: [bullet] },
  sections: [{
    properties: { page: { margin: { top: 720, right: 720, bottom: 720, left: 720 } } },
    children: [
      // Header
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 0 }, children: [new TextRun({ text: "MARA JORGENSEN", size: 44, bold: true, font: "Gill Sans MT" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 }, children: [new TextRun({ text: "Digital Transformation & AI Technical Leader | AgTech and Commodities", size: 22, color: dustyBlue, font: "Gill Sans MT" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: "+1-712-898-2341 | mara@strategic-corp.com | LinkedIn", size: 20, font: "Calibri" })] }),

      // Summary
      new Paragraph({ spacing: { before: 120, after: 60 }, children: [new TextRun({ text: "Summary", size: 24, bold: true, color: dustyBlue, font: "Calibri" })] }),
      new Paragraph({ spacing: { after: 180 }, children: [new TextRun({ text: "Technology leader with 20+ years bridging business and engineering across commodities trading, risk management, and operations. Deep hands-on experience with physical and financial trading platforms across agricultural and chemical commodities, including operations, hedging, and logistics workflows. In recent years I have worked towards driving early adoption of Agentic AI and LLM orchestration. My passion is transforming enterprise processes to drive revenue growth and operational efficiency, leading pilots from discovery to production while managing governance, compliance, and change management. Proven executive advisor who translates complex technical requirements into actionable roadmaps, manages program portfolios, and drives adoption across trading desks and operational teams.", size: 20, font: "Calibri" })] }),

      // Skills Header
      new Paragraph({ spacing: { before: 120, after: 120 }, children: [new TextRun({ text: "Skills", size: 24, bold: true, color: dustyBlue, font: "Calibri" })] }),

      // Skills Table 1: AI & Commodities
      new Table({
        columnWidths: [4500, 4500],
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
        rows: [
          new TableRow({ children: [
            new TableCell({ width: { size: 4500, type: WidthType.DXA }, borders: {}, children: [
              new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "AI & Agentic Workflows", size: 21, bold: true, font: "Calibri" })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Agentic workflows", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "LLM orchestration (Azure AI Foundry, OpenAI, Claude, n8n)", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "RAG strategy", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Rapid pilot-to-production cycles", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Predictive analytics", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Python-based ML workflows", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Responsible AI posture & governance", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Compliance integration (SOX, GDPR, CCPA)", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Human-in-the-loop safeguards",size: 20 })] })
            ]}),
            new TableCell({ width: { size: 4500, type: WidthType.DXA }, borders: {}, children: [
              new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Commodities & Trading Systems", size: 21, bold: true, font: "Calibri" })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "ETRM/CTRM platforms (Ion, Right Angle, Allegro, custom)", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Commodity trading & risk management", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Hedging & settlement operations", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Scheduling & logistics", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Procure-to-pay & order-to-cash optimization", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "ERP systems (SAP, Oracle, JDE, Dynamics, Agris, MerchantAg)", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Agriculture/AgTech, oil & gas, metals, chemicals, plastics, grains, paper",size: 20 })] })
            ]})]})
        ]
      }),

      // Skills Table 2: Leadership & Technical
      new Table({
        columnWidths: [4500, 4500],
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
        rows: [
          new TableRow({ children: [
            new TableCell({ width: { size: 4500, type: WidthType.DXA }, borders: {}, children: [
              new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Executive Leadership", size: 21, bold: true, font: "Calibri" })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Executive stakeholder management (CIO/CTO/CFO)", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Multi-year roadmaps & strategic planning", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Cross-functional team leadership", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: '"Build vs. buy" economic analysis', size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Change management & user adoption", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Agile methodologies & OKR frameworks",size: 20 })] })
            ]}),
            new TableCell({ width: { size: 4500, type: WidthType.DXA }, borders: {}, children: [
              new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Technical Integration & Data", size: 21, bold: true, font: "Calibri" })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "API design & iPaaS platforms", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "ETL & data warehousing", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "ERP/CTRM/ETRM data pipelines", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Legacy system modernization", size: 20 })] }),
              new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Python, SQL, Power BI",size: 20 })] })
            ]})]})
        ]
      }),

      // Professional Experience Header
      new Paragraph({ spacing: { before: 180, after: 120 }, children: [new TextRun({ text: "Professional Experience", size: 24, bold: true, color: dustyBlue, font: "Calibri" })] }),

      // Strategic Consulting Corp
      new Paragraph({ style: "companyName", children: [new TextRun("Strategic Consulting Corp. | Technical AI Leader and Digital Transformation")] }),
      new Paragraph({ style: "companyDesc", children: [new TextRun("Specialized consultancy for enterprise digital transformation in agriculture and commodities")] }),
      new Paragraph({ style: "dates", children: [new TextRun("2020 – Present")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "90-Day AI Accelerator Framework: ", bold: true, size: 20 }), new TextRun({ text: "Developed and execute a 3-phase methodology (Assessment & Alignment → Prototyping & Validation → Roadmap & Operationalize) to identify high-value AI opportunities, build functional prototypes, and establish 6–12-month production roadmaps for enterprise clients in agriculture and commodities sectors", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Executive Advisory & AI Strategy: ", bold: true, size: 20 }), new TextRun({ text: 'Consult with C-suite executives (VPs of Logistics, CTOs, CIOs) to identify AI use cases, translate business requirements into technical specifications, and lead "build vs. buy" analyses for AI and enterprise system selections', size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Agentic AI Implementation: ", bold: true, size: 20 }), new TextRun({ text: "Architect and deploy predictive AI engines and agentic workflows using Azure AI Foundry, OpenAI, n8n, and Python, driving pilot-to-production cycles for process automation in trading, logistics, and operations", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Technical Bridge Leadership: ", bold: true, size: 20 }), new TextRun({ text: "Act as technical advocate representing data and engineering needs in executive forums, while coaching development teams on modern AI-assisted engineering workflows and best practices", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Digital Transformation Roadmaps: ", bold: true, size: 20 }), new TextRun({ text: "Spearhead multi-year product roadmaps integrating AI/ML, legacy system modernization (ERP, CTRM, AS/400 to web), and enterprise platform strategy", size: 20 })] }),

      // Kontango
      new Paragraph({ style: "companyName", children: [new TextRun("Kontango | Head of Freight Product & Customer Success")] }),
      new Paragraph({ style: "companyDesc", children: [new TextRun("Freight technology platform for commodity trading and logistics")] }),
      new Paragraph({ style: "dates", children: [new TextRun("2023 – 2024")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Product Leadership: ", bold: true, size: 20 }), new TextRun({ text: "Directed end-to-end product roadmap for a data-intensive freight platform, integrating new predictive ML models for freight costing and rate optimization that accelerated customer adoption and improved pricing accuracy", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Executive Stakeholder Management: ", bold: true, size: 20 }), new TextRun({ text: "Served as primary customer-facing technical advisor to CXO-level stakeholders, driving engagement by translating complex technical capabilities into business value and ROI", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "MVP Definition & Roadmap Execution: ", bold: true, size: 20 }), new TextRun({ text: "Led discovery research, A/B testing, and customer journey mapping to define MVP features and prioritize backlog, maximizing ROI for key accounts while managing P&L and technical delivery timelines", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "CRM & Integration Strategy: ", bold: true, size: 20 }), new TextRun({ text: "Spearheaded all CRM efforts including data mapping, system integration design, and requirements definition, partnering with CEO and business stakeholders to align commercial and technical objectives", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Customer Operations & Onboarding: ", bold: true, size: 20 }), new TextRun({ text: "Owned end-to-end customer operations including onboarding processes, success programs, and support escalations for enterprise commodity trading and logistics clients", size: 20 })] }),

      // Roger
      new Paragraph({ style: "companyName", children: [new TextRun("Roger | Director of Product (Integrations, Compliance & Mobile Platform)")] }),
      new Paragraph({ style: "companyDesc", children: [new TextRun("Mobile-first logistics and transportation technology platform")] }),
      new Paragraph({ style: "dates", children: [new TextRun("2020 – 2023")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Platform Launch & P&L Ownership: ", bold: true, size: 20 }), new TextRun({ text: "Led design and launch of onRamp, a secure shipper onboarding platform ensuring strict PII, CCPA, and SOC2 compliance, increasing platform revenue by ~20% in under 12 months through strategic customer acquisition", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Enterprise Integration Leadership: ", bold: true, size: 20 }), new TextRun({ text: "Directed integrations engineering for B2B partnerships, conducting full market analysis, source/target system requirements, and API design, including FMCSA integration and implementations with five of North America's largest agriculture shippers", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Executive Product Leadership: ", bold: true, size: 20 }), new TextRun({ text: "Managed two product groups, aligning roadmaps with organizational strategy while conducting regular business reviews with C-suite executives from top-tier agriculture and logistics clients", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Cross-Functional Management: ", bold: true, size: 20 }), new TextRun({ text: "Led cross-functional teams of 30+ onshore/offshore engineers, designers, and legal partners through full product lifecycle, from discovery and design sprints to release planning and UAT", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Compliance & Governance: ", bold: true, size: 20 }), new TextRun({ text: "Partnered with legal, security, and compliance teams to ensure data privacy, regulatory adherence, and controls across all product features and integrations", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Continuous Discovery & Adoption: ", bold: true, size: 20 }), new TextRun({ text: "Ran design sprints and iterative discovery cycles with agriculture business stakeholders, translating user needs into detailed product requirements and user stories that drove measurable improvements in UX and engagement", size: 20 })] }),

      // Fast Solutions
      new Paragraph({ style: "companyName", children: [new TextRun("Fast Solutions | Principal Consultant, Business Solutions")] }),
      new Paragraph({ style: "companyDesc", children: [new TextRun("ERP and enterprise systems consulting firm specializing in agriculture and commodities")] }),
      new Paragraph({ style: "dates", children: [new TextRun("2013 – 2020")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "ERP & CTRM Implementation Leadership: ", bold: true, size: 20 }), new TextRun({ text: "Led product and engineering teams through complex ERP (SAP, Oracle, JDE, Dynamics, Agris) and CTRM integrations for agriculture and commodity trading clients, managing full implementation lifecycle from requirements through go-live", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Commodities Domain Expert: ", bold: true, size: 20 }), new TextRun({ text: "Served as primary technical liaison for commodity trading, risk management, hedging, and settlement operations, specializing in trading desk workflows, procure-to-pay, and order-to-cash optimization", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Digital Transformation Strategy: ", bold: true, size: 20 }), new TextRun({ text: "Drove enterprise digital transformation by creating multi-year product roadmaps for legacy system modernization (AS/400 to web-based platforms) across chemical manufacturing, ag trading, and logistics organizations", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Transportation Management Leadership: ", bold: true, size: 20 }), new TextRun({ text: "Advised on and implemented TMS solutions, designing user-centric software for large agricultural clients managing bulk logistics, low-connectivity field operations, and complex supply chain requirements", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Pre-Sales & Solution Design: ", bold: true, size: 20 }), new TextRun({ text: "Led complex pre-sales analysis and solution architecture for major system implementations, translating business stakeholder needs into technical specifications and implementation plans", size: 20 })] }),

      // Tyson Foods
      new Paragraph({ style: "companyName", children: [new TextRun("Tyson Foods | Systems Analyst, Integration & Reporting")] }),
      new Paragraph({ style: "companyDesc", children: [new TextRun("Fortune 100 food manufacturing and distribution company")] }),
      new Paragraph({ style: "dates", children: [new TextRun("2010 – 2013")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Business-Technical Liaison: ", bold: true, size: 20 }), new TextRun({ text: "Acted as key liaison between business stakeholders (sales, manufacturing, procurement, logistics) and IT, translating requirements for modern systems integration with legacy ERP and mainframe platforms", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Integration Architecture: ", bold: true, size: 20 }), new TextRun({ text: "Designed and developed integrations that enhanced data flow between critical business systems in a highly regulated food manufacturing and distribution environment", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Reporting & Analytics: ", bold: true, size: 20 }), new TextRun({ text: "Built reporting platforms to support operational decision-making across supply chain, procurement, and logistics functions", size: 20 })] }),

      // CF Industries
      new Paragraph({ style: "companyName", children: [new TextRun("CF Industries | Software Developer/Analyst")] }),
      new Paragraph({ style: "companyDesc", children: [new TextRun("Leading agricultural chemical manufacturer")] }),
      new Paragraph({ style: "dates", children: [new TextRun("2001 – 2010")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Agricultural Systems: ", bold: true, size: 20 }), new TextRun({ text: "Engineered robust software solutions and SAP integrations, building foundational experience in complex system architecture", size: 20 })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "SOX Compliance Leadership: ", bold: true, size: 20 }), new TextRun({ text: "Led risk analysis, remediation, and mitigation efforts for Sarbanes-Oxley compliance across enterprise systems", size: 20 })] }),

      // Education
      new Paragraph({ spacing: { before: 180, after: 100 }, children: [new TextRun({ text: "Education", size: 24, bold: true, color: dustyBlue, font: "Calibri" })] }),
      new Paragraph({ children: [new TextRun({ text: "Master's in Management", bold: true, size: 20, font: "Calibri" }), new TextRun({ text: " | Bellevue University, Bellevue, Nebraska", size: 20, font: "Calibri" })] }),
      new Paragraph({ children: [new TextRun({ text: "Bachelor of Science in Computer Science and Mathematics", bold: true, size: 20, font: "Calibri" }), new TextRun({ text: " | Morningside University, Sioux City, Iowa", size: 20, font: "Calibri" })] })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("g:\\My Drive\\GitHub\\ExecutiveAssistant\\Resume\\output\\Jorgensen Resume - Freepoint VP AI Transformation.docx", buffer);
  console.log("Resume generated successfully!");
});
