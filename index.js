// Wait for the entire DOM to load before running the script
document.addEventListener("DOMContentLoaded", function () {
  
  // Countdown Timer setup in all pages
  var countDownDate = new Date("Dec 31, 2024 15:37:25").getTime(); // Set the target countdown date and time
  
  // Update the countdown every second
  var x = setInterval(function () 
  {
    var now = new Date().getTime(); // Get the current date and time
    var distance = countDownDate - now; // Calculate the remaining time

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown result in an HTML element with id="timer"
    document.getElementById("timer").innerHTML =
      "Event: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is complete, stop the timer and show a message
    if (distance < 0) {
      clearInterval(x); // Stop the timer
      document.getElementById("timer").innerHTML = "Event starts Now"; // Update message
    }
  }, 1000); // Update every 1 second





  

  // Modal Pop-up in the booking page
  const modal = document.getElementById("myModal"); // Get the modal element
  const btn = document.getElementById("myBtn"); // Get the button that opens the modal
  const span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

  // When the user clicks the button, open the modal
  if (btn) {
    btn.onclick = function () {
      if (modal) modal.style.display = "block"; // Show the modal
    };
  }

  // When the user clicks on <span> (x), close the modal
  if (span) {
    span.onclick = function () {
      if (modal) modal.style.display = "none"; // Hide the modal
    };
  }

  // When the user clicks anywhere outside the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none"; // Hide the modal if clicked outside
    }
  };
});







// Sort Table Function in the food page

let sortDirection = true; // true = ascending, false = descending

function sortTable(columnIndex) 
{
  const table = document.getElementById("menuTable");
  const rows = Array.from(table.rows).slice(1); // Skip header row
  const isNumericColumn = columnIndex === 0 || columnIndex === 2;

  rows.sort((a, b) => {
  const cellA = a.cells[columnIndex].innerText;
  const cellB = b.cells[columnIndex].innerText;

  // Parse price values for sorting if numeric
  const valA = isNumericColumn ? parseInt(cellA.replace(/[^\d]/g, '')) : cellA.toLowerCase();
  const valB = isNumericColumn ? parseInt(cellB.replace(/[^\d]/g, '')) : cellB.toLowerCase();

  if (valA < valB) return sortDirection ? -1 : 1;
  if (valA > valB) return sortDirection ? 1 : -1;
  return 0;
    });

  // Append sorted rows back to table
  rows.forEach(row => table.appendChild(row));
  sortDirection = !sortDirection; // Toggle sort direction
}