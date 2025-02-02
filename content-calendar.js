// Calendar data structure
let calendarData = {
    events: [],
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear()
};

// Add new content event
function addContentEvent() {
    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const type = document.getElementById('eventType').value;
    
    const event = {
        id: Date.now(),
        title,
        date,
        type,
        status: 'planned'
    };
    
    calendarData.events.push(event);
    saveCalendarData();
    renderCalendar();
}

// Render calendar
function renderCalendar() {
    const calendarGrid = document.querySelector('.calendar-grid');
    calendarGrid.innerHTML = '';
    
    // Add days of week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'text-center font-bold';
        dayElement.textContent = day;
        calendarGrid.appendChild(dayElement);
    });
    
    // Add calendar days
    const firstDay = new Date(calendarData.currentYear, calendarData.currentMonth, 1);
    const lastDay = new Date(calendarData.currentYear, calendarData.currentMonth + 1, 0);
    
    // Add empty cells for days before first day of month
    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'min-h-[100px] border rounded p-2 bg-gray-50';
        calendarGrid.appendChild(emptyCell);
    }
    
    // Add days with events
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const cell = document.createElement('div');
        cell.className = 'min-h-[100px] border rounded p-2 hover:bg-gray-50';
        
        // Add date number
        const dateNumber = document.createElement('div');
        dateNumber.className = 'text-sm text-gray-500';
        dateNumber.textContent = day;
        cell.appendChild(dateNumber);
        
        // Add events for this day
        const dayEvents = calendarData.events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.getDate() === day &&
                   eventDate.getMonth() === calendarData.currentMonth &&
                   eventDate.getFullYear() === calendarData.currentYear;
        });
        
        dayEvents.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.className = `mt-1 text-xs p-1 rounded ${getEventTypeClass(event.type)}`;
            eventElement.textContent = event.title;
            cell.appendChild(eventElement);
        });
        
        calendarGrid.appendChild(cell);
    }
}

// Helper functions
function getEventTypeClass(type) {
    const classes = {
        video: 'bg-blue-100 text-blue-800',
        blog: 'bg-green-100 text-green-800',
        social: 'bg-purple-100 text-purple-800'
    };
    return classes[type] || 'bg-gray-100 text-gray-800';
}

function saveCalendarData() {
    localStorage.setItem('calendarData', JSON.stringify(calendarData));
}

function loadCalendarData() {
    const saved = localStorage.getItem('calendarData');
    if (saved) {
        calendarData = JSON.parse(saved);
        renderCalendar();
    }
}

// Initialize calendar
document.addEventListener('DOMContentLoaded', loadCalendarData); 