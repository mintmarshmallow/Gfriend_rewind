
window.onload = function() {
    const introMusic = document.getElementById('introMusic');
    const xIcon = document.getElementById('xIcon');
    const intro = document.getElementById('intro');
    const innerIntroTextH2 = document.querySelector('#intro-text h2');
    const startRewindBtn = document.getElementById('startRewindBtn');
    startRewindBtn.onclick = startRewind;
    let prevScroll = 0;
    introMusic.volume = 0.1;
    xIcon.addEventListener('click', function() {
      let currentTextIndex = 1;
      introPopUp.classList.remove('visible');
      introPopUp.classList.add('unvisible');
      xIcon.classList.add('ununvisible');
      intro.classList.add('blured');
      let allTextCount = 5;
      let interval = setInterval(function() {
          if(currentTextIndex !== 1) {
            document.querySelector(`.intro .intro-text p:nth-child(${currentTextIndex - 1})`)
              .classList.remove('visible');
          }
          document.querySelector(`.intro .intro-text p:nth-child(${currentTextIndex})`)
            .classList.add('visible');
          console.log(currentTextIndex)
          if(currentTextIndex === allTextCount) {
            setTimeout(function() {
              document.getElementById('container')
                .classList.add('show');
            }, 2000)
          }
          currentTextIndex++;
        }, 4000);
      setTimeout(function(){
        clearInterval(interval);
      }, allTextCount*4000)

    })
    window.addEventListener('scroll', function() {

        let volumeDecrement = window.scrollY/10000;

          if(window.scrollY !== 0 && 0.1-(volumeDecrement) >= 0 && 0.1-(volumeDecrement) <= 1){

            introMusic.volume = 0.1-(volumeDecrement);
          }

    })

    function startRewind (){
        const startRewindBtn = document.getElementById('startRewindBtn');
        const container = document.getElementById('container');
        const introPopUp = document.getElementById('introPopUp');
        const projectInfo = document.getElementById('projectInfo');

        introMusic.play();
        startRewindBtn.classList.add('unvisible');
        container.classList.remove('unvisible');
        introPopUp.classList.remove('unvisible')
        introPopUp.classList.add('visible');
        projectInfo.classList.remove('unvisible');
        xIcon.classList.remove('unvisible')
    }

}
