document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    // Dice images array
    const diceImages = [
        'dice1.jpg', 'dice2.webp','dice3.webp',
        'dice3.webp','dice1.jpg', 'diceroller.webp',
    ];

    // Roll dice by selecting a random index for each dice image
    const randomDice1 = Math.floor(Math.random() * 6);
    const randomDice2 = Math.floor(Math.random() * 6);

    // Change the dice images
    document.getElementById('dice1').src = diceImages[randomDice1];
    document.getElementById('dice2').src = diceImages[randomDice2];

    // Display the result
    document.getElementById('result').textContent = `Result: ${randomDice1 + 1} and ${randomDice2 + 1}`;
}
