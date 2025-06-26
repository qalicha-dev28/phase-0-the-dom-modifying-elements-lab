// Create a new paragraph element
const newHeader = document.createElement('h1');

// Set the id attribute
newHeader.id = 'victory';

// Set the text content
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your name

// Append to the DOM
document.body.appendChild(newHeader);

// Remove the main element
const main = document.getElementById('main');
main.remove();