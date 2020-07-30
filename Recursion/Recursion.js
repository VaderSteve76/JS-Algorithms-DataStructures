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

collectOddValues([1,2,3,4,5,6,7,8,9]); // 1,3,5,7,9


// Pure Recursion
function collectOddValues(arr) {
  let newArr = [];

  if(arr.length === 0) {
    return newArr;
  }

  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;

};

collectOddValues([1,2,3,4,5,6,7]); // 1,3,5,7


// Recursion exercises

// Power
function power(base, exponent) {
  if(exponent === 0) return 1;
  return base * power(base, exponent - 1);
};


// Factorial
function factorial(x) {
  if(x < 0) return 0;
  if(x <= 1) return 1;
  return x * factorial(x - 1);
};


// Product of Array
function productOfArray(arr) {
  if(arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
};


// Recursive Range
function recursiveRange(x) {
  if(x === 0) return 0;
  return x + recursiveRange(x - 1);
};


// Fibonacci
function fib(n) {
  if(n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};


// Plain Recursion
function reverse(str){
  if(str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
};


// isPalindrome
function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
  return false;
};


// someRecursive
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
};


// Flatten
function flatten(oldArr){
  var newArr = []
    for(var i = 0; i < oldArr.length; i++){
      if(Array.isArray(oldArr[i])){
          newArr = newArr.concat(flatten(oldArr[i]));
      } else {
          newArr.push(oldArr[i]);
      }
  } 
  return newArr;
};


// CapitalizeWords
function capitalizeWords(arr) {
  if(arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let res = capitalizeWords(arr.slice(0, -1));
  res.push(arr.slice(arr.length-1)[0].toUpperCase());
  return res;
};


// nestedEvenSum
function nestedEvenSum(obj, sum=0) {
  for(var key in obj) {
    if(typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if(typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
};


// capitalizeFirst
function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
};


// stringifyNumbers
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};


// collectStrings helper method recursion
function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
      for(var key in o) {
          if(typeof o[key] === 'string') {
              stringsArr.push(o[key]);
          }
          else if(typeof o[key] === 'object') {
              return gatherStrings(o[key]);
          }
      }
  }

  gatherStrings(obj);

  return stringsArr;
};


// collectStrings pure recursion
function collectStrings(obj) {
  var stringsArr = [];
  for(var key in obj) {
      if(typeof obj[key] === 'string') {
          stringsArr.push(obj[key]);
      }
      else if(typeof obj[key] === 'object') {
          stringsArr = stringsArr.concat(collectStrings(obj[key]));
      }
  }

  return stringsArr;
};