let userSeq=[];
let gameSeq=[];
let btns=["red","yellow","green","purple"];

let start=false;
let lvl=0;
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(start == false){
        console.log("game is started");
        start=true;
        levelUp();
    }
    

});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")

    },250);
}
function userFlash(btn){
    btn.classList.add("userFlesh");
    setTimeout(function(){
        btn.classList.remove("userFlesh")

    },250);
}

function levelUp(){
    userSeq=[];
    lvl++;
    h3.innerText=`Level ${lvl}`;

    let randIdx=Math.floor(Math.random() * 3)+1;
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}
function checkAns(idx){
if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
    }
} else {
    h3.innerHTML=`Game Over!Your Score was <b>${lvl}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";

    } ,150);
    reset();
}
}

function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}
let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
 }
 function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    lvl=0;

 }