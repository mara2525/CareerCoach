const { Document, Packer, Paragraph, TextRun, AlignmentType } = require("docx");
const fs = require("fs");

const dustyBlue = "537685";

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Calibri", size: 20 }
      }
    }
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // Header - Name
      new Paragraph({
        children: [new TextRun({ text: "Mara Jorgensen", font: "Gill Sans MT", size: 22, bold: true })],
        spacing: { after: 60 }
      }),
      // Contact info
      new Paragraph({
        children: [new TextRun({ text: "+1-712-898-2341 | mara@strategic-corp.com | ", size: 20 })],
        spacing: { after: 200 }
      }),
      // Horizontal line
      new Paragraph({
        border: { bottom: { color: "000000", space: 1, style: "single", size: 6 } },
        spacing: { after: 200 }
      }),
      // Greeting
      new Paragraph({
        children: [new TextRun({ text: "Hi Greg,", size: 20 })],
        spacing: { after: 200 }
      }),
      // Paragraph 1
      new Paragraph({
        children: [new TextRun({
          text: "Your VP of AI Transformation role at Freepoint is an exact fit for my experience. Recently I have focused on helping executive teams translate emerging AI capabilities into practical, production-ready systems that deliver measurable business outcomes. My foundation is in commodities trading technology, with over 20 years integrating and implementing enterprise platforms across agricultural logistics and commodities workflows. I bring deep expertise in risk management, operations, hedging, logistics, and settlement workflows.",
          size: 20
        })],
        spacing: { after: 200 }
      }),
      // Paragraph 2
      new Paragraph({
        children: [new TextRun({
          text: "I'm leading AI initiatives from discovery through pilot to production, integrating predictive models that serve as force multipliers for operational efficiency and revenue generation for enterprise systems. I've led predictive modeling engineering teams that delivered freight operational efficiency improvements and improved net backs for chemical commodity traders. I've built my career on earning credibility with P&L owners and delivering outcomes that business stakeholders can measure and trust.",
          size: 20
        })],
        spacing: { after: 200 }
      }),
      // Paragraph 3
      new Paragraph({
        children: [new TextRun({
          text: "I'd welcome the opportunity to discuss how my experience in trading systems, risk workflows, and pragmatic AI adoption aligns with what you're building at Freepoint. Thank you for your consideration.",
          size: 20
        })],
        spacing: { after: 200 }
      }),
      // Sign-off
      new Paragraph({
        children: [new TextRun({ text: "Sincerely,", size: 20 })],
        spacing: { after: 100 }
      }),
      new Paragraph({
        children: [new TextRun({ text: "Mara Jorgensen", size: 20 })],
        spacing: { after: 0 }
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("g:\\My Drive\\GitHub\\ExecutiveAssistant\\Resume\\output\\Jorgensen Cover Letter - Freepoint VP AI Transformation.docx", buffer);
  console.log("Cover letter created successfully");
});
