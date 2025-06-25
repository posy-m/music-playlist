const lpImg = document.getElementById('lpImg')
const playBtn = document.getElementById('playBtn')

let isPlaying = false;

playBtn.addEventListener('click', () => {
  if (!isPlaying) {
    lpImg.classList.add('spin');
    playBtn.textContent = '일시정지';
    isPlaying = true;
  } else {
    lpImg.classList.remove('spin');
    playBtn.textContent = '재생'
    isPlaying = false
  }
})