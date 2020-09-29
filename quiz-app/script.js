// QuizData
const quizData = [
  {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'Who is the President of US?',
    a: 'Florin Pop',
    b: 'Donald Trump',
    c: 'Ivan Saldano',
    d: 'Mihai Andrei',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const quiz = document.querySelector('.quiz-container');

const questoinEl = document.querySelector('.quiz-question');
const answerEls = document.querySelectorAll('.option');
const option_a = document.querySelector('#option_text_1');
const option_b = document.querySelector('#option_text_2');
const option_c = document.querySelector('#option_text_3');
const option_d = document.querySelector('#option_text_4');

const submitBtn = document.querySelector('#submit_btn');

let quizCount = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[quizCount];
  questoinEl.innerText = currentQuizData.question;

  option_a.innerText = currentQuizData.a;
  option_b.innerText = currentQuizData.b;
  option_c.innerText = currentQuizData.c;
  option_d.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  console.log(answer);
  if (answer) {
    if (answer === quizData[quizCount].correct) {
      score++;
    }
    quizCount++;

    if (quizCount < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You have completed Quiz.</h2>
        <p> You have answered correctly at ${score}/${quizData.length} questions.</p>
        <button onclick="location.reload()" class="button-submit">Reload</button>
      `;
    }
  }
});
