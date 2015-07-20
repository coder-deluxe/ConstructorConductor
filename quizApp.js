//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  //code here

function User(name, email, password, totalscore) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.totalscore = totalscore;

}


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  //code here

function Question(title, answersArray, rightAnswers, difficulty) {
    this.title = title;
    this.answersArray = answersArray;
    this.rightAnswers = rightAnswers;
    this.difficulty = difficulty;

}


//Create a users Array which is going to hold all of our users.

  //code here

var users = [];

var u1 = new User('Tyler', 'tylermcginnis33@gmail.com', 'iloveJS', 1);
var u2 = new User('Cahlan', 'cahlan@devmounta.in', 'iloveHashtags', 2);
var u3 = new User('Lenny', 'lenny@thelenster.com', 'iloveLentilSoup', 3);


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  //code here
users.push(u1);
users.push(u12);
users.push(u3);

//Create a questions Array which is going to hold all of our questions

  //code here

var questionsArray = [];




//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  //code here


var q1 = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?', 'F', 'T', '6');
var q2 = new Question('T/F: JavaScript is just a scripting version of Java', 'T', 'T', '2');
var q3 = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and" +
    " value", 'T', 'T', '9');


//Now push all of your instances of Question into the questions Array

  //code here
questionsArray.push(q1);
questionsArray.push(q2);
questionsArray.push(q3);

console.log('My users Array and my questions arrray are ...');

//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here

for (var i = 0; i < questionsArray.length; i++) {
    console.log(JSON.stringify(users[i]) + JSON.stringify(questionsArray[i]));

}
