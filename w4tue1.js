function angkaPrima(angka) {
    // you can only write your code here!
    if (angka < 10) {
        var counter = 0;
        if (angka === 2 || angka === 3 || angka === 5 || angka === 7 ) {
            return 'true';
        } else {
            return 'false';
        };
    } else if (angka > 10) {
        if (angka % 2 === 0 || angka % 3 === 0 || angka % 5 === 0 || angka % 7 === 0) {
            return 'false';
        } else {
            return 'true';
        };
    };
};
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false