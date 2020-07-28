// Simple example
function countDown(num) {
  if(num <= 0) {
    console.log("All done!");
    return
  }
  console.log(num);
  num--;
  countDown(num);
};
countDown(5);


function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(num-1);
};

sumRange(3);
// How the function calls
  // return 3 + sumRange(2)
  //             return 2 + sumRange(1)
  //                         return 1


// Factorial function
// 4 * 3 * 2 * 1 || 6 * 5 * 4 * 3 * 2 * 1
function factorial(num) {
  let total = 1;
  for(let i =num; i > 1; i--) {
    total *= i;
  }
  return total;
};
factorial(5); // 5 * 4 * 3 * 2 * 1 = 120


// Factorial recursion example
function factorial(num) {
  if(num === 1) return 1;
  return num * factorial(num-1);
};
factorial(5); // 5 * 4 * 3 * 2 * 1 = 120


// Helper Method Recursion
function outer(input) {
  var outerScopedVariable = []

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--)
  }

  helper(input)

  return outerScopedVariable;

};

// Another example of helper method
function collectOddValues(arr) {

  let result = [];

  function helper(helperInput) {
    if(helperInput.length === 0) {
      return;
    }

    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
  }

  helper(arr);

  return result;

};


// True example of helper method
function collectOddValues(arr) {

  let result = [];

  function helper(helperInput) {
    if(helperInput.length === 0) {
      return;
    }

    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
    helper(helperInput.sllice(1))
  }

  helper(arr);

  return result;

};

collectOddValues([1,2,3,4,5,6,7,8,9]);