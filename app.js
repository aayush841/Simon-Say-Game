let gameSeq = [];
let userSeq = [];
let highest = 0;

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;
let h2 = document.querySelector('h2');

document.addEventListener("keypress",function (){
    if(started == false){
        console.log("Game has Started");
        started = true;

        levelUp();
    }
});

function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash")
    },250);   
}


function levelUp(){
    userSeq =[];
    level++;
    
    //random button

    let randIdx = Math.floor(Math.random()*4);
    let color = btns[randIdx];
    let randBtn = document.querySelector(`.${color}`);

    gameSeq.push(color);
    console.log(gameSeq);

    highest = Math.max(highest,level);
    h2.innerHTML = `Level ${level}</br> The highest score is ${highest}`; 
    flashBtn(randBtn);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function (){
        btn.classList.remove("userFlash");
    },250)
}

function restart(){
       h2.innerHTML = `Sorry Try again! Your score was <b>${level}</b> </br> Press any key to continue.` ;

        level = 0;
        started = false;
        userSeq = [];
        gameSeq = [];
        let body = document.querySelector("body")
        body.classList.add("restart");
        setTimeout(function (){
            body.classList.remove("restart");
        },250);

}

function checkAns(idx){
    
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }       
    }else{
        restart();       
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


