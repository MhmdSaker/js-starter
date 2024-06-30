/*

function order(words){
    words = words.split(' ')
    let temp = ''
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            if(words[i][j] >= 1 && words[i][j] <= 9){
                parseInt(words[i][j])
                if(words[i][j] < words[i - 1]){
                    temp = words[i - 1]
                    words[i - 1] = words[i]
                    words[i] = temp
            }
        }
    }

    return words
  }

}

  console.log(order("is2 Thi1s T4est 3a")) // worked
  console.log(order("4of Fo1r pe6ople g3ood th5e the2"))   // did not work


  */




    function order(words) {
        words = words.split(' ');

        for(let i = 1; i < words.length; i++) {
            for(let j = i; j > 0; j--) {
                const currNum = parseInt(words[j].match(/\d/)[0]);
                const prevNum = parseInt(words[j - 1].match(/\d/)[0]);


                if (currNum < prevNum) {
                    let temp = words[j];
                    words[j] = words[j - 1];
                    words[j - 1] = temp;
                } else {
                    // If no swap is needed, break out of the inner loop
                    break;
                }
            }



        }


        return words.join(' ')
    }


    function order1(words) {
        words = words.split(' ');
    
        words.sort((a, b) => {
            const numA = a.match(/\d/);
            const numB = b.match(/\d/);
            return numA - numB;
        });
    
        return words.join(' ');
    }
    



  console.log(order("is2 Thi1s T4est 3a")) 
  console.log(order("4of Fo1r pe6ople g3ood th5e the2"))   
  console.log(order1("is2 Thi1s T4est 3a")) 
  console.log(order1("4of Fo1r pe6ople g3ood th5e the2"))   