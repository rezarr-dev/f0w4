function urutkanAbjad(str) {
  // you can only write your code here!
  var splittedStr = str.split('');
  var sortedArr = splittedStr.sort();
  var sortedStr = '';
  for (var i = 0; i < sortedArr.length; i++){
    sortedStr += sortedArr[i];
  }; 
  return sortedStr;
};
  
// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'