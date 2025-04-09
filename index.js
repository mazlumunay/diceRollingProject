// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Function to generate random dice number (1-6)
    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }
    
    // Function to update both dice images
    function updateDice() {
        // Get both dice elements
        const dice1 = document.querySelector('.img1');
        const dice2 = document.querySelector('.img2');
        
        // Generate random numbers
        const randomNum1 = rollDice();
        const randomNum2 = rollDice();
        
        // Update dice images
        dice1.src = `./images/dice${randomNum1}.png`;
        dice1.alt = `Dice showing ${randomNum1}`;
        dice2.src = `./images/dice${randomNum2}.png`;
        dice2.alt = `Dice showing ${randomNum2}`;
        
        // Update the h1 to show who won
        const h1 = document.querySelector('h1');
        if (randomNum1 > randomNum2) {
            h1.textContent = "🚩 Player 1 Wins!";
        } else if (randomNum2 > randomNum1) {
            h1.textContent = "Player 2 Wins! 🚩";
        } else {
            h1.textContent = "Draw!";
        }
    }
    
    // Set up event listeners
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            updateDice();
        }
    });
    
    document.querySelector('.container').addEventListener('click', function() {
        updateDice();
    });
    
    // Initial roll when page loads
    updateDice();
});