snail = function(array) {
    let snailArr = []
    let n = array.length;

    if(n === 0) return snailArr

    let top = 0
    let bottom = n - 1
    let left = 0
    let right = n - 1


    while(top <= bottom && left <= right) {
      // 0 , 1, 2 
      for(let i = left; i <= right; i++) {
        snailArr.push(array[top][i])
      }
      top++
      // [0,0], [0,1], [0,2]
      // top = 1

      // 1, 2
      for(let i = top; i <= bottom; i++) {
        snailArr.push(array[i][right])
      }
      right--
      // [1,2], [2,2]
      // right = 1

      if(top <= bottom) {
        // 1, 0
        for(let i = right; i >= left; i--) {
          snailArr.push(array[bottom][i])

        }
        bottom--
      }

      if (left <= right) {

        for (let i = bottom; i >= top; i--) {
            snailArr.push(array[i][left]);
        }
        left++;
    }

  }

  return snailArr

}






console.log(snail([[1,2,3],
  [4,5,6],
  [7,8,9]]))