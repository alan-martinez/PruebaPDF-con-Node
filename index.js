const pdfPRINTER = require('pdf-printer');
const fs = require('fs');




var doc = new jsPDF();
doc.text(20, 20, 'Hola mundo!');
doc.text(20, 30, 'Esto es un generador de PDF en Java Script.');
doc.addPage();
doc.text(20, 20, '¿Cómo estas?');