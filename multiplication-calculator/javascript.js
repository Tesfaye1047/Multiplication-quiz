const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const scoreEl = document.getElementById('score');
const questionEl = document.getElementById('question');
const inputEl = document.getElementById('input');
const buttonEl = document.getElementById('btn');
const formEl = document.getElementById('form');

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

let correctAns = num1 * num2;
let score = localStorage.getItem('score');
if(!score) {
    score = 0;
}
scoreEl.innerText = `score: ${score}`

formEl.addEventListener('submit', (e)=>{
    let userAns = +inputEl.value;
    if(userAns === correctAns){
        score++;
        //console.log(score);
    }else {
        score--;
        //console.log(score);
    }
    updateLocalStorage();
    //createItem();
})

function updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(score));
    console.log(typeof score);
}