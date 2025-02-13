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
  const calendarGrid = document.getElementById('kalenda-grid');
  const calendarMonth = document.getElementById('kalenda-month');
  const calendarDate = document.getElementById('kalenda-date');
  const calendarEvent = document.getElementById('calendar-event');
  const calendarPicture = document.getElementById('kalenda-picture');
  const prevMonthButton = document.getElementById('prev-month');
  const nextMonthButton = document.getElementById('next-month');

  // Default Sunday services
  const defaultSundaysServices = [
      { time: '09:00 AM', event: 'English Service' },
      { time: '10:30 AM', event: 'Kikuyu Service' }
  ];

  // Events object
  const events = {
    // P.C.E.A Church Calendar 2025
      //Christian Education Sunday
      '2025-03-02': {
          events: [
              {
                  time: '09:00 AM',
                  event: 'English Service'
              },
              {
                  time: '10:30 AM',
                  event: 'Kikuyu Communion',
                  title: 'Christian Education Sunday',
                  subEvents: [
                      'C.E Sermon by pending',
                      'C.E Fundraiser Announcement'
                  ]
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Thanks Giving Sunday
      '2025-04-06': {
          events: [
              {
                  time: '09:00 AM',
                  event: 'English Service'
              },
              {
                  time: '10:30 AM',
                  event: 'Kikuyu Communion',
                  title: 'Thanks Giving Sunday',
                  subEvents: [
                      'T.G Sermon by pending',
                      'T.G Fundraiser Announcement'
                  ]
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Youth Sunday
      '2025-04-27': {
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
                      'Youth Sermon by pending',
                      'Youth Fundraiser Announcement'
                  ]
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Women's Guild Sunday
      '2025-06-01': {
          events: [
              {
                  time: '09:00 AM',
                  event: 'English Service'
              },
              {
                  time: '10:30 AM',
                  event: 'Kikuyu Communion',
                  title: 'Womens Guild Sunday',
                  subEvents: [
                      'W.G Sermon by pending',
                      'W.G Fundraiser Announcement'
                  ]
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Brigade Sunday
      '2025-08-10': {
          events: [
              {
                  time: '09:00 AM',
                  event: 'English Service'
              },
              {
                  time: '10:30 AM',
                  event: 'Kikuyu Communion',
                  title: 'Brigade Sunday',
                  subEvents: [
                      'Brigade Sermon by pending',
                      'Brigade Fundraiser Announcement'
                  ]
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Nendeni (Evangelism) Sunday
      '2025-09-07': {
          events: [
              {
                  time: '09:00 AM',
                  event: 'English Service'
              },
              {
                  time: '10:30 AM',
                  event: 'Kikuyu Communion',
                  title: 'Nendeni (Evangelism) Sunday',
                  subEvents: [
                      'Nendeni Sermon by pending',
                      'Nendeni Fundraiser Announcement'
                  ]
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Health Sunday
      '2025-10-12': {
          events: [
              {
                  time: '09:00 AM',
                  event: 'English Service'
              },
              {
                  time: '10:30 AM',
                  event: 'Kikuyu Communion',
                  title: 'Health Sunday',
                  subEvents: [
                      'Health Sermon by pending',
                      'Health Fundraiser Announcement'
                  ]
              }
          ],
          image: 'images/special-event.jpg'
      },
      //P.C.M.F Sunday
      '2025-11-09': {
          events: [
              {
                  time: '09:00 AM',
                  event: 'English Service'
              },
              {
                  time: '10:30 AM',
                  event: 'Kikuyu Communion',
                  title: 'P.C.M.F Sunday',
                  subEvents: [
                      'P.C.M.F Sermon by pending',
                      'P.C.M.F Fundraiser Announcement'
                  ]
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Church School Sunday
      '2025-12-07': {
          events: [
              {
                  time: '09:00 AM',
                  event: 'English Service'
              },
              {
                  time: '10:30 AM',
                  event: 'Kikuyu Communion',
                  title: 'Church School Sunday',
                  subEvents: [
                      'C.S Sermon by pending',
                      'C.S Fundraiser Announcement'
                  ]
              }
          ],
          image: 'images/special-event.jpg'
      },
    
    //Christian Liturgical Year
      //Epiphany
      '2025-01-06': {
          events: [
              { 
                event: 'Epiphany ~ Christian Liturgical Year'
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Ash Wednesday
      '2025-02-05': {
          events: [
              { 
                event: 'Ash Wednesday ~ Christian Liturgical Year'
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Palm Sunday
      '2025-04-13': {
          events: [
              { time: '09:00 AM', event: 'English Service' },
              { time: '10:30 AM', event: 'Kikuyu Service' },
              { 
                event: 'Palm Sunday ~ Christian Liturgical Year'
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Holy Thursday
      '2025-04-17': {
          events: [
              { 
                event: 'Holy Thursday ~ Christian Liturgical Year'
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Good Friday
      '2025-04-18': {
          events: [
              { 
                event: 'Good Friday ~ Christian Liturgical Year'
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Easter Sunday
      '2025-04-20': {
          events: [
              { 
                event: 'Easter Sunday ~ Christian Liturgical Year'
              },
              { time: '09:00 AM', event: 'English Service' },
              { time: '10:30 AM', event: 'Kikuyu Service' }
          ],
          image: 'images/special-event.jpg'
      },
      //Easter Monday
      '2025-04-21': {
          events: [
              { 
                event: 'Easter Monday ~ Christian Liturgical Year'
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Ascension Day
      '2025-05-29': {
          events: [
              { 
                event: 'Ascension Day ~ Christian Liturgical Year'
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Pentecost
      '2025-06-08': {
          events: [
              { time: '09:00 AM', event: 'English Service' },
              { time: '10:30 AM', event: 'Kikuyu Service' },
              { 
                event: 'Pentecost ~ Christian Liturgical Year'
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Trinity Sunday
      '2025-06-15': {
          events: [
              { time: '09:00 AM', event: 'English Service' },
              { time: '10:30 AM', event: 'Kikuyu Service' },
              { 
                event: 'Trinity Sunday ~ Christian Liturgical Year'
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Advent
      '2025-11-30': {
          events: [
              { time: '09:00 AM', event: 'English Service' },
              { time: '10:30 AM', event: 'Kikuyu Service' },
              { 
                event: 'Advent ~ Christian Liturgical Year'
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Christmas
      '2025-12-25': {
          events: [
              { time: '09:00 AM', event: 'English Service' },
              { time: '10:30 AM', event: 'Kikuyu Service' },
              { 
                event: 'Ash Wednesday ~ Christian Liturgical Year'
              }
          ],
          image: 'images/special-event.jpg'
      },

    //Holidays in Kenya
      //New Years Day
      '2025-01-01': {
          events: [
              { 
                event: 'New Years Day ~ Public Holiday'
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Labour Day
      '2025-05-01': {
          events: [
              { 
                event: 'Labour Day ~ Public Holiday'
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Madaraka Day
      '2025-06-01': {
          events: [
              { 
                event: 'Madaraka Day ~ Public Holiday'
              },
              { time: '09:00 AM', event: 'English Service' },
              { time: '10:30 AM', event: 'Kikuyu Service' }
          ],
          image: 'images/special-event.jpg'
      },
      //Utamaduni Day
      '2025-10-10': {
          events: [
              { 
                event: 'Utamaduni Day ~ Public Holiday'
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Mashujaa Day 
      '2025-10-20': {
          events: [
              { 
                event: 'Mashujaa Day ~ Public Holiday'
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Jamuhuri Day 
      '2025-12-12': {
          events: [
              { 
                event: 'Jamuhuri Day ~ Public Holiday'
              }
          ],
          image: 'images/special-event.jpg'
      },
      //Boxing Day 
      '2025-12-26': {
          events: [
              { 
                event: 'Boxing Day ~ Public Holiday'
              }
          ],
          image: 'images/special-event.jpg'
      }
  };

  const defaultImage = '/assets/img/pcea-kihumo-rironi-sunset-by-Phillip-Muriuki.png'; // Default background image
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
          dayDiv.className = 'kalenda__day';
          dayDiv.textContent = day;
          calendarGrid.appendChild(dayDiv);
      });

      // Adjust for Sunday-first layout
      const adjustedFirstDay = firstDay; // No need to shift, since Sunday is already first
      for (let i = 0; i < adjustedFirstDay; i++) {
          const emptyDiv = document.createElement('div');
          emptyDiv.className = 'kalenda__number';
          calendarGrid.appendChild(emptyDiv);
      }

      // Add the actual days
      for (let i = 1; i <= lastDate; i++) {
          const dateDiv = document.createElement('div');
          dateDiv.className = 'kalenda__number';
          dateDiv.textContent = i;
          const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

          dateDiv.addEventListener('click', () => updateEventDetails(fullDate));

          if (events[fullDate]) {
              dateDiv.classList.add('kalenda__number--event'); // Highlight days with events
          }

          if (i === currentDate.getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
              dateDiv.classList.add('kalenda__number--current');
              if (events[fullDate]) {
                  dateDiv.classList.add('kalenda__number--current-event');
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
