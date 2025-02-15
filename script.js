function rollDice() {
    const diceImages = document.querySelectorAll('.dice');
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const rolledNumberElement = document.getElementById('rolledNumber');

    // Update the rolled number display
    rolledNumberElement.innerText = randomNumber;

    // Update the dice image based on the rolled number
    diceImages.forEach(dice => {
        if (parseInt(dice.dataset.value) === randomNumber) {
            dice.style.border = '5px solid red';  // Highlight the dice
        } else {
            dice.style.border = 'none';
        }
    });
}
