function createInputs() {
    const numSubjects = document.getElementById('numSubjects').value;
    const subjectContainer = document.getElementById('subjects');
    subjectContainer.innerHTML = '';
    if (numSubjects > 0) {
        document.getElementById('subject-details').style.display = 'block';
        for (let i = 0; i < numSubjects; i++) {
            subjectContainer.innerHTML += `
                <div class="subject-input">
                    <label>Subject ${i + 1}:</label>
                    <input type="number" class="credits" placeholder="Credits for Subject ${i + 1}" min="1" required>
                    <input type="number" class="grade-points" placeholder="Grade Points for Subject ${i + 1}" step="0.01" min="0" max="10" required>
                </div>
            `;
        }
    }
}

function calculateSGPA() {
    const credits = document.querySelectorAll('.credits');
    const gradePoints = document.querySelectorAll('.grade-points');
    let totalCredits = 0;
    let weightedPoints = 0;

    for (let i = 0; i < credits.length; i++) {
        const creditValue = parseFloat(credits[i].value);
        const gradePointValue = parseFloat(gradePoints[i].value);
        
        if (creditValue > 0 && gradePointValue >= 0 && gradePointValue <= 10) {
            totalCredits += creditValue;
            weightedPoints += creditValue * gradePointValue;
        } else {
            alert("Please enter valid inputs for all fields.");
            return;
        }
    }

    const sgpa = (weightedPoints / totalCredits).toFixed(2);
    document.getElementById('sgpaValue').textContent = sgpa;
    document.getElementById('sgpaResult').style.display = 'block';
}