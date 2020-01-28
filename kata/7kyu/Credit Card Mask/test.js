import { TestData, getTestDescribe } from "../../../lib/testHelper";
import { maskify } from "./solution";

// Here, you can create test cases
const example = [
  new TestData(["4556364607935616"], "############5616"),
  new TestData(["11111"], "#1111"),
  new TestData(["Skippy"], "##ippy"),
  new TestData(["1"], "1"),
  new TestData([""], "")
];
const random = [
  new TestData(["wlon"], "wlon"),
  new TestData(["8qszjh"], "##szjh"),
  new TestData(["7as8dw8mm"], "#####w8mm")
];
const lessThan4Char = [
  new TestData(["trl"], "trl"),
  new TestData(["60"], "60"),
  new TestData(["f"], "f")
]

getTestDescribe(maskify, {
  example,
  random,
  lessThan4Char,
});
