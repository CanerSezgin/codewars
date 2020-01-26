const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1);

/**
 * This function can be used for "toBe" tests
 * @param {Function} fn 
 * @param {any} input 
 * @param {any} expected 
 */
export const performTest = (fn, input, expected) => {
  const desc = {
    input: (typeof input === 'string' && input.length === 0) ? `""` : input,
    expected: (typeof input === 'string' && input.length === 0) ? `""` : input,
  }

  it(`${desc.input} --> ${desc.expected}`, () => {
    expect(fn(input)).toBe(expected);
  });
}

/**
 * Creates Test Suites from TestCases
 * @param {Function} fn 
 * @param {TestCases} testCases 
 */
export const getTestDescribe = (fn, testCases) => {
  Object.keys(testCases).forEach(testSuite => {
    describe(`${capitalize(testSuite)} Tests`, () => {
      testCases[testSuite].forEach(test => {
        performTest(fn, test.data[0], test.data[1])
      });
    });
  });
} 

export class TestCases {
  /**
   * @param {Object.<string, TestData[]>} cases
   */
  constructor(cases) {
    if(cases.constructor.name === 'Object') {
      Object.keys(cases).forEach(extra => {
        if(Array.isArray(cases[extra])) {
          this[extra] = cases[extra]
        }
      });
    }
  }
}

export class TestData {
  constructor(input, expected){
    this.data = [input, expected]
  }
}