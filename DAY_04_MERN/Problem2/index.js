const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filterOdd(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(filterOdd(arr));

// Output:
// [ 1, 3, 5, 7, 9, 11 ]


function customMap(func, iterable) {
  const result = [];
  for (const item of iterable) {
      result.push(func(item));
  }
  return result;
}

// Test custom map function
function square(x) {
  return x * x;
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = customMap(square, numbers);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
