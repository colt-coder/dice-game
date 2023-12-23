var dice1 = Math.ceil(Math.random()*6);
var dice2 = Math.ceil(Math.random()*6);

if (dice1===1) {

} else if (dice1===2) {
    document.querySelector(".dice1").innerHTML = "";
} else if (dice1===3) {
    document.querySelector(".dice1").innerHTML = "";
} else if (dice1===4) {
    document.querySelector(".dice1").innerHTML = "";
} else if (dice1===5) {
    document.querySelector(".dice1").innerHTML = "";
} else if (dice1===6) {
    document.querySelector(".dice1").innerHTML = "";
}

if (dice2===1) {
    document.querySelector(".dice1").innerHTML = "";
} else if (dice2===2) {
    document.querySelector(".dice1").innerHTML = "";
} else if (dice2===3) {
    document.querySelector(".dice1").innerHTML = "";
} else if (dice2===4) {
    document.querySelector(".dice1").innerHTML = "";
} else if (dice2===5) {
    document.querySelector(".dice1").innerHTML = "";
} else if (dice2===6) {
    document.querySelector(".dice1").innerHTML = "";
}


if (dice1>dice2) {
    document.querySelector("p").innerHTML = "Player 1 is the winner <3";
} else if (dice2>dice1) {
    document.querySelector("p").innerHTML = "Player 2 is the winner <3";
} else {
    document.querySelector("p").innerHTML = "Draw...Re-roll the dice"
}