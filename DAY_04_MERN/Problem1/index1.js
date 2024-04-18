// Rate Limiter using Closure:


function rateLimiter(maxRequests, timeFrame) {
  let requests = 0;
  let lastReset = Date.now();

  function limit() {
      const currentTime = Date.now();
      if (currentTime - lastReset > timeFrame) {
          requests = 0;
          lastReset = currentTime;
      }
      if (requests < maxRequests) {
          requests++;
          return true;
      } else {
          return false;
      }
  }

  return limit;
}

// Test the rate limite
console.log(limiter()); 
console.log(limiter()); 
console.log(limiter()); 
console.log(limiter()); 
