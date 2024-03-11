
// 9a, 9b, 9c

let btn1 = document.querySelector('.btn-1');
let btn1T = document.querySelector('.btn-1').innerHTML;
console.log(btn1)
console.log(btn1T)

let btn2 = document.querySelector('.btn-2');

function changeBtn() {
    if(btn2.innerHTML === '9b') {
        btn2.innerHTML = '9b done!';
    }else {
        btn2.innerHTML = '9b';
    }

}

let para = document.querySelector('.para');


function btn(test) {
    if(test === 'tail1') {
        tail = document.querySelector('.tails');
        para.innerHTML = `You Chose: ${tail.innerHTML}`;
    } else {
        head = document.querySelector('.heads');
        para.innerHTML = `You Chose: ${head.innerHTML}`;
    }

}



