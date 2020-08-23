// Insertion Sort
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal;
  }
  return arr;
};

insertionSort([2,1,9,76,4]);


// insertionSort with while loop
function insertionSort(arr) {
  let n = arr.length;
      for (let i = 1; i < n; i++) {
          let current = arr[i];
          let j = i-1; 
          while ((j > -1) && (current < arr[j])) {
              arr[j+1] = arr[j];
              j--;
          }
          arr[j+1] = current;
      }
  return arr;
};

insertionSort([2,1,9,76,4]);


// insertionSort with swap method
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentIndex = i
    while (currentIndex > 0 && arr[currentIndex - 1] > arr[currentIndex]) {
      let temp = arr[currentIndex]
      arr[currentIndex] = arr[currentIndex - 1]
      arr[currentIndex - 1] = temp
      currentIndex--
    }
  }
};

insertionSort([2,1,9,76,4]);