    var device = navigator.mediaDevices.getUserMedia({ audio: true });
    var audiolist = [];


    device.then( stream => {
      var mediaRecorder = new MediaRecorder(stream);
       mediaRecorder.ondataavailable = e=>{
         audiolist.push(e.data);
         if (mediaRecorder.state == 'inactive'){
           var blob = new Blob(audiolist, {type: 'audio/webm'});
           var audio = document.getElementById('audio');
           var mainaudio = document.createElement('audio');
           mainaudio.setAttribute('controls','controls');
           audio.append(mainaudio);
           mainaudio.innerHTML = '<source src="'+ URL.createObjectURL(blob) + ' " type="video.webm"/>';


         }
       } 
       mediaRecorder.start(100);
       setTimeout(()=>{
                  mediaRecorder.stop(); } , 3000);

      
    })







    // mediaRecorder.addEventListener("dataavailable", event => {
    // audioChunks.push(event.data);});




//     const stop = () =>
//             new Promise(resolve => {
//               mediaRecorder.addEventListener("stop", () => {
//                 const audioBlob = new Blob(audioChunks);
//                 const audioUrl = URL.createObjectURL(audioBlob);
//                 const audio = new Audio(audioUrl);
//                 const play = () => audio.play();
//                 resolve({ audioBlob, audioUrl, play });});
//     mediaRecorder.stop();});
// resolve({ start, stop });});


// const sleep = time => new Promise(resolve => setTimeout(resolve, time));


// const handleAction = async () => {
//   const recorder = await recordAudio();
//   const actionButton = document.getElementById('action');
//   actionButton.disabled = true;
//   recorder.start();
//   await sleep(3000);
//   const audio = await recorder.stop();
//   audio.play();
//   await sleep(3000);
//   actionButton.disabled = false;
// }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let recordedBlobs



// const recordedVideo = document.querySelector('video#recorded');
// const recordButton = document.querySelector('button#record');
// const playButton = document.querySelector('button#play');





// document.querySelector('button#start').addEventListener('click',  () => {
//         let video= document.getElementById("gum")
//         recordButton.disabled =false
//         const setup=()=>{
//             navigator.mediaDevices.getUserMedia({

//                 video :{width :600,height :400}
//             })
//             .then((stream)=>{
//                 video.srcObject=stream
//                 window.stream=stream
//             })
            
            
            
//         }
//         setup()
//   })

//   recordButton.addEventListener('click',()=>{
//       if (recordButton.textContent==="Record"){
//           startrecording()
//       }
//       else{
//           stoprecording()
//           recordButton.textContent="Record"
//           playButton.disabled=false
//       }
//   })

//   function stoprecording() {
//       mediaRecorder.stop()
//   }

//   function startrecording(){
//       recordedBlobs=[]
//       let options = {mimeType: 'video/webm;codecs=vp9,opus'};
//       try{
//         mediaRecorder = new MediaRecorder(window.stream, options);
//       }
//       catch(e){
//         console.log(e)
//       }
//       recordButton.textContent="Stop Recording"
//       playButton.disabled=true


//       mediaRecorder.onstop = (event) => {
//         console.log('Recorder stopped: ');
//       }
//       mediaRecorder.ondataavailable = handleDataAvailable;
//         mediaRecorder.start();
//   }

//   function handleDataAvailable(event) {
//     console.log('handleDataAvailable', event);
//     if (event.data && event.data.size > 0) {
//       recordedBlobs.push(event.data);
//     }
//   }
//   playButton.addEventListener('click', () => {
//     const superBuffer = new Blob(recordedBlobs, {type: 'video/webm'});
//     recordedVideo.src = null;
//     recordedVideo.srcObject = null;
//     recordedVideo.src = window.URL.createObjectURL(superBuffer);
//     // recordedVideo.controls = true;
//     // recordedVideo.play();
//   });