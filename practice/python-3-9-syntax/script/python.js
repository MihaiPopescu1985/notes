function initExercise() {
  if (max_progress === 0) {
      openAbout();
  }
  startExercise();
}

function startExercise() {
  _resetAreas();
  _disableButtonNext();
  _loadExercise();

  _showTitle();
  _showNextLine();
  _shuffleWords();
}

function showNextExercise() {
  let exercise_no = current_exercise_index+1
  _jumpToExercise(exercise_no)
}

function showPrevExercise() {
  let exercise_no = current_exercise_index-1
  _jumpToExercise(exercise_no)
}

function _jumpToExercise(exercise_no) {
  _getStoredProgress()

  _changeCurrentExercise(exercise_no)
  startExercise();
}

function _getStoredProgress() {
  let max_prog  = localStorage.getItem(MAX_PROGRESS);
  let curr_prog = localStorage.getItem(CURRENT_PROGRESS);

  max_progress           = max_prog !== null ? Number(max_prog) : 0;
  current_exercise_index = curr_prog !== null ? Number(curr_prog) : 0;
}

function _resetAreas() {
  title_area.innerHTML = "";
  code_area.innerText = "";
  comment_area.innerText = "";
  word_list_area.innerHTML = "";
}

function _disableButtonNext() {
  let max_prog = localStorage.getItem(MAX_PROGRESS);

  if (current_exercise_index >= max_prog) {
    next_exercise_btn.setAttribute("disabled", "");
  } else {
    next_exercise_btn.removeAttribute("disabled");
  }
}

function _showTitle() {
  let next_line = line_generator.next().value;
  if (next_line !== undefined) {
    current_line = _splitExerciseLine(next_line);
    title_area.innerText = current_line.comment;
  }
}

function _showNextLine() {
  let next_line = line_generator.next().value;

  if (next_line !== undefined) {
    current_line = _splitExerciseLine(next_line);

    _setCodeArea();
    _setCommentArea();

    if (_isSolution()) {
      _showNextLine();
    }
    _shuffleWords();
  } else { // there are no more lines in the exercise, so we can go to the next one
    _incrementMaxProgress()
    next_exercise_btn.removeAttribute("disabled");
  }
}

function _changeCurrentExercise(exercise_no) {
  if (exercise_no < 0) {
    exercise_no = 0;
  }

  if (exercise_no > max_progress) {
    exercise_no = max_progress
  }
  current_exercise_index = exercise_no;
  localStorage.setItem(CURRENT_PROGRESS, current_exercise_index);
}

function _loadExercise() {
  current_exercise = exercises[current_exercise_index].split('\n');
  line_generator   = _lineGenerator(current_exercise);

  navigation_area.childNodes.forEach(node => {
    if (node.innerText === current_exercise[0]) {
      node.style = "";
    }
  })
}

function* _lineGenerator(exercise) {
  for (const line of exercise) {
    yield line; // returns one exercise line at a time
  }
}

function _incrementMaxProgress() {
  max_progress += 1;
  localStorage.setItem(MAX_PROGRESS, max_progress);
}

function _setCodeArea() {
  if (code_area.innerText.length === 0) {
    code_area.innerText = current_line.obscured_code;
  } else {
    code_area.innerText = code_area.innerText + "\n" + current_line.obscured_code;
  }
}

function _setCommentArea() {
  comment_area.innerText = comment_area.innerText + current_line.comment + "\n";
}

function _shuffleWords() {
  word_list_area.innerHTML = '';

  if (current_line !== undefined) {
    let words = shuffle(current_line.words);
    for (const word of words) {
      word_list_area.innerHTML += _getWordHtml(word);
    }
  }
}

function addWord(word) {
  code_area.innerText = code_area.innerText.replace(WORD_PLACEHOLDER, word);
  word_list_area.innerHTML = word_list_area.innerHTML.replace(_getWordHtml(word), '');

  if (_isSolution()) {
    _showNextLine();
  }
}

function _isSolution() {
  try {
    let want = current_line.target_code;
    let have = code_area.innerText.split('\n').pop();

    return want === have;

  } catch (TypeError) {
    return false;
  }
}

function _getWordHtml(word) {
  return '<pre onclick="addWord(&quot;' + word + '&quot;)">' + word + '</pre>';
}

function shuffle(array) {
  for (let i in array) {
    let j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function _splitExerciseLine(line) {

  let words = [];
  let comment = '';
  let target_code = '';
  let obscured_code = '';

  let length = line.length;
  for (i = 0; i < length; i++) {
    let token = '';
    let is_string = false;

    while (i < length && _isWord(line[i])) {
      is_string = true;
      token += line[i];
      i++;
    }
    if (is_string) {
      words = words.concat(token);
      token = '';
      i--;
    }
    if (line[i] === "#") {
      comment = line.slice(i);
      target_code = line.slice(0, i);
      break;
    }
    if (i == length - 1) {
      target_code = line;
    }
  }

  obscured_code = target_code;
  for (const word of words) {
    obscured_code = obscured_code.replace(word, WORD_PLACEHOLDER)
  }

  return {
    comment: comment,
    words: words,
    target_code: target_code,
    obscured_code: obscured_code
  }
}

function _isWord(ch) {
  let is_word = false;
  try {
    is_word = (ch.toLowerCase() !== ch.toUpperCase()) || (ch === '_');
  } catch (TypeError) {
    console.log(ch + " is not a valid character")
  }
  return is_word;
}
