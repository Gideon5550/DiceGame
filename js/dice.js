

function  DiceGame(){
    let RandomNumber1 = (Math.random()*6)+1;
    let RandomNumber2 = (Math.random()*6)+1;

    let Player1 = parseInt(RandomNumber1);
    let Player2 = parseInt(RandomNumber2);

    // console.log(Player1);
    // console.log(Player2);

    // document.querySelector("#player1").innerHTML = Player1;
    // document.querySelector("#player2").innerHTML = Player2;

    document.querySelector(".img1").src = `images/Dice${Player1}` + ".jpeg";
    document.querySelector(".img2").src = `images/Dice${Player2}` + ".jpeg";

    if(Player1 > Player2){
        document.getElementById("result").innerHTML = "PLAYER 1 WIN";
    }
    else if(Player2 > Player1){
        document.getElementById("result").innerHTML ="PLAYER 2 WIN";

    }else{
        document.getElementById("result").innerHTML = "PLAYER DRAW";
    }


    const back = document.getElementById("dicegame");
``

}

