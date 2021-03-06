const pdfPRINTER = require('pdfmake');
const fs = require('fs');

const fonts = require('./fonts.js');
const styles = require('./styles.js');
const {content} = require('./pdfContent.js');

let docDefinition = {
    content: content,
    styles: styles
};

const printer = new pdfPRINTER(fonts);

let pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('pdfs/pdfTest.pdf'));
pdfDoc.end();
