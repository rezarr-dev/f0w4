function checkAB(num) {
  // you can only write your code here!
  var result = false;
  for (var i = 0, j = 4; j < num.length; i++, j++){
    if (num[i] === "a" && num[j] === "b" || num[i] === "b" && num[j] === "b"){
      result = true
    }
  }
  for (var i = 0, j = 3; j < num.length; i++, j++){
    if (num[i] === "a" && num[j] === "b" || num[i] === "b" && num[j] === "b"){
      result = true
    }
  }
  for (var i = 0, j = 2; j < num.length; i++, j++){
    if (num[i] === "a" && num[j] === "b" || num[i] === "b" && num[j] === "b"){
      result = true
    }
  }
  for (var i = 0, j = 1; j < num.length; i++, j++){
    if (num[i] === "a" && num[j] === "b" || num[i] === "b" && num[j] === "b"){
      result = true
    }
  }
  return result
}
  
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false