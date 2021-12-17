function hashvich(m,n,a){
    if(a == "*"){
        return m*n
    }else if(a == "/"){
        return m/n
    }
    if(a == "+"){
        return m+n
    }
    if(a=="-"){
        return m-n
    }
}

console.log(hashvich(5,4,"-"))