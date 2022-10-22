import {$,$$} from './main.js';

const TIME_TRANSFORM = 4500;
let sliderIndex = 0;
let sliderInterval;
let orderArr = [];

const sliderWrapper = $(".slider-wrapper");
const sliderView = $(".slider-view");
const sliderAllView = $$('.slide-item');
console.log(sliderWrapper);

const sliderRect = sliderWrapper.getBoundingClientRect();
const viewWidth = sliderRect.width;

function incrementSlide() {
  if(orderArr.length == 4) {
    if(sliderIndex === 0) {
      orderArr = [];
    } else {
      sliderIndex--;
    }
  }
  else {
    orderArr.push(sliderIndex);
     sliderIndex++;
  }
  setSlideView(sliderIndex);
}

function swipeIncresement() {
  sliderIndex = sliderIndex === sliderAllView.length - 1  ? 0 : sliderIndex + 1 ;
  setSlideView(sliderIndex);
}

function decrementSlide() {
  sliderIndex = sliderIndex === 0 ? sliderAllView.length - 1 : sliderIndex - 1;
  setSlideView(sliderIndex);
}

function setSlideView(index) {
  sliderIndex = index;
  sliderView.style.transform = `translateX(${-index * viewWidth}px)`;
}

function SwipeToTransf (sliderAllView) {
  let mouse_start;
  let mouse_end;
  sliderAllView.forEach((slide)=> {
    slide.onmousedown = (e)=> {
      mouse_start = e.clientX;
      clearInterval(sliderInterval);
    }
    slide.onmouseup = (e)=> {
      mouse_end = e.clientX;
      if(mouse_end >= mouse_start){
        decrementSlide();
      } else {
        swipeIncresement();
      }
    }
  })
};

function activeSlider() {
  return setInterval(() => {
    incrementSlide();
  }, TIME_TRANSFORM);
}

function sliderWrapperEvents() {
  // stop transform when hover to view
  sliderWrapper.addEventListener("mouseover", () => {
    clearInterval(sliderInterval);
  });

  sliderWrapper.addEventListener("mouseout", () => {
    sliderInterval = activeSlider();
  });
}

function main() {
  SwipeToTransf(sliderAllView);

  sliderWrapperEvents();

  // Auto transform
  sliderInterval = activeSlider();
}

main();