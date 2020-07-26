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