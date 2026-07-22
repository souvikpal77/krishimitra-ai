import { jsPDF } from "jspdf";

export function generatePDF(title, content) {
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("KrishiMitra AI", 20, 20);

  doc.setFontSize(16);
  doc.text(title, 20, 35);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  const lines = doc.splitTextToSize(content, 170);

  doc.text(lines, 20, 50);

  doc.save(`${title}.pdf`);
}