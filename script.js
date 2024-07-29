let game = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let test = false;
let scorsx=0;
let scorsy=0;


function doz(choice) {
    let x = 0;
    let o = 0;
    let number=choice+1;
    let button = document.getElementById("btn" +number);
  

  if (!test) {
        if (game[choice] == 0) {
            game[choice] = "o";
            button.innerHTML = "o";
            button.style.color="rgb(255, 0, 172)";
            test = true;
            document.getElementById("s1").innerHTML="Turn Player X";

        }
        else {
            alert("choiced")
        }
    }
    else if (test) {
        if (game[choice] == 0) {
            game[choice] = "x";
            button.innerHTML = "x";
            button.style.color="rgb(242, 157, 15)";
            test = false;
            document.getElementById("s1").innerHTML="Turn Player O";

        }
        else {
            alert("choiced")
        }

    }
    let temp=false;
    if(game[0]=="x"&&game[1]=="x"&&game[2]=="x"){
        alert("Player X Won")
        scorsx++;
        temp=true
    }
   else if(game[0]=="o"&&game[1]=="o"&&game[2]=="o"){
        alert("Player O Won")
scorsy++;
        temp=true
    }
    else if(game[2]=="o"&&game[4]=="o"&&game[6]=="o"){
        alert("Player O Won")
scorsy++;
        temp=true
    }
    else if(game[2]=="x"&&game[4]=="x"&&game[6]=="x"){
        alert("Player x Won")
scorsy++;
        temp=true
    }
    else if(game[0]=="o"&&game[4]=="o"&&game[8]=="o"){
        alert("Player O Won")
        scorsy++;
        temp=true
    }
    else if(game[0]=="x"&&game[4]=="x"&&game[8]=="x"){
        alert("Player X Won")
        scorsx++;

        temp=true
    }
    else if(game[0]=="x"&&game[4]=="x"&&game[6]=="x"){
        alert("Player X Won")
        scorsx++;
        temp=true
    }
    else if(game[0]=="o"&&game[4]=="o"&&game[6]=="o"){
        alert("Player O Won")
        scorsy++;
    temp=true
    }
    else if(game[0]=="o"&&game[3]=="o"&&game[6]=="o"){
    scorsy++;
    temp=true

    alert("Player O Won")
    }
    else if(game[0]=="x"&&game[3]=="x"&&game[6]=="x"){
        scorsx++;
        temp=true

        alert("Player X Won")
    }
    else if(game[1]=="x"&&game[4]=="x"&&game[7]=="x"){
        scorsx++;
        temp=true

        alert("Player X Won")
    }
    else if(game[1]=="o"&&game[4]=="o"&&game[7]=="o"){
        scorsy++;
        temp=true
        alert("Player O Won")
    }
    else if(game[2]=="x"&&game[5]=="x"&&game[8]=="x"){
        alert("Player X Won")
        scorsx++;
        temp=true

    }
    else if(game[2]=="o"&&game[5]=="o"&&game[8]=="o"){
        scorsy++;
        temp=true
        alert("Player O Won")
    }
    else if(game[3]=="x"&&game[4]=="x"&&game[5]=="x"){
        alert("Player X Won")
        temp=true
        scorsx++;

    }
    else if(game[3]=="o"&&game[4]=="o"&&game[5]=="o"){
        alert("Player O Won")
        temp=true
        scorsy++;

    }
    else if(game[6]=="o"&&game[7]=="o"&&game[8]=="o"){
        alert("Player O Won")
        scorsy++;
        temp=true

    }
     else if(game[6]=="x"&&game[7]=="x"&&game[8]=="x"){
        scorsx++;
        alert("Player X Won")
        temp=true
    }

    if(temp){
        for(let i=0;i<9;i++){
            let counter=i+1;
            let button = document.getElementById("btn" +counter);
    button.innerHTML=counter
    button.style.color="white";
    game[i]=0;
        }
    }
    
    document.getElementById("s2").innerText="Player X =    "+scorsx + " Player Y = "+scorsy ;

}
