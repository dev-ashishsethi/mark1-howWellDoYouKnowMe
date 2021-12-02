
var input = require('readline-sync');

var ans = input.question('what is your name?\n');

console.log("WELCOME A QUIZ ABOUT MYSELF! SOUNDS NARCISSISTIC RIGHT? \n");
var arr=[
question1 = {
  ques: "What do I aspire to become?",
  ans: "Web developer"
}
,
question2 = {
  ques: "What's the name of my favourite web series?",
  ans: "Undekhi"
}
,
question3 = {
  ques: "Where do I work?",
  ans: "Capgemini"
}
]
var score=0;
function quiz(question,answer){
  var ans1=input.question(question);
  if(ans1===answer){
    console.log("you are right!!🎉 \n");
    score++;
  }else{
    console.log("you are wrong. 🙁 \n");
  }
}

for(var i=0;i<arr.length;i++){
  quiz(arr[i].ques,arr[i].ans);
  // console.log("Score:",score);
}
console.log("Your Total Score is:",score);