const questions = [
  {
    question: "Which HTML tag is used to create a line break?",
    answers: [
      {text: "<br>", correct: true},
      {text: "<break>", correct: false},
      {text: "<lb>", correct: false},
      {text: "<line>", correct: false},
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
      {text: "<style>", correct: false},
      {text: "<link>", correct: true},
      {text: "<css>", correct: false},
      {text: "<external>", correct: false},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}