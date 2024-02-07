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
  