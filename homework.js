// Episode 1
// prints "My name is Keith" as Keith is a global variable

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();


// Episode 2
// local variable negates the global scope, so it will print "3"
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());


// Episode 3
// local variable myAnimals (Ducks, Dogs, Lions) will negate the global variable
// the for loop prints 0: Ducks /n 1: Dogs /n 2: Lions
//the array gets printed out with Ducks Dogs Lions
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();


// Episode 4
// Harvey negates Keith for var suspectThree inside allSuspects function but not outside.
// prints "Suspects include: Jay, Val, Harvey, Rick"
// suspectThree stays Keith on the global varible, so the last output will be "Suspect three is: Keith"
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is: ' + suspectThree );





