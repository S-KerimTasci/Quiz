let questions =[
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

function init(){
    document.getElementById('question-lenght').innerHTML = questions.length

    showQuestion()
}

function showQuestion(){
    let question = questions[current]

    document.getElementById('question_text').innerHTML = question['question']
    document.getElementById('answer_1').innerHTML = question['answer_1']
    document.getElementById('answer_2').innerHTML = question['answer_2']
    document.getElementById('answer_3').innerHTML = question['answer_3']
    document.getElementById('answer_4').innerHTML = question['answer_4']
}
    

function answer(i){
    let x = questions['0']['right_answer']
    let y = `answer_${x}`

    if (y == i) {
        document.getElementById(i).classList.add("right")
    } else {
        document.getElementById(i).classList.add("false")
        document.getElementById(y).classList.add("right")
    }

    document.getElementById('next').disabled = false;
    document.getElementById('prev').disabled = false;

}
