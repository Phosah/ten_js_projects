const quizData = [
    {
        question: 'What is the name of the best programming language',
        a: 'Java',
        b: 'C',
        c: 'Javascript',
        d: 'Python',
        correct: 'c'
    },
    {
        question: 'Who is the president of Nigeria',
        a: 'Efosa Uyi-Idahor',
        b: 'Muhammed Buhari',
        c: 'Joe Biden', 
        d: 'Micheal Jordan',
        correct: 'a'
    },
    {
        question: 'What is CSS',
        a: 'Cascading stylesheet',
        b: 'Current stylesheet',
        c: 'Hypertext Markup Language',
        d: 'Json Object Notation',
        correct: 'a'
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll(".answer");

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {   
    let answer = undefined;

    answersEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', function() {
    const answer = getSelected();
    console.log(answer);
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }       
        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.
                </h2>
                
                <button onclick="location.reload()">Submit
                </button>
            `;
        }
    }

})