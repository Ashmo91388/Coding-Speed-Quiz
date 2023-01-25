//Ask Dru for help with timer 

// Event listerner to start quiz 


//Var Questions and answers 

var questions = [
    {
        question: 'What are the data types supported by Javascript?',
        choices: ['Undefined, Null','Boolean, String','Symbol, Number, Object','All of the above'],
        answer: 'All of the above'
    },{
        question:  'How can you create an Array in Javascript?',
        choices: ['var y = [1, 2, 3, 4, 5]', 'var y = {1, 2, 3, 4, 5}', 'Both A & B', 'None of the above' ],
        answer: 'var y = [1, 2, 3, 4, 5]'
    
    },{
        question: 'Which is the assignment operator?',
        choices: ['/', ':', ';', '='],
        answer: '='
    },{
        question: 'How would you execute a callback?',
        choices: ['function[]', '.function', 'function()', 'None of the Above'],
        answer: 'function()'
    },{
        question: '== and === are ______?',
        choices: ['methods', 'functions','scopes', 'operators'],
        answer: 'operators'
    },{
        question: 'What method is used to output a message to the web, and is typically used for debugging?',
        choices: ['console.log','method.log','console.log()','method.log()' ],
        answer: 'console.log()'
    
    }
]


//DOM items

var startBtn = document.getElementById('start');


function showQuestion(questions)//question 
{
    var questionsQuiz = document.getElementById('question-title');
    questionsQuiz.textContent = questions.question-title;

    //selection queries
   var answer = document.querySelectorAll('.answer')
   console.log(answer);
}

var optionsQuiz = document.getElementById('options');
var timeEl = document.getElementById('time')



// Variables
var time = 72;
var secondsLeft = 10; 
let timerID;
function beginQuiz(){
    console.log('The button works');
    let beginSection = document.querySelector('.begin');
    beginSection.setAttribute('class', 'hide');
    let questionDiv = document.querySelector('.start-quiz');
    questionDiv.removeAttribute('class');

timerID=setInterval(timerFunc, 1000);
timeEl.textContent= time;
}
function timerFunc(){
    time --; 
    timeEl.textContent= time;

    if (time <= 0){
        endQuiz()
    }
}
function endQuiz(){
    //to be completed
}
startBtn.addEventListener("click", beginQuiz);
   

//console the button works for testing 





//local storage

//ending event listner?? 
