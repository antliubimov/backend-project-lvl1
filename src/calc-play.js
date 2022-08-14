import { getRandomNumber, play } from './index.js';

const calc = (num1, num2, oper) => {
  let result = 0;
  switch (oper) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = 0;
      break;
  }
  return result;
};

const getNumbers = () => {
  const operations = ['+', '-', '*'];
  const min = 1;
  const max = 100;
  const minIndex = 0;
  const maxIndex = operations.length - 1;
  const numb1 = getRandomNumber(min, max);
  const numb2 = getRandomNumber(min, max);
  const operation = operations[getRandomNumber(minIndex, maxIndex)];
  return [numb1, numb2, operation];
};

const calcPlayQuestion = () => {
  const result = {};
  const [numb1, numb2, operation] = getNumbers();
  result.str = `${numb1} ${operation} ${numb2}`;
  result.answer = calc(numb1, numb2, operation).toString();
  return result;
};

const calcPlay = (name) => play(name, calcPlayQuestion);

export default calcPlay;
