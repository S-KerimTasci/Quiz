let questions = [
    {
        "question": "Wer hat HTML erfunde?",
        "answer_1": "Paul Pogba",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Robert Cailliau",
        "right_answer": 3,
    },

    {
        "question": "Tausendundeine Nacht ist eine Sammlung von Erzählungen aus ..?",
        "answer_1": "Japan",
        "answer_2": "Schweden",
        "answer_3": "Indien",
        "answer_4": "dem Orient",
        "right_answer": 4,
    },

    {
        "question": "Wofür steht das E in E-mail?",
        "answer_1": "Englisch",
        "answer_2": "Electronic",
        "answer_3": "Essbar",
        "answer_4": "Essenziell",
        "right_answer": 2,
    },

    {
        "question": "Wann stellte Apple den ersten Macintosh vor?",
        "answer_1": "1984",
        "answer_2": "1989",
        "answer_3": "1993",
        "answer_4": "1999",
        "right_answer": 1,
    },

    {
        "question": "Wie viele Bit hat ein Byte?",
        "answer_1": "8",
        "answer_2": "16",
        "answer_3": "24",
        "answer_4": "32",
        "right_answer": 1,
    },
]

let current = 0;
let start = 1;
let rightAnswerAmount = 0;
let audioRight = new Audio('audio/right.mp3')
let audioWrong = new Audio('audio/wrong.mp3')

function init() {
    document.getElementById('current-question').innerHTML = start
    document.getElementById('question-lenght').innerHTML = questions.length

    showQuestion()
}

function showQuestion() {
    if (gameIsOver()) {
        updateProgressbar();
        showEndscreen();
    } else {
        updateProgressbar();
        updateToNextQuestion();
    }
}


function answer(i) {
    let x = questions[current]['right_answer']
    let y = `answer_${x}`

    if (y == i) {
        document.getElementById(i).classList.add("right")
        rightAnswerAmount++
        audioRight.play();
    } else {
        document.getElementById(i).classList.add("false")
        document.getElementById(y).classList.add("right")
        audioWrong.play();
    }

    document.getElementById('next').disabled = false;
}

function nextQuestion() {
    current++;

    document.getElementById('answer_1').classList.remove("false", "right");
    document.getElementById('answer_2').classList.remove("false", "right");
    document.getElementById('answer_3').classList.remove("false", "right");
    document.getElementById('answer_4').classList.remove("false", "right");

    document.getElementById('next').disabled = true;
    document.getElementById('prev').disabled = true;

    showQuestion();
}

function restart() {
    current = 0;
    start = 1;
    rightAnswerAmount = 0;

    document.getElementById('question_text').classList.remove('d-none')
    document.getElementById('answer_1').parentNode.classList.remove('d-none')
    document.getElementById('answer_2').parentNode.classList.remove('d-none')
    document.getElementById('answer_3').parentNode.classList.remove('d-none')
    document.getElementById('answer_4').parentNode.classList.remove('d-none')
    document.getElementById('question-footer').classList.remove('d-none')

    document.getElementById('endscreen').classList.add('d-none')

    init();
}

function gameIsOver(){
    return current >= questions.length
}

function updateProgressbar() {
    let percent = current / questions.length
    percent = percent * 100
    document.getElementById('progress-bar').innerHTML = `${percent}%`
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

function showEndscreen(){
    document.getElementById('question_text').classList.add('d-none')
        document.getElementById('answer_1').parentNode.classList.add('d-none')
        document.getElementById('answer_2').parentNode.classList.add('d-none')
        document.getElementById('answer_3').parentNode.classList.add('d-none')
        document.getElementById('answer_4').parentNode.classList.add('d-none')
        document.getElementById('question-footer').classList.add('d-none')

        document.getElementById('endscreen').classList.remove('d-none')

        document.getElementById('question-lenght-end').innerHTML = questions.length
        document.getElementById('right-answers-amount').innerHTML = rightAnswerAmount
}


function updateToNextQuestion() {
    let question = questions[current]
    document.getElementById('current-question').innerHTML = current + 1;

    document.getElementById('question_text').innerHTML = question['question']
    document.getElementById('answer_1').innerHTML = question['answer_1']
    document.getElementById('answer_2').innerHTML = question['answer_2']
    document.getElementById('answer_3').innerHTML = question['answer_3']
    document.getElementById('answer_4').innerHTML = question['answer_4']
}