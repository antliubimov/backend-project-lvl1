import readlineSync from 'readline-sync';

const greeting = () => (console.log('Welcome to the Brain Games!'));

const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomNumber = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const wrongAnswer = (answer, questionAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionAnswer}'.`);
}

const play = (name, questionFn) => {
  const attemptsCount = 3;
  let attempts = 0;
  while (attempts < attemptsCount) {
    const question = questionFn();
    console.log(`Question: ${question.str}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === question.answer) {
      console.log('Correct!');
      attempts += 1;
    } else {
      wrongAnswer(answer, question.answer);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (attempts === attemptsCount) {
    console.log(`Congratulations, ${name}!`);
  }
};

export {
  greeting, askUserName, getRandomNumber, play,
};
