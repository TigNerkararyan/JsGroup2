function array(arr){
    let c;
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i+1]){
                c = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = c
            }
            
        }        
    }
    return arr
}

console.log(array([5,4,8,3,6,9]))