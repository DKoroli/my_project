//Required package
const pdf = require("pdf-creator-node");
const fs = require("fs");

// Read HTML Template
const html = fs.readFileSync("template2.html", "utf8");



function myPDF(input) {
    const document = {
        html: html,
        data: {
          users: values,
        },
        path: "./output3.pdf",
        type: "",
      };

      const options = {
        format: "A4",
        orientation: "portrait",
        border: "0mm",
        header: {
          height: "15mm",
        },
        footer: {
          height: "28mm",
        },
      };

      return pdf.create(document, options)
};

module.exports = myPDF;