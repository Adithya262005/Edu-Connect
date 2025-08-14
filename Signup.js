document.getElementById('doubt-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('student-name').value;
    const doubt = document.getElementById('doubt').value;

    const doubtList = document.getElementById('doubt-list');

    const newDoubt = document.createElement('div');
    newDoubt.classList.add('doubt-item');
    newDoubt.innerHTML = `<strong>${studentName}</strong>: ${doubt}`;

}