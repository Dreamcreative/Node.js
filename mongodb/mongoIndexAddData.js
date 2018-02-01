function getRandom(min ,max){
    let range = max - min ;
    let rand =Math.random();
    return ( min+Math.round( rand*range))
}