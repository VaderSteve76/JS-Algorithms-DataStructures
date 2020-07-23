// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution?
// 4. Can the outputs be determined from the inputs? (do I have enough info??)
// 5. How should I label the important pieces of data?

// Write a function that takes two numbers and returns the sum
function add(a, b) {
  return a + b;
}

add(5, 5);

// Write a function that takes in a string and counts all chars

// make obj to return at end
// loop over str, for each char...
// if char is a num/letter AND is a key in obj, add +1 to count
// if char is a num/letter AND is not in obj, add it to obj and set value to 1
// if char is something else (space, period, etc.) do nothing
// return obj at end

function countChars(str) {
  var a = str.split("");
  var obj = {};
  a.forEach(function(s) {
    obj[s] = (obj[s] || 0) + 1;
  });
  return obj;
}
console.log(countChars("fishing"));


function charCount(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}


// Refactored example
function charCount(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}


function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
charCodeAt(0);


// Frequency Counter example
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for(let i=0; i<arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if(correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};


// refactored example
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};
  for(let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for(let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }
  for(let key in freqCounter1) {
    if(!(key ** 2 in freqCounter2)) {
      return false;
    }
    if(freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
}


function validAnagram(first, second) {
  if(first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for(let i=0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  for(let i=0; i < second.length; i++) {
    let letter = second[i];
    if(!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -=1;
    }
  }
  return true;
};


function sumZero1(arr) {
  for(let i=0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};
sumZero1([-4,-3,-2,-1,0,1,2,5]);


function sumZero2(arr) {
  let left = 0;
  let right = arr.length -1;
  while(left < right) {
    let sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left], arr[right]];
    } else if(sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};
sumZero2([-4,-3,-2,1-,0,1,2,3,10]);


function countUniqueValues(arr) {
  var i = 0;
  for(var j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    // console.log(1,j);
  }
  return i + 1;
};
countUniqueValues([1,1,2,2,3,3,4,4,5,5,6,6,7,7]);


function maxSubarraySum(arr, num) {
  if(num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for(let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for(let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if(temp > max) {
      max = temp;
    }
    // console.log(temp,max);
  }
  return max;
};
maxSubarraySum([2,6,9,2,1,8,5,6,3], 3); 


// Refactored function
function maxSubarraySum(arr,num) {
  let maxSum = ;
  let tempSum = 0;
  if(arr.length < num) return null; 
  for(let i =0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for(let i =num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};
maxSubarraySum([2,6,9,2,1,8,5,6,3], 3); // 