// Calculate the sum of all numbers from 1 up to (and including) some number n
// multiply, add, divide

// First solution
function addUpTo1(n) {
  let total = 0;
  for(let i=1; i<=n; i++) {
    total += i;
  }
  return total;
};
// output = 6 * (6 + 1) / 2
console.log(addUpTo1(6));


// Second solution
function addUpTo2() {
  // output = 6 * (6 + 1) / 2
  return n * (n + 1) / 2;
};
console.log(addUpTo1(6));


// Solution 1 using timer to show performance
function addUpToTimer1(n) {
  let total = 0;
  for(let i=1; i<=n; i++) {
    total += i;
  }
  return total;
};

let t1 = performance.now();
addUpToTimer1(1000000000);
let t2 = performance.now();
// ouptut = (t2 - t1) / 1000
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

// Solution 2 using timer to show performance
function addUpToTimer2(n) {
  return n * (n + 1) / 2;
};

let time1 = performance.now();
addUpToTimer2(1000000000);
let time2 = performance.now();
// output = (time2 - time1) / 1000
console.log(`Time elapsed: ${(time2 - time1) / 1000} seconds`);

// Example O(n)
function countUpAndDown(n) {
  console.log("Going Up!");
  for(let i=0; i<n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing Down...");
  for(let j = n - 1; j>=0; j--) {
    console.log(j);
  }
  console.log("Back Down. Bye!");
};

// Nested loop example for O(n * n)
function printAllPairs(n) {
  for(var i=0; i<n; i++) {
    for(var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

// O(n)
function logAtLeast5(n) {
  for(var i=1; i<=Math.max(5, n); i++) {
    console.log(i);
  }
};


function logAtMost5(n) {
  for(var i=1; i<=Math.min(5, n); i++) {
    console.log(i);
  }
};