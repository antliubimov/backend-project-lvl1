import { getRandomNumber, play } from './index.js';

const gcd = (a, b) => {
  let m = a;
  let n = b;
  let d = 1;
  while (m !== 0 && n !== 0) {
    if ((m % 2 === 0) && (n % 2 === 0)) {
      d *= 2;
      m /= 2;
      n /= 2;
    } else if ((m % 2 === 0) && (n % 2 === 1)) {
      m /= 2;
    } else if ((m % 2 === 1) && (n % 2 === 0)) {
      n /= 2;
    } else if ((m % 2 === 1) && (n % 2 === 1) && m >= n) {
      m -= n;
    } else if ((m % 2 === 1) && (n % 2 === 1) && m < n) {
      n -= m;
    }
  }
  return (m === 0) ? d * n : d * m;
};

const getNumbers = () => {
  const min = 1;
  const max = 100;
  const numb1 = getRandomNumber(min, max);
  const numb2 = getRandomNumber(min, max);
  return [numb1, numb2];
};

const calcGcdQuestion = () => {
  const result = {};
  const [numb1, numb2] = getNumbers();
  result.str = `${numb1} ${numb2}`;
  result.answer = gcd(numb1, numb2).toString();
  return result;
};

const gcdPlay = (rules) => play(rules, calcGcdQuestion);

export default gcdPlay;
