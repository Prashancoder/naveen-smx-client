// videoControl.js
const videos = [
    "assets/images/video-1.mp4",
    "assets/images/video-2.mp4",
    "assets/images/video-3.mp4"
];

let currentVideoIndex = 0;

function changeSlide(direction) {
    currentVideoIndex += direction;
    
    if (currentVideoIndex < 0) {
        currentVideoIndex = videos.length - 1;
    } else if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0;
    }

    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = videos[currentVideoIndex];
    videoPlayer.play();
}