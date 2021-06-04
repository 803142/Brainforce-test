const STARTPOSITION = 5;
const CHARPARAMETER = /\d/;
const CHARDEVIDER = '-';
const CHARPLACE = '_';

const wrightPosition = (input) => {
  const position = input.selectionStart;
  let answer = false;
  const { value, placeholder } = input;
  const conditionLength = position < placeholder.length - 1;
  const conditionStart = position > STARTPOSITION;
  const conditionRisoneble = value.indexOf('_') >= position;
  const notDevider = placeholder[position] !== CHARDEVIDER;
  if (conditionLength && conditionStart && conditionRisoneble && notDevider) {
    answer = true;
  }
  return answer;
};

const placeToStart = () => {
  const input = document.activeElement;
  const { placeholder } = input;
  if (placeholder.indexOf('_')) {
    input.selectionStart = placeholder.indexOf('_');
    input.selectionEnd = input.selectionStart;
  }
};

const correctChar = (char) => char.search(CHARPARAMETER) + 1;

export { wrightPosition, placeToStart, correctChar };
