//return the total number of smiling faces in the array
function countSmileys(arr) {
    let regex = /^[:;][-~]?[)D]$/
    let counter = 0
    for(let i = 0; i < arr.length; i++) {
        if(regex.test(arr[i])) {
            counter++
        }



    }

    return counter
  }




  function countSmileys1(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
  }