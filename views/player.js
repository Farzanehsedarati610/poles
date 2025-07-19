function playAudio(fileName) {
  const player = document.getElementById('audio-player');
  player.src = `data/logs/${fileName}`;
  player.play();
}

