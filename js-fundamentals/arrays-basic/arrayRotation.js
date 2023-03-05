function arrayRotation(arr, rotations) {
    let newArr = arr;
    for (let i = 0; i < rotations; i++) {
        let elementMoved = arr[0];
        newArr.shift();
        newArr[newArr.length] = elementMoved;
    }

    console.log(newArr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)