// 1. Meow Sound Logic
const meowBtn = document.getElementById('meowBtn');
meowBtn.addEventListener('click', () => {
    const audio = new Audio('https://www.myinstants.com/media/sounds/kitten-meow.mp3');
    audio.play();
});

// 2. Secret Easter Egg Logic
const searchBar = document.getElementById('catSearch');
const videoDiv = document.getElementById('videoEasterEgg');
const videoIframe = document.getElementById('catVideo');

searchBar.addEventListener('input', (e) => {
    if (e.target.value.toUpperCase() === "ILOVECATS") {
        videoDiv.classList.remove('hidden');
        // A cute cat video from YouTube
        videoIframe.src = "secret.mp4";
        searchBar.value = ""; // Clear bar
    }
});

function closeVideo() {
    videoDiv.classList.add('hidden');
    videoIframe.src = "";
}

// 3. Draggable Kitten Logic
const kitten = document.getElementById('bouncyKitten');
let isDragging = false;
let offsetX, offsetY;

kitten.addEventListener('mousedown', (e) => {
    isDragging = true;
    kitten.style.animation = 'none'; // Stop bouncing while dragging
    offsetX = e.clientX - kitten.offsetLeft;
    offsetY = e.clientY - kitten.offsetTop;
    kitten.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        kitten.style.left = `${e.clientX - offsetX}px`;
        kitten.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    kitten.style.cursor = 'grab';
    kitten.style.animation = 'bounce 2s infinite ease-in-out'; // Resume bouncing
});