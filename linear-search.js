var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function linearSearch(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        console.log(item + ' found in array ' + arr);
        break;
      }
    }
}
linearSearch(arr, 4);
