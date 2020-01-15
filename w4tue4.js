function cariModus(arr) {
  // you can only write your code here!
  var counter = [
      [arr[0], 1]
  ]
  var currentModus = [counter[0][0], counter[0][1]];
  var result = 0;

  //counting
  for (var i = 1; i < arr.length; i++){
    var flag = false;
    for (var j = 0; j < counter.length; j++){
        if (arr[i] === counter[j][0]){
          counter[j][1] += 1;
          flag = true;
        }
    }
    if (flag === false) {
    counter.push ([arr[i], 1])
    }
  }
  counter
  currentModus
//determining modus
  for (var k = 0; k < counter.length; k++){
      if (counter[k][1] > currentModus[1]) {
        currentModus = [counter[k][0], counter[k][1]];
        result = currentModus[0];    
      }
  }
  if (currentModus[1] === 1){
    result += -1;
  }
  if (currentModus[1] === arr.length){
      result -= currentModus[0]+1; 
  }
  return result
}

// TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1    