 function addAndSubtract(arr) {
    let oldSum = 0;
    let newSum = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        oldSum += arr[i];
        
        if (arr[i] % 2 == 0) {
            newArr[i] = arr[i] + i;          
        } else {
            newArr[i] = arr[i] - i;
        }
        newSum += newArr[i];
    }
    console.log(newArr);
    console.log(oldSum);
    console.log(newSum);
 }


 addAndSubtract([5, 15, 23, 56, 35])
 addAndSubtract([-5, 11, 3, 0, 2])