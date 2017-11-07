var arr = [5, 9, 3, 1, 2, 8, 4, 7, 6];
var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function bubbleSort(arr) {
    console.log('Unsorted array: ' + arr);
    var swapped;
    do {
        swapped = false;
        for (var i = arr.length-1; i > 0; i--) {
            if (arr[i] < arr[i - 1] ) {
                console.log('swap ' + arr[i - 1] + ' and ' + arr[i]);
                var temp = arr.splice(i - 1, 1);
                arr.splice(i, 0, temp);
                swapped = true;
            }
        }
    } while(swapped); 
    console.log('Sorted array: ' + arr);
    return arr;
}
bubbleSort(a);
bubbleSort(arr);
