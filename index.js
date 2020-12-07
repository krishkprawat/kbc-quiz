var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.bgBlue('.....KAUN BANEGA CAROREPATI-2.....'));

var userName = readlineSync.question("What is  your good name?: ");
console.log(chalk.yellow('Hello',userName,",  welcome to KAUNBANEGA CAROREPATI-2 . Let's Play the GAME!!"));

console.log('\n');
console.log(chalk.bgBlue('Rules & Instructions------: '));
console.log('*', userName + ', Total no. of questions is : 10');
console.log('* one right answer you won 10 Lakh rupees.');
console.log('* you need to choose serial number to give answers.');
console.log('* All The Best !!');
console.log('\n');



var questionsList = [

  {
    question : 'kedarnath temple situated in which state? \n a. madhyapradesh \n b. uttrakhand \n c. haryana \n d. himanchal \n your answer is : ',
    answer : 'b'
    
  },
  {
    question : 'what is the name of our prime minister? \n a. harendra modi \n b. manmohan singh \n c. narendra modi \n d. ramnath kovind\n your answer is : ',
    answer : 'c'
  },
  {
    question : 'The Atal tunnel in india is situated at which state? \n a.uttrakhand \n b.uttar pradesh \n c. new delhi \n d. himanchal pradesh\n your answer is  : ',
    answer : 'd'
  },
  {
    question : 'what is the square of number 32 ? \n a. 525 \n b. 900\n c. 1036 \n d. 1032\n your answer is : ',
    answer : 'd'
  },
  {
    
    question : 'worlds largest desert is :  \n a. sahara \n b. thar \n c. kalahari \n d. sonoran \n your answer : ',
    answer : 'a'
  },
  {
    
    question : 'the author of harry potter is ? \n a. v k singh \n b. marcus\n c. J k Rolling \n d. Khushwant Singh\n your answer is : ',
    answer : 'c'
  },
  {
    question : 'Which City is known as "Electronic City of India? \n a. Mumbai \n b. Hyderabad \n c. Guragon \n d. Bangaluru \n  your answer is : ',
    answer : 'd'
  },
  {
    question : 'mount averest is located in which country?\n a. nepal \n b. india \n c. srilanka \n d. china\n your answer is :',
    answer : 'a'
  },
  {
    question : 'which state is gateway of india ?\n a. uttrakhand \n b.mumbai \n c. chennai\n d. kolkata\n your answer is : ',
    answer : 'b'
  },
  {
    question : "What percent of 120 are 90? \n a. 25 \n b. 50 \n c. 75 \n d. 90 \n your answer is : ",
    answer : 'c'
  }
];

var score = 0;


function quiz(question,answer){
  var userAnswer = readlineSync.question(question);
  

  if(userAnswer === answer){
    console.log(chalk.green('You are Right.'));
    score = score + 1000000 ;
    console.log(chalk.bgGreen("you won...",score + " rupees"));

  } else{
    console.log(chalk.red(' oops....You are Wrong.'));
    console.log('The Correct Answer is: ',answer);
    score = score - 1000000;
    console.log("now, your score is",score +" rupees");
    
    
  }

  if(score < 0){
    score = 0;
  }
  
}

for(var i = 0;i < questionsList.length; i++){
  console.log('-------');
  var currentQuestion= questionsList[i];
  quiz(currentQuestion.question,  currentQuestion.answer);
  console.log('*******************************');
}


console.log('\n');
console.log(chalk.bgMagenta('Congratulations!,',userName,'your total winning prize is: ',score ));
console.log(chalk.green("have a good day..."));

var hscoreList= [
{name: "vijay",score: 9000000,}
];

if(score>=9000000) {
  console.log(chalk.green("yeah!! you are carorepati.!! \n"))
}else{
  console.log(chalk.redBright("Try Again to become carorepati!! \n"))
}