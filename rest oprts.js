function show(...args) {
    let sum=0;
    for(let i of args){
        sum += i;
    }
    console.log("sum=" + sum);
}
show(1+2+5)