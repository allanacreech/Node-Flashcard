//Require Node NPM
var inquirer = require("inquirer");

//require fs
var fs = require("fs");

//require text file
var text = require("text.txt");

//third input field accept front and back arguments
var BasicFlashcard = process.argv[2];

//third input field accept text and cloze arguments
var ClonzeFlashcard = process.argv[3];

//We will create a switch-case statement.
//The switch-case will direct which functions get run.

switch (BasicFlashcard){
    case "front":
    break;

    case "back":
    break;
}

switch (ClonzeFlashcard){
    case "text":
    break;

    case "cloze":
    break;
}

//function to find errors
function appendError(err){
    if(err){
        console.log(err);
    }
}

//Flash card prompts to user
inquirer.prompt ([
    {
        front: "What was the name of the first US president?",
        back: "George Washington"
    },
    {
        front: "What was the name of the second US president?",
        back: "John Adams"
    },
    {
        front: "What was the name of the third US president?",
        back: "Thomas Jefferson"
    },
    {
        front: "What was the name of the fourth US president?",
        back: "James Madison"
    },
    {
        front: "What was the name of the fifth US president?",
        back: "James Monre"
    },
    {
        front: "What was the name of the sixth US president?",
        back: "John Quincy Adams"
    },
    {
        front: "What was the name of the seventh US president?",
        back: "Andrew Jackson"
    },
    {
        front: "What was the name of the eight US president?",
        back: "Marin Van Buren"
    },
    {
        front: "What was the name of the ninth US president?",
        back: "William Henry Harris"
    }   
    ,
    {
        front: "What was the name of the tenth US president?",
        back: "John Tyler"
    }
   
]);

//Read user data
fs.readFile('text.txt','utf8', readFileResult);
 

//Handles the user answer to prompts
var handleUserResponse = function(answer){
    console.log(BasicFlashcard);
    console.log("Your Answer: " + result[0], "Correct Answer: " + inquirer.back);
    //print method is to show object
    var newAnswer = new BasicFlashcard (answer.front, answer.back)
    newAnswer.printInfo();
    ansers.push(newAnser);
};
