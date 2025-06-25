const lpImg = document.getElementById("LpImg");
const playBtnImg = document.getElementById("play-btn");

let isPlaying = false;

playBtnImg.parentElement.addEventListener("click", () => {
  if (!isPlaying) {
    // LP 이미지 회전 시작
    lpImg.classList.add("spin");

    // 버튼 이미지 '일시정지'로 변경
    playBtnImg.src = "./img/temporary.png";
    playBtnImg.alt = "일시정지 버튼";

    isPlaying = true;
  } else {
    // LP 회전 멈춤
    lpImg.classList.remove("spin");

    // 버튼 이미지 '재생'으로 변경
    playBtnImg.src = "./img/play.png";
    playBtnImg.alt = "재생 버튼";

    isPlaying = false;
  }
});
