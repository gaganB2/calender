document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.querySelector('.calendar');
    const eventModal = document.getElementById('eventModal');
    const closeModal = document.querySelector('.close');
    const addEventBtn = document.getElementById('addEventBtn');
    const eventInput = document.getElementById('eventInput');
    let selectedDay;

    // Generate days for the calendar
    for (let i = 1; i <= 31; i++) {
        const day = document.createElement('div');
        day.className = 'day';
        day.textContent = i;
        calendar.appendChild(day);

        // Add click event to select/deselect day
        day.addEventListener('click', function () {
            selectedDay = this;
            openModal();
        });
    }

    function openModal() {
        eventModal.style.display = 'flex';
    }

    function closeModalFn() {
        eventModal.style.display = 'none';
        eventInput.value = '';
    }

    closeModal.addEventListener('click', closeModalFn);

    window.addEventListener('click', function (event) {
        if (event.target === eventModal) {
            closeModalFn();
        }
    });

    addEventBtn.addEventListener('click', function () {
        const eventName = eventInput.value.trim();
        if (eventName !== '') {
            addEventToDay(selectedDay, eventName);
            closeModalFn();
        }
    });

    function addEventToDay(day, eventName) {
        const event = document.createElement('div');
        event.className = 'event';
        event.innerHTML = `<span>${eventName}</span> <span class="delete">x</span>`;
        
        event.querySelector('.delete').addEventListener('click', function () {
            day.removeChild(event);
        });
        
        day.appendChild(event);
        day.classList.add('selected');
    }
});
// lol i have to add clear events so that after deleting it should not be opening or asking for new events or task to schedule