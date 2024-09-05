// Initialize employee array and ID counter
let employees = [];
let employeeId = 1;

// Function to show message
function showMessage(type, message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `<p id="${type}Message">${message}</p>`;
    setTimeout(() => {
        messageDiv.innerHTML = '';
    }, 3000);
}

// Add employee function
document.getElementById('addEmployeeBtn').addEventListener('click', () => {
    // Get form values
    const name = document.getElementById('name').value.trim();
    const profession = document.getElementById('profession').value.trim();
    const age = document.getElementById('age').value.trim();

    // Check if all fields are filled
    if (name === '' || profession === '' || age === '') {
        showMessage('error', 'Please fill all the required fields.');
        return;
    }

    // Add new employee object to the array
    const newEmployee = {
        id: employeeId,
        name: name,
        profession: profession,
        age: Number(age)
    };

    employees.push(newEmployee);
    employeeId++;

    // Show success message
    showMessage('success', 'Employee added successfully.');

    // Clear the form
    document.getElementById('employeeForm').reset();

    // Display the updated employee list
    displayEmployees();
});

// Function to display employees
function displayEmployees() {
    const employeeListDiv = document.getElementById('employeeList');
    employeeListDiv.innerHTML = '';  // Clear the list

    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.classList.add('employee');
        employeeDiv.innerHTML = `
            <h4>${employee.name} - ${employee.profession} - Age: ${employee.age}</h4>
            <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeListDiv.appendChild(employeeDiv);
    });
}

// Function to delete an employee
function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}
