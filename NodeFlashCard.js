//Require Node NPM
var inquirer = require("inquirer");

//require fs
var fs = require("fs");

//Empty var to store programmers data
var answers = [];

//var to Prompt Programmers
inquirer.prompt ([
    {
        name: "question",
        message: "Enter Question",
        type: "input"
    },
    {
        name: "answer",
        message: "Enter Answer",
        type: "input"
    },
    {
        name: "answercloze",
        message: "Enter Cloze",
        type: "input"
    },
    {
        name: "answertext",
        message: "Enter Text",
        type: "input"
    }

]).then(handleUserResponse);



//require text file
// var text = require("text.txt");

//third input field accept front and back arguments
//We will create a switch-case statement.
//The switch-case will direct which functions get run.
function BasicFlashcard(front, back){
this.front = front;
this.back = back;

//showing the back answer
this.showback = function (){
    console.log(this.back);
}
this.showfront = function(){
    console.log(this.front);
}
};

//third input field accept text and cloze arguments
//We will create a switch-case statement.
//The switch-case will direct which functions get run.
function ClonzeFlashcard (text, cloze){
this.text = text;
this.cloze = cloze;

this.showtext = function(){
    console.log(this.text);
}
this.showcloze = function(){
    console.log(this.cloze);
}
};

//This is creating the list of questions and Answers for the flash cards
var basic = new BasicFlashcard( "What was the name of the first US president?", "George Washington");
 



//Read user data
// fs.readFile('text.txt','utf8', readFileResult);
 

//Handles the user answer to prompts
function handleUserResponse(answer){
   // console.log(BasicFlashcard);
    // console.log("Your Answer: " + result[0], "Correct Answer: " + inquirer.back);
    //print method is to show object
    var newAnswer = new BasicFlashcard (answer.question, answer.answer);
    newAnswer.showback();
    answers.push(newAnswer);

    var newCloze = new ClonzeFlashcard (answer.answertext, answer.answercloze);
    newCloze.showtext();
    answers.push(newCloze);

      // We will add the value to the bank file.
  fs.appendFile("text.txt", answer.question + " " + answer.answer+"\n", appendError);
  fs.appendFile("text.txt", answer.answertext + " " + answer.answercloze+"\n", appendError);

//function to find errors
function appendError(err){
    if(err){
        console.log(err);
    }
    
}
};
