#!/usr/bin/env node
import evenPlay from '../src/even-play.js';
import { askUserName, greeting } from '../src/index.js';

greeting();
const name = askUserName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

evenPlay(name);
