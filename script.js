'use strict';
// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Answer!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = '12';

// document.querySelector('.guess').value = 21;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess_check').addEventListener('click', hello);

// function hello() {
//     console.log('hello world!');
// }

// document.querySelector('.guess_check').addEventListener('click', function () {
//     console.log(document.querySelector('.guess').value);
//     document.querySelector('.message').textContent = '🎉 Correct Number!';
// });

let secret_number = Math.trunc(Math.random() * 20 + 1);
// console.log(secret_number);
let score = 10;
let high_score = 0;

function setMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.guess_check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess);
    if (!guess) {
        setMessage('🔔 Enter a Number!');
    } else if (guess && score > 1) {
        if (guess === secret_number) {
            setMessage('🎉 Correct Number!');
            document.querySelector('.number').textContent = secret_number;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if (score > high_score) {
                high_score = score;
                document.querySelector('.highscore').textContent = high_score;
            }
        } else if (guess !== secret_number) {
            setMessage(
                guess < secret_number
                    ? '📉 Too Low Number!'
                    : '📈 Too High Number!'
            );
            score -= 1;
        }
        // else if (guess < secret_number) {
        //     document.querySelector('.message').textContent =
        //         '📉 Too Low Number!';

        // } else if (guess > secret_number) {
        //     document.querySelector('.message').textContent =
        //         '📈 Too High Number!';
        //     score -= 1;
        // }
    } else {
        setMessage('💥 You Lost The Game!');
        score = 0;
    }
    document.querySelector('.score').textContent = score;
});
document.querySelector('.btn_again').addEventListener('click', function () {
    score = 10;
    secret_number = Math.trunc(Math.random() * 20 + 1);

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.score').textContent = score;
    setMessage('Start guessing ...');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});
