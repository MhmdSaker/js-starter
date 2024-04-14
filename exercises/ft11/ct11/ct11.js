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


// 11i, 11j, 11k

function addNum(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + num;
    }
    return arr;
}


const arrNum = [1, 2, 3];
addNum(arrNum, 3);
console.log(arrNum);


function addArray(arr1,arr2) {
    if(arr1.length != arr2.length) {
        return 0;
    }

    const arr3 = [];
    for(let i = 0; i < arr1.length; i++) {
        
        arr3[i] = arr1[i] + arr2[i];
    }

    return arr3;

}

const add1 = [10, 20, 30]
const add2 = [30, 35, 40]


console.log(addArray(add1, add2));








