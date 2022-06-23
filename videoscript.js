let videoSrc = localStorage.getItem("bgVid");

var video = document.getElementById('bgVideoId');
var source = document.getElementById('bgSourceId');

source.setAttribute('src', videoSrc);

videoSrc.load();
videoSrc.play();
