//구현하려 했지만 실패힜던 코드들


//본문 페이드인 효과를 구현하려 했던 코드, setTimeout과 setInterval로 구현
while(currentTextIndex <= allTextCount) {
  console.log(currentTextIndex);
  if(currentTextIndex !== 1) {
    let index = currentTextIndex;
    setTimeout(function() {
      document.querySelector(`.intro .intro-text p:nth-child(${index - 1})`)
        .classList.remove('visible');
        document.querySelector(`.intro .intro-text p:nth-child(${currentTextIndex})`)
          .classList.add('visible');

    }, 2000)
    if(currentTextIndex <= allTextCount) {
      currentTextIndex++;
    }


  } else {
    setTimeout(function() {
      document.querySelector(`.intro .intro-text p:nth-child(${currentTextIndex})`)
        .classList.add('visible');

    })
    if(currentTextIndex <= allTextCount) {
      currentTextIndex++;
    }
  }
}
var showTextInterval = setInterval(function() {
  console.log(currentTextIndex);
  if(corruntTextIndex !== 0) {
    if(correntTextIndex === 1) {
      document.querySelector(`.intro .intro-text h2)`)
        .classList.remove('visible');
    } else {
      document.querySelector(`.intro .intro-text p:nth-child(${corruntTextIndex - 1})`)
        .classList.remove('visible');
    }

    document.querySelector(`.intro .intro-text p:nth-child(${corruntTextIndex})`)
      .classList.add('visible');

  }
  if(corruntTextIndex === 1) {
    clearInterval(showTextInterval)
  }
}, 3000)
setTimeout(function() {
  innerIntroTextH2.classList.remove('visible');
  document.querySelector('#intro-text p').classList.remove('visible');
}, 3000)

//스크롤에 따른 볼륩감소 기는을 구현하려던 코드
let volumeDecrement = 0.01;
if(window.scrollY > prevScroll && (introMusic.volume-volumeDecrement) >= 0){
  setTimeout(function() {
    introMusic.volume = introMusic.volume-volumeDecrement
    console.log(introMusic.volume);
  }, 500);
} else if (window.scrollY < prevScroll && (introMusic.volume+volumeDecrement) <= 1){
  setTimeout(function() {
    introMusic.volume = introMusic.volume+volumeDecrement
    console.log(introMusic.volume);
  }, 500);
}
prevScroll = window.scrollY
