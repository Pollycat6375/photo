const images = document.querySelectorAll('.img img');

images.forEach(function (img) {
  img.onclick = function () {
    document.querySelector('.pop-up').style.display = 'block';
    document.querySelector('.pop-up img').src = img.getAttribute('src');
    document.querySelector('.pop-up img').style.overflow = 'hidden';
  };
});

document.querySelector('span').onclick = function () {
  document.querySelector('.pop-up').style.display = 'none';
  document.querySelector('.pop-up img').src = '';
  document.querySelector('.pop-up img').style.overflow = 'auto';
};

const sliderLine = document.querySelector('.slider__line');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let offset = 0;

const goNext = function () {
  offset += 350;
  if (offset >= 2100) {
    offset = 0;
    sliderLine.style.right = offset + 'px';
  } else {
    sliderLine.style.right = offset + 'px';
  }
};

nextBtn.onclick = goNext;

prevBtn.onclick = function () {
  offset -= 350;
  if (offset < 0) {
    offset = 1750;
    sliderLine.style.right = offset + 'px';
  } else {
    sliderLine.style.right = offset + 'px';
  }
};

setInterval(goNext, 10000);
