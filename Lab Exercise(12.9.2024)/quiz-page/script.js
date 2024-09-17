const questions = document.querySelectorAll('.question');
const options = document.querySelectorAll('.option');
let currentQuestionIndex = 0;
let score = 0;

const correctAnswers = ['Train', 'Football', 'Apple', 'Oxygen', 'Google'];

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestionIndex);
});

options.forEach(option => {
    option.addEventListener('click', function() {
        const selectedAnswer = this.textContent;
        if (selectedAnswer === correctAnswers[currentQuestionIndex]) {
            score++;
        }
        hideQuestion(currentQuestionIndex);
    });
});

function showQuestion(index) {
    questions[index].classList.add('show');
    questions[index].classList.remove('hide');
}

function hideQuestion(index) {
    questions[index].classList.add('hide');
    setTimeout(() => {
        questions[index].classList.remove('show', 'hide');
        if (index + 1 < questions.length) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    }, 300); 
}

function showResults() {
    const results = document.getElementById('results');
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = score;
    results.style.display = 'block';
    results.classList.add('show');
}
