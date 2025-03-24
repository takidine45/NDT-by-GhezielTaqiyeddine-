// تغيير الفيديو عند النقر على عنصر في القائمة
const videoItems = document.querySelectorAll('.video-item');
const mainVideo = document.getElementById('main-video');
const videoTitle = document.getElementById('video-title');

videoItems.forEach(item => {
    item.addEventListener('click', () => {
        const videoSrc = item.getAttribute('data-video');
        const title = item.getAttribute('data-title');
        mainVideo.src = videoSrc;
        videoTitle.textContent = title;
        mainVideo.play();
    });
});