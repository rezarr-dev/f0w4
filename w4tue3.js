function cariMedian(arr) {
  // you can only write your code here!
  var medianGenap1 = 0;
  var medianGenap2 = 0;
  var median = 0;
  for (var i = 0; i< arr.length; i++){
    if (arr.length % 2 === 0){
        medianGenap1 += arr[arr.length/2];
        medianGenap2 += arr[arr.length/2-1];
        let medianGenapSum = medianGenap1 + medianGenap2;
        median = medianGenapSum / 2;
    } else if (arr.length % 2 != 0) {
        median = arr[arr.length/2-0.5];
    };
    return median;
  };
};
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5