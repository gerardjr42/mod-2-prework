// Progress Bar
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

// switching icon when pause or play
function playPause() {
  if(ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

// updating value of range slider
// moves foward as song progresses
// updates every 0.5s
if(song.play()){
  setInterval(()=>{
    progress.value = song.currentTime;
  }, 500);
}

// functionality to play song at current time, when dragging progress bar to a specific point.
progress.onchange = function() {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
}