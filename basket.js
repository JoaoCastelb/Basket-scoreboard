
let home=0
let guest = 0
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function plusOne() {
    home += 1
    homeEl.textContent = home
}

function plusOneG() {
    guest += 1
    guestEl.textContent = guest
}

function plusTwo() {
    home += 2
    homeEl.textContent = home
}

function plusTwoG() {
    guest += 2
    guestEl.textContent = guest
}

function plusTre() {
    home += 3
    homeEl.textContent = home
}

function plusTreG() {
    guest += 3
    guestEl.textContent = guest
}

function playAgain(){
    home = 0
    guest = 0

    homeEl.textContent=home
    guestEl.textContent=guest
}
