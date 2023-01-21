// Wraps all code that interacts with the DOM in a call to jQuery
$(document).ready(function () {
  var currentTimeEl = $('#currentDay');
  var allNotes = ["", "", "", "", "", "", "", "", "",];

  // Added code to display the current date in the header of the page.
  function currentTime() {
    var rightNow = dayjs().format('dddd, MMMM DD, YYYY, hh:mm a');
    currentTimeEl.text(rightNow);
  }
  
  //Added code to determine if a row is past, present or future.
  const rows = document.querySelectorAll('#hour');
  rows.forEach((row, index) => {
      let rowTime = dayjs().hour(index+9);
      let currentTime = dayjs();
    
      if (currentTime.isBefore(rowTime)) {
        row.classList.add('future');
      } else if (currentTime.isAfter(rowTime)) {
        row.classList.add('past');
      } else {
        row.classList.add('present');
      }
  });

//saves descriptions to localStorage
  $(".saveBtn").on("click", function () {
    var di = $(this).data('index');
    allNotes[di] = $('.description' + '[data-index=' + di + ']').val();
    localStorage.setItem('allNotes', JSON.stringify(allNotes));
});


//grabData function, restores data to rows from local storage
function dataStorage() {
  allNotes = JSON.parse(localStorage.getItem("allNotes"));
  for (i = 0; i < allNotes.length; i++) {
  $('.description' + '[data-index=' + i + ']').val(allNotes[i]);
}
}

//runs functions
currentTime();
setInterval(currentTime, 1000);
dataStorage();
});
