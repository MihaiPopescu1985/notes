const HTML_ABOUT_CONTENT = 'about_content';

function openAbout() {
    document.getElementById(HTML_EXERCISE_CONTAINER).style.display = "none";
    document.getElementById(HTML_ABOUT_CONTENT).style.display = "block";
}

function closeAbout() {
    document.getElementById(HTML_EXERCISE_CONTAINER).style.display = "block";
    document.getElementById(HTML_ABOUT_CONTENT).style.display = "none";
}