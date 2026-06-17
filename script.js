// Function to dynamically add a new course row
function addCourseRow() {
    const tbody = document.getElementById('courseRows');
    const newRow = document.createElement('tr');
        
    newRow.innerHTML = `
        <td><input type="text" placeholder="Course Name"></td>
        <td>
            <select class="credit-hours">
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
                <option value="4">4</option>
            </select>
        </td>
        <td>
            <select class="grade-select">
                <option value="4.00">A+</option>
                <option value="4.00">A</option>
                <option value="3.67">A-</option>
                <option value="3.33">B+</option>
                <option value="3.00">B</option>
                <option value="2.67">B-</option>
                <option value="2.33">C+</option>
                <option value="2.00">C</option>
                <option value="1.67">C-</option>
                <option value="1.33">D+</option>
                <option value="1.00">D</option>
                <option value="0.00">F</option>
            </select>
        </td>
        <td><button class="delete-btn" onclick="deleteRow(this)">✖️</button></td>
    `;
    tbody.appendChild(newRow);
}

// Function to remove a course row
function deleteRow(button) {
    const row = button.parentNode.parentNode;
    const tbody = document.getElementById('courseRows');
            
    // Keeps at least one row active so the user can interact with the app
    if (tbody.rows.length > 1) {
        row.parentNode.removeChild(row);
    } else {
        alert("You need to keep at least one course!");
    }
}

// Core SGPA Calculation logic
function calculateSGPA() {
    const creditHoursElements = document.getElementsByClassName('credit-hours');
    const gradeElements = document.getElementsByClassName('grade-select');
            
    let totalQualityPoints = 0;
    let totalCreditHours = 0;

    for (let i = 0; i < creditHoursElements.length; i++) {
        const credits = parseFloat(creditHoursElements[i].value);
        const gradePoint = parseFloat(gradeElements[i].value);
        totalQualityPoints += (credits * gradePoint);
        totalCreditHours += credits;
    }

    // Standard weighted mean formula: Total Quality Points / Total Credits
    const sgpa = totalQualityPoints / totalCreditHours;

    // Render output to screen fixed to 2 decimal places
    document.getElementById('sgpaDisplay').innerText = sgpa.toFixed(2);
}