// constantes
const tButton = document.getElementById('t-button');
const tLabel = document.getElementById('t-label');

const tButton2 = document.getElementById('t-button2');
const tLabel2 = document.getElementById('t-label2');

const tButton3 = document.getElementById('t-button3');
const tLabel3 = document.getElementById('t-label3');

const tButton4 = document.getElementById('t-button4');
const tLabel4 = document.getElementById('t-label4');

const tButton5 = document.getElementById('t-button5');
const tLabel5 = document.getElementById('t-label5');

const tButton6 = document.getElementById('t-button6');
const tLabel6 = document.getElementById('t-label6');

const tButton7 = document.getElementById('t-button7');
const tLabel7 = document.getElementById('t-label7');

const tButton8 = document.getElementById('t-button8');
const tLabel8 = document.getElementById('t-label8');

const tButton9 = document.getElementById('t-button9');
const tLabel9 = document.getElementById('t-label9');

const tButton10 = document.getElementById('t-button10');
const tLabel10 = document.getElementById('t-label10');

const tButton11 = document.getElementById('t-button11');
const tLabel11 = document.getElementById('t-label11');

const tButton12 = document.getElementById('t-button12');
const tLabel12 = document.getElementById('t-label12');

const tButton13 = document.getElementById('t-button13');
const tLabel13 = document.getElementById('t-label13');

const tButton14 = document.getElementById('t-button14');
const tLabel14 = document.getElementById('t-label14');



// variaveis
// pp = perda peso
// cr = corrida
// b = braço
// p = perna
// y = yoga
// t = torax


var i =0;

















//funcionamento do botão
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
 
tButton2.addEventListener('change', function() {
    if (tButton2.checked) {
      tLabel2.classList.add('checked');
    } else{
      tLabel2.classList.remove('checked');
    }
});

tButton3.addEventListener('change', function() {
    if (tButton3.checked) {
      tLabel3.classList.add('checked');
    } else{
      tLabel3.classList.remove('checked');
    }
});

tButton4.addEventListener('change', function() {
if (tButton4.checked) {
    tLabel4.classList.add('checked');
} else{
    tLabel4.classList.remove('checked');
}
});

tButton5.addEventListener('change', function() {
if (tButton5.checked) {
    tLabel5.classList.add('checked');5
} else{
    tLabel5.classList.remove('checked');
}
});

tButton6.addEventListener('change', function() {
if (tButton6.checked) {
    tLabel6.classList.add('checked');
} else{
    tLabel6.classList.remove('checked');
}
});

tButton7.addEventListener('change', function() {
if (tButton7.checked) {
    tLabel7.classList.add('checked');
} else{
    tLabel7.classList.remove('checked');
}
});

tButton8.addEventListener('change', function() {
if (tButton8.checked) {
    tLabel8.classList.add('checked');
} else{
    tLabel8.classList.remove('checked');
}
});

tButton9.addEventListener('change', function() {
if (tButton9.checked) {
    tLabel9.classList.add('checked');
} else{
    tLabel9.classList.remove('checked');
}
});

tButton10.addEventListener('change', function() {
if (tButton10.checked) {
    tLabel10.classList.add('checked');
} else{
    tLabel10.classList.remove('checked');
}
});

tButton11.addEventListener('change', function() {
    if (tButton11.checked) {
      tLabel11.classList.add('checked');
    } else{
      tLabel11.classList.remove('checked');
    }
});

tButton12.addEventListener('change', function() {
    if (tButton12.checked) {
      tLabel12.classList.add('checked');
    } else{
      tLabel12.classList.remove('checked');
    }
  });

tButton13.addEventListener('change', function() {
if (tButton13.checked) {
    tLabel13.classList.add('checked');
} else{
    tLabel13.classList.remove('checked');
}
});

tButton14.addEventListener('change', function() {
if (tButton14.checked) {
    tLabel14.classList.add('checked');
} else{
    tLabel14.classList.remove('checked');
}
});




























const modal = document.querySelector(".modal");

function exibirModal(){
    modal.classList.toggle("aberto");
}