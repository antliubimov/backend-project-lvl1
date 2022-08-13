#!/usr/bin/env node
import readlineSync from 'readline-sync';
import evenPlay from '../src/even-play.js';

console.log('Welcome to the Brain Games!');

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const name = askName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
evenPlay(name);
