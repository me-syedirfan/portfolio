// Rotating Text
const textItems = document.querySelectorAll('.text-item');
let currentIndex = 0;

function rotateText() {
    // Remove active class from current item
    textItems[currentIndex].classList.remove('active');

    // Move to next item
    currentIndex = (currentIndex + 1) % textItems.length;

    // Add active class to new item
    textItems[currentIndex].classList.add('active');
}

// Rotate every 4 seconds
setInterval(rotateText, 4000);

// Current Time Update
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const hoursStr = String(hours).padStart(2, '0');

    const timeString = `${hoursStr}:${minutes} ${ampm}`;
    document.getElementById('current-time').textContent = timeString;
}

// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);
