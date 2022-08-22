      
function myFunction() {
    document.querySelector(".myBtn").disabled = true;
}
  

function selectPlayerName(thisID) {
    const orderList = document.querySelectorAll("#selectOlList li")
    if (orderList.length == 5) {
        alert("Maximum of 5 players can be Select")
    }
    else {
        const playerNameElement = thisID.parentNode.children[0]
        const playerName = playerNameElement.innerText
        const createListTag = document.createElement("li");
        createListTag.innerText = playerName
        const getOderList = document.getElementById("selectOlList")
        getOderList.appendChild(createListTag)
        
    }
}

// function myFunction() {
//     document.getElementById("player-1").disabled = true;
// }


const player = 5;

function selectFlied(currentId) {
    const element = document.getElementById(currentId) 
    const costString = element.value
    const cost = parseFloat(costString);
    return cost
}

document.getElementById('calculate').addEventListener('click' , function(){
    const perPlayerCost = selectFlied('per-player-cost')

    if (isNaN(perPlayerCost)) {
        alert('Please Enter a Per Player Budget')
    }else{
        const playerCostElement = document.getElementById('player-cost');
        const totalPlayerCost = player * perPlayerCost;
        playerCostElement.innerText = totalPlayerCost
    }
})




document.getElementById('calculate-total-cost').addEventListener('click' , function(){
    const coachCost = selectFlied('coach-cost-flied')
    const managerCost = selectFlied('manager-cost-flied')
    if (isNaN(coachCost) || isNaN(managerCost)) {
        alert('Please Enter a Coach & Manager Budget')
    }else{
        const playerCostElement = document.getElementById('player-cost').innerText;
        const totalCostElement = document.getElementById('total-cost');
        const playerCost = parseFloat(playerCostElement)
        const totalCost = playerCost + managerCost + coachCost;

        if (playerCost <= 0) {
            alert('Total Player Cost <= 0 hote parena')    
        }else{
            totalCostElement.innerText = totalCost;
        }
    }
})
