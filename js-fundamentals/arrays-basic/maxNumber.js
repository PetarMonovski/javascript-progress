function maxNumber(arr) {
    let topInteger = 0;
    let topArr = [];
    for (let i = 0; i < arr.length; i++) {
        topInteger = arr[i];
        let isTop = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (topInteger <= arr[j]) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topArr.push(topInteger);
        }
    }
    console.log(topArr.join(" "));
}
maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])