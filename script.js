const playerArr = document.querySelectorAll('input');
const diceBtns = document.querySelectorAll('button');
const spanArr = document.querySelectorAll("span");

const endBtn = document.getElementById('endButton');
const output = document.getElementsByClassName("output")[0];
//[0] is written as getelementsbyclassname will give us an array so to access first element =>>>[0]

// lets make end btn diasble initially
endBtn.disabled =true;


for(let t of diceBtns){
    t.addEventListener("click",rollTheDice);
}

let count =0;
function rollTheDice(event_details){

    count++;
    if(count==5){
        endBtn.disabled = false;   //making endbtn active when all rolldicebtn is clicked
    }

    let possibleValues = [1,2,3,4,5,6];
    let randomIndex = parseInt(Math.random()*possibleValues.length);
    let randomValue = possibleValues[randomIndex];
    //console.log(randomValue); //to check the dice value when each buttn is clicked
    //but the problem is how will we know which btn is clicked 
    //to solve this assign an id to each btn(problem solved)
    //like p1 p2 ...

    let clickedBtn = event_details.target;//to know which btn is clicked
    
    //here clickbtn is allowed to get click many times
    //so we need after clicking btn to be disable

    clickedBtn.disabled=true;

    let clickedBtn_id = event_details.target.id;//to know id of clickedbtn (clickedBtn.id)
    //let player_id = clickedBtn_id[1];//this will us number value associated with id 
    //how to achieve this with another approach (as it will not work for p103)

    let player_id = (+clickedBtn_id.replace("p",""))-1;//+ to convert to no from string and -1 to get index position
    
    //add the score to corresponding player
    spanArr[player_id].innerText = randomValue;



}

//we need to print winner name when endbtn is cklicked
// so just add eventlistener
endBtn.addEventListener("click",findWinner);

function findWinner(){
    let highestScore = 0;
    for(let t of spanArr){
        //t => whole span element
        //t.innerText => value inside span

        let score = t.innerText;
        if(score>highestScore){
            highestScore = score;
        }
    }
    //find all players with highest score
    let highestScorers =[];
    for(let i=0; i<spanArr.length; i++){
        let score = spanArr[i].innerText;
        if(score==highestScore){
            highestScorers.push(i);
        }
    }

    let namesOfWinner ="";
    for(let t of highestScorers){
        namesOfWinner += playerArr[t].value +",";
    }

    output.innerText = namesOfWinner.slice(0,-1) + " won the game!!!"

}



