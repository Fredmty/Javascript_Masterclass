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

function reverse(str) {
    if (str.length <= 1) return str;
    
    
    return reverse(str.slice(1)); + str[0];
}

console.log(reverse("banana"));

function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str(-1)) return isPalindrome(str.slice(1,-1));
    return false;
 
}

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }


  function linearSearch(num,array){

        for(let i = 0; i< array.length; i++) {
            if(num === array[i]) {
                return array[i];
            }
        }
        return -1;
  }

/*
  function binarySearch(array, num) {

    let left = array[0];
    let right = array.length-1;


    while(left < right) {
        let middle = (left - right)/2;
       
            if(num === middle) {
                return array[i];
            }
            if(num > middle) {
                left++;
            }
            if(num < right) {
                right--;
            }
        }
        return -1;
    }
*/

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

function strSearch(str,sub){
    let longer = str;

    let shorter = sub;

    let match = 0;

    for(let i = 0; i < longer.length; i++){
        for(let j = 0; j< shorter.length; j++){
            if(longer[i] !== shorter[i+j]){
                break;
            } else {
                if(j === shorter.length - 1) 
                match++;
            }

            }
        }
        return match;
    }

