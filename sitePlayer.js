var yourAudioFile = '<YOUR-AUDIO-HERE>'
var player = new Tone.Player('http://localhost:3001/' + yourAudioFile).toMaster();
document.getElementById('toggle-start').addEventListener('click', toggleStart)
document.getElementById('back').addEventListener('click', skipBackward)
document.getElementById('forward').addEventListener('click', skipForward)

function toggleStart() {
  player.start();
  changePlayToStop();
  document.getElementById('now-playing').innerHTML = 'Now Playing: violin.m4a'
}

function toggleStop() {
  player.stop();
  changeStopToPlay();
  document.getElementById('now-playing').innerHTML = ''
}

function changePlayToStop(){
  document.getElementById('play-stop').className = 'fas fa-stop'
  document.getElementById('toggle-start').removeEventListener('click', toggleStart)
  document.getElementById('toggle-start').addEventListener('click', toggleStop)
}

function changeStopToPlay(){
  document.getElementById('play-stop').className = 'fas fa-play'
  document.getElementById('toggle-start').removeEventListener('click', toggleStop)
  document.getElementById('toggle-start').addEventListener('click', toggleStart)
}

function skipBackward(){
  player.restart();
}

function skipForward(){
  player.seek('+1m')
}
