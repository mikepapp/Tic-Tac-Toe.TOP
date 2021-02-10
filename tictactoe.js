const cells=document.querySelectorAll(".cell");
const  CPUbtn=document.querySelector(".CPU");
const playerBtn=document.querySelector(".player");
const rbtn=document.querySelector(".restart");
const display=document.querySelector(".game-display");
var bestScore=0;
var cpuChoice=0;
var game=false;
var cpu=false;
var tie=false;
var player=false;
if(!game){
    display.textContent='Choose a game mode';

}
const gameBoard=( ()=> {
    let x=true;
    victory=false;
    Game = () => {
        cells.forEach((cell)=> {
            cell.addEventListener("click", function(){
                if(game){
                if(x && cell.textContent==='' && !victory){
                    cell.textContent="X";
                    checkForVictory();
                    checkForTie();
                    endTheGame();
                    x=false;
                    displayMessage();
                    


                }
                 if(!x && cell.textContent==='' && !victory && player){
                    cell.textContent='O';
                    checkForVictory();
                    checkForTie();
                    endTheGame();
                    x=true;
                    displayMessage();

                
                }
                if (cpu && !x) {
                    setTimeout( function () {
                    cpuChoice=cpuMakeMove()
                    while(cells[cpuChoice].textContent!==''){
                        cpuChoice=cpuMakeMove();



                        
                    }
                    cells[cpuChoice].textContent='O'
                    checkForVictory();
                    checkForTie();
                    endTheGame();
                    x=true;
                    displayMessage();},2000)

                 
                    

                    


                }
            }
            })
        })



    }
    checkForVictory = () => {
        if(x){
        if(cells[0].textContent==='X' && cells[1].textContent==='X' && cells[2].textContent==='X'|| cells[1].textContent==='X' && cells[4].textContent==='X' && cells[7].textContent==='X' || cells[0].textContent==='X' && cells[3].textContent==='X' && cells[6].textContent==='X'
        || cells[0].textContent==='X' && cells[4].textContent==='X' && cells[8].textContent==='X' || cells[2].textContent==='X' && cells[4].textContent==='X' && cells[6].textContent==='X' || cells[2].textContent==='X' && cells[5].textContent==='X' && cells[8].textContent==='X'|| cells[3].textContent==='X' && cells[4].textContent==='X' && cells[5].textContent==='X'
          || cells[6].textContent==='X' && cells[7].textContent==='X' && cells[8].textContent==='X'){
              victory=true;
              game=false;
              cpu=false;
              player=false;
       
          } }
          else if(!x){
            if(cells[0].textContent==='O' && cells[1].textContent==='O' && cells[2].textContent==='O'|| cells[1].textContent==='O' && cells[4].textContent==='0' && cells[7].textContent==='0' || cells[0].textContent==='O' && cells[3].textContent==='O' && cells[6].textContent==='O'
            || cells[0].textContent==='O' && cells[4].textContent==='O' && cells[8].textContent==='O' || cells[2].textContent==='O' && cells[4].textContent==='O' && cells[6].textContent==='O' || cells[2].textContent==='O' && cells[5].textContent==='O' && cells[8].textContent==='O'|| cells[3].textContent==='O' && cells[4].textContent==='O' && cells[5].textContent==='O'
              || cells[6].textContent==='O' && cells[7].textContent==='O' && cells[8].textContent==='O'){
                  victory=true;
                  game=false;
                  cpu=false;
                  player=false;
        }

          }

        


    }
    endTheGame=()=>{
        if(victory && x){
            display.textContent='Player 1 wins!!';
            
        }
        else if(victory && !x){
            display.textContent='Player 2 wins!!';

        }
    }

    checkForTie = () => {
        let counter=0;
        for(let i=0;i<cells.length;i++){
            if(cells[i].textContent!==''){
                counter++;


            }
        }
        if(counter===cells.length && !victory ){
            display.textContent='This is a TIE!!';
            tie=true;
            game=false;

        }
    }

    displayMessage = () => {
        if(!x && !victory && !tie){
            display.textContent='player O playing ';

        }
        else if(x && !victory && !tie){
            display.textContent='player X playing';

        }

        
    }

    cpuMakeMove= () => {
        
        return Math.floor(Math.random() * Math.floor(9));


    }

    cpuCheckMove = () => {
        
    }
    
    return {Game};
})();



rbtn.addEventListener("click", function(){
    cells.forEach((cell) => {
        cell.textContent='';
        
    })
    display.textContent='';
    victory=false;
    x=true;
    player=false;
    cpu=false;
    tie=false;
    display.textContent="Game has been restarted!";
    setTimeout(function(){
        display.textContent='';
        display.textContent='Choose game mode'


    },2000)
})


gameBoard.Game();


    

    
CPUbtn.addEventListener("click", function(){
    cpu=true;
    game=true;
    setTimeout(function(){
        display.textContent='Set to play against the cpu!';

    },1000)
    setTimeout(function(){
        display.textContent='';

    },3000)
   
})

playerBtn.addEventListener("click", function(){
    player=true;
    game=true;
    setTimeout(function(){
        display.textContent='Set to play against another player!';

    },1000)
    setTimeout(function(){
        display.textContent='';

    },3000)
})



