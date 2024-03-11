
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


// 9d, 9e, 9f



// without key events
let inp1 = document.querySelector('.inp-1');
let sub = document.querySelector('.sub');
let para2 = document.querySelector('.para-2')

inp1.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        console.log("clicked");
        let inpVal = inp1.value;
        para2.innerHTML = `Your name is: ${inpVal}`;
        
    }
});,

