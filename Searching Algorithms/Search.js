function linearSearch(arr, val) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === val) {
      return i;
    }
  }
  return -1;
};

linearSearch([34,56,1,2], 1) // returns index of 2


// Binary Search
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
    if(elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] === elem) {
    return middle;
  }
  return -1;
};

binarySearch([2,5,6,9,13,15,28,30], 15);// [0,3,7]  [4,5,7]  5 = 15 value looking for