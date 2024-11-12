let gameSeq = [];
let userSeq = [];

let btns = ["red","purple","green","yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function () {
    if( started == false)
        {
            console.log("started");
            started = true;
           
            levelUp();
        }
       
  
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");

    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function (){
        btn.classList.remove("userFlash");

    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText=`Level ${level}`;

    let rnIdx = Math.floor(Math.random() * 3);
    let rnColor = btns[rnIdx];
    let rnBtn = document.querySelector(`.${rnColor}`);
    gameSeq.push(rnColor);
    console.log(gameSeq);
   gameFlash(rnBtn);

}

function reset(){
    level= 0;
    started = false;
    gameSeq = [];
    userSeq = [];
}

function checkAns(idx){
    
     if(userSeq[idx] === gameSeq[idx])
        {
            if(userSeq.length === gameSeq.length)
                {
                    setTimeout(levelUp,1000);
                }
           
        }

        else{
           
        h2.innerHTML =`Game Over! Your score was <b>${level} </b> <br>Press any key to start .`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector('body').style.backgroundColor = "white";
          },1500);
          reset();
        }
       
    

}

function btnPress(){
    let btn = this;
    
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
   
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns)
    {
        btn.addEventListener("click",btnPress);
    }

