"use strict";
//Question1
let greeting = "Hello, World!";
console.log(greeting);
//Question2
let num1 = 2, num2 = 3;
console.log(`addition =`, num1 + num2); //Prints sum of two numbers
console.log(`subtraction`, num1 - num2); //Prints difference of two numbers
console.log(`multiplication`, num1 * num2); //Prints product of two numbers
console.log(`quotient`, num1 ** num2); //Prints one number power raise to second number
//Question3
let a = 2;
let b = 5;
a = a * b; //Increase value a by multiple of b
b = a / b; //In b, store incresed value of a which is 10 now after dividing by b which is 5, so it gets equal to a initial value which is 2
a = a / b; //In a, store incresed value of a which is still 10 after dividing by b which now is changed to 2, so it gets equal to b initial value which is 5
console.log(a);
console.log(b);
//Question4
// let message: string = ""; //Typescript doesn't allow a variable with type annotation string while declaration to store a "number" later while initialization 
// message = 23;
//Question5
num1;
num2;
let remainder = num1 % num2;
console.log(remainder);
//Question6
let counter = 0;
console.log(counter);
counter += 1; //In first method, variable value is incresed by whatever number is on right side, in this case '1' and stored in the same variable, therefore, updating the variable in one line.
console.log(counter);
counter++; //In second method, variable value is incresed by '1' only, every line of code is written and variable is updated.
console.log(counter);
//Question7
let c = true, d = false, e = true;
console.log(c && d && e); //AND gate gives true only when every value is true.
console.log(c || d || e); //OR gate gives false only when every value is false.
console.log(c && d || e); //Moving from left, it first solves AND gate and then OR gate between and next variable
console.log(c || d && e); //Moving from left, it first solves OR gate and then AND gate between and next variable
console.log(!c, !d, !e); //NOT gate changes TRUE to FALSE and vice versa.
//Question8
let num = 10;
console.log(num += 2); //This assignment operator adds whatever number is on right side to the variable and updates the variable.
console.log(num -= 2); //This assignment operator subtarcts whatever number is on right side from the variable and updates the variable.
console.log(num *= 2); //This assignment operator multiplies whatever number is on right side with the variable and updates the variable.
console.log(num /= 2); //This assignment operator divides variable by whatever number is on right side and updates the variable.
//Question9
let r_num = 9;
if (r_num % 2 == 0)
    console.log("The number is even"); //If a number upon diving by 2 leaves a remainder and is not completely divisble by 2, that number will be odd, in other case, it will be even.
else
    console.log("The number is odd");
//Question10
let age = 15;
if (age > 18) //IF block runs and if only condition is true, statement is executed otherwise profram moves to the ELSE block. 
    console.log("You are eligible to vote");
else
    console.log("You can't vote less you turn 18 years old.");
//Question11
let score = 58;
if (score > 80) //Starting from IF block, first condition is checked, if true IF block executes and remaining blocks are ignored, if not true program moves to next ELSEIF block, same procedure repeated till end of ELSEIF blocks.
    console.log("Your grade is A");
else if (score > 70 && score < 80)
    console.log("Your grade is B");
else if (score > 60 && score < 70)
    console.log("Your grade is C");
else if (score > 50 && score < 60)
    console.log("Your grade is D");
else if (score < 33)
    console.log("Your grade is F");
//Question12
let nu1 = 4, nu2 = 8, nu3 = 1;
if (nu1 > nu2 && nu1 > nu3) //first number is comapred to other two numbers,if both conditions true, we get our printed statement
    console.log(`${nu1} is the greatest out of all three.`);
else if (nu2 > nu1 && nu2 > nu3) //second number is comapred to other two numbers,if both conditions true, we get our printed statement
    console.log(`${nu2} is the greatest out of all three.`);
else //If upon checking none of the first two numbers is the greatest, then third one is the greatest and we get our printed statement using ELSE 
    console.log(`${nu3} is the greatest out of all three.`);
//Question13
let year = 2023;
if (year % 4 == 0) //Leap years are completely divisble by 4, leaving no remainder
    console.log(`${year} is a leap year.`);
else
    console.log(`${year} is not a leap year.`);
//Question14  
let fahrenheit = 23;
let celsius = (fahrenheit - 32) * (5 / 9);
console.log(`The ${fahrenheit}℉ is equal to ${celsius}℃.`);
//Question15
let a_number = 23;
if (a_number > 0)
    console.log(`${a_number} is a positive number.`);
else if (a_number < 0)
    console.log(`${a_number} is a positive number.`);
else
    console.log(`${a_number} is zero.`);
//Question16
let nbr = 15;
console.log(`${nbr} x 1 =`, nbr * 1);
console.log(`${nbr} x 2 =`, nbr * 2);
console.log(`${nbr} x 3 =`, nbr * 3);
console.log(`${nbr} x 4 =`, nbr * 4);
console.log(`${nbr} x 5 =`, nbr * 5);
console.log(`${nbr} x 6 =`, nbr * 6);
console.log(`${nbr} x 7 =`, nbr * 7);
console.log(`${nbr} x 8 =`, nbr * 8);
console.log(`${nbr} x 9 =`, nbr * 9);
console.log(`${nbr} x 10 =`, nbr * 10);
