var foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
//slice
var modifiedFood = foods.slice(1,4);
console.log(modifiedFood);

//splice
modifiedFood = [...foods]
modifiedFood.splice(1,0,"noodles", "icecream");
console.log(modifiedFood);

//filter
function isEven(numberArray) {
    return numberArray.filter(arrayElement => arrayElement%2==0);
}

//filter
function isPrime(numberArray) {
    return numberArray.filter((arrayElement) => {
    for(var i = 2 ;i < (arrayElement/2).toFixed(0) ; i++){
        if(arrayElement % i === 0) return false;
    }
    return true;
    });
}

//Reject
function reject() {   
}
var numberArray = [12,324,213,4,2,3,45,4234];
console.log(isPrime(numberArray),isEven(numberArray));

//lambda
function isEvenLambda(numberArray) {
    return numberArray.filter(arrayElement => arrayElement%2==0);
}
console.log(isEvenLambda([2,4]));

//map
function findSquareOfNumbers(myArr){
    return myArr.map(arrayElement=> arrayElement*2);
}
 var myArr = [11, 34, 20, 5, 53, 16];
 console.log(findSquareOfNumbers(myArr));


//Reduce
function multiply(myArr){
    return myArr.reduce(function(acc,item){
        return acc*item;
    },1)
}
console.log(multiply([2,2,4]));
