import $ from 'jquery';
import debounce from 'lodash/debounce';
import '../css/main.css';

// Create and append elements
$('body').prepend('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="start-btn">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Initialize counter
let count = 0;

// Function to update the counter
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

// Bind debounce function to button click event
$('#start-btn').on('click', debounce(updateCounter, 300));
