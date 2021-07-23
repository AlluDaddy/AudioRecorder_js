
let audioIN = { audio: true };
navigator.mediaDevices.getUserMedia(audioIN)
.then(function (mediaStreamObj) {
          let audio = document.querySelector('audio');
          let start = document.getElementById('btnStart');
          let stop = document.getElementById('btnStop');
          let playAudio = document.getElementById('adioPlay');
          let mediaRecorder = new MediaRecorder(mediaStreamObj);
          let dataArray = []; 
          
  start.addEventListener('click', function (ev) {
    mediaRecorder.start();  })

  stop.addEventListener('click', function (ev) {
    mediaRecorder.stop();   });

  mediaRecorder.ondataavailable = function (ev) {
    dataArray.push(ev.data);  }

  mediaRecorder.onstop = function (ev) {
        let audioData = new Blob(dataArray,{'type': 'audio/mp3;' });
        let audioSrc = window.URL.createObjectURL(audioData);
        dataArray =[];
        playAudio.src = audioSrc; }})

.catch(function (err) {
  console.log(err.name, err.message);});
