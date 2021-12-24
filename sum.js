function sum(array){
    let c = 0;
    for (let i = 1; i < array.length; i++) {
        if (i % 2 !== 0) {
            c = array[i] +c
        }
        
    }
    return c
}

console.log(sum([1,98,78,56,0,24,9,65,98,2,1,5]))