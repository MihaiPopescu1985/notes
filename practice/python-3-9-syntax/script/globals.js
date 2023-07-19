// Constants
const HTML_EXERCISE_CONTAINER     = 'exercise_container';
const HTML_EXERCISE_TITLE_WRAPPER = 'exercise_title_wrapper';
const HTML_EXERCISE_TITLE         = 'exercise_title';
const HTML_EXERCISE_AREA          = 'exercise_area';
const HTML_CODE_AREA              = 'code_area';
const HTML_COMMENT_AREA           = 'comment_area';
const HTML_WORD_LIST              = 'word_list';
const HTML_CONTROL_AREA           = 'control_area';
const HTML_GANE_CONTROL_AREA      = 'game_control_area';
const HTML_BTN_PREV_EXERCISE      = 'prev_exercise';
const HTML_BTN_NEXT_EXERCISE      = 'next_exercise';
const HTML_BTN_RETRY_EXERCISE     = 'retry_exercise';
const HTML_NAVIGATION_AREA        = 'navigation_area';
const HTML_ABOUT_CONTENT          = 'about_content';
const HTML_MENU                   = 'menu';

const MAX_PROGRESS     = 'max_progress';
const CURRENT_PROGRESS = 'current_progress';

// HTML document variables
let title_area        = document.getElementById(HTML_EXERCISE_TITLE);
let exercise_area     = document.getElementById(HTML_EXERCISE_AREA);
let code_area         = document.getElementById(HTML_CODE_AREA);
let comment_area      = document.getElementById(HTML_COMMENT_AREA);
let word_list_area    = document.getElementById(HTML_WORD_LIST);
let prev_exercise_btn = document.getElementById(HTML_BTN_PREV_EXERCISE);
let next_exercise_btn = document.getElementById(HTML_BTN_NEXT_EXERCISE);
let menu              = document.getElementById(HTML_MENU);

// State variables
let exercises = PYTHON_SYNTAX_TUTORIAL.trimStart().trimEnd().split(EXERCISE_DELIMITER);
let current_exercise; // the exercise from exercises
let line_generator;
let current_line;

let max_progress = (() => {
  const max_prog = localStorage.getItem(MAX_PROGRESS);
  return max_prog !== null ? Number(max_prog) : 0;
})();

let current_exercise_index = (() => {
  let curr_prog = localStorage.getItem(CURRENT_PROGRESS);
  return curr_prog !== null ? Number(curr_prog) : 0;
})();

let titles = exercises.map(element => {
  return element.split("\n")[0];
});

let navigation_area = (() => {
  let navigation = document.getElementById(HTML_NAVIGATION_AREA);

  titles.forEach((title, index) => {
    const preElement = document.createElement('pre');

    preElement.textContent = title;
    preElement.addEventListener('click', () => _jumpToExercise(index));
    if (index > max_progress) {
      preElement.style.cursor = "not-allowed";
      preElement.style.color  = "gray";
    }
    navigation.appendChild(preElement);
  });
  return navigation;
})();
