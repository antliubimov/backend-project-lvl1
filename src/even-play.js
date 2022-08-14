import { getRandomNumber, play } from './index.js';

const isEvenNumber = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const evenPlayQuestion = () => {
  const min = 1;
  const max = 100;
  const result = {};
  const numb = getRandomNumber(min, max);
  result.str = `${numb}`;
  result.answer = isEvenNumber(numb);
  return result;
};

const evenPlay = (rules) => play(rules, evenPlayQuestion);

export default evenPlay;
