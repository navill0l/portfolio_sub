"use strict";

// ---------- MOBILE MENU ----------
// This runs when the MENU button is clicked (MOBILE).
function toggleMenu() {
  var menu = document.getElementById("navLinks");
  menu.classList.toggle("show-menu");
}


// ---------- PROJECT SEARCH ----------
// This runs when the person types in the search box
// or clicks the magnifying glass button (projects page only).
function searchProjects() {
  var searchText = document.getElementById("searchInput").value.toLowerCase();

  var cards = document.getElementsByClassName("project-card");
  var noResultsMessage = document.getElementById("noResults");

  var matchCount = 0;

  for (var i = 0; i < cards.length; i++) {
    var cardText = cards[i].textContent.toLowerCase();

    if (cardText.includes(searchText)) {
      cards[i].style.display = "block";   
      matchCount = matchCount + 1;
    } else {
      cards[i].style.display = "none";    
    }
  }

  if (matchCount === 0) {
    noResultsMessage.style.display = "block";
  } else {
    noResultsMessage.style.display = "none";
  }
}
