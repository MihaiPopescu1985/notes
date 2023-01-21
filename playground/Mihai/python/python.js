// Constants
const PYTHON_KEYWORDS = ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'];

const WORD_PLACEHOLDER = '***';
const EXERCISE_DELIMITER = '\n\n';

const HTML_EXERCISE_CONTAINER = 'exercise_container';
const HTML_EXERCISE_TITLE = 'exercise_title';
const HTML_EXERCISE_AREA = 'exercise_area';
const HTML_WORD_LIST = 'word_list';
const HTML_BTN_PREV_EXERCISE = 'prev_exercise';
const HTML_BTN_NEXT_EXERCISE = 'next_exercise';

// HTML document variables
var title_area;
var exercise_area;
var word_list_area;
var prev_exercise_btn;
var next_exercise_btn;

// State variables
var exercises = PYTHON_SYNTAX_TUTORIAL.trimStart().trimEnd().split(EXERCISE_DELIMITER);
var current_exercise_index = -1;
var exercise_generator;
var current_line;


function addText() {
  let text = document.getElementById("exercise_area");
  let textin = document.getElementById("textin");
  text.innerText = textin.value;
  console.log(textin.value)
}

function initExercise() {
  title_area = document.getElementById(HTML_EXERCISE_TITLE);
  exercise_area = document.getElementById(HTML_EXERCISE_AREA);
  word_list_area = document.getElementById(HTML_WORD_LIST);
  prev_exercise_btn = document.getElementById(HTML_BTN_PREV_EXERCISE);
  next_exercise_btn = document.getElementById(HTML_BTN_NEXT_EXERCISE);

  loadNextExercise();
}

function loadNextExercise() {
  if (current_exercise_index < exercises.length-1) {
    current_exercise_index++;
    _startExercise();
  }
}

function loadPrevExercise() {
  if (current_exercise_index > 0) {
    current_exercise_index--;
    _startExercise();
  }
}

function _startExercise() {
  exercise_generator = _splitExercise(exercises[current_exercise_index]);
  current_line = exercise_generator.next().value;

  title_area.innerText = current_line.comment;
  current_line = exercise_generator.next().value;
  exercise_area.innerText = current_line.code + current_line.comment;
  
  word_list_area.innerHTML = '';
  let words = shuffle(current_line.words);
  for (const word of words) {
    word_list_area.innerHTML += _getWordHtml(word);
  }
}

function addWord(word) {
  exercise_area.innerText = exercise_area.innerText.replace(WORD_PLACEHOLDER, word);
  console.log(word_list_area.innerHTML)
  word_list_area.innerHTML = word_list_area.innerHTML.replace(_getWordHtml(word), '');
}

function _getWordHtml(word) {
   return '<pre onclick="addWord(&quot;' + word + '&quot;)" style="display: inline; margin: 0.25em">' + word + '</pre>';
}

function shuffle(array) {
  for (let i in array) {
    let j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function _isWord(ch) {
  let is_word = false;
  try {
    is_word = (ch.toLowerCase() !== ch.toUpperCase()) || (ch === '_');
  } catch (TypeError) {
    // TODO: handle the error
  }
  return is_word;
}

function* _splitExercise(exercise) {

  let lines = exercise.split('\n');
  for (let current_line of lines) {
    
    let words = [];
    let comment = '';
    let length = current_line.length;
    
    for (i = 0; i < length; i++) {
      let token = '';
      let is_string = false;
      
      if (current_line[i] === "#") {
        comment = current_line.slice(i);
        current_line = current_line.slice(0, i) ;
        break;
      }
      
      while (i < length && _isWord(current_line[i])) {
        is_string = true;
        token += current_line[i];
        i++;
      }
      if (is_string) {
        words = words.concat(token);
      }
    }
    
    for (const word of words) {
      current_line = current_line.replace(word, WORD_PLACEHOLDER)
    }
    
    yield {
      comment: comment,
      words: words,
      code: current_line
    }
  }
}

/*
line = _splitExercise(exercise);
obj = line.next();
console.log(obj)
obj = line.next();
console.log(obj)
*/
