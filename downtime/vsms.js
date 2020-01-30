function sumZero(arr) {
    let left = 0;
    let right = arr.length-1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if(sum===0){
            return[arr[left],arr[right]];
        } else if (sum> 0) {
            right--;
        } else {
            left++;
        }
    }
}

function countUnique(arr) {
    arr.sort();
    count = 0;
    unique = 0;
    for(i = 0; i < arr.length; i++) {
        if (arr[i] === unique) {
            count++;
            unique++;
        }
    return count;
    }
}


function maxSubarrySum(arr,num){
    if(num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i< arr.length - num + 1; i++){
        temp = 0;
        for(let j = 0; j < num. j++;){
            temp += arr[i + j];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
}
function search(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

function power(base,expo){
    if (expo === 0) return 1;
    return base =  base * power(base,expo-1);
}

console.log(power(2,4));

function factorial(num) {
    if ( num === 0) return 1;

    return num = num * factorial(num-1);
}
console.log(factorial(4));


function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(x){
    if (x === 0 ) return 0;
    return x + recursiveRange(x-1);
 }

 function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}