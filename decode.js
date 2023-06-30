// Get the URL parameter value containing the HTML content
const urlParams = new URLSearchParams(window.location.search);
const htmlContent = urlParams.get('content');

// Create a new HTML document
const newDoc = document.implementation.createHTMLDocument();
newDoc.documentElement.innerHTML = decodeURIComponent(htmlContent);

// Replace the current HTML document with the cloned HTML document
document.open();
document.write(newDoc.documentElement.outerHTML);
document.close();
