// Get the URL parameter value containing the HTML content
const urlParams = new URLSearchParams(window.location.search);
const htmlContent = urlParams.get('content');

// Get the target <div> element by its ID
const targetDiv = document.getElementById('target-div');

// Set the innerHTML of the target <div> to the cloned HTML content
targetDiv.innerHTML = decodeURIComponent(htmlContent);
