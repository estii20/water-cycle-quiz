//quiz questions array 15 in total displayed in order

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
            { text: "Groundwater picks up salt", correct: true },
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
        question: "Water that soaks into the ground is called what?",
        answers: [
            { text: "Water table", correct: false },
            { text: "Collected", correct: false },
            { text: "Groundwater", correct: true },
            { text: "Rainwater", correct: false },
        ]
    },
    {
        question: "Plants release water vapour. What is this process?",
        answers: [
            { text: "Precipitation", correct: false },
            { text: "Condensation", correct: false },
            { text: "Evaporation", correct: false },
            { text: "Transpiration", correct: true },
        ]
    },
    {
        question: "What happens when water turns into a vapour?",
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

//Quiz area variables

const startButton = document.getElementById("start-button");
const questionOption = document.getElementById("question");
const buttonsAnswer = document.getElementById("answer-btns");
const buttonNext = document.getElementById("next-button");

/**
 * DOM fully loaded and parsed
 * Start the quiz on click of start button
 * show the start button and score area
 */

document.addEventListener("DOMContentLoaded", function (event) {
    startButton.addEventListener("click", beginQuiz);
    startButton.innerHTML = "Start";
});

//Store question index and score

let questionList = 0;
let score = 0;
let scoreCorrect = 0;
let scoreIncorrect = 0;

/**
 * Start quiz with the first question from the list and resets the question index 
 * display next button and hides the start button
 * result is the first question is displayed
 */

function beginQuiz() {
    questionList = 0;
    score = 0;
    scoreCorrect = 0;
    scoreIncorrect = 0;
    oldScore = 0;
    buttonNext.innerHTML = "Next";
    startButton.classList.add("hide");
    buttonsAnswer.classList.remove("hide");
    displayQuestion();
}

/**Iterate the questions array and displays each in order
 * remove the start button from the quiz area
 * next question is shown from the question list
*/ 

function displayQuestion() {
    resetQuiz();
    startButton.style.display = "none";
    let questionShown = questions[questionList];
    let nextQuestionShown = questionList + 1;
    questionOption.innerHTML = nextQuestionShown + ". " + questionShown.question;


    /**Create buttons to display the answer text
     * check the answer is correct from the question index
     * answer is selected when user clicks
     * remove the answer buttons in html
    */ 

    questionShown.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btns");
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        buttonsAnswer.appendChild(button);
    });
}

/**
 * Resets the quiz to the default
*/

function resetQuiz() {
    buttonNext.style.display = "none";
    startButton.classList.remove("hide");
    while(buttonsAnswer.firstChild) {
        buttonsAnswer.removeChild(buttonsAnswer.firstChild);
    }
}

/**
 * Select the answer from the four answer options in the question array
 * add the class of correct and incorrect and increment the old score by 1
 * disable the answer buttons when answer selected,
 * display the next button
 */

function selectAnswer(e) {
    const btnSelected = e.target;
    const correct = btnSelected.dataset.correct === "true";
    if(correct) {
        btnSelected.classList.add("correct");
        score++;
        incrementCorrectAnswer();
    }else{
        btnSelected.classList.add("incorrect");
        incrementIncorrectAnswer();
    }
    Array.from(buttonsAnswer.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    buttonNext.style.display = "inline-block";
}

/**
 * Get the current score and increments it by 1
 * if answer correct display in the answer correct score area
*/

function incrementCorrectAnswer() {
    let oldScore = parseInt(document.getElementById("score-correct").innerText);
    document.getElementById("score-correct").innerText = ++oldScore;
}

/**
 * Get the current score and increments it by 1
 * if answer incorrect display in the answer incorrect score area
*/

function incrementIncorrectAnswer() {
    let oldScore = parseInt(document.getElementById("score-incorrect").innerText);
    document.getElementById("score-incorrect").innerText = ++oldScore;
}

/**
 * Display the score to the user at the end of the questions array
 * reset the quiz score and question list to zero
 * show start button for user to restart the quiz
 */

function displayScore() {
    resetQuiz();
    questionOption.innerHTML = `Well done you scored ${score} out of 15!`;
    startButton.innerHTML = "Restart";
    startButton.style.display = "inline-block";
}

/**
 * Display the next question in the questions array
 * if question options are less than the number of questions, display next question on click
 * if question options are more than question length, display score and restart quiz
 */

function nextQuestion() {
    questionList++;
    if(questionList < questions.length) {
        displayQuestion();
    }else{
        displayScore();
    }
}

buttonNext.addEventListener("click", ()=> {
    if(questionList < questions.length) {
        nextQuestion();
    }else{
        beginQuiz();
    }
});






