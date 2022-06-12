/* X=> <i class="fas fa-times"></i> */
/* O=> <i class="fas fa-circle-notch"></i> */

let mainPage = document.querySelector("#mainPage");
let select = document.querySelectorAll(".select");

let gamePage = document.querySelector("#gamePage");
let showChange = document.querySelector("#showChange");
let box = document.querySelectorAll(".box");

let win = document.querySelector("#win");
let nameWinner = document.querySelector("#nameWinner");
let quit = document.querySelector("#quit");


let changeTurn = null;
select.forEach(chooseNow => {
    chooseNow.addEventListener("click", () => {
        if (chooseNow.id === "playerX") {
            changeTurn = false;
            // console.log(changeTurn);
            showChange.style.left = `0px`;
        } else {
            changeTurn = true;
            // console.log(changeTurn);
            showChange.style.left = `160px`;
        }
        mainPage.style.display = "none";
        gamePage.style.display = "block";

    })
});
box.forEach(items => {
    items.addEventListener("click", () => {
        if (changeTurn == false) {
            items.innerHTML = `<i class="fas fa-times"></i>`;
            items.id = "X";
            items.style.pointerEvents = "none";
            showChange.style.left = `160px`;

            changeTurn = true;

        } else {
            items.innerHTML = `<i class="fas fa-circle-notch"></i>`;
            items.id = "O";
            items.style.pointerEvents = "none";
            showChange.style.left = `0px`;

            changeTurn = false;

        }
        winningFunc();
        drawFunc();
    })
})
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let winningFunc = () => {
    for (let a = 0; a <= 7; a++) {
        let b = winningCombinations[a];
        // console.log(b);
        if(box[b[0]].id== "" || box[b[1]].id== "" || box[b[2]].id== "" ){
            continue;
        }
        else if(box[b[0]].id== "X" && box[b[1]].id== "X" && box[b[2]].id== "X"){
            // console.log("X is the Winner");
            nameWinner.innerText = `Player X Wins The Game!🥰`;
            gamePage.style.display = "none";
            win.style.display = "block";
        }
        else if(box[b[0]].id== "O" && box[b[1]].id== "O" && box[b[2]].id== "O"){
            console.log("O is the Winner");
            nameWinner.innerText = `Player O Wins The Game!🥰`;
            gamePage.style.display = "none";
            win.style.display = "block";
        }
        else{
            continue;
        }
    }
}

let drawFunc = ()=>{
    if(box[0].id!= "" && box[1].id!= "" &&
    box[2].id!= "" && box[3].id!= "" &&
    box[4].id!= "" && box[5].id!= "" &&
    box[6].id!= "" && box[7].id!= "" && box[8].id!= " "){
        nameWinner.innerText = `Match Draw!😉`;
            gamePage.style.display = "none";
            win.style.display = "block";
    }
}

quit.addEventListener("click" , ()=>{
    window.location.reload();
})