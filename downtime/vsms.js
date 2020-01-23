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
        for(let j = 0; j < num. j++){
            temp += arr[i + j];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
}