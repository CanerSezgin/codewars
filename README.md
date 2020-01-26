# Codewars Javascript Solutions
[![CodeWars](https://www.codewars.com/users/casedo/badges/large)](https://www.codewars.com/users/casedo)
## Features
✔ Javascript Kata Solutions <br>
✔ Best && Explanatory Solutions <br>
✔ Unit Tests with [Jest](https://jestjs.io/) <br>
✔ Beginner Friendly Simplified Automated Tests <br>
✔ Javascript ES6 with [Babel](https://babeljs.io/) <br>

## Installing & Run
**Install Modules**
`npm install`

**Run Tests**
`npm run test`

## Simplified Automated Tests
Thanks to this feature, one can easily create his/her own test without writing any code. No need to automated testing knowledge.  

Just follow the examples inside test files.

Test Example from [7kyu - Credit Card Mask](https://github.com/CanerSezgin/codewars/blob/master/kata/7kyu/Credit%20Card%20Mask/README.md)
```
// Here, you can create test cases
// TestData takes 2 params: input, expectedValue
// You can create your own custom arrays with TestData or edit existing one
const example = [
  new TestData("4556364607935616", "############5616"),
  new TestData("11111", "#1111"),
];
const random = [
  new TestData("wlon", "wlon"),
  new TestData("8qszjh", "##szjh"),
];
const lessThan4Char = [
  new TestData("trl", "trl"),
  new TestData("60", "60"),
]

// You just need to send function name that you want to test and testCases
getTestDescribe(fnName, new TestCases({
  example,
  random,
  lessThan4Char,
}));
```