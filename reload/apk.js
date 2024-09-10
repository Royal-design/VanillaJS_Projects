// (function() {
//     var questionBox = function(questions, answers, correct) {
//         this.questions = questions;
//         this.answers = answers;
//         this.correct = correct
//     }
//     questionBox.prototype.displayQuestion = function() {
//         console.log(this.questions);
//         for (let i = 0; i < this.answers.length; i++) {
//             console.log(i + ': ' + this.answers[i]);

//         }
//     }
//     questionBox.prototype.displayAnswer = function(answ, callBack) {
//         var sc;
//         if (answ === this.correct) {
//             console.log('Correct answer');
//             sc = callBack(true)

//         } else {
//             console.log('Wrong answer! try again :)');
//             sc = callBack(false)
//         }
//         this.displayScore(sc)
//     }

//     questionBox.prototype.displayScore = function(score) {
//         console.log('your score is ' + score);
//         console.log('.....................................................');
//     }
//     var q1 = new questionBox('what is your name', ['Francis', 'Ade', 'Kemi'], 2);
//     var q2 = new questionBox('what is your best food', ['rice', 'beans', 'both'], 0);
//     var q3 = new questionBox('what is your best color', ['green', 'blue', 'grey'], 1);

//     var quest = [q1, q2, q3];

//     var score = function() {
//         var sc = 0;
//         return function(correct) {
//             if (correct) {
//                 sc++
//             }
//             return sc;
//         }
//     }
//     var keepScore = score();

//     function nextQuestion() {
//         var n = Math.floor(Math.random() * quest.length)
//         var question = quest[n];
//         question.displayQuestion();
//         var ans = prompt('Choose correct answer')
//         if (ans !== 'exit') {
//             question.displayAnswer(parseInt(ans), keepScore)
//             nextQuestion()
//         }

//     }
//     nextQuestion()

// })();





var ques1, ques2, ques3;
ques1 = document.getElementById('question-A');
ques1.style.display = 'none'
ques2 = document.getElementById('question-B');
ques2.style.display = 'none'
ques3 = document.getElementById('question-C');
ques3.style.display = 'none'




document.querySelector('.reload').addEventListener('click', reload)

function reload() {
    var questionBox = function(questions, answers, correct) {
        this.questions = questions;
        this.answers = answers;
        this.correct = correct
    }

    var question1, question2, question3, answer1, answer2, answer3, correct1, correct2, correct3;
    question1 = document.getElementById('question-1');
    question2 = document.getElementById('question-2');
    question3 = document.getElementById('question-3');

    answer1 = document.getElementById('answer-1');
    answer2 = document.getElementById('answer-2');
    answer3 = document.getElementById('answer-3');

    correct1 = document.querySelector('.correct-1').innerHTML;
    correct2 = document.querySelector('.correct-2').innerHTML;
    correct3 = document.querySelector('.correct-3').innerHTML;

    var q1 = new questionBox(question1, answer1, correct1);
    var q2 = new questionBox(question2, answer2, correct2);
    var q3 = new questionBox(question3, answer3, correct3);
    var quesLog = [q1, q2, q3];

    questionBox.prototype.displayAnswer = function(ans) {
        if (ans == this.correct) {
            console.log('correct ans');
        } else {
            console.log('wrong answer');
        }
    }



    var ques1, ques2, ques3;
    ques1 = document.getElementById('question-A');
    ques1.style.display = 'none'
    ques2 = document.getElementById('question-B');
    ques2.style.display = 'none'
    ques3 = document.getElementById('question-C');
    ques3.style.display = 'none'
    var field, fieldArr

    field = document.querySelectorAll('.question__1' + ',' + '.question__2' + ',' + '.question__3');
    fieldArr = Array.prototype.slice.call(field);
    var n = Math.floor(Math.random() * fieldArr.length);
    var que = fieldArr[n];


    que.style.display = 'block'

    var quest = quesLog[n];
    console.log(quest.correct);

    document.querySelector('.question').addEventListener('click', pick)

    function pick(event) {
        ans = event.target.id;
    }














}