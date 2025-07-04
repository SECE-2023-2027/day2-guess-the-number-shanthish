let quesmark=document.querySelector(".questionmark");
let guessing=document.querySelector("#generating");
let score=document.querySelector("#score");
console.log((score.textContent))
let highscore=document.querySelector("#highscore");
let num=document.querySelector("input");
let btn=document.querySelector(".check")
let reset=document.querySelector(".again");

let ans=Math.floor(Math.random()*20)+1;
console.log(ans)

const checkfunc = ()=>{
    if((score.textContent)==1){
        document.querySelector("body").style.backgroundColor="Red";
         guessing.textContent="Your chances got overed";
    }
    if(ans==num.value){
        guessing.textContent="Correct";
        document.querySelector("body").style.backgroundColor="green";
        quesmark.textContent=ans;
        highscore.textContent=(Math.max((highscore.textContent),(score.textContent)));
        num.remove();
    }
    else if (ans<num.value){
     guessing.textContent="Too high"; 
     (score.textContent)--;
    }
    else if(ans>num.value){
     guessing.textContent="Too Low";
     (score.textContent)--;
    }
}



btn.addEventListener("click",checkfunc);
reset.addEventListener("click",()=>{
    ans=Math.floor(Math.random()*20)+1;
    guessing.textContent="Start Generating";
    score.textContent=20;
    quesmark.textContent="?";
    document.querySelector("body").style.backgroundColor="white";
    // document.querySelector("body").appendChild("num")
    document.createElement("input");
    
})