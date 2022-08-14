import { getRandomNumber, play } from './index.js';

const isEvenNumber = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const evenPlayQuestion = () => {
  const result = {};
  const numb = getRandomNumber(1, 100);
  result.str = `${numb}`;
  result.answer = isEvenNumber(numb);
  return result;
};

const evenPlay = (name) => play(name, evenPlayQuestion);

export default evenPlay;
