function openMenu() {
  menu.style.display = "block"
}

function openAbout() {
  document.getElementById(HTML_EXERCISE_CONTAINER).style.display = "none";
  document.getElementById(HTML_ABOUT_CONTENT).style.display = "block";
}

function closeAbout() {
  document.getElementById(HTML_EXERCISE_CONTAINER).style.display = "block";
  document.getElementById(HTML_ABOUT_CONTENT).style.display = "none";
}

function showProgress() {
  if (String(navigation_area.style.display) !== "flex") {
      navigation_area.style.display = "flex"
  } else {
      navigation_area.style.display = "none"
  }
}

function resetProgress() {
  localStorage.setItem(CURRENT_PROGRESS, 0);
  localStorage.setItem(MAX_PROGRESS, 0);

  location.reload(); 
}

window.onclick = function(event) {
  // Hide the menu if the user clicks anywhere outside the "Menu" button
  if (String(event.target.id) !== "show_menu") {
    menu.style.display = "none"
  }
}
