function rollDice() 
{
    const diceImages = document.querySelectorAll('.dice');
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const rolledNumberElement = document.getElementById('rolledNumber');

    
    rolledNumberElement.innerText = randomNumber;

    
    diceImages.forEach(dice => {
        if (parseInt(dice.dataset.value) === randomNumber) 
            {
            dice.style.border = '5px solid red';  
        } 
        else 
        {
            dice.style.border = 'none';
        }
    });
}
