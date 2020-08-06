function bubbleSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      if(arr[j] > arr[i]) {
        //Swap
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
};

bubbleSort([37,45,29,8]);


// bubbleSort starting at end of array
function BubbleSort(arr) {
  for(var i = arr.length; i > 0; i--) {
    for(var j = 0; j < i - 1; j++) {
      if(arr[j] > arr[i]) {
        //Swap
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
};

BubbleSort([37,45,29,8]);


// function that doesn't keep iterating after sort
function BubbleSort(arr) {
  var noSwaps;
  for(var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for(var j = 0; j < i - 1; j++) {
      if(arr[j] > arr[i]) {
        //Swap
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
};

BubbleSort([37,45,29,8]);