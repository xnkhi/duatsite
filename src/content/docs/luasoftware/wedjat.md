---
title: Wedjat
description: A programming language designed from scratch.
---

**Source Code:** [Github](https://github.com/mizosu97/wedjat)

Wedjat is an in-development command-based programming language written entirely from scratch, and written without an [Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree).

Wedjat was created as a learning experience, and is not a fully fledged programming language. Some conventional features of a programming language are currently missing, such as arrays or proper syntax error checking.


## Dependencies

- [Lua](https://www.lua.org/)


## Installation and Usage

1. Move the `wedjat-exec` script to any directory listed in your `$PATH` (such as /usr/bin)
2. Create and open a file with the file extension `.wdj`.
3. Write Wedjat code!
4. `wedjat-exec </path/to/file>`


## Wedjat's Basics

A program written in the Wedjat programming language is made up of a list of statements, each seperated by a semicolon ( ; ). Each statement contains a single command in the following format:
```
baseCommand <arg1> <arg2> <arg3> <etc...>;
```
Arguments passed to a Wedjat command can be of several different "data types":
1. Strings (str) - A string of characters. By default, any argument passed to a command is a string. String arguments containing spaces need to be wrapped in quotes ( " ).
    - Example: `myCommand mystring;`
    - Example: `myCommand "my string";`
2. Numbers (int) - An integer or floating point number. Number arguments are denoted by wrapping the argument in colons ( : ).
    - Example: `myCommand :420:;`
    - Example: `myCommand :12.34:;`
3. Booleans (bol) - A bool value, True or False. Argument is wrapped around single quotes ( ' ).
    - Example: `myCommand 'True';`
    - Example: `myCommand 'False';`
4. Blocks (blk) - A block of code / list of statements. Wedjat allows you to pass entire blocks of code as an argument, as well as store them in variables.
    - Example:
    ```
    myCommand {
        someOtherCommand randomargument;
        someOtherCommand :420:;
        someOtherCommand 'True';
    };
    ```


## Comments

Single-line comments in the Wedjat programming language are written as follows:
```
> Comment here
> Another comment
```

Comments start at the '>' symbol, and are terminated at the next newline. All comments are removed in the interpreter's internal rendition of the source text before the text is formatted into a list of statements.


## Variables

In Wedjat, variables must be declared with a name and specific type with the `define` command before they are used.
Data can be written to variables with the `set` command.
An argument passed to a command can be replaced with the contents of a variable by passing the name of the variable wrapped in parenthesis as the argument.

Take the following code as an example:
```
define myString str;
define myNumber int;
define myBool bol;
define myBlock blk;

set myString "My beautiful string.";
set myNumber :5:;
set myBool 'True';
set myBlock {
    write "hmmmm yes";
};

write (myString);
write (myNumber);
write (myBool);
```


## Input and Output

Wedjat has some very basic I/O commands.

1. `write <arg1> <arg2> <etc...>` - Writes to the standard output the string representation of any String, Number, or Boolean arguments passed to it. Supports `\n` and `\t` as escape characters for newline and tab.

2. `read <variable name>` - Reads string data from the standard input and writes the data to the given variable. Variable must be of type String.

Example code:
```
define userInput str;

write aaaaaaaaaa\n "f f f ff" :69: 'True';

read userInput;
write (userInput);
```


## Comparisons

Wedjat supports comparing between two values with the `if` command.

Comparison operators:
- `=` - Is equal to. (I think I forgot to implement a "not equal to" lol)
- `#` - Not.
- `&` - And.
- `/` - Or.

Example code:
```
define p int;
define q int;

set p :10:;
set q :100:;


if (p) = :1: {
	write "its 1";
} (p) = :5: {
	write "its 5";
} else {
	write idk;
};
```

The order of operations can be forced by passing a Left parenthesis and Right parenthesis, like in other languages. Otherwise, the order of operations follows the same order used in Lua.

Example code:
```
if "(" (p) = :10: / (p) = :5: ) & (q) = :100: {
	write "yes";
};
```

Notice how the Left parenthesis needs to be encased in quotes. If it wasn't, the interpreter would attempt to read the argument as a variable to insert.


## Loops

The Wedjat programming language supports two types of loops with the `for` and `repeat` commands.

To forcefully break out of a loop, use the `break` command.

### The for Command

The `for` command in Wedjat follows traditional for loop syntax. The following code snippet will loop through a set of numbers. It starts at one, finishes at 10, increments by 1 after each iteration, and stores the number value of the current iteration in the provided variable `i`:

```
define i int;

for i :1: :10: :1: {
	write \n (i);
};
```

### The repeat Command

The `repeat` command will forever repeat execution of the code block passed to it until broken by `break`:

```
> Only runs once, and does nothing, as the loop is broken immediately.
repeat {
    break;
};
```


## Mathematical Operations

Wedjat can perform mathematical operations with the all-encompassing `math` command. It expects an expression, in which each part of the expression is its own unique argument. It then stores the Number data in the variable provided.

Example code:
```
define result int;

math result :1: + :1:;
write (result);
```

Valid mathematical operators:
- `+` - Plus.
- `-` - Minus.
- `*` - Multiply.
- `/` - Divide.
- `^` - Power.
- `%` - Modulus.
- `(` - Left parenthesis (for forcing the order of operations.) (Must be encased in quotes.)
- `)` - Right parenthesis (for forcing the order of operations.)


## Misc Commands

- `sleep <number>` - Pauses the program for `<number>` amount of seconds.

- `type <string variable name> <argument>` - Writes the type (`int`, `str`, `bol`, `blk`) of the argument provided into the String variable provided.

- `strcat <string variable name> <string argument> <string argument>` - Concatenates all strings provided and stores the output in the String variable provided.

- `tostr <string variable name> <argument>` - Takes the string representation of the data supplied as the argument and writes it into the String variable provided.

- `toint <number variable name> <string argument>` - Converts a string representation of a number back into a real number and writes the data to the Number variable provided. (Useful in conjunction with `read`)

- `runblock <block argument>` - Runs the provided code block.

- `kill` - Kills the program.
