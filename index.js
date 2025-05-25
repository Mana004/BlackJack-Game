
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cards=[]

player = {
    name:"Naman",
    chips:150
}

let playEL = document.getElementById("play-btn")
playEL.onclick=startGame;

let cardButton = document.querySelector("#card-btn")
cardButton.onclick=newCard;

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name +" : $"+player.chips

function startGame(){

    hasBlackJack = false

    isAlive = true

    if(player.chips <= 0){
        isAlive=false
        messageEl.textContent="You are out of chips !"
    }

    cards=[]

    if(isAlive){

        let card1 = getRandomCard()
        let card2 = getRandomCard()
    
        player.chips -= 50
        playerEl.textContent = player.name +" : $"+player.chips
    
        cards.push(card1)
        cards.push(card2)
    
        sum = card1+card2
        
    
        renderGame()

    }

  
}


function renderGame(){

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips+=500
        playerEl.textContent = player.name +" : $"+player.chips
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    cardEl.textContent =  "Cards: "

    for(let i =0; i< cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum : " + sum

    messageEl.textContent=message

}

function newCard(){

    if(isAlive && !hasBlackJack){

        let newcard = getRandomCard()

        cards.push(newcard)

        sum += newcard

        sumEl.textContent = "Sum : " + sum

        renderGame()

        
    }
    
    
}

function getRandomCard(){
    let random = Math.floor(Math.random()*13) +1

    if(random === 1){
        return 11
    }
    if(random > 10  ){
        return 10
    }
    
    
    return random;
}


console.log(message)
