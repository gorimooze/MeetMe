// ШАПКА
function a() {
    var h = document.getElementById('hid_men');
    var burg1 = document.getElementById('burg1');
    var burg2 = document.getElementById('burg2');
    var burg3 = document.getElementById('burg3');

    if (h.style.opacity == '1') {
        h.style.opacity = '0';
        h.style.visibility = 'hidden';
        burg1.style.transform = 'rotate(0deg)';
        burg1.style.transition = '0.5s';
        burg1.style.marginBottom = '4px';
        burg3.style.transform = 'rotate(0deg)';
        burg3.style.transition = '0.5s';
        burg3.style.marginTop = '4px';
        burg2.style.opacity = '1';
        burg2.style.transition = '0.5s';
    } else {
        h.style.opacity = '1';
        h.style.visibility = 'visible';
        burg1.style.transform = 'rotate(45deg)';
        burg1.style.transition = '0.5s';
        burg1.style.marginBottom = '-5px';
        burg3.style.transform = 'rotate(-45deg)';
        burg3.style.transition = '0.5s';
        burg3.style.marginTop = '-5px';
        burg2.style.opacity = '0';
        burg2.style.transition = '0.5s';
    }
}



// СЛАЙДЕР
const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}

// АНИМАЦИЯ
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
  };