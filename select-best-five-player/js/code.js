
function selectPlayerName(thisId) {
    let selectedList = 0;
    const selectElement = document.getElementById('selected')
    const orderList = document.querySelectorAll("#selectOlList li")
    if (orderList.length == 5) {
        alert("Maximum of 5 players can be Select")
        thisId.disabled = false;
        thisId.style.backgroundColor = 'green';
    }
    else {
        const playerNameElement = thisId.parentNode.children[0]
        thisId.disabled = true;
        // thisID.style.border = '1px solid #b8a0a0';
        thisId.style.backgroundColor = '#c5bdbd';
        thisId.color= '#434040';
        const playerName = playerNameElement.innerText
        const createListTag = document.createElement("li");
        createListTag.innerText = playerName
        const getOderList = document.getElementById("selectOlList")
        getOderList.appendChild(createListTag)
        
    }
    selectedList += orderList.length;
    if (selectedList <=4) {
        selectElement.innerText = selectedList + 1;
    } else {
        selectElement.innerText = selectedList;
    }
}

function selectFlied(currentId) {
    const element = document.getElementById(currentId) 
    const costString = element.value
    const cost = parseFloat(costString);
    return cost
}
document.getElementById('calculate').addEventListener('click' , function(){
    const perPlayerCost = selectFlied('per-player-cost')
    const playerParent = document.getElementById('selectOlList')
    const playerChilder = playerParent.children
    const player = playerChilder.length
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
// https://github.com/programming-hero-web-course2/best-five-dom-assignment-omar-web-dev