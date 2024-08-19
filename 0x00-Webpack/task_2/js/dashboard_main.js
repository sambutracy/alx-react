import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css'; // Import CSS file

// Function to update counter
function updateCounter() {
  let count = 0;
  return function() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  };
}

const debouncedUpdateCounter = _.debounce(updateCounter(), 300);

$(document).ready(function() {
  // Add logo element with background image
  $('body').prepend('<div id="logo"></div>');
  $('#logo').css('background-image', 'url(../assets/holberton-logo.jpg)');

  // Add other elements
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Bind click event to button
  $('#startButton').on('click', debouncedUpdateCounter);
});
