const imgSrc = 'https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg?auto=compress&cs=tinysrgb&h=130';
const audioUrl = 'https://opengameart.org/sites/default/files/peaceatlast_piano_0.ogg';
const btnPlay = document.getElementById('btn-play');
const btnPause = document.getElementById('btn-pause');
const btnStop = document.getElementById('btn-stop');
const seekBar = document.getElementById('seek-bar');
const audioTag = document.getElementById('audio-tag');
const btnVolume = document.getElementById('btn-volume');
const btnMute = document.getElementById('btn-mute');

window.addEventListener('load', ()=> {
    audioTag.src = audioUrl;
})

audioTag.load();

// Play-Pause-Stop button functionality:
//      Stop and puse button only visible when audio is actually playing, otherwise if paused-state/Stopped state then only Play button visible
btnPlay.style.display='block';
btnPause.style.display = 'none';
btnStop.style.visibility = 'hidden';
const playPauseToggleButton = () => {
    btnPlay.style.display = audioTag.paused ? 'none' : 'block';
    btnPause.style.display = audioTag.paused ? 'block' : 'none';
    btnStop.style.visibility= audioTag.paused ? 'visible' : 'hidden';
    if(audioTag.paused) audioTag.play();
    else audioTag.pause();
};
btnPlay.addEventListener('click',playPauseToggleButton);
btnPause.addEventListener('click', playPauseToggleButton);
btnStop.addEventListener('click', playPauseToggleButton);

// SEEK-BAR:
//      Seeking Music on clicking on seek bar
seekBar.addEventListener('click', e => {
    audioTag.pause();
    let seekBarTotalWidth = seekBar.clientWidth;
    let clickPointXOffset = e.offsetX;
    let audioTotalDuration = audioTag.duration;

    audioTag.currentTime = (clickPointXOffset / seekBarTotalWidth) * audioTotalDuration;
    audioTag.play();
});

//      Updating seek progress bar UI:
audioTag.addEventListener('timeupdate', e => {
    const audioCurrentTime = e.target.currentTime;
    const audioTotalDuration = e.target.duration;

    let seekBarWidth = (audioCurrentTime / audioTotalDuration) * 100;
    seekBar.style.width = `${seekBarWidth}%`;

    let currentTimeElement = document.querySelector('#play-modal-container #current-time');
    let durationElement = document.querySelector('#play-modal-container #total-time');

    audioTag.addEventListener('loadeddata', () => {
        // update playing song's total duration
        let audioDuration = audioTag.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) {
            //if sec is less than 10 then add 0 before it
            totalSec = `0${totalSec}`;
        }
        durationElement.innerText = `${totalMin}:${totalSec}`;
    });

    // update playing song's current time
    let currentMin = Math.floor(audioCurrentTime / 60);
    let currentSec = Math.floor(audioCurrentTime % 60);
    if (currentSec < 10) {
        //if sec is less than 10 then add 0 before it
        currentSec = `0${currentSec}`;
    }
    currentTimeElement.innerText = `${currentMin}:${currentSec}`;
});

// VOLUME: Section:
//      Mute-Unmute volume:
const toggleMute = ()=>{
    audioTag.muted = audioTag.muted? false : true;
    btnVolume.style.display = audioTag.muted? 'block':'none';
    btnMute.style.display = audioTag.muted ? 'none' : 'block';
};
audioTag.muted=false;
audioTag.volume = 0.5;
btnVolume.style.display = 'none';
btnMute.style.display = 'block';
btnMute.addEventListener('click',toggleMute);
btnVolume.addEventListener('click',toggleMute);