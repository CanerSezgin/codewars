import assert from "assert"
const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1);

/**
 * @param {Function} fn 
 * @param {TestData} testData 
 */
export const performTest = (fn, testData) => {
  assert.equal(
    fn.apply(null, testData.input), testData.expected
  )
}

/**
 * Creates Test Suites from TestCases
 * @param {Function} fn 
 * @param {Object.<string, TestData[]>}  testCases 
 */
export const getTestDescribe = (fn, testCases) => {
  Object.keys(testCases).forEach(testSuite => {
    describe(`${capitalize(testSuite)} Tests`, () => {
      testCases[testSuite].forEach(test => {
        it(`${test.input} --> ${test.expected}`, () => performTest(fn, test));
      });
    });
  });
} 

export class TestData {
  /**
   * 
   * @param {[]} input 
   * @param {*} expected 
   */
  constructor(input, expected){
    this.input = input
    this.expected = expected
  }
}