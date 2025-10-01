// write the command "tsx primitiveDataTypes.ts" to execute this file in the terminal

// Declaring variables with different primitive data types in TypeScript
// Each variable is declared with a specific type to demonstrate TypeScript's type system.
// The types used are number, string, boolean, null, undefined, bigint, and symbol.
// This helps in understanding how TypeScript handles different kinds of data.
// The variables are initialized with example values to illustrate their usage.
// The 'let' keyword is used to declare block-scoped variables.
// This is a common practice in TypeScript and JavaScript to ensure variables are not hoisted globally.
//==========================================================================================================================

// Each variable declaration is followed by a comment explaining its purpose.
let age: number = 25.;  // Declaring a variable 'age' of type number and initializing it with the value 25.
let name: string = "Nini"; // Declaring a variable 'name' of type string and initializing it with the value "Nini".
let isAdmin: boolean = true; // Declaring a variable 'isAdmin' of type boolean and initializing it with the value true.
let x: null = null; // Declaring a variable 'x' of type null and initializing it with the value null.
let y: undefined = undefined; // Declaring a variable 'y' of type undefined and initializing it with the value undefined.
let big: bigint = 9007199254740991n; // Declaring a variable 'big' of type bigint and initializing it with a large integer value.
let sym: symbol = Symbol("id"); // Declaring a variable 'sym' of type symbol and initializing it with a unique symbol with the description "id".
// Note: The 'n' suffix in the bigint declaration indicates that it is a BigInt literal.
// The Symbol function creates a new unique symbol each time it is called.

// ====================================================================================================================
// Displaying the values of the variables
// Each variable is logged to the console to show its value.
// The console.log function is used to print the values to the console.
console.log(age); // Displaying the value of the variable 'age'
console.log(name); // Displaying the value of the variable 'name'
console.log(isAdmin); // Displaying the value of the variable 'isAdmin'
console.log(x); // Displaying the value of the variable 'x'
console.log(y); // Displaying the value of the variable 'y'
console.log(big); // Displaying the value of the variable 'big'
console.log(sym); // Displaying the value of the variable 'sym'

// ====================================================================================================================
// Displaying the types of the variables using typeof operator
console.log(typeof age); // number
console.log(typeof name); // string
console.log(typeof isAdmin); // boolean
console.log(typeof x); // object
console.log(typeof y); // undefined
console.log(typeof big); // bigint
console.log(typeof sym); // symbol
// Note: The typeof operator returns a string indicating the type of the unevaluated operand.
// The output of typeof for null is "object", which is a known quirk in JavaScript.
// The output of typeof for bigint is "bigint" and for symbol is "symbol".

// ====================================================================================================================
// Using template literals to format the output and display all variables in one line .
console.log( `Age: ${age},Name: ${name}, Admin: ${isAdmin},nothing:${x}, notIdentify :${y},bigest:${big}, icon:${sym.toString}`);

// Template literals are enclosed by backticks (` `) and can contain placeholders indicated by ${expression}.
// This allows for easier string interpolation and multi-line strings.
// Here, we use a template literal to format the output and include all variable values in a single console.log statement.
// This approach enhances readability and maintainability of the code.
// The toString() method is called on the symbol to convert it to a string for display purposes. otherwise it will give **TypeError: Cannot convert a Symbol value to a string**
// Note: Directly logging a symbol will not display its description, hence the use of toString().
// This is particularly useful for debugging and logging purposes.
