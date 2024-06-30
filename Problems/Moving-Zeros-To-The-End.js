// this don't work with consecutive zeros

/*function moveZeros(arr) {
  function recurseMove(arr, start) {
    for(let i = start; i < arr.length; i++) {
      if(arr[i] === 0 && arr[i + 1] != 0) {
        for(let j = i; j < arr.length; j++) {
          arr[j] = arr[j+1]
  
        }
        arr[arr.length - 1] = 0;
  
      }


  }





}






  


  return arr;
}

 */


function moveZeros(arr) {
  let nonZero = []
  let zeroCount = 0
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      zeroCount++
    }else {
      nonZero.push(arr[i])
    }
  }

  while(zeroCount > 0) {
    nonZero.push(0);
    zeroCount--;
  }



  return nonZero;
}



console.log(moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 9, 0, 0, 0, 0, 0, 0, 0]))
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))