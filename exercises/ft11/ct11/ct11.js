// base function to return index of last item array
function returnLastIdx(arr) {
    return arr.length - 1;
}
//


// 11a
const nums = [10,20,30]
nums[2] = 99;
console.log(nums);




// 11b
function getLastVal(nums) {
    console.log(nums[nums.length - 1])
    // last value = n - 1
}
getLastVal(nums);




// 11c
function arraySwap(nums) {
    let x = nums[0];
    nums[0] = nums[returnLastIdx(nums)]
    nums[returnLastIdx(nums)] = x;
    console.log(nums);
}

const swap = [1,20,22,24,5];
const strs = ['hello', 'hi', 'why'];
arraySwap(swap)
arraySwap(strs)








