function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var numDict = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var able = []
  for (var i = 0; i< numDict.length; i++){
      if (angka % numDict[i] === 0){
        able.push ([numDict[i], angka/numDict[i]])
      }
  }
  var digit = able[0][1];
  for (var j = 1; j < able.length; j++){
    if (able[j][1] < digit){
      digit = able[j][1];
    }
  }
  var counter = 0;
  var digitLength = 0;
  if (digit > 9){
    counter++
  }
  if (digit > 99){
    counter++
  }
  if (digit > 999){
    counter++
  }
  if (digit > 9999){
    counter++
  }
  digitLength = counter+2
  return digitLength
}

  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2