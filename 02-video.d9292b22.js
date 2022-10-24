!function(){var e=document.querySelector("iframe"),t=new Player(e);if(t.on("timeupdate",throttle((function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time",t)}),1e3)),localStorage.getItem("videoplayer-current-time")){var r=localStorage.getItem("videoplayer-current-time");t.setCurrentTime(r)}}();
//# sourceMappingURL=02-video.d9292b22.js.map
