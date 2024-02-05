document.addEventListener('DOMContentLoaded', function() {
  var audioPlayer = document.getElementById('audioPlayer');
  var playPauseButton = document.getElementById('playPauseButton');
  var volumeSlider = document.getElementById('volumeSlider');
  var progressSlider = document.getElementById('progressSlider');

  playPauseButton.addEventListener('click', togglePlayPause);
  volumeSlider.addEventListener('input', adjustVolume);
  progressSlider.addEventListener('input', seek);

  function togglePlayPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.textContent = 'Pause';
    } else {
      audioPlayer.pause();
      playPauseButton.textContent = 'Play';
    }
  }

  function adjustVolume() {
    audioPlayer.volume = volumeSlider.value;
  }

  function seek() {
    var seekPosition = audioPlayer.duration * (progressSlider.value / 100);
    audioPlayer.currentTime = seekPosition;
  }

  audioPlayer.addEventListener('timeupdate', function() {
    var progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressSlider.value = progress;
  });
});
