// this is a new way of declaring a function called ARROW FUNCTION

/*
  const functionName = (parameters) => {
  /// function body
  return value;
};

*/


const binaryArrayToNumber = arr => {
    str = arr.join('')
    number = 0
    

    for(let i = str.length - 1; i >= 0; i--) {
      if(str[i] == 1) {
        pow = (str.length - 1) - i 
        number += Math.pow(2, pow)
      }
    }



    return number;
  };


const binaryArrayToNumber2 = arr => parseInt(arr.join(''), 2)


/*parse-int does support some 
  base systems depending on second para*/ 



console.log(binaryArrayToNumber([1,0,1,1,1]))
console.log(binaryArrayToNumber2([1,0,1,1,1]))