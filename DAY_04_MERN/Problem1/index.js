// Implement a series of functions that demonstrate closures to maintain state, such as a counter or a rate limiter.
//  Create a custom implementation of a commonly used higher-order function (e.g., a map,reducefunction) that mimics the behavior of the native implementation.


function counter() {
  let count = 0;

  function increment() {
      count++;
      return count;
  }

  return increment;
}

// Test the counter
const counterFunc = counter();
console.log(counterFunc()); 
console.log(counterFunc()); 
console.log(counterFunc()); 
