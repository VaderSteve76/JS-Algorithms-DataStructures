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
};
console.log(countChars("fishing"));


function charCount(str) {
  var result = {};
  for(var i=0; i<str.length; i++) {
    var char = str[i].toLowerCase();
    if(result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
};