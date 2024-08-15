document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const btn = document.getElementById('button');
    const wrng = document.getElementsByClassName('wrong')[0];
    const guess = document.getElementById('guess');
    
    let random = Math.floor(Math.random() * 100) + 1;
    let count = 0;

    btn.addEventListener('click', () => {
        const inputValue = parseInt(input.value);

        if (isNaN(inputValue) || inputValue < 1 || inputValue > 100) {
            wrng.innerText = 'Please enter a number between 1 and 100.';
            return;
        }

        count++;
        guess.innerHTML = `No. of Guesses: ${count}`;

        if (inputValue > random) {
            wrng.innerHTML = 'Your guess is too high.';
        } else if (inputValue < random) {
            wrng.innerText = 'Your guess is too low.';
        } else {
            wrng.innerHTML = 'Congratulations! You guessed the correct number!';

            
            setTimeout(() => {
                random = Math.floor(Math.random() * 100) + 1;
                count = 0;
                guess.innerHTML = 'No. of Guesses: 0';
                wrng.innerHTML = '';
                input.value = '';
            }, 5000);
        }

        // Clear the input field after each guess
        input.value = '';
    });
});
