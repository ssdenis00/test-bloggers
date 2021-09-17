const sliderBtnLeft = document.querySelector('.bloggers__slide-btn_left');
const sliderBtnRight = document.querySelector('.bloggers__slide-btn_right');
const sliderGalarySelector = document.querySelector('.bloggers__items_type_slider');
const sliderGalaryItems = document.querySelectorAll('.bloggers__item');
const sliderScrollbarSelector = document.querySelector('.bloggers__scrollbar');
const width = 311;
let position = 0;
let counter = 0;

sliderGalaryItems.forEach((item, i) => {
  sliderScrollbarSelector.insertAdjacentHTML('beforeend', `<span class="bloggers__slide hover" id=${i}></span>`);
});

const checkSlidePosition = () => {
  position = counter * -width;
  console.log(counter)
  sliderGalarySelector.style.marginLeft = position + 'px';
}

const checkActiveScrollbarSlide = () => {
  slides.forEach(slide => {
    if (slide.id == counter) {
      slide.classList.add('bloggers__slide_active');
    } else if ((slide.id != counter) || slide.classList.contains('bloggers__slide_active')) {
      slide.classList.remove('bloggers__slide_active');
    }
  })
};

const slides = document.querySelectorAll('.bloggers__slide');

slides.forEach(slide => {
  slide.addEventListener('click', (evt) => {
    counter = evt.target.id;
    checkActiveScrollbarSlide();
    checkSlidePosition();
  })
})

const handleSliderRight = () => {
  if (counter < sliderGalaryItems.length - 1) {
    counter = parseInt(counter) + 1;
    checkSlidePosition();
    checkActiveScrollbarSlide();
  }
}

const handleSliderLeft = () => {
  if (counter > 0) {
    counter = parseInt(counter) - 1;
    checkSlidePosition();
    checkActiveScrollbarSlide();
  }
}

sliderBtnLeft.addEventListener('click', handleSliderLeft);
sliderBtnRight.addEventListener('click', handleSliderRight);

checkActiveScrollbarSlide();