const marked = require("marked");
const fs = require("fs");

module.exports = {
  homepage,
};

async function homepage() {
  const markdown = fs.readFileSync("./README.md", "utf8");
  const processed = preprocessMdText(markdown) ;
  const html = marked(processed);
  const webpage = makeHtmlDoc(html);
  return webpage;
}

function makeHtmlDoc(bodyContent) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Plant Tracker Server</title>
      <link rel="stylesheet" href="/default.css">
    </head>
    <body>
      ${bodyContent}
    </body>
    </html>
  `;
}

function preprocessMdText(text) {
  return text
    // Add extra line break before code
    // blocks to avoid breaking during render
    .replace(/```/g, "\n```");
}