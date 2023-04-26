# Data Types

## Variables
Variables in JavaScript can be declared using var, let and const keywords. The use of var when definting a variable predates ES6 and are hoisted, which means that the variable can be accessed in their enclosing scope before they are declared. The let keyword declares a variable where the value can be changed through reassignment, variables declared with the let keyword are block-scoped, meaning the variables will have scope to the immedidiate enclosing block. The const keyword is used if you never want the variable to change and is scopedd to the immediated function body. 


| Type  | Description                                                      | Examples              |
|-------|------------------------------------------------------------------|-----------------------|
| var   | Used in pre-ES6 version of JavaScript. Not recommended.          | var name = "Mary"     |
| let   | Preferred way of declaring a variable that can be reassigned.    | let favColor = "pink" |
| const | Preferred way of declaring a variable that can't be reassigned.  | const pi = 3.14       |         |

## Primitive Data Types

| Type       | Description                                                               | Examples                         |
|------------|---------------------------------------------------------------------------|----------------------------------|
| boolean    | A value that is true or false                                             | true, false                      |
| number     | A numerical value, including integers and floats                          | 35, 4.12, NaN, infinity          |
| string     | A sequence of characters, can be used with both double and single quotes  | "Hello, World", 'Hello, friend!' |
| null       | A value that represents the absence of a value                            | null                             |
| undefined  | A value that represents a variable that has not been assigned a value     | undefined                        |
| symbol     | A primitive data type that represents a unique identifer                  | Symbol("mySymbol")               |


