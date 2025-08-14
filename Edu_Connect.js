// Predefined credentials for Student and Staff
const validStudentEmail = 'student@educonnect.com';
const validStudentPassword = 'student123';

const validStaffEmail = 'staff@educonnect.com';
const validStaffPassword = 'staff123';

// Show Student Login Form
function showStudentLogin() {
    document.getElementById('student-login').classList.remove('hidden');
    document.getElementById('staff-login').classList.add('hidden');
    document.getElementById('submit-doubt-link').classList.add('hidden');
    document.getElementById('view-doubts-link').classList.add('hidden');
}

// Show Staff Login Form
function showStaffLogin() {
    document.getElementById('staff-login').classList.remove('hidden');
    document.getElementById('student-login').classList.add('hidden');
    document.getElementById('submit-doubt-link').classList.add('hidden');
    document.getElementById('view-doubts-link').classList.add('hidden');
}

// Handle Student Login
document.getElementById('student-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('student-email').value;
    const password = document.getElementById('student-password').value;
    
    if (email === validStudentEmail && password === validStudentPassword) {
        alert('Student Login Successful');
        document.getElementById('submit-doubt-link').classList.remove('hidden');
        document.getElementById('view-doubts-link').classList.remove('hidden');
        document.getElementById('student-login').classList.add('hidden');
    } else {
        alert('Invalid Student Credentials');
    }
});

// Handle Staff Login
document.getElementById('staff-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('staff-email').value;
    const password = document.getElementById('staff-password').value;
    
    if (email === validStaffEmail && password === validStaffPassword) {
        alert('Staff Login Successful');
        document.getElementById('submit-doubt-link').classList.remove('hidden');
        document.getElementById('view-doubts-link').classList.remove('hidden');
        document.getElementById('staff-login').classList.add('hidden');
    } else {
        alert('Invalid Staff Credentials');
    }
});

// Handle Doubt Submission
document.getElementById('doubt-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentName = document.getElementById('student-name').value;
    const doubt = document.getElementById('doubt').value;
    
    const doubtList = document.getElementById('doubt-list');
    const newDoubt = document.createElement('div');
    newDoubt.classList.add('doubt-item');
    newDoubt.innerHTML = `<strong>${studentName}</strong>: ${doubt}`;
    doubtList.appendChild(newDoubt);
    
    // Clear form
    document.getElementById('doubt-form').reset();
});
