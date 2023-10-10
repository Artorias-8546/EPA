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

const tButton15 = document.getElementById('t-button15');
const tLabel15 = document.getElementById('t-label15');

const tButton16 = document.getElementById('t-button16');
const tLabel16 = document.getElementById('t-label16');

const tButton17 = document.getElementById('t-button17');
const tLabel17 = document.getElementById('t-label17');

const tButton18 = document.getElementById('t-button18');
const tLabel18 = document.getElementById('t-label18');

const tButton19 = document.getElementById('t-button19');
const tLabel19 = document.getElementById('t-label19');

const tButton20 = document.getElementById('t-button20');
const tLabel20 = document.getElementById('t-label20');

const tButton21 = document.getElementById('t-button21');
const tLabel21 = document.getElementById('t-label21');

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
const soconoar = $('soconoar');
const montanha = $('montanha');
const lunge = $('lunge');
const pullup = $('pullup');


// variaveis
// pp = perda peso
// cr = corrida
// b = braço
// p = perna
// y = yoga
// tx = torax
// ab = peitoral
// cs = costas
// ec = equilibrio corporal

var pp =0;
var cr =0;
var b =0;
var p =0;
var y =0;
var tx =0;
var ab = 0;
var cs = 0;
var ec = 0;










//funcionamento do botão

tButton.addEventListener('change', function() {
  if (tButton.checked) {
    tLabel.classList.add('checked');
    pp = pp + 10;
    p = p + 3.34;
    cr = cr + 10;
    b = b + 3.34; 
    tx = tx + 3.34;
    ab = ab + 3.34;
    cs = cs + 3.34;

    console.log("");
    console.log("Perda peso: "+pp);
    console.log("Perna: "+p);
    console.log("Yoga: "+y);
    console.log("Correr: "+cr);
    console.log("Braço: "+b);
    console.log("Torax: "+tx);
    console.log("Abôme: "+ab);
    console.log("Costas: "+cs);
    console.log("Equilíbrio corporal: "+ec);
    console.log("");

  } else {
    tLabel.classList.remove('checked');
    pp = pp - 10;
    p = p - 3.34;
    cr = cr - 10;
    b = b - 3.34; 
    tx = tx - 3.34;
    ab = ab - 3.34;
    cs = cs - 3.34;

    console.log("");
    console.log("Perda peso: "+pp);
    console.log("Perna: "+p);
    console.log("Yoga: "+y);
    console.log("Correr: "+cr);
    console.log("Braço: "+b);
    console.log("Torax: "+tx);
    console.log("Abôme: "+ab);
    console.log("Costas: "+cs);
    console.log("Equilíbrio corporal: "+ec);
    console.log("");
  }
});
 
tButton2.addEventListener('change', function() {
    if (tButton2.checked) {
      tLabel2.classList.add('checked');
 
      tx = tx + 5;
      ab = ab + 5;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");
     
    } else{
      tLabel2.classList.remove('checked');
      tx = tx - 5;
      ab = ab - 5;
      
      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");
    }
});

tButton3.addEventListener('change', function() {
    if (tButton3.checked) {
      tLabel3.classList.add('checked');
      pp = pp + 3.34;
      p = p + 3.34;
      cr = cr + 5;
      b = b + 2; 
      tx = tx + 3.34;
      ab = ab + 3.34;
      ec = ec + 3.34;
      cs = cs + 3.34;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

    } else{
      tLabel3.classList.remove('checked');
      pp = pp - 3.34;
      p = p - 3.34;
      cr = cr - 5;
      b = b - 2; 
      tx = tx - 3.34;
      ab = ab - 3.34;
      ec = ec - 3.34;
      cs = cs - 3.34;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");
    }
});

tButton4.addEventListener('change', function() {
if (tButton4.checked) {
    tLabel4.classList.add('checked');

    p = p + 5;
    cr = cr + 6.68;
   
    console.log("");
    console.log("Perda peso: "+pp);
    console.log("Perna: "+p);
    console.log("Yoga: "+y);
    console.log("Correr: "+cr);
    console.log("Braço: "+b);
    console.log("Torax: "+tx);
    console.log("Abôme: "+ab);
    console.log("Costas: "+cs);
    console.log("Equilíbrio corporal: "+ec);
    console.log("");
    
} else{
    tLabel4.classList.remove('checked');

    p = p - 5;
    cr = cr - 6.68;
   
    console.log("");
    console.log("Perda peso: "+pp);
    console.log("Perna: "+p);
    console.log("Yoga: "+y);
    console.log("Correr: "+cr);
    console.log("Braço: "+b);
    console.log("Torax: "+tx);
    console.log("Abôme: "+ab);
    console.log("Costas: "+cs);
    console.log("Equilíbrio corporal: "+ec);
    console.log("");
}
});

tButton5.addEventListener('change', function() {
if (tButton5.checked) {
    tLabel5.classList.add('checked');

    b = b + 5; 

    console.log("");
    console.log("Perda peso: "+pp);
    console.log("Perna: "+p);
    console.log("Yoga: "+y);
    console.log("Correr: "+cr);
    console.log("Braço: "+b);
    console.log("Torax: "+tx);
    console.log("Abôme: "+ab);
    console.log("Costas: "+cs);
    console.log("Equilíbrio corporal: "+ec);
    console.log("");
  
} else{
    tLabel5.classList.remove('checked');
    b = b - 5; 

    console.log("");
    console.log("Perda peso: "+pp);
    console.log("Perna: "+p);
    console.log("Yoga: "+y);
    console.log("Correr: "+cr);
    console.log("Braço: "+b);
    console.log("Torax: "+tx);
    console.log("Abôme: "+ab);
    console.log("Costas: "+cs);
    console.log("Equilíbrio corporal: "+ec);
    console.log("");
}
});

tButton6.addEventListener('change', function() {
if (tButton6.checked) {
    tLabel6.classList.add('checked');
    pp = pp + 5;
    cr = cr + 3.34;
    y = y + 5;
    ec = ec + 3.34;

    console.log("");
    console.log("Perda peso: "+pp);
    console.log("Perna: "+p);
    console.log("Yoga: "+y);
    console.log("Correr: "+cr);
    console.log("Braço: "+b);
    console.log("Torax: "+tx);
    console.log("Abôme: "+ab);
    console.log("Costas: "+cs);
    console.log("Equilíbrio corporal: "+ec);
    console.log("");

} else{
    tLabel6.classList.remove('checked');
    pp = pp - 5;
    cr = cr - 3.34;
    y = y - 5;
    ec = ec - 3.34;

    console.log("");
    console.log("Perda peso: "+pp);
    console.log("Perna: "+p);
    console.log("Yoga: "+y);
    console.log("Correr: "+cr);
    console.log("Braço: "+b);
    console.log("Torax: "+tx);
    console.log("Abôme: "+ab);
    console.log("Costas: "+cs);
    console.log("Equilíbrio corporal: "+ec);
    console.log("");
}
});

tButton7.addEventListener('change', function() {
if (tButton7.checked) {
    tLabel7.classList.add('checked');
    b = b+10;

    console.log("");
    console.log("Perda peso: "+pp);
    console.log("Perna: "+p);
    console.log("Yoga: "+y);
    console.log("Correr: "+cr);
    console.log("Braço: "+b);
    console.log("Torax: "+tx);
    console.log("Abôme: "+ab);
    console.log("Costas: "+cs);
    console.log("Equilíbrio corporal: "+ec);
    console.log("");

} else{
    tLabel7.classList.remove('checked');
    b = b-10;

    console.log("");
    console.log("Perda peso: "+pp);
    console.log("Perna: "+p);
    console.log("Yoga: "+y);
    console.log("Correr: "+cr);
    console.log("Braço: "+b);
    console.log("Torax: "+tx);
    console.log("Abôme: "+ab);
    console.log("Costas: "+cs);
    console.log("Equilíbrio corporal: "+ec);
    console.log("");
}
});

tButton8.addEventListener('change', function() {
if (tButton8.checked) {
    tLabel8.classList.add('checked');
    ab = ab +2;
    cs = cs +5;
    
    console.log("");
    console.log("Perda peso: "+pp);
    console.log("Perna: "+p);
    console.log("Yoga: "+y);
    console.log("Correr: "+cr);
    console.log("Braço: "+b);
    console.log("Torax: "+tx);
    console.log("Abôme: "+ab);
    console.log("Costas: "+cs);
    console.log("Equilíbrio corporal: "+ec);
    console.log("");

} else{
    tLabel8.classList.remove('checked');
    ab = ab -2;
    cs = cs -5;
    
    console.log("");
    console.log("Perda peso: "+pp);
    console.log("Perna: "+p);
    console.log("Yoga: "+y);
    console.log("Correr: "+cr);
    console.log("Braço: "+b);
    console.log("Torax: "+tx);
    console.log("Abôme: "+ab);
    console.log("Costas: "+cs);
    console.log("Equilíbrio corporal: "+ec);
    console.log("");

}
});

tButton9.addEventListener('change', function() {
  if (tButton9.checked) {
      tLabel9.classList.add('checked');
      y = y + 10;
      ec = ec + 5;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

  } else{
      tLabel9.classList.remove('checked');
      y = y - 10;
      ec = ec - 5;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

  }
});

tButton10.addEventListener('change', function() {
  if (tButton10.checked) {
      tLabel10.classList.add('checked');
      
      b = b + 2; 
      tx = tx + 2;
      ab = ab + 2;
      ec = ec + 5;
      cs = cs + 5;
      y = y + 5;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

  } else{
      tLabel10.classList.remove('checked');

      b = b - 2; 
      tx = tx - 2;
      ab = ab - 2;
      ec = ec - 5;
      cs = cs - 5;
      y = y - 5;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");
  }
});
  
tButton11.addEventListener('change', function() {
  if (tButton11.checked) {
      tLabel11.classList.add('checked');
      b = b + 3.34; 
      tx = tx + 10;
      ab = ab + 3.34;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");
      
  } else{
      tLabel11.classList.remove('checked');
      b = b - 3.34; 
      tx = tx - 10;
      ab = ab - 3.34;
      
      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");
     
  }
});

tButton12.addEventListener('change', function() {
  if (tButton12.checked) {
      tLabel12.classList.add('checked');
      ec = ec + 10; 
      y = y + 10;
      
      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

  } else{
      tLabel12.classList.remove('checked');
      ec = ec - 10; 
      y = y - 10;
      
      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

  }
});

tButton13.addEventListener('change', function() {
  if (tButton13.checked) {
      tLabel13.classList.add('checked');
  
      p = p + 10;
      cr = cr + 5;
    
      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");
    
  } else{
      tLabel13.classList.remove('checked');

      p = p - 10;
      cr = cr - 5;
    
      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");
  }
});

tButton14.addEventListener('change', function() {
  if (tButton14.checked) {
      tLabel14.classList.add('checked');
      pp = pp + 5;
      cr = cr + 3.34; 
      ab = ab + 3.34;
      ec = ec + 5;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

  } else{
      tLabel14.classList.remove('checked');
      pp = pp - 5;
      cr = cr - 3.34; 
      ab = ab - 3.34;
      ec = ec - 5;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

  }
});

tButton15.addEventListener('change', function() {
  if (tButton15.checked) {
      tLabel15.classList.add('checked');
      b = b + 10;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

  } else{
      tLabel15.classList.remove('checked');
      b = b - 10;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

  }
});

tButton16.addEventListener('change', function() {   
  if (tButton16.checked) {
      tLabel16.classList.add('checked');
      pp = pp + 2;
      p = p + 3.34;
      cr = cr + 3.34;
      ec = ec + 3.34;
      
      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

  } else{
      tLabel16.classList.remove('checked');
      pp = pp - 2;
      p = p - 3.34;
      cr = cr - 3.34;
      ec = ec - 3.34;
      
      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

  }
});

tButton17.addEventListener('change', function() {
  if (tButton17.checked) {
      tLabel17.classList.add('checked');
  
      b = b + 10; 
      cs = cs + 3.34;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");


  } else{
      tLabel17.classList.remove('checked');
      b = b - 10; 
      cs = cs - 3.34;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

  }
});

tButton18.addEventListener('change', function() {
  if (tButton18.checked) {
      tLabel18.classList.add('checked');
      b = b + 5; 
      cs = cs + 10;

      console.log(b);
      console.log(cs);
  } else{
      tLabel18.classList.remove('checked');
      b = b - 5; 
      cs = cs - 10;

      console.log(b);
      console.log(cs);
  }
});

tButton19.addEventListener('change', function() {
  if (tButton19.checked) {
      tLabel19.classList.add('checked');
      p = p + 10; 

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

  } else{
      tLabel19.classList.remove('checked');
      p = p - 10; 

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

  }
});

tButton20.addEventListener('change', function() {
  if (tButton20.checked) {
      tLabel20.classList.add('checked');
      pp = pp + 10; 
      cr = cr + 5;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");

  } else{
      tLabel20.classList.remove('checked');
      pp = pp - 10;
      cr = cr - 5;

      console.log("");
      console.log("Perda peso: "+pp);
      console.log("Perna: "+p);
      console.log("Yoga: "+y);
      console.log("Correr: "+cr);
      console.log("Braço: "+b);
      console.log("Torax: "+tx);
      console.log("Abôme: "+ab);
      console.log("Costas: "+cs);
      console.log("Equilíbrio corporal: "+ec);
      console.log("");
  }
});

tButton21.addEventListener('change', function() {
  if (tButton21.checked) {
      tLabel21.classList.add('checked');
  } else{
      tLabel21.classList.remove('checked');
  }
});















//exibição dos exercicios


btncalc.addEventListener('click', function(){
  if(b>=5 || ab>=5){
    flexao.classList.add('most');
    // 
    // 
    // 
    // 
    // 
    // 
    // ponte.classList.add('most');
    // abdominal.classList.add('most');
    // soconoar.classList.add('most');
    // montanha.classList.add('most');
    // lunge.classList.add('most');
    // pullup.classList.add('most');
    
  }else{
    flexao.classList.remove('most');
  }  

   if(cr>=5 || p >= 5 || pp >=5){
    caminhada.classList.add('most');
   }else{
    caminhada.classList.remove('most');
   }

   if(p>=10){
    agachamento.classList.add('most');
   }else{
    agachamento.classList.remove('most');
  }

   if(y>=20 || ec >=15){
    yoga.classList.add('most');
   }else{
    yoga.classList.remove('most');
   }

   if(pp >=10){
    polichinelo.classList.add('most');
   }else{
    polichinelo.classList.remove('most');
  }

  if(pp>=20){
    pulacorda.classList.add('most');
  }else{
    pulacorda.classList.remove('most');
  }
   if(ec >= 5 && y >=10){
    alongamento.classList.add('most');
   }
});






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
const modal_estrela = document.querySelector(".modal-estrela");

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
var imgEstrela = document.getElementById("myEstrela");

imgEstrela.onclick = function(){
  modal_estrela.style.display = "block";}

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

var span = document.getElementsByClassName("close12")[0];
span.onclick = function() {
  modal_main12.style.display = "none";}

var span = document.getElementsByClassName("close13")[0];
span.onclick = function() {
  modal_main13.style.display = "none";}

  var span = document.getElementsByClassName("close-estrela")[0];
span.onclick = function() {
  modal_estrela.style.display = "none";}

