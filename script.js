console.log("Tic tac toe");
let turn = "X";
let gameOver = false;

const changeTurn = () => {
    if(turn==="X"){
        turn = "O";
    }
    else{
        turn = "X";
    }
}

const checkWin = ()=>{
    let boxTexts = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2,3,3,0],
        [3,4,5,3,11,0],
        [6,7,8,3,18,0],
        [0,3,6,-4.5,10,90],
        [1,4,7,3,10,90],
        [2,5,8,10,10,90],
        [0,4,8,3,11,45],
        [2,4,6,2,11,135]
    ];
    wins.forEach((e)=>{
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText)&&(boxTexts[e[1]].innerText === boxTexts[e[2]].innerText)&&(boxTexts[e[0]].innerText!=="")){
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
            gameOver = true;
            document.querySelector(".line").style.width = "29vh";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            changeTurn();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
            }
        }
    })
})

let reset = document.querySelector("#reset");
reset.addEventListener('click', ()=>{
    let boxes = document.getElementsByClassName("box");
    gameOver = false;
    turn = "X";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
    Array.from(boxes).forEach(element=>{
        let boxText = element.querySelector(".boxText");
        boxText.innerText = "";
    })
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
    document.querySelector(".line").style.width = "0vh";
})