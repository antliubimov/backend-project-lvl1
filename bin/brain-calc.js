#!/usr/bin/env node
import { greeting, askUserName } from '../src/index.js';
import calcPlay from '../src/calc-play.js';

greeting();
const name = askUserName();
console.log('What is the result of the expression?');

calcPlay(name);
