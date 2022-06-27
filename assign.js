// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (var i = 1; i<101;i++){
    if(i % 15 ==0) console.log("FizzBuzz");

    else if(i % 3== 0)console.log("Fizz");

    else if(i % 5 ==0) console.log("Buzz");

    else console.log(i);
}

    // he talked about using DRY, how can we use it here since we are repeating ourselves alot?


// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
 for (t = 0; t<1000; t++){

 if(t%3==0 && t%5==0){ 
  // var sum = 0;
   sum +=t
    console.log(sum);
 }
}
// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
 
for(s=0; s<20;s++){
  if(s %2 ===0)console.log(s+' '+ 'is even');
  else console.log(s+' ' + 'is odd')
}
// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]

let num =[-2,4,-5,6,0]
 if(-2>4 && -2>-5 && -2>6 && -2>0){
  console.log(-2) 
 }
if(4>-2 && 4>-5 && 4>6 && 4>0){
  console.log(4) 
}
if(-5 >-2 && -5 >4 && -5 >6 && -5>0){
  console.log(-5) 
}
if(6>-2 && 6>4 && 6>-5 && 6>0){
  console.log(6) 
}
if(0>-2 && 0>4 && 0>-5 && 0>6){
  console.log(0) 
}

// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
let number = [10, 40]
if(10>40){
  console.log(10)
}
if(40>10){
  console.log(40)
}


// Write a JavaScript program to find leap years from 2000 to 2022

for(n=2000; n<=2022; n++){
  if(n%4===0) {
    console.log(n + ' '+ 'is a leap year')
  }
  if(n% 400 ===0){
    console.log(n + ' '+ 'is a leap year')
  }
  if(n%100===!0){
    console.log(n +' '+ 'is not a leap year')
  }
}


