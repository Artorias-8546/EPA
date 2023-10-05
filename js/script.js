const tButton = document.getElementById('t-button');
const tLabel = document.getElementById('t-label');

var i =0;
tButton.addEventListener('change', function() {
  if (tButton.checked) {
    tLabel.classList.add('checked');
    i = i+1;
    console.log(i);
  } else {
    tLabel.classList.remove('checked');
    i = i-1;
    console.log(i);
  }
});
