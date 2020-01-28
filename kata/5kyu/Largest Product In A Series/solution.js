/*** Best Solution ***/
// O(n)
export function greatestProduct(input) {
  let max = 0;
  for ( let i = 4; i < input.length; i++ ) {
    max = Math.max( max, input[i-4]*input[i-3]*input[i-2]*input[i-1]*input[i] );
  }
  return max;
}

/*** More Explanatory Solution ***/
// O(n)
const SUB_ARRAY_LENGTH = 5
export function greatestProduct2(input) {
  // Convert String to Array for each digit
  const inputArray = input.split("");
  
  // Dynamic Stack for subArrays
  let stack = []
  let total = 1
  let max = 0
  // Multiply with current element & divided by currentIndex - 5
  for (let i = 0; i < inputArray.length; i++) {
    const currentDigit = parseInt(inputArray[i]);

    // If current element = 0; reset total and skip next element
    if(currentDigit === 0) {
      stack = []
      total = 1
    } else {

      // If stack isn't full yet
      if(stack.length === SUB_ARRAY_LENGTH){
        stack.shift()
        total /= parseInt(inputArray[i-5])
      }
      
      total *= currentDigit
      stack.push(currentDigit)
      
      // If newTotal > max && stack is full, update max 
      if(total > max & stack.length === SUB_ARRAY_LENGTH) max = total
    }
  }
  return max;
}
