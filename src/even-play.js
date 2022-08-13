import readlineSync from 'readline-sync';

const getRandomNumber = () => {
  const rand = Math.random() * 100 + 0.5;
  return Math.round(rand);
};

const isEvenNumber = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const evenPlay = (name) => {
  const attemptsCount = 3;
  let attempts = 0;
  while (attempts < attemptsCount) {
    const question = getRandomNumber();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === isEvenNumber(question)) {
      console.log('Correct!');
      attempts += 1;
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (attempts === attemptsCount) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default evenPlay;
