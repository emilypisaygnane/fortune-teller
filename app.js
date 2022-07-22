const questionSection = document.getElementById('question-section');
const askedQuestion = document.getElementById('asked-question');
const button = document.getElementById('button');
const answerSection = document.getElementById('answer-section');
const displayQuestion = document.getElementById('display-question');
const displayAnswer = document.getElementById('display-answer');

const answers = [
  'It is certain',
  'Reply hazy, try again',
  'Don’t count on it',
  'It is decidedly so',
  'Ask again later',
  'My reply is no',
  'Without a doubtful',
  'Better not tell you now',
  'My sources say no',
  'Yes definitely',
  'Cannot predict now',
  'Outlook not so good',
  'You may rely on it',
  'Concentrate and ask again',
  'Very doubtful',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
];

button.addEventListener('click', () => {
  copyQuestion();
  toggleVisibility();
  showRandomAnswer();
});

function copyQuestion() {
  const question = askedQuestion.value;
  displayQuestion.textContent = question;
}

function toggleVisibility() {
  questionSection.classList.add('hidden');
  answerSection.classList.remove('hidden');
}

function showRandomAnswer() {
  const randomAnswer = getRandomItem(answers);
  displayAnswer.textContent = randomAnswer;
}

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  return item;
}

