
//             //  Assignment_1

//  Q.1 : Write a JavaScript program that accepts two numbers in two prompts and
//  displays the larger one in the console.

// solution....

// let num1 =+ prompt("Enter the first number:");
// let num2 =+ prompt("Enter the second number:");

// if (num1 > num2) {
//   console.log(num1 + " is greater then " + num2);
// } else if (num1 < num2) {
//   console.log(num2 + " is greater then " + num1);
// } else {
//   console.log("The numbers are equal");
// }


// ---------------------------------------------------------------------------


//  Q.2 : Write a JavaScript conditional statement to find the sign of a number. Display
//  an alert box with the specified sign.

// solution....

// let num = prompt("Enter a number:");

// if (num > 0) {
//   alert( num + " is a positive number");
// } else if (num < 0) {
//   alert( num + " is a negative number");
// } else {
//   alert("The number is zero");
// }


// ---------------------------------------------------------------------------


//  Q.3 Write a JavaScript program that accepts five numbers in five prompts and
//  displays the larger one in the console.

// solution....

//  let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let num3 = prompt("Enter the third number:");
// let num4 = prompt("Enter the fourth number:");
// let num5 = prompt("Enter the fifth number:");

// let max = num1; 

// if (num2 > max) {
//   max = num2;
// }

// if (num3 > max) {
//   max = num3;
// }

// if (num4 > max) {
//   max = num4;
// }

// if (num5 > max) {
//   max = num5;
// }

// console.log("The largest number is " + max);



// ---------------------------------------------------------------------------


// Q.4 : Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.

// solution....

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//       console.log(i + " is even");
//     } else {
//       console.log(i + " is odd");
//     }
//   }
  




// ---------------------------------------------------------------------------


//  Q.5 : Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A

// solution....

// let marks = [];

// for (let i = 0; i < 5; i++) {
//   let mark = parseInt(prompt("Enter mark " + (i + 1) + ":"));
//   marks.push(mark);
// }

// let total = 0;
// for (let i = 0; i < marks.length; i++) {
//   total += marks[i];
// }

// let average = total / marks.length;
// console.log("The average marks is " + average);

// let grade;
// if (average < 60) {
//   grade = "F";
// } else if (average < 70) {
//   grade = "D";
// } else if (average < 80) {
//   grade = "C";
// } else if (average < 90) {
//   grade = "B";
// } else {
//   grade = "A";
// }

// console.log("The corresponding grade is " + grade);


// ---------------------------------------------------------------------------


//  Q.6 : Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz"

// solution....

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
  

// ---------------------------------------------------------------------------


// Q.7 : Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

// solution....

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
  