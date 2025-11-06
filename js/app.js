const form = document.querySelector('form');
const employeeList = document.getElementById('employeeList');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
const firstname = document.getElementById('firstname').value;
const lastname = document.getElementById('lastname').value;
const email = document.getElementById('email').value;
const hireDate = document.getElementById('hire_date').value;
const photoInput = document.querySelector('input[type="file"]');
  
if (!email.endsWith('@canada.ca')) {
    alert('Email must end with @canada.ca');
    return;
}
  
const filename = photoInput.files.length > 0 ? photoInput.files[0].name : '';
  
const row = document.createElement('tr');
  row.innerHTML = `
    <td><img src="/images/${filename}" alt="${firstname} ${lastname}" /></td>
    <td>${firstname}</td>
    <td>${lastname}</td>
    <td>${email}</td>
    <td>${hireDate}</td>
    <td><button type="button" class="delete-btn">Delete</button></td>
  `;
  
row.querySelector('.delete-btn').addEventListener('click', function() {
  if (confirm('Are you sure you want to delete this employee?')) {
    row.remove();
  }
});
  
employeeList.appendChild(row);
  form.reset();
});

row.querySelector('.reset-btn').addEventListener('click', function() {
  form.reset();
});