// Equal (==): Checks if two values are equal, but it performs type coercion,
//  so it may not be strict in terms of both value and type.
var a = 5;
var b = "5";
console.log(a == b);  

// Not Equal (!=): Checks if two values are not equal, with type coercion.
var a = 5;
var b = "5";
console.log(a != b);  

// Strict Equal (===): Checks if two values are equal, and it does not perform type coercion (strict equality).
var a = 5;
var b = "5";
console.log(a === b);  

// Strict Not Equal (!==): Checks if two values are not equal, without type coercion (strict inequality).
var a = 5;
var b = "5";
console.log(a !== b);  

// Greater Than (>): Checks if the value on the left is greater than the value on the right.
var a = 10;
var b = 5;
console.log(a > b); 

 // Less Than (<): Checks if the value on the left is less than the value on the right.
var a = 3;
var b = 7;
console.log(a < b);  

// Greater Than or Equal To (>=): Checks if the value on the left is greater than or equal to the value on the right.
var a = 10;
var b = 10;
console.log(a >= b);  

// Less Than or Equal To (<=): Checks if the value on the left is less than or equal to the value on the right.
var a = 3;
var b = 3;
console.log(a <= b);  
