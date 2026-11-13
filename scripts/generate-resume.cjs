const fs = require('fs');
const path = require('path');

const textLines = [
  "BT /F2 20 Tf 50 720 Td (SWAPNIL PATIL) Tj ET",
  "BT /F1 11 Tf 50 700 Td (AI/ML Engineer | Computer Vision | Product Designer | Pune, India) Tj ET",
  "BT /F1 10 Tf 50 685 Td (Email: swapnilpatil.ai@gmail.com | GitHub: github.com/swapnil3104 | Portfolio: swapnil-patil.vercel.app) Tj ET",
  "BT /F2 13 Tf 50 655 Td (PROFESSIONAL SUMMARY) Tj ET",
  "BT /F1 10 Tf 50 635 Td (Computer Science Engineer specializing in end-to-end machine learning pipelines, real-time computer vision,) Tj ET",
  "BT /F1 10 Tf 50 620 Td (and high-performance web products. Proven track record across 11+ commercial client deployments and 12+ open source systems.) Tj ET",
  "BT /F2 13 Tf 50 590 Td (CORE TECHNICAL SKILLS) Tj ET",
  "BT /F1 10 Tf 50 570 Td (Languages & Frameworks: Python, PyTorch, TensorFlow, OpenCV, FastAPI, React, Next.js, Three.js, TypeScript) Tj ET",
  "BT /F1 10 Tf 50 555 Td (AI / ML: Computer Vision, Real-Time Landmark Tracking, YOLOv8, CNNs, MediaPipe, RAG, Anthropic MCP) Tj ET",
  "BT /F1 10 Tf 50 540 Td (Design & Tools: Figma Design Systems, Autolayout, Tokens, Git, Docker, Linux, Vercel) Tj ET",
  "BT /F2 13 Tf 50 510 Td (FEATURED PROJECTS) Tj ET",
  "BT /F2 11 Tf 50 490 Td (Indian Sign Language Recognition (ISLR Studio)) Tj ET",
  "BT /F1 10 Tf 50 475 Td (Real-time gesture recognition system with MediaPipe landmark tracking, sentence synthesis, and interactive UI.) Tj ET",
  "BT /F2 11 Tf 50 450 Td (DrishtiDrive AI) Tj ET",
  "BT /F1 10 Tf 50 435 Td (Portable AI-based driver drowsiness detection and acoustic alert system for commercial transportation.) Tj ET",
  "BT /F2 11 Tf 50 410 Td (RoadGuard AI) Tj ET",
  "BT /F1 10 Tf 50 395 Td (Automated municipal pothole detection and reporting system using computer vision edge telemetry.) Tj ET",
  "BT /F2 13 Tf 50 365 Td (COMMERCIAL CONSULTING) Tj ET",
  "BT /F1 10 Tf 50 345 Td (11+ Production Client Systems shipped including Studio Squanta, Altecht, BytePro Labs, SS Creation, and Spark.) Tj ET",
  "BT /F2 13 Tf 50 315 Td (EDUCATION & AWARDS) Tj ET",
  "BT /F1 10 Tf 50 295 Td (B.Tech in Computer Science and Engineering - Annasaheb Dange College of Engineering and Technology) Tj ET",
  "BT /F1 10 Tf 50 280 Td (Winner, 1st Place - B-Plan Competition, Discovery 2k24) Tj ET"
];

const streamContent = textLines.join('\n');
const streamLength = Buffer.byteLength(streamContent);

let pdf = "%PDF-1.4\n";
const offsets = [];

function addObj(content) {
  offsets.push(pdf.length);
  pdf += content + "\n";
}

addObj("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj");
addObj("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj");
addObj("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> /F2 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> >> >> >>\nendobj");
addObj("4 0 obj\n<< /Length " + streamLength + " >>\nstream\n" + streamContent + "\nendstream\nendobj");

const xrefStart = pdf.length;
pdf += "xref\n0 5\n0000000000 65535 f \n";
for (let i = 0; i < offsets.length; i++) {
  pdf += String(offsets[i]).padStart(10, '0') + " 00000 n \n";
}
pdf += "trailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n" + xrefStart + "\n%%EOF\n";

const outPath = path.resolve(__dirname, '../public/resume.pdf');
fs.writeFileSync(outPath, pdf);
console.log('Created resume.pdf at', outPath, 'Bytes:', pdf.length);

