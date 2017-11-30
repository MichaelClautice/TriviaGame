// Michael Clautice's Javascript Trivia Quiz Version 02

// •••••••••••••••••••••••••••••••••••

// ???????????? should this all be inside the doc.ready() function?

// •••••••••••••••••••••••••••••••••••

// DEFINE 3 VARIABLES AT THE TOP:

// • displayPanel

// • questionsAndAnswersArray

// • triviaQuiz

// •••••••••••••••••••••••••••••••••••

// DEFINE A VARIABLE CALLED displayPanel

// define a var called displayPanel and assign it the value
// of the "quiz-area" div in the html markup
// this is how the quiz & done button will be displayed in the markup
// 2 jQuery functions: html() and append() will insert some
// html into it for display in the markup
var displayPanel = $('#quiz-area');


// DEFINE ANOTHER VARIABLE CALLED questionsAndAnswersArray

//this is an array variable called questionsAndAnswersArray
// it is an array of 5 objects
// ea object contains 3 key-value pairs:
// 1 - The Question
// 2 - The Multiple Choice Answers
// 3 - The Correct Answer
// I created these 5 JS questions and answers from w3s.com
var questionsAndAnswersArray = [

  {
    question: "1. Which JavaScript method will find an HTML element?",
    answers: ["innerHTML", "getElementById()", "var", "join()"],
    correctAnswer: "getElementById()"
  },

  {
    question: "2. JavaScript was invented in what year?",
    answers: ["2010", "1999", "1995", "2005"],
    correctAnswer: "1995"
  },

  {
    question: "3. Which JavaScript keyword exits a function?",
    answers: ["switch", "var", "break", "return"],
    correctAnswer: "return"
  },

  {
    question: "4. JavaScript code blocks define statements to be executed together.",
    answers: ["True", "False"],
    correctAnswer: "True"
  },

  {
    question: "5. Which JavaScript operator multiplies a variable?",
    answers: ["%=", "*=", "|=", ">>="],
    correctAnswer: "*="
  }

];

// DEFINE ANOTHER VARIABLE CALLED triviaQuiz

// define an object variable called triviaQuiz

// triviaQuiz is an obj var made up of 7 key-value pairs:

// 1 - totalCorrectAnswers - a markup element set to zero

// 2 - totalIncorrectAnswers - a markup element set to zero

// 3 - timeLeftCounter - a countdown timer element set to 45 secs

// 4 - countdownFunction - an anonymous function that decrements 45 - 0 then ends triviaQuiz

// 5 - startQuizFunction - an anonymous function that displays the time remaining

// 6 - endQuizFunction - an anonymous function that "tallies" the totalCorrectAnswers & totalIncorrectAnswers answers

// 7 - displayResultFunction - an anonymous function that clears the displayed timer & displays the totalCorrectAnswers & totalIncorrectAnswers results

var triviaQuiz = {

  // •••••••••••••••••key-value pair #01 - "totalCorrectAnswers"
  totalCorrectAnswers: 0,

  // •••••••••••••••••key-value pair #02 - "incorrect"
  totalIncorrectAnswers: 0,

  // •••••••••••••••••key-value pair #03 - "timeLeftCounter"
  timeLeftCounter: 45,

  // •••••••••••••••••key-value pair #04 - "countdownFunction"
  // this key's value is a anonymous function
  countdownFunction: function () {
    // counter decrements from 45
    triviaQuiz.timeLeftCounter--;
    // jQ targets some markup
    // jQ's html() inserts the current counter number into that markup
    $('#counter-number').html(triviaQuiz.timeLeftCounter);
    // when counter number decrements to zero...
    if (triviaQuiz.timeLeftCounter === 0) {
      // perform a console.log() test and...
      console.log('TIMES UP, BABY! (this is a console.log test)');
      // call the endQuizFunction() function which will "tally" the...
      // correct & incorrect & unanswered questionsAndAnswersArray, which will..
      // be sent to the displayResultFunction() for display in the markup
      triviaQuiz.endQuizFunction();
    }
  }, // •••••••••• close key-value pair #04

  // •••••••••••••••••key-value pair #05 - "startQuizFunction"
  startQuizFunction: function () {
    timer = setInterval(triviaQuiz.countdownFunction, 1000);

    $('#subwrapper').prepend('<h2>Your Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
    $('#startQuizButton').remove();

    for (var i = 0; i < questionsAndAnswersArray.length; i++) {
      displayPanel.append('<h4>' + questionsAndAnswersArray[i].question + '</h4>');

      for (var j = 0; j < questionsAndAnswersArray[i].answers.length; j++) {

        displayPanel.append('<input type="radio" name="question' + '-' + i + ' " value=" ' + questionsAndAnswersArray[i].answers[j] + ' ">' + questionsAndAnswersArray[i].answers[j]);

      }
    }
    displayPanel.append('<button id="showResultsButton">Show Me the Results!</button>');
  }, // •••••••••• close key-value pair #05 - "startQuizFunction"



  // •••••••••••••••••key-value pair #06 - "endQuizFunction"
  endQuizFunction: function () {


    $.each($("input[name='question-0']:checked"), function () {
      // if the value of the 1st question equals the correct answer...
      if ($(this).val() == questionsAndAnswersArray[0].correctAnswer) {
        // increment the value of totalCorrectAnswers...
        triviaQuiz.totalCorrectAnswers++;
      } else {
        // otherwise increment the value of totalIncorrectAnswers
        triviaQuiz.totalIncorrectAnswers++;
      }
    });

    $.each($("input[name='question-1']:checked"), function () {
      // if the value of the 2nd question equals the correct answer...
      if ($(this).val() == questionsAndAnswersArray[1].correctAnswer) {
        // increment the value of totalCorrectAnswers...
        triviaQuiz.totalCorrectAnswers++;
      } else {
        // otherwise increment the value of totalIncorrectAnswers
        triviaQuiz.totalIncorrectAnswers++;
      }
    });

    $.each($("input[name='question-2']:checked"), function () {
      // if the value of the 3rd question equals the correct answer...
      if ($(this).val() == questionsAndAnswersArray[2].correctAnswer) {
        // increment the value of totalCorrectAnswers...
        triviaQuiz.totalCorrectAnswers++;
      } else {
        // otherwise increment the value of totalIncorrectAnswers
        triviaQuiz.totalIncorrectAnswers++;
      }
    });

    $.each($("input[name='question-3']:checked"), function () {
      // if the value of the 4th question equals the correct answer...
      if ($(this).val() == questionsAndAnswersArray[3].correctAnswer) {
        // increment the value of totalCorrectAnswers...
        triviaQuiz.totalCorrectAnswers++;
      } else {
        // otherwise increment the value of totalIncorrectAnswers
        triviaQuiz.totalIncorrectAnswers++;
      }
    });

    $.each($("input[name='question-4']:checked"), function () {
      // ???????? make sure I understand what the keyword "this" is all about ?????????
      // if the value of the 5th question equals the correct answer...
      if ($(this).val() == questionsAndAnswersArray[4].correctAnswer) {
        // increment the value of totalCorrectAnswers...
        triviaQuiz.totalCorrectAnswers++;
      } else {
        // otherwise increment the value of totalIncorrectAnswers
        triviaQuiz.totalIncorrectAnswers++;
      }
    });

    this.displayResultFunction();

  }, // •••••••••• close key-value pair #06 - "endQuizFunction"

  // •••••••••••••••••key-value pair #07 - "displayResultFunction"

  displayResultFunction: function () {

    clearInterval(timer);

    $('#subwrapper h2').remove();

    displayPanel.html('<h2>This Quiz is Over!</h2>');

    displayPanel.append('<h3>Correct Answers: ' + this.totalCorrectAnswers + '</h3>');
    displayPanel.append('<h3>Incorrect Answers: ' + this.totalIncorrectAnswers + '</h3>');
    displayPanel.append('<h3>Unanswered Questions: ' + (questionsAndAnswersArray.length - (this.totalIncorrectAnswers + this.totalCorrectAnswers)) + '</h3>');

}// •••••••••• close key-value pair #07 - "displayResultFunction"

}; // end of "triviaQuiz"


// •••••••••••••••••••••••••••••••••••

// 2 CLICK EVENTS
// there are 2 buttons in this triviaQuiz: #startQuizButton and #showResultsButton
// they ea have their own click events
// jQ targets the document object
// the on() method is called on the document obect
// The on() method attaches one or more event handlers for the selected elements and child elements.

$(document).on('click', '#startQuizButton', function (event) {
  triviaQuiz.startQuizFunction();
});

$(document).on('click', '#showResultsButton', function (event) {
  triviaQuiz.endQuizFunction();
});

// •••••••••••••••••••••••••••••••••••

// Michael Clautice's Javascript Trivia Quiz Version 02