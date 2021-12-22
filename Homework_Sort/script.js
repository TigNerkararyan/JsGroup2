const arr = [7, 815 , 45 , 3];

arr.sort(function(a, b){
    if(a > b){
        return 1;
    }else if(a < b){
        return -1;
    }else{
        return 0;
    }
});

console.log(arr);
