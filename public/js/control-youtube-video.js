var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("trailer-video-player", {
    videoId: "pjR51wO7vII",
  });
}

const button = document.getElementById("trailer-btn");
const trailerBg = document.getElementById("trailer-video-background");
const trailerPlayer = document.getElementById("trailer-video-player");

button.addEventListener("click", () => {
  trailerBg.style.display = "block";
});

trailerBg.addEventListener("click", () => {
  if (event.target !== trailerPlayer) {
    trailerBg.style.display = "none";
    player.stopVideo();
  }
});
