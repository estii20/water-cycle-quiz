//function incrementCorrectAnswer()
//function incrementIncorrectAnswer()

//Quiz area variables

const quizPanelElement = document.getElementsByClassName("quiz-panel");
const startButton = document.getElementById("start-button");
const questionOption = document.getElementById("question");
const buttonsAnswer = document.getElementById("answer-btns");
const buttonNext = document.getElementById("next-button");
const scoreCorrectElement = document.getElementById("score-correct");
const scoreIncorrectElement = document.getElementById("score-incorrect");

//Starts the quiz and only shows the start button

startButton.addEventListener("click", beginQuiz);
    startButton.innerHTML = "Start Quiz";
    alert("Lets go!");
    quizPanelElement.classList.add("hide");
    questionOption.classList.add("hide");
    buttonNext.classList.add("hide");
    

//Store question index and score

let questionList = 0;
let score = 0;
let scoreCorrect = 0;
let scoreIncorrect = 0;

//Starts quiz with the first question and displays next button

function beginQuiz() {
    score = 0;
    scoreCorrect = 0;
    scoreIncorrect = 0;
    buttonNext.innerHTML = "Next Question";
    displayQuestion();
}

//Iterate the questions array and displays each in order

function displayQuestion() {
    resetQuiz();
    let questionShown = questions[questionList];
    let nextQuestionShown = questionList + 1;
    questionOption.innerHTML = nextQuestionShown + ". " + questionShown.question;

    //Create buttons to display the answers and removes the answer buttons in html

    questionShown.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btns");
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
        buttonsAnswer.appendChild(button);
    });
}

//Resets the quiz to the default

function resetQuiz() {
    buttonNext.style.display = "none";
    while(buttonsAnswer.firstChild) {
        buttonsAnswer.removeChild(buttonsAnswer.firstChild);
    }
}

//Selects the correct answer from the question array and adds the class of correct and incorrect

function selectAnswer(e) {
    const btnSelected = e.target
    const correct = btnSelected.dataset.correct === "true";
    if (correct) {
        btnSelected.classList.add("correct");
        score++;
    }else{
        btnSelected.classList.add("incorrect");
    }
    Array.from(buttonsAnswer.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    buttonNext.style.display = "inline-block";
}

//Displays the score to the user at the end of the questions array

function displayScore() {
    resetQuiz();
    questionOption.innerHTML = `Well done you scored $(score) out of 15!`;
    buttonNext.innerHTML = "Restart";
    buttonNext.style.display = "inline-block";
}

//Displays the next question in the questions array until the end when the score is shown

function nextQuestion(){
    if(questionList < questions.length) {
        displayQuestion();
    }else{
        displayScore();
    }
}

buttonNext.addEventListener("click", ()=> {
    if(questionList < questions.length) {
        nextQuestion();
    }
})

//Start quiz

beginQuiz();




//quiz questions and answers array 15 in total displayed in order

const questions = [
    {
        question: "What happens when clouds get too heavy to hold water?",
        answers: [
            { text: "The water falls to the ground", correct: true },
            { text: "The water evaporates", correct: false },
            { text: "Another cloud forms", correct: false },
            { text: "The clouds get larger", correct: false },
        ]
    },
    {
        question: "Where on Earth is the water the purist?",
        answers: [
            { text: "Rivers and streams", correct: false },
            { text: "Sulphur springs", correct: false },
            { text: "Lakes and ponds", correct: false },
            { text: "Glaciers and ice caps", correct: true },
        ]
    },
    {
        question: "When digging a well looking for water what do you find?",
        answers: [
            { text: "An underground river", correct: false },
            { text: "An underground aquifer", correct: true },
            { text: "A sulphur spring", correct: false },
            { text: "An irrigation ditch", correct: false },
        ]
    },
    {
        question: "What turns water on the Earth into vapour?",
        answers: [
            { text: "The moon", correct: false },
            { text: "Global warming", correct: false },
            { text: "Water treatment plants", correct: false },
            { text: "The sun", correct: true },
        ]
    },
    {
        question: "What is NOT part of the water cycle?",
        answers: [
            { text: "Collection", correct: false },
            { text: "Evaporation", correct: false },
            { text: "Emancipation", correct: true },
            { text: "Precipitation", correct: false },
        ]
    },
    {
        question: "Why is the ocean salty?",
        answers: [
            { text: "Groundwater picks up salt and minerals", correct: true },
            { text: "From the skin of sea life animals", correct: false },
            { text: "Salt is carried down in rainwater", correct: false },
            { text: "Human pollution", correct: false },
        ]
    },
    {
        question: "How old could the water be in glaciers?",
        answers: [
            { text: "Billions of years", correct: false },
            { text: "Thousands of years", correct: false },
            { text: "Millions of years", correct: true },
            { text: "Hundreds of years", correct: false },
        ]
    },
    {
        question: "How old could the water be in glaciers?",
        answers: [
            { text: "Billions of years", correct: false },
            { text: "Thousands of years", correct: false },
            { text: "Millions of years", correct: true },
            { text: "Hundreds of years", correct: false },
        ]
    },
    {
        question: "Water that soaks into the ground is called what?",
        answers: [
            { text: "Water table", correct: false },
            { text: "Collected", correct: false },
            { text: "Groundwater", correct: true },
            { text: "Rainwater", correct: false },
        ]
    },
    {
        question: "Where on Earth is the water the purist?",
        answers: [
            { text: "Rivers and streams", correct: false },
            { text: "Sulphur springs", correct: false },
            { text: "Lakes and ponds", correct: false },
            { text: "Glaciers and ice caps", correct: true },
        ]
    },
    {
        question: "What is it called when water is turned into a vapour?",
        answers: [
            { text: "Precipitation", correct: false },
            { text: "Evaporation", correct: true },
            { text: "Collection", correct: false },
            { text: "Condensation", correct: false },
        ]
    },
    {
        question: "What do we call fresh water falling to the Earth?",
        answers: [
            { text: "Precipitation", correct: true },
            { text: "Evaporation", correct: false },
            { text: "Transpiration", correct: false },
            { text: "Condensation", correct: false },
        ]
    },
    {
        question: "What is condensation in the atmosphere called?",
        answers: [
            { text: "Lightning", correct: false },
            { text: "Hurricanes", correct: false },
            { text: "Clouds", correct: true },
            { text: "Tornadoes", correct: false },
        ]
    },
    {
        question: "What is a solid state of water called?",
        answers: [
            { text: "Steam", correct: false },
            { text: "Ice", correct: true },
            { text: "Liquid", correct: false },
            { text: "Vapour", correct: false },
        ]
    },
    {
        question: "What does this steam contain?",
        answers: [
            { text: "Gas and water", correct: true },
            { text: "Water", correct: false },
            { text: "Gas", correct: false },
            { text: "Vapour", correct: false },
        ]
    },
    {
        question: "What happens to water vapour when it cools?",
        answers: [
            { text: "It transpires", correct: false },
            { text: "It precipitates", correct: false },
            { text: "It evaporates", correct: false },
            { text: "It condenses", correct: true },
        ]
    },

];

