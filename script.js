// <script>
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',     // Replace with your video ID
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      function onPlayerReady(event) {
        // event.target.pauseVideo();
        if(onPlayerStateChange(event) != 3){
        event.target.playVideo();
          
        }
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        // if (event.data == YT.PlayerState.PLAYING && !done) {
        //   setTimeout(stopVideo, 6000);
        //   done = true;
        // }
        console.log(event.data);
        return(event.data);
      }
      function stopVideo() {
        player.stopVideo();
      }
    // </script>