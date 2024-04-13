let greeting = "Hello, World!";
console.log(greeting)

let num1: number, num2: number;
num1 = 2;
num2 = 3;
let addition = num1 + num2;
console.log(addition)
let difference = num2 - num1;
console.log(difference)
let product = num1 * num2;
console.log(product)
let quotient = num1 ** num2;
console.log(quotient)

let a = 2;
let b = 5;
a = a * b;
b = a / b;
a = a / b;
console.log(a);
console.log(b);

// let message: string = "";
// message = 23;

num1;
num2;
let remainder = num1 % num2;
console.log(remainder);

let counter = 0;
console.log(counter)
counter += 1;
console.log(counter)
counter++;
console.log(counter)

let c = true, d = false, e = true;
console.log(c && d && e);
console.log(c || d || e);
console.log(c && d || e);
console.log(c || d && e);
console.log(!c, !d, !e);

let num = 10;
console.log(num += 2);
console.log(num -= 2);
console.log(num *= 2);
console.log(num /= 2);

let r_num = 9;
if (r_num % 2 == 0)
  console.log("The number is even");
else
  console.log("The number is even");

let age = 15;
if (age > 18)
  console.log("You are eliible to vote");
else ("You can't vote less you turn 18 years old.")

let score = 58;
if (score > 80)
  console.log("Your grade is A");
else if (score > 70 && score < 80)
  console.log("Your grade is B");
else if (score > 60 && score < 70)
  console.log("Your grade is C");
else if (score > 50 && score < 60)
  console.log("Your grade is D");
else if (score < 33)
  console.log("Your grade is F");

let nu1 = 4, nu2 = 8, nu3 = 1;
if (nu1 > nu2 && nu1 > nu3)
  console.log(`${nu1} is the greatest out of all three.`);
else if (nu2 > nu1 && nu2 > nu3)
  console.log(`${nu2} is the greatest out of all three.`);
else
  console.log(`${nu3} is the greatest out of all three.`)

let year = 2023;
if (year % 4 == 0)
  console.log(`${year} is a leap year.`)

let fahrenheit = 23;
let celsius = (fahrenheit - 32) * (5 / 9);
console.log(`The ${fahrenheit}℉ is equal to ${celsius}℃.`)

let a_number = 23;
if (a_number > 0)
  console.log(`${a_number} is a positive number.`);
else if (a_number < 0)
  console.log(`${a_number} is a positive number.`);
else
  console.log(`${a_number} is zero.`)

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