
// we can do this in a way that does not require the use of array.length?
function findMaxSlidingWindow(nums, w) {
    if(nums.length <= w){
        return [Math.max(...nums)];
    }

    let maxNums = [];

    // this is of tim complexity of O(N)^2, not O(N)
    // how can we do this in O(N)
    for(let windowStart = 0; i <= (nums.length - w); i++){
        const windowEnd = windowStart + w;

        const window = nums.slice(windowStart, windowEnd);
        maxNums.push(Math.max(...window));
    }
    return maxNums;
}


console.log(findMaxSlidingWindow([1,2,3,4,5,6,7,8,9,10], 3))

