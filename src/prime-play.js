import { getRandomNumber, play } from './index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let result = true;
  for (let i = 2; i < Math.ceil(Math.sqrt(number) + 1); i += 1) {
    if (number % i === 0) {
      result = false;
      break;
    }
  }
  return result;
};

const checkPrime = (number) => (isPrime(number) ? 'yes' : 'no');

const primePlayQuestion = () => {
  const result = {};
  const minGuessNumber = -100;
  const maxGuessNumber = 100;
  const guessNumber = getRandomNumber(minGuessNumber, maxGuessNumber);
  result.str = guessNumber;
  result.answer = checkPrime(guessNumber);
  return result;
};

const primePlay = (rules) => play(rules, primePlayQuestion);

export default primePlay;
