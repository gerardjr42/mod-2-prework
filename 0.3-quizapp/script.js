const questions = [
  {
    question: "Which HTML tag is used to create a line break?",
    answers: [
      {text: "&lt;br&gt", correct: true},
      {text: "&lt;break&gt", correct: false},
      {text: "&lt;lb&gt", correct: false},
      {text: "&lt;line&gt", correct: false},
    ]
  },
  {
    question: "How do you center a <div> element horizontally in CSS",
    answers: [
      {text: "text-align: center", correct: false},
      {text: "margin: auto", correct: true},
      {text: "align: center", correct: false},
      {text: "float: center", correct: false},
    ]
  },
  {
    question: "What does CSS stand for?",
    answers: [
      {text: "Computer Style Sheets", correct: false},
      {text: "Creative Style Sheets", correct: false},
      {text: "Cascading Style Sheets", correct: true},
      {text: "Colorful Style Sheets", correct: false},
    ]
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    answers: [
      {text: "&lt;ol&gt", correct: false},
      {text: "&lt;ul&gt", correct: true},
      {text: "&lt;li&gt", correct: false},
      {text: "&lt;list&gt", correct: false},
    ]
  },
  {
    question: "Which property is used to change the background color of an element in CSS?",
    answers: [
      {text: "color", correct: false},    
      {text: "bg-color", correct: false},
      {text: "background", correct: false},
      {text: "background-color", correct: true},
    ]
  },
  {
    question: "How can you include an external CSS file in an HTML document?",
    answers: [
      {text: "&lt;style&gt", correct: false},
      {text: "&lt;link&gt", correct: true},
      {text: "&lt;css&gt", correct: false},
      {text: "&lt;external&gt", correct: false},
    ]
  },
  {
    question: "What is the correct HTML tag for inserting an image",
    answers: [
      {text: "&lt;image&gt", correct: false},
      {text: "&lt;src&gt", correct: false},
      {text: "&lt;picture&gt", correct: false},
      {text: "&lt;img&gt", correct: true},
    ]
  },
  {
    question: "What is the purpose of the &lt;div&gt tag in HTML?",
    answers: [
      {text: "To define a hyperlink", correct: false},
      {text: "To create a division or a section in a webpage", correct: true},
      {text: "To insert an image", correct: false},
      {text: " To format text", correct: false},
    ]
  },
  {
    question: "What is the CSS box model and its components in order.",
    answers: [
      {text: "Margin, Border, Padding, Content", correct: true},
      {text: "Padding, Border, Margin, Content", correct: false},
      {text: "Content, Margin, Padding, Border", correct: false},
      {text: "Border, Padding, Margin, Content", correct: false},
    ]
  },
  {
    question: "What is the difference between class and id selectors in CSS?",
    answers: [
      {text: "Class selectors are used for styling individual elements, while id selectors are used for styling groups of elements.", correct: false},
      {text: "Class selectors have higher specificity than id selectors.", correct: false},
      {text: "Id selectors can be reused multiple times in a document, while class selectors can only be used once.", correct: false},
      {text: "Class selectors are preceded by a period (.), while id selectors are preceded by a hash (#).", correct: true},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

//Will reset the question index to 0 and setting score to start at 0
function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "Block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", ()=> {
  if(currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();

