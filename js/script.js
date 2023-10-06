function $(id){
  return document.getElementById(id);
}
// constantes
const tButton = $('t-button');
const tLabel = $('t-label');

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

const btncalc = $("btn-calc");

const flexao = $('flexao');
const caminhada = $('caminhada');
const agachamento = $('agachamento');
const yoga = $('yoga');
const polichinelo = $('polichinelo');
const pulacorda = $('pulacorda');
const alongamento = $('alongamento');
const ponte = $('ponte');
const abdominal = $('abdominal');


// variaveis
// pp = perda peso
// cr = corrida
// b = braço
// p = perna
// y = yoga
// t = torax


var pp =0;
var cr =0;
var b =0;
var p =0;
var y =0;
var t =0;

















//funcionamento do botão
tButton.addEventListener('change', function() {
  if (tButton.checked) {
    tLabel.classList.add('checked');
    cr = cr+15;
    pp = pp+15;
    console.log(cr);
    console.log(pp);
  } else {
    tLabel.classList.remove('checked');
    cr = cr-15;
    pp = pp-15;
    console.log(cr);
    console.log(pp);
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
    tLabel5.classList.add('checked');
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

btncalc.addEventListener('click', function(){
  if(pp>10 && cr>5){
    flexao.classList.add('most');
    caminhada.classList.add('most');
    agachamento.classList.add('most');
    yoga.classList.add('most');
    polichinelo.classList.add('most');
    pulacorda.classList.add('most');
    alongamento.classList.add('most');
    ponte.classList.add('most');
    abdominal.classList.add('most');
    
  }
  else{
    flexao.classList.remove('most');
    caminhada.classList.remove('most');
    agachamento.classList.remove('most');
    yoga.classList.remove('most');
    polichinelo.classList.remove('most');
    pulacorda.classList.remove('most');
    alongamento.classList.remove('most');
    ponte.classList.remove('most');
    abdominal.classList.remove('most');
    
  }

});


/*modal-header*/
const modal = document.querySelector(".modal");

function exibirModal(){
    modal.classList.toggle("abrir-modal");
}






/*modal*/
const modal_main = document.querySelector(".modal-main");
const modal_main2 = document.querySelector(".modal-main2");
const modal_main3 = document.querySelector(".modal-main3");
const modal_main4 = document.querySelector(".modal-main4");
const modal_main5 = document.querySelector(".modal-main5");
const modal_main6 = document.querySelector(".modal-main6");
const modal_main7 = document.querySelector(".modal-main7");
const modal_main8 = document.querySelector(".modal-main8");
const modal_main9 = document.querySelector(".modal-main9");
const modal_main10 = document.querySelector(".modal-main10");
const modal_main11 = document.querySelector(".modal-main11");
const modal_main12 = document.querySelector(".modal-main12");
const modal_main13 = document.querySelector(".modal-main13");
const modal_main14 = document.querySelector(".modal-main14");
const modal_main15 = document.querySelector(".modal-main15");

var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");
var img9 = document.getElementById("myImg9");
var img10 = document.getElementById("myImg10");
var img11 = document.getElementById("myImg11");
var img12 = document.getElementById("myImg12");
var img13 = document.getElementById("myImg13");
var img14 = document.getElementById("myImg14");
var img15 = document.getElementById("myImg15");

img.onclick = function(){
  modal_main.style.display = "block";}

img2.onclick = function(){
  modal_main2.style.display = "block";}

img3.onclick = function(){
  modal_main3.style.display = "block";}

img4.onclick = function(){
  modal_main4.style.display = "block";}

img5.onclick = function(){
  modal_main5.style.display = "block";}
  
img6.onclick = function(){
  modal_main6.style.display = "block";}

img7.onclick = function(){
  modal_main7.style.display = "block";}

img8.onclick = function(){
  modal_main8.style.display = "block";}

img9.onclick = function(){
  modal_main9.style.display = "block";}
          
img10.onclick = function(){
  modal_main10.style.display = "block";}

img11.onclick = function(){
  modal_main11.style.display = "block";}

img12.onclick = function(){
  modal_main12.style.display = "block";}

img13.onclick = function(){
  modal_main13.style.display = "block";}

img14.onclick = function(){
  modal_main14.style.display = "block";}

img15.onclick = function(){
  modal_main15.style.display = "block";}


var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal_main.style.display = "none";}

var span = document.getElementsByClassName("close2")[0];
span.onclick = function() {
  modal_main2.style.display = "none";}

var span = document.getElementsByClassName("close3")[0];
span.onclick = function() {
  modal_main3.style.display = "none";}

var span = document.getElementsByClassName("close4")[0];
span.onclick = function() {
  modal_main4.style.display = "none";}

var span = document.getElementsByClassName("close5")[0];
span.onclick = function() {
  modal_main5.style.display = "none";}

var span = document.getElementsByClassName("close6")[0];
span.onclick = function() {
  modal_main6.style.display = "none";}

var span = document.getElementsByClassName("close7")[0];
span.onclick = function() {
  modal_main7.style.display = "none";}

var span = document.getElementsByClassName("close8")[0];
span.onclick = function() {
  modal_main8.style.display = "none";}

var span = document.getElementsByClassName("close9")[0];
span.onclick = function() {
  modal_main9.style.display = "none";}

var span = document.getElementsByClassName("close10")[0];
span.onclick = function() {
  modal_main10.style.display = "none";}

var span = document.getElementsByClassName("close11")[0];
span.onclick = function() {
  modal_main11.style.display = "none";}

var span = document.getElementsByClassName("clos12e")[0];
span.onclick = function() {
  modal_main12.style.display = "none";}

var span = document.getElementsByClassName("close13")[0];
span.onclick = function() {
  modal_main13.style.display = "none";}

var span = document.getElementsByClassName("close14")[0];
span.onclick = function() {
  modal_main14.style.display = "none";}

var span = document.getElementsByClassName("close15")[0];
span.onclick = function() {
  modal_main15.style.display = "none";}

