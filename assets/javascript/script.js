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


// var quizChoices = document.getElementById('questions');
// var options = document.getElementById('options');

// Variables
var time = 72;

startBtn.addEventListener("click", function(){
    console.log('The button works')
})

//For loops 


//local storage

//ending event listner?? 
