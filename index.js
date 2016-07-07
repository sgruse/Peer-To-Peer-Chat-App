'use strict';

navigator.webkitGetUserMedia({
  video: true,
  audio: false
}, function(stream) {


  const Peer = require('simple-peer');
  const peer = new Peer({
    initiator: location.hash === '#init',
    trickle: false,
    stream: stream
  });

  peer.on('signal', (data) => {
    document.getElementById('yourID').value = JSON.stringify(data);
  });

  document.getElementById('connect').addEventListener('click', () => {
    var otherID = JSON.parse(document.getElementById('otherID').value);
    peer.signal(otherID);
  });

  document.getElementById('send').addEventListener('click', () => {
    var yourMessage = document.getElementById('yourMessage').value;
    console.log('Your Message is : ', yourMessage);
    peer.send(yourMessage);
  });

  peer.on('data', (data) => {
    console.log('DATA IS COMING THROUGH');
    document.getElementById('messages').textContent += data + '\n';
  });

  peer.on('stream', (stream) => {
    var video = document.createElement('video');
    document.body.appendChild(video);
    video.src = window.URL.createObjectURL(stream);
    video.play();
  })

}, function (err) {
  console.log(err);
})
