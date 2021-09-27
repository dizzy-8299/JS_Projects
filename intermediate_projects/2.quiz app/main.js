const quizData = [
    {
        question: "What is your name?",
        a: "Jane",
        b: "Joe",
        c: "Chad",
        d: "Popat",
        correct: "d",
    },
    {
        question: "What movie can you watch over and over without ever getting tired of?",
        a: "3 Idiots",
        b: "Natasamrat",
        c: "Holiday",
        d: "Tiger",
        correct: "a",
    },
    {
        question: "What is your age?",
        a: "15",
        b: "18",
        c: "7",
        d: "24",
        correct: "c",
    },
    {
        question: "Does your name start with P?",
        a: "Yes",
        b: "No",
        c: "Maybe",
        d: "Dunno",
        correct: "a",
    },
    {
        question: "What is your favourite colour?",
        a: "Green",
        b: "Blue",
        c: "Red",
        d: "Popat",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answersEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const sumbitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answersEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer(){
    answersEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

sumbitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
    }
})