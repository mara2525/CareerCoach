const { Document, Packer, Paragraph, TextRun, AlignmentType } = require('docx');
const fs = require('fs');

const bioText = "Mara Jorgensen is a data and integrations strategist with more than 20 years of experience across ERP, ETRM/CTRM, and TMS environments. She specializes in leading integrations and data optimization across commodity trading, agriculture, and logistics. She has led data domain strategy, source-to-target design, and analytics program planning on platforms including various products in the Ion family. She brings a proven track record of translating complex commercial data into governed, analytics-ready data products, and has led AI readiness assessments and governed AI enablement strategy in enterprise environments. For this program, Mara delivers the data domain strategy, future-state data lake architecture, analytics use case prioritization, and a roadmap PSEG can use to fund and launch the follow-on data, analytics, and AI program.";

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Calibri", size: 24 } } }
  },
  sections: [{
    properties: {
      page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    children: [
      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { line: 276 },
        children: [new TextRun({ text: bioText, font: "Calibri", size: 24 })]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("g:\\My Drive\\GitHub\\CareerCoach\\bios\\Mara Jorgensen - PSEG Data Architect Bio.docx", buffer);
  console.log("Done.");
});
