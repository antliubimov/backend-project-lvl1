import { getRandomNumber, play } from './index.js';

const progressionLength = 10;

const getProgression = () => {
  const progression = [];
  const minStep = 1;
  const maxStep = 10;
  const progressionStep = getRandomNumber(minStep, maxStep);
  const minStart = 1;
  const maxStart = 100;
  let progressionStart = getRandomNumber(minStart, maxStart);
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionStart);
    progressionStart += progressionStep;
  }
  return progression;
};

const progressionPlayQuestion = () => {
  const result = {};
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const progression = getProgression();
  const tmpArr = [];
  for (let i = 0; i < progressionLength; i += 1) {
    if (i !== hiddenIndex) {
      tmpArr.push(progression[i]);
    } else {
      tmpArr.push('..');
    }
  }
  result.str = tmpArr.join(' ');
  result.answer = progression[hiddenIndex].toString();
  return result;
};

const progressionPlay = (rules) => play(rules, progressionPlayQuestion);

export default progressionPlay;
