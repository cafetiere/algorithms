// we can do this in a way that does not require the use of array.length?
function findMaxSlidingWindowOld(nums, w) {
  if (nums.length <= w) {
    return [Math.max(...nums)];
  }

  let maxNums = [];

  for (let windowStart = 0; windowStart <= nums.length - w; windowStart++) {
    const windowEnd = windowStart + w;

    const window = nums.slice(windowStart, windowEnd);
    maxNums.push(Math.max(...window));
  }
  return maxNums;
}

function findMaxSlidingWindow(nums, windowSize) {
  let result = [],
    window = [];

  if (nums.length == 0) return result;

  if (windowSize > nums.length) windowSize = nums.length;

  // set up loop?? what is this doing exactly?
  for (let i = 0; i < windowSize; i++) {
    // If the current window length exists
    // And if the current number is greater than the previous one
    // pop the last valye
    while (window.length && nums[i] > nums[window[window.length - 1]]) {
      window.pop();
    }
    window.push(i);
  }

  result.push(nums[window[0]]);

  for (let i = windowSize; i < nums.length; i++) {
    // If current window length is defined
    // And first index in the window is less than or equal to the current index minus the window sizes
    // remove the first element from the window as we have calculated it
    if (window.length && window[0] <= i - windowSize) window.shift();

    while (window.length && nums[i] >= nums[window[window.length - 1]]) {
      window.pop();
    }

    window.push(i);
    result.push(nums[window[0]]);
  }

  return result;
}

// console.log("original implementation");
// console.log(findMaxSlidingWindowOld([10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67], 3));
// console.log("book implementation");
// console.log(findMaxSlidingWindow([10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67], 3));
// console.log("custom implementation");
// console.log(myFindMaxSlidingWindow([10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67], 3));
myFindMaxSlidingWindow(
  [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67],
  3
);
