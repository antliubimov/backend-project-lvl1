import { getRandomNumber, play } from './index.js';

const getProgression = () => {
  const progression = [];
  const minLength = 5;
  const maxLength = 10;
  const progressionLength = getRandomNumber(minLength, maxLength);
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

const progressionPlayQuestion = () => {};

const progressionPlay = (rules) => play(rules, progressionPlayQuestion);

export default progressionPlay;
