(function(){
const frontWallDistance = document.querySelector('.speaker-frontwall-distance');
const leftSideWallDistance = document.querySelector('.left-speaker-sidewall-distance');
const rightSideWallDistance = document.querySelector('.right-speaker-sidewall-distance');
const listeningPositionDistance = document.querySelector('.listening-position-distance');
const displayLength = document.querySelector('.left-wall-dimension');
const displayWidth = document.querySelector('.rear-wall-dimension');
const submitButton = document.querySelector('.submit-button');
const length = document.getElementById('#room-length');
const width = document.getElementById('#room-width');



submitButton.addEventListener("click", function(){
  displayLength.textContent = length.value;
  displayWidth.textContent = width.value;
  
})
})()



















