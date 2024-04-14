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


// 11d, 11e, 11f, 11g, 11h

for(let i = 0; i < 10; i = i + 2) {
    console.log(i + ' ');
}

for(let i = 5; i > 0; i--) {
    console.log(i);
}


let i = 0;
while(i < 10) {
    console.log(i);
    i += 2;
}



let x = 5;
while(x > 0) {
    console.log(x);
    x--;
}


function addOne(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 1;
        
    }
    return arr;
}



const arr1 = [10,20,30];
const arr2 = [-2,-1,0,99];

addOne(arr1);
addOne(arr2);

console.log(arr1);
console.log(arr2);








