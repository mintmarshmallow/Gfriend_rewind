window.onload = function() {

    const introMusic = document.getElementById('introMusic');
    const startRewindBtn = document.getElementById('startRewindBtn');
    const container = document.getElementById('container');
    startRewindBtn.onclick = startRewind;
    let prevScroll = 0;
    window.addEventListener('scroll', function() {
        //let volumeDecrement = 0.01;
        let volumeDecrement = window.scrollY/1200;
        /*if(window.scrollY > prevScroll && (introMusic.volume-volumeDecrement) >= 0){
          setTimeout(function() {
            introMusic.volume = introMusic.volume-volumeDecrement
            console.log(introMusic.volume);
          }, 500);
        } else if (window.scrollY < prevScroll && (introMusic.volume+volumeDecrement) <= 1){
          setTimeout(function() {
            introMusic.volume = introMusic.volume+volumeDecrement
            console.log(introMusic.volume);
          }, 500);
        }*/

          if(window.scrollY !== 0 && 1-(volumeDecrement) >= 0 && 1-(volumeDecrement) <= 1){
            introMusic.volume = 1-(volumeDecrement);
          }
        //prevScroll = window.scrollY
    })

    function startRewind (){
        introMusic.play();
        startRewindBtn.classList.add('unvisible');
        container.classList.remove('unvisible');
    }

}
