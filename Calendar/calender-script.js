let nav = 0;
let clicked = null;
let events = [
    {
        date: "Thursday, 2/1/2024",
        title: "CSC309 Group Meeting",
        time: "10:00 AM",
        users: [
            {
                email:"user1",
                name:"user1"
            },
            {
                email:"user2",
                name:"user2"
            },
            {
                email:"user3",
                name:"user3"
            }
        ]
    },
    {
        date: "Monday, 2/19/2024",
        title: "TA Meeting",
        time: "1:00 PM",
        users: [
            {
                email:"user1",
                name:"user1"
            }
        ]
    }
]

const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load() {
    const dt = new Date();

    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    const weeksToDisplay = Math.ceil((daysInMonth + firstDayOfMonth.getDay()) / 7);
    let paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    document.getElementById('month').innerText =
        `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

    calendar.innerHTML = '';
    let week = document.createElement('tr');
    calendar.appendChild(week);

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('td');
        daySquare.classList.add('day');

        const dayString = `${month + 1}/${i - paddingDays}/${year}`

        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;
            if (i - paddingDays === day && nav === 0) {
                daySquare.id = 'currentDay';

                // adding event to current day
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('event');
                eventDiv.innerText = events[0].title;
                daySquare.appendChild(eventDiv);
            }

            // Hardcoded events
            if (i - paddingDays === 21) {
                // adding event to current day
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('event');
                eventDiv.innerText = events[1].title;
                daySquare.appendChild(eventDiv);
            }
            daySquare.addEventListener('click', () => openInviteModal(dayString));
        } else {
            daySquare.classList.add('padding');
        }

        if (i % 7 === 0) {
            week.appendChild(daySquare);
            week = document.createElement('tr');
            calendar.appendChild(week);
        } else {
            week.appendChild(daySquare);
        }

    }
}

function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
        nav++;
        load();
    });

    document.getElementById('backButton').addEventListener('click', () => {
        nav--;
        load();
    });
}

function openInviteModal(date) {
    // Find the modal's elements
    const modalTitle = document.querySelector('#inviteModal .modal-title');
    const modalBody = document.querySelector('#inviteModal .modal-body');

    document.getElementById('startDate').value = date; // Assuming date is in 'YYYY-MM-DD' format


    document.getElementById('endDate').value = ''; 
    document.getElementById('invitePeople').value = ''; 

    var myModal = new bootstrap.Modal(document.getElementById('inviteModal'), {
        keyboard: true
    });
    myModal.show();

}

window.addEventListener('DOMContentLoaded', (event) => {
    const startTimeSelect = document.getElementById('startTime');
    const endTimeSelect = document.getElementById('endTime');
  
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        startTimeSelect.options.add(new Option(timeString, timeString));
        endTimeSelect.options.add(new Option(timeString, timeString));
      }
    }
  });

initButtons();
load();