function smallestOfThreeNumbers(nums) {
  //Receives three integers and prints the smallest number
  let smallestNumber = +Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (smallestNumber > nums[i]) {
      smallestNumber = nums[i];
    }
  }
  console.log(smallestNumber);
}

smallestOfThreeNumbers([2, 5, 3]);
smallestOfThreeNumbers([600, 342, 123]);
smallestOfThreeNumbers([25, 21, 4]);
smallestOfThreeNumbers([2, 2, 2]);
