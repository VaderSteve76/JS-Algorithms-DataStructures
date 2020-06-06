// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution?
// 4. Can the outputs be determined from the inputs? (do I have enough info??)
// 5. How should I label the important pieces of data?


// Write a function that takes two numbers and returns the sum
function add(a, b) {
  return a + b;
};

add(5, 5);


// Write a function that takes in a string and counts all chars
function countChars(str) {
  var a = str.split("");
  var obj = {};
  a.forEach(function(s) {
    obj[s] = (obj[s] || 0) + 1;
  });
  return obj;
};
console.log(countChars("fishing"));