// const studentForm = document.getElementById('student-form');
// const quizBody = document.getElementById('quiz-body');
// const quizFooter = document.getElementById('quiz-footer');

// let studentName = '';
// let studentEmail = '';
// let score = 0;

// studentForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     studentName = document.getElementById('student-name').value;
//     studentEmail = document.getElementById('student-email').value;
//     // Call a function to fetch and display questions
// });

// function displayQuestion(question, options) {
//     // Display question and options in the quiz body
// }

// function checkAnswer(selectedOption, correctOption) {
//     // Check if selectedOption matches correctOption
//     // If correct, increment score
// }
// const questions = [
//     {
//         question: "What is the capital of France?",
//         options: ["Paris", "London", "Berlin", "Rome"],
//         correctAnswer: "Paris"
//     },
//     // Add more questions
// ];
const studentForm = document.getElementById('student-form');
const quizBody = document.getElementById('quiz-body');
const quizFooter = document.getElementById('quiz-footer');

let studentName = '';
let studentEmail = '';
let score = 0;

studentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    studentName = document.getElementById('student-name').value;
    studentEmail = document.getElementById('student-email').value;
    showQuiz();
});

function showQuiz() {
    studentForm.style.display = 'none';
    quizBody.style.display = 'block';
    quizFooter.style.display = 'block';
    displayQuestion(0);
}

function displayQuestion(index) {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');

    const currentQuestion = quizData[index];
    const questionElement = document.createElement('p');
    questionElement.textContent = currentQuestion.question;
    questionContainer.appendChild(questionElement);

    currentQuestion.options.forEach((option, optionIndex) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => {
            checkAnswer(option, currentQuestion.correctAnswer);
            if (index < quizData.length - 1) {
                displayQuestion(index + 1);
            } else {
                endQuiz();
            }
        });
        questionContainer.appendChild(optionElement);
    });

    quizBody.innerHTML = '';
    quizBody.appendChild(questionContainer);
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
    }
}

function endQuiz() {
    quizBody.innerHTML = '';
    quizFooter.innerHTML = `<p>Dear ${studentName}, your score is ${score}/${quizData.length}</p>`;
}
const quizData = [
    {
        question: "Q1 What is the capital of France?",
        options: ["a) Paris", "b) London", "c) Berlin", "d) Rome"],
        correctAnswer: "a) Paris"
    },
    {
        question: "Q2) What is the capital of pakistan?",
        options: ["a) Paris", "b) London", "c) Berlin", "d) islamabad"],
        correctAnswer: "d) islamabad"
    },
    {
        question: "Q3) HTML STAND FOR ?",
        options: [" a) hyper text marcup language", "b) handsom tamil", "c) heper trasport model languag", "d) no stand"],
        correctAnswer: "a) hyper text marcup language"
    },
    {
        question: "Q4) Which planet is known as the Red Planet?",
        options: ["a) Earth", " b) Mars", " c) Venus", " d) Mercury"],
        correctAnswer: "b) Mars"
    },
    {
        question: "Q5) Who wrote 'To Kill a Mockingbird'?",
        options: ["a) Harper Lee", "b) Mark Twain", "c) J.K. Rowling", "d) Charles Dickens"],
        correctAnswer: "a) Harper Lee"
    },
    
    
];














