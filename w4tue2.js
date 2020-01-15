function fpb(angka1, angka2) {
  // you can only write your code here!
  //deciding highest number
  var high = 0;
  if (angka1 < angka2) {
      high += angka2;
  } else {
      high += angka1;
  };
  
  //making array of highest number
  function arrayMaking(num){
    var low = 1;
    var array = [];
    for (var i = low; i <= num; i++) {
      array.push(i);
    };
    return array
  };

  //checking if divisible
  var fpb = 0;
  var arrayToBeUsed = arrayMaking(high)
  for (var j = 0; j < arrayToBeUsed.length; j++){
    if (angka1 % arrayToBeUsed[j] === 0 && angka2 % arrayToBeUsed[j] === 0 && arrayToBeUsed[j] > fpb){
        fpb = arrayToBeUsed[j]
    }
  }
  return fpb
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1