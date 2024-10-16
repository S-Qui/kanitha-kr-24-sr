const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

document.addEventListener("DOMContentLoaded", function() {
    var toggleButtons = document.querySelectorAll(".toggleMatukio");
  
    toggleButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        var packageCosts = document.querySelector(".matukio-aya");
        var textElement = this.querySelector(".text");
  
        if (packageCosts.style.maxHeight === "0px" || packageCosts.style.maxHeight === "") {
          // Show the section with a smooth transition
          packageCosts.style.maxHeight = packageCosts.scrollHeight + "px";
          textElement.textContent = "Hide All Events"; // Only change the button text
        } else {
          // Hide the section
          packageCosts.style.maxHeight = "0";
          textElement.textContent = "Show All Events"; // Only change the button text
        }
      });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const calendarGrid = document.getElementById('calendar-grid');
  const calendarMonth = document.getElementById('kalenda-month');
  const calendarDate = document.getElementById('kalenda-date');
  const calendarEvent = document.getElementById('calendar-event');
  const calendarPicture = document.getElementById('calendar-picture');
  const prevMonthButton = document.getElementById('prev-month');
  const nextMonthButton = document.getElementById('next-month');

  // Default Sunday services
  const defaultSundaysServices = [
      { time: '09:00 AM', event: 'English Service' },
      { time: '10:30 AM', event: 'Kikuyu Service' }
  ];

  // Events object
  const events = {
      '2024-10-20': {
          events: [
              {
                  time: '09:00 AM',
                  event: 'English Service'
              },
              {
                  time: '10:30 AM',
                  event: 'Kikuyu Communion',
                  title: 'Youth Sunday',
                  subEvents: [
                      'Choir Performance',
                      'Youth Sermon by John Doe',
                      'Youth Fundraiser Announcement'
                  ]
              }
          ],
          image: 'images/special-event.jpg'
      },
      '2024-10-27': {
          events: [
              { time: '09:00 AM', event: 'Special Service' }
          ],
          image: 'images/special-event.jpg'
      },
  };

  const defaultImage = '/assets/img/2024-06-23.jpg'; // Default background image
  let currentDate = new Date();

  function updateCalendar() {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const firstDay = new Date(year, month, 1).getDay(); // Sunday = 0, Monday = 1, etc.
      const lastDate = new Date(year, month + 1, 0).getDate();

      calendarMonth.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
      calendarGrid.innerHTML = ''; // Clear the grid

      const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']; // Starts from Sunday

      // Add day headers (Sunday to Saturday)
      days.forEach(day => {
          const dayDiv = document.createElement('div');
          dayDiv.className = 'calendar__day';
          dayDiv.textContent = day;
          calendarGrid.appendChild(dayDiv);
      });

      // Adjust for Sunday-first layout
      const adjustedFirstDay = firstDay; // No need to shift, since Sunday is already first
      for (let i = 0; i < adjustedFirstDay; i++) {
          const emptyDiv = document.createElement('div');
          emptyDiv.className = 'calendar__number';
          calendarGrid.appendChild(emptyDiv);
      }

      // Add the actual days
      for (let i = 1; i <= lastDate; i++) {
          const dateDiv = document.createElement('div');
          dateDiv.className = 'calendar__number';
          dateDiv.textContent = i;
          const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

          dateDiv.addEventListener('click', () => updateEventDetails(fullDate));

          if (events[fullDate]) {
              dateDiv.classList.add('calendar__number--event'); // Highlight days with events
          }

          if (i === currentDate.getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
              dateDiv.classList.add('calendar__number--current');
              if (events[fullDate]) {
                  dateDiv.classList.add('calendar__number--current-event');
              }
              updateEventDetails(fullDate);
          }

          calendarGrid.appendChild(dateDiv);
      }

      checkForEventsInAdjacentMonths();
  }

  function updateEventDetails(fullDate) {
      const eventDetails = events[fullDate];
      const selectedDate = new Date(fullDate);
      const isSunday = selectedDate.getDay() === 0; // Sunday = 0
  
      calendarDate.textContent = `${selectedDate.getDate()}, ${selectedDate.toLocaleString('default', { weekday: 'long' })}`;
  
      if (eventDetails) {
          kalendaEvent.innerHTML = '';
          eventDetails.events.forEach(event => {
              const eventItem = document.createElement('p');
              const eventTime = document.createElement('strong');
              eventTime.textContent = `${event.time}: `;
              eventItem.appendChild(eventTime);
              eventItem.appendChild(document.createTextNode(event.event));
  
              // Cross out past events
              if (new Date(fullDate).getTime() < new Date().setHours(0, 0, 0, 0)) {
                  eventItem.style.textDecoration = 'line-through';
              }
  
              kalendaEvent.appendChild(eventItem);
  
              if (event.subEvents) {
                  if (event.title) {
                      const title = document.createElement('h4');
                      title.textContent = event.title;
                      kalendaEvent.appendChild(title);
                  }

                  const list = document.createElement('ul');
                  event.subEvents.forEach(subEvent => {
                      const listItem = document.createElement('li');
                      listItem.textContent = subEvent;
                      list.appendChild(listItem);
                  });
                  kalendaEvent.appendChild(list);
              }
          });
  
          kalendaPicture.style.backgroundImage = `url('${eventDetails.image}')`;
      } else if (isSunday) {
          kalendaEvent.innerHTML = '';
          defaultSundaysServices.forEach(service => {
              const serviceItem = document.createElement('p');
              const serviceTime = document.createElement('strong');
              serviceTime.textContent = `${service.time}: `;
              serviceItem.appendChild(serviceTime);
              serviceItem.appendChild(document.createTextNode(service.event));
              kalendaEvent.appendChild(serviceItem);
          });
          kalendaPicture.style.backgroundImage = `url('${defaultImage}')`;
      } else {
          kalendaEvent.textContent = 'No events today.';
          kalendaPicture.style.backgroundImage = `url('${defaultImage}')`;
      }
  }

  function checkForEventsInAdjacentMonths() {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
  
    let hasNextMonthEvents = false;
    let hasPrevMonthEvents = false;
  
    Object.keys(events).forEach(eventDate => {
      const eventDateObj = new Date(eventDate);
      if (eventDateObj.getFullYear() === nextMonth.getFullYear() && eventDateObj.getMonth() === nextMonth.getMonth()) {
        hasNextMonthEvents = true; // Set to true if there's an event in the next month
      }
      if (eventDateObj.getFullYear() === prevMonth.getFullYear() && eventDateObj.getMonth() === prevMonth.getMonth()) {
        hasPrevMonthEvents = true; // Set to true if there's an event in the previous month
      }
    });
  
    // Remove the following lines to prevent adding classes for the dots
    if (hasNextMonthEvents) {
      // nextMonthButton.classList.add('calendar__button--events-next'); // No longer needed
    } else {
      // nextMonthButton.classList.remove('calendar__button--events-next'); // No longer needed
    }
  
    if (hasPrevMonthEvents) {
      // prevMonthButton.classList.add('calendar__button--events-prev'); // No longer needed
    } else {
      // prevMonthButton.classList.remove('calendar__button--events-prev'); // No longer needed
    }
  }
  

  prevMonthButton.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      updateCalendar();
  });

  nextMonthButton.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      updateCalendar();
  });

  window.addEventListener('resize', () => {
      updateCalendar();
  });

  updateCalendar(); // Initial update

  setInterval(() => {
      updateCalendar();
      console.log('Calendar refreshed.');
  }, 10 * 60 * 1000); // 10 minutes
});
