var readlineSync = require("readline-sync");
var score = 0;
console.log("Welcome to Shakir's Quiz on Football");
var userName = readlineSync.question("Enter your name here : ")

userMessage = ("Hello " +userName +  " Lets put your Football knowledge into test!");

console.log(userMessage)

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("You are right!!")
    score = score + 1
  } else {
    console.log("You are Wrong");
  }

}

var questions = [{
  question: "Which country is hosting FIFA World Cup 2022?",
  answer: "qatar"
}, {
  question: "Who are the reigning Worldcup champions?",
  answer: "france"
}, {
  question: "Who was awarded the ballon d'or in 2022?",
  answer: "karim benzema"

}]

for(i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Your total score is :",score)

console.log("Thank you for participating, Have a nice day!!!");