import './demo.css';
import { userModel, userData, userValidationResult } from './model';

const defElement = document.querySelector('#definition');
defElement.textContent = JSON.stringify(userModel.definition, null, 2);
defElement.innerHTML = recolor(defElement.innerHTML);

const dataElement = document.querySelector('#data');
dataElement.textContent = JSON.stringify(userData, null, 2);
dataElement.innerHTML = recolor(defElement.innerHTML);

document.querySelector('#result').textContent =
  userValidationResult.errors ?? 'Looks good!';
//very important comment
function recolor(input) {
  input = input.split('\n');
  let fixedInput = [];
  for (let line of input) {
    if (line.includes(':')) {
      line = line.split(':');
      fixedInput.push(`${buildKey(line[0])}: ${buildVal(line[1])}`);
    } else {
      fixedInput.push(line);
    }
  }
  return fixedInput.join('\n');
}
function buildKey(key) {
  return `<span class='key'>${key}</span>`;
}
function buildVal(val) {
  val = val.trim();
  if (val.at(-1) == ',') {
    return `<span class='val'>${val.replace(',', '')}</span>,`;
  } else if (val.at(-1) === '{') {
    return '{';
  }
  return `<span class='val'>${val}</span>`;
}
