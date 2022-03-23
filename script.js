const quiz = document.getElementById("quiz");
const quizData = [
    {
        question: "What's my name?",
        a: "Roman",
        b: "Jakov",
        c: "Kirill",
        d: "Alexander",
        correct: "a"
    },{
        question:"What's my previous work is?",
        a:"Street cleaner",
        b:"Animator",
        c:"Manager of reustaurant",
        d:"Builder",
        correct: "c"
    },{
        question:"Who I want to become?",
        a:"Product manager",
        b:"Front-end Developer",
        c:"Data Scientist",
        d:"Java Boy",
        correct:"b"
    }, {
        question: "Capital of Great Britain?",
        a:"Wales",
        b:"Big Ben",
        c:"Washington",
        d:"London",
        correct: "d"
    }, {
        question: "Do you want to invite me on interview?",
        a:"Yes",
        b:"Maybe",
        c:"Need to think",
        d:"No",
        correct:"a"
    }
]
const questionElement = document.getElementById("question");
const aText = document.getElementById("aText");
const bText = document.getElementById("bText");
const cText = document.getElementById("cText");
const dText = document.getElementById("dText");
const submitButton = document.getElementById("submit")
const answerElements = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0; 

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionElement.innerHTML = currentQuizData.question ;
    aText.innerHTML = currentQuizData.a;
    bText.innerHTML = currentQuizData.b;
    cText.innerHTML = currentQuizData.c;
    dText.innerHTML = currentQuizData.d;
}

function selectedItem (){
    let answer = undefined;

    answerElements.forEach((answerElement) => {
        if (answerElement.checked) { 
            answer = answerElement.id;
        }
    });
    return answer;
};

function deselectAnswers(){
    answerElements.forEach((answerElement)=>{
        answerElement.checked = false;
    });
}

submitButton.addEventListener("click", ()=> {
    const answer = selectedItem();
    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered right on ${score}/${quizData.length} questions.Thank you!`;
    }
}});

