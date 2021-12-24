function reverse(array){
    let c = 0;
    for (let i = 0; i < array.length / 2; i++) {
       c = array[i];
       array[i] = array[array.length - i - 1]
       array[array.length - i - 1] = c
        
    }
    return array
}

console.log(reverse([1,98,78,56,0,24]))