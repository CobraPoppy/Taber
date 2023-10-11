const iframes = document.querySelectorAll('iframe');
const links = document.querySelectorAll('.btns a');
let currentFrameIndex = 0;

function changeIframe() {
  iframes[currentFrameIndex].style.display = 'none';
  currentFrameIndex = (currentFrameIndex + 1) % iframes.length;
  iframes[currentFrameIndex].style.display = 'block';
  links[currentFrameIndex].click();
}

setInterval(changeIframe, 2000);
changeIframe();