var pieceOfHtml = "<p>This is a <span>paragraph</span></p>";
pieceOfHtml = pieceOfHtml.replace(/</g, "&lt;");
pieceOfHtml = pieceOfHtml.replace(/>/g, "&gt;");
print(pieceOfHtml);
