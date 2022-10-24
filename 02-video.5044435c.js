const e=document.querySelector("iframe"),t=new Player(e);if(t.on("timeupdate",throttle((function({seconds:e}){localStorage.setItem("videoplayer-current-time",e)}),1e3)),localStorage.getItem("videoplayer-current-time")){const e=localStorage.getItem("videoplayer-current-time");t.setCurrentTime(e)}
//# sourceMappingURL=02-video.5044435c.js.map
