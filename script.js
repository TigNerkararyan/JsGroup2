function MinOrMax(array, payman){
let max = 0;
let min = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i]
    } else if (array[i] < min) {
        min = array[i]
    }
    
}
if (payman == "max") {
    return max
} else if (payman == "min") {
    return min
}
}

console.log(MinOrMax([1,98,78,56,0,24], "min"))