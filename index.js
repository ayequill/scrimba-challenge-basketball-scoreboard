let homeScoreBoardText = document.getElementById ("home-score")
let guestScoreBoardText = document.getElementById ("guest-score")
let homeScore = 0
let guestScore = 0

function homeAdd1 (){
    homeScore ++
    homeScoreBoardText.textContent = homeScore
}

function homeAdd2 () {
    homeScore += 2
    homeScoreBoardText.textContent = homeScore
}

function homeAdd3 () {
    homeScore += 3
    homeScoreBoardText.textContent = homeScore
}


function guestAdd1 (){
    guestScore ++
    guestScoreBoardText.textContent = guestScore
}

function guestAdd2 () {
    guestScore += 2
    guestScoreBoardText.textContent = guestScore
}

function guestAdd3 () {
    guestScore += 3
    guestScoreBoardText.textContent = guestScore
}

function reset (){
    homeScoreBoardText.textContent = 0
    guestScoreBoardText.textContent = 0

}

