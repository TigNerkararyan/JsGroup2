function makeArray(number){
    const array = []
    for (let i = 0; i < number; i++) {
        array[i] = i + 1;
    }
    console.log(array)
    const primeArr = [];
    const primenum2 = [];
  for (let i = 0; i <= array.length; i++) {
    primenum2.push(true);
  }
  for (let i = 2; i <= array.length; i++) {
    if (primenum2[i]) {
      primeArr.push(i);
      for (let j = 1; i * j <= array.length; j++) {
        primenum2[i * j] = false;
      }
    }
  }
  console.log(primeArr.length)
  return primeArr

}

console.log(makeArray(100))