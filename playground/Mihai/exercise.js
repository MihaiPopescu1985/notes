const python_keywords = ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'];

let exercise = `# Generator
def reverse(data): # declare the reverse function
    for index in range(len(data)-1, -1, -1): # iterate backwards
        yield data[index] # return the value and interrupt execution
my_list = [1, 2, 3] # declare a list
current = reverse(my_list) # get the current element
print(next(current)) # 3
print(next(current)) # 2`.trimStart().trimEnd().split('\n');

const word_placeholder = '***';

function init_exercise() {
  document.getElementById("main").innerHTML = exercise;
}

function is_word(char) {
  return (char.toLowerCase() !== char.toUpperCase()) || (char === '_')
}

function* split_exercise(exercise) {
  for (let current_line of exercise) {
    let words = [];
    let comment = '';
    
    let length = current_line.length;
    
    for (i = 0; i < length; i++) {
      let token = '';
      let index = i;
      let is_string = false;
      let is_comment = false;
      
      if (current_line[i] === "#") {
        comment = current_line.slice(i);
        current_line = current_line.slice(0, i) ;
        break;
      }
      
      while (is_word(current_line[i])) {
        is_string = true;
        token += current_line[i];
        i++;
      }
      if (is_string) {
        words = words.concat(token);
      }
    }
    
    for (const word of words) {
      current_line = current_line.replace(word, word_placeholder)
    }
    
    yield {
      comment: comment,
      words: words,
      code: current_line
    }
  }
}
line = split_exercise(exercise);
obj = line.next();
console.log(obj)
obj = line.next();
console.log(obj)




