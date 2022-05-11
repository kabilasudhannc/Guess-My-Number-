'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Answer!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 13;
let ComputerGuess = Math.trunc(Math.random() * 20) + 1;
// console.log(ComputerGuess);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess);

    let messageDocument = document.querySelector('.message');
    let currentScore = Number(document.querySelector('.score').textContent);

    // if (currentScore === 0) {
    //     messageDocument.textContent = '💔 You ranout of Life! Reload And Try Again...';
    //     document.querySelector('.body').style.backgroundColor = 'red';
    // }

    if (!guess) messageDocument.textContent = '⛔️ No Number!';

    else if (guess < 0 || guess > 20) messageDocument.textContent = '🙉 Enter a Number Between given Range';

    else if (guess === ComputerGuess) {
        messageDocument.textContent = '🎉 Correct Answer!';
        const highScore = Number(document.querySelector('.highscore').textContent);
        if (currentScore > highScore) document.querySelector('.highscore').textContent = currentScore;
        document.querySelector('.body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = ComputerGuess;
    }

    else if (guess < ComputerGuess) {

        if (currentScore > 1) {
            messageDocument.textContent = '📉 Your Guess is Low Try Greater Number!';
            currentScore--;
            document.querySelector('.score').textContent = currentScore;
        }

        else {
            document.querySelector('.score').textContent = 0;
            messageDocument.textContent = '💔 You ranout of Life! Reload And Try Again...';
            document.querySelector('.body').style.backgroundColor = 'red';
        }
    }

    else if (guess > ComputerGuess) {

        if (currentScore > 1) {
            messageDocument.textContent = '📈 Your Guess is High Try Lower Number!';
            currentScore--;
            document.querySelector('.score').textContent = currentScore;
        }

        else {
            document.querySelector('.score').textContent = 0;
            messageDocument.textContent = '💔 You ranout of Life! Reload And Try Again...';
            document.querySelector('.body').style.backgroundColor = 'red';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    ComputerGuess = Math.round(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
})