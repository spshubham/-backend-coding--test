module.exports = {
  "env": {
    "node": true,
    "commonjs": true,
    "mocha": true,
    "mongo": true,
    "serviceworker": false,
    "browser": true,
    "atomtest": false,
    "es2021": true
  },
  // "plugins": [
  // 	"security"
  // ],
  "extends": [
    "eslint:recommended"
    // "plugin:security/recommended"
    // "google"
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    //require `super()` calls in constructors
    "constructor-super": 2, //default
    //to avoid infinite loop
    "for-direction": 2, //default
    //Enforces that a return statement is present in property getters.
    "getter-return": 2, //default
    //This rule aims to disallow async Promise executor functions.
    "no-async-promise-executor": 1,
    //Disallows await inside of loops.
    "no-await-in-loop": 1,
    //This rule disallows lexical declarations (let, const, function and class) in case/default clauses.
    "no-case-declarations": 2, //default
    //Disallows modifying variables of class declarations.
    "no-class-assign": 2, //Default
    //disallow comparing against -0
    "no-compare-neg-zero": 2, //default
    //disallow assignment operators in conditional expressions
    "no-cond-assign": 2, //default
    //disallow reassigning `const` variables
    "no-const-assign": 2, //default
    //Disallows constant expressions in conditions.
    "no-constant-condition": 2, //default
    //Control characters are special, invisible characters in the ASCII range 0-31. These characters are rarely used in JavaScript strings
    //so a regular expression containing these characters is most likely a mistake.
    "no-control-regex": 2,
    "no-debugger": 2, //default
    // Disallows deleting variables. Should be used for object properties only
    "no-delete-var": 2, //default
    //disallow duplicate arguments in `function` definitions
    "no-dupe-args": 2, //default
    //disallow duplicate class members
    "no-dupe-class-members": 2, //default
    //disallow duplicate conditions in if-else-if chains
    "no-dupe-else-if": 2, //default
    //disallow duplicate keys in object literals
    "no-dupe-keys": 2, //default
    //disallow duplicate case labels
    "no-duplicate-case": 2, //default
    //disallow empty block statements
    "no-empty": 2, //default
    //empty character classes in regular expressions do not match anything, they might be typing mistakes.
    "no-empty-character-class": 2, //default
    //Disallows empty destructuring patterns.
    "no-empty-pattern": 2, //default
    //disallow reassigning exceptions in `catch` clauses
    "no-ex-assign": 2, //default
    //disallow unnecessary boolean casts
    "no-extra-boolean-cast": 2, //default
    //disallow unnecessary semicolons
    "no-extra-semi": 2, //default
    //case statements without break keywrd
    "no-fallthrough": 2, //default
    //Disallows reassigning function declarations.
    "no-func-assign": 2, //default
    //disallow assignments to native objects or read-only global variables
    "no-global-assign": 2, //default
    "no-import-assign": 2, //disallow assigning to imported bindings
    //Disallows variable or function declarations in nested blocks.
    "no-inner-declarations": 2, //default
    "no-invalid-regexp": 2, //disallow invalid regular expression strings in `RegExp` constructors
    //disallow irregular whitespace
    "no-irregular-whitespace": 2, //default
    //This rule would disallow the use of number literals that immediately lose precision at runtime when converted to a JS Number due to 64-bit floating-point rounding.
    "no-loss-of-precision": 2, //default
    //no emoji in regex
    "no-misleading-character-class": 2, //default
    "no-mixed-spaces-and-tabs": 2, //default
    //Symbol is not intended to be used with the new operator, but to be called as a function.(TYPEERROR)
    "no-new-symbol": 2, //default
    //disallow `\8` and `\9` escape sequences in string literals
    "no-nonoctal-decimal-escape": 2,
    //disallow calling global object properties as functions
    "no-obj-calls": 2, //default
    //Octal literals are numerals that begin with a leading zero
    "no-octal": 2, //default
    //disallow calling some `Object.prototype` methods directly on objects
    "no-prototype-builtins": 2, //default
    "no-redeclare": 2, //default
    //disallow multiple spaces in regular expressions
    "no-regex-spaces": 1,
    //disallow assignments where both sides are exactly the same
    "no-self-assign": 2, //default
    "no-setter-return": 2, //default
    "no-shadow-restricted-names": 2, //default
    "no-this-before-super": 2, //default
    //disallow the use of undeclared variables unless mentioned in `/*global */` comments
    "no-undef": 2, //default
    //disallow confusing multiline expressions
    "no-unexpected-multiline": 2, //default
    //disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    "no-unreachable": 2,
    //disallow control flow statements in `finally` blocks
    //This rule disallows return, throw, break, and continue statements inside finally blocks.
    "no-unsafe-finally": 1,
    //	disallow negating the left operand of relational operators
    "no-unsafe-negation": 2, //default
    //disallow use of optional chaining in contexts where the `undefined` value is not allowed
    "no-unsafe-optional-chaining": 2, //default
    "no-unused-labels": 2, //default
    "no-unused-vars": 2, //default
    "no-useless-backreference": 2, //default
    "no-useless-catch": 2, //default
    "no-useless-escape": 1, //default
    "no-with": 2, //default
    //Disallows generator functions that do not have yield.
    "require-yield": 2, //default
    //require calls to `isNaN()` when checking for `NaN`
    "use-isnan": 2, //default
    "valid-typeof": 2,
    "comma-style": 2,
    "no-trailing-spaces": 2,
    "no-undefined": 1,
    "quotes": [2, "double"],
    "no-multi-spaces": 2,
    "key-spacing": 2,
    "max-depth": [2, 10],
    "array-bracket-spacing": 2, //enforce consistent spacing inside array brackets
    "arrow-parens": 2, //require parentheses around arrow function arguments
    "arrow-spacing": 2, //enforce consistent spacing before and after the arrow in arrow functions
    "block-scoped-var": 2,
    "camelcase": 0,
    "comma-dangle": 2, //disallow trailing commas
    "comma-spacing": 2, // enforce consistent spacing before and after commas
    "curly": 2,
    "default-case": 2,
    "func-call-spacing": 2,
    "func-style": [1, "expression"],
    "linebreak-style": 2,
    "max-len": [2, 180],
    "no-useless-call": 2, //disallow unnecessary calls to `.call()` and `.apply()`
    "no-useless-concat": 2, //disallow unnecessary concatenation of literals or template literals
    "indent": [2, 2],
    "semi": [2, "always"],
    "no-console": 2,
    "max-lines": [1, 1500],
    "max-lines-per-function": [1, 150]
  }
};
