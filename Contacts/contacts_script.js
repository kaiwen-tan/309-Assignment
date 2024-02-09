// JavaScript functionality goes here
document.getElementById('addContactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Get form values
    const name = document.getElementById('name').value;
    const studentNumber = document.getElementById('studentNumber').value;
    const email = document.getElementById('email').value;
    const group1 = document.getElementById('group1').checked;
    const group2 = document.getElementById('group2').checked;
    const group3 = document.getElementById('group3').checked;
    const groups = [];
    if (group1) groups.push('Group 1');
    if (group2) groups.push('Group 2');
    if (group3) groups.push('Group 3');
    // Perform actions with form values (e.g., add to list, store in database, etc.)
    // Just log the values to console
    console.log('Name:', name);
    console.log('Student Number:', studentNumber);
    console.log('Email:', email);
    console.log('Groups:', groups);
    // Create contact card
    const contactList = document.getElementById('contactList');
    const contactCard = document.createElement('div');
    contactCard.classList.add('card', 'contact-card', 'shadow');
    contactCard.innerHTML = `
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-auto">
            <input type="checkbox" class="form-check-input" id="checkbox-${name}">
          </div>
          <div class="col-auto">
            <img src="../Images/image-placeholder-icon-11.png" class="rounded-circle" alt="Profile Picture" style="width: 100px; height: 100px;">
          </div>
          <div class="col">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${studentNumber}</p>
            <p class="card-text">${email}</p>
            <p class="card-text">${groups.join(', ')}</p>
          </div>
        </div>
      </div>
    `;
    contactList.appendChild(contactCard);
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('studentNumber').value = '';
    document.getElementById('email').value = '';
    // Close modal
    const addContactModal = new bootstrap.Modal(document.getElementById('addContactModal'));
    addContactModal.hide();
  });
  
  // Filtering by names
  document.getElementById('searchByName').addEventListener('input', function(event) {
    const searchText = event.target.value.toLowerCase();
    const contacts = document.querySelectorAll('.contact-card');
    contacts.forEach(contact => {
      const name = contact.querySelector('.card-title').textContent.toLowerCase();
      if (name.includes(searchText)) {
        contact.style.display = 'block';
      } else {
        contact.style.display = 'none';
      }
    });
  });
  
  // Filtering by groups
  document.getElementById('groupFilter').addEventListener('change', function(event) {
    const selectedGroup = event.target.value;
    const contacts = document.querySelectorAll('.contact-card');
    contacts.forEach(contact => {
      const groups = contact.querySelector('.card-text:nth-child(4)').textContent.split(', ');
      if (selectedGroup === '' || groups.includes(selectedGroup)) {
        contact.style.display = 'block';
      } else {
        contact.style.display = 'none';
      }
    });
  });
  // Function to select a calendar
  function selectCalendar(calendarName) {
    console.log('Selected calendar:', calendarName);
    // Add logic here for what to do when a calendar is selected
    // Close modal
    const selectCalendarModal = new bootstrap.Modal(document.getElementById('selectCalendarModal'));
    selectCalendarModal.hide();
  }
  