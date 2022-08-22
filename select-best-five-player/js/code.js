
// function plyerName(player) {
//     const playerName = document.getElementById(player).innerText;
//        return playerName
// }


// const playerArray = []

// function selectedPlayer(player){
    
//     document.getElementById(player).addEventListener('click' , function() {
        
//         if (player == 'player-1') {
//             playerArray.push(plyerName('player-1-name'));
//             console.log(playerArray);
//             for (let i = 0; i < playerArray.length; i++) {
//                 const element = playerArray[i];
//                 console.log(element);
//             }
//         }else if (player == 'player-2') {
//             playerArray.push(plyerName('player-2-name'));
//             console.log(playerArray);
//         }
//         else if (player == 'player-3') {
//             playerArray.push(plyerName('player-3-name'));
//         }
//         else if (player == 'player-4') {
//             playerArray.push(plyerName('player-4-name'));
//         }
//         else if (player == 'player-5') {
//             playerArray.push(plyerName('player-5-name'));
//         }
//         else if (player == 'player-6') {
//             playerArray.push(plyerName('player-6-name'));
//         }
//         else if (player == 'player-7') {
//             playerArray.push(plyerName('player-7-name'));
//         }
//         else if (player == 'player-8') {
//             playerArray.push(plyerName('player-8-name'));
//         }
//         else if (player == 'player-9') {
//             playerArray.push(plyerName('player-9-name'));
//         }
//     })
// }


// // console.log(selectedPlayer('player-1'));
// selectedPlayer('player-1')
// selectedPlayer('player-2')
// selectedPlayer('player-3')
// selectedPlayer('player-4')
// selectedPlayer('player-5')
// selectedPlayer('player-6')
// selectedPlayer('player-7')
// selectedPlayer('player-8')
// selectedPlayer('player-9')

// // const mybePlayer  = 5


// document.getElementById('calculate').addEventListener('click' , function(){
//     const perPlayerConstElement = document.getElementById('per-player-cost').value
//     console.log(perPlayerConstElement);
// })


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

