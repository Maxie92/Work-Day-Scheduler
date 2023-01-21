// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  var currentTimeEl = $('#currentDay');
 // var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  //var saveButton = document.querySelector('#saveBtn');
  //var currentHour = parseInt(dayjs().format('H'));
 // var classIndex = workHours.indexOf(currentHour);
 // var scheduleHours = $('#hour');

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // Added code to display the current date in the header of the page.
  function currentTime() {
    var rightNow = dayjs().format('dddd, MMMM DD, YYYY, hh:mm a');
    currentTimeEl.text(rightNow);
  }
  
  //Added code to determine if a row is past, present or future.
  const rows = document.querySelectorAll('#hour');
  rows.forEach((row, index) => {
      let rowTime = dayjs().hour(index+8);
      let currentTime = dayjs();
    
      if (currentTime.isBefore(rowTime)) {
        row.classList.add('future');
      } else if (currentTime.isAfter(rowTime)) {
        row.classList.add('past');
      } else {
        row.classList.add('present');
      }
  });
  
  currentTime();
  setInterval(currentTime, 1000);
});