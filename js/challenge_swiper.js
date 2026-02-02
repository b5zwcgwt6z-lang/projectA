const swiper1 = new Swiper('.swiper1',{
  autoplay:{
    delay: 2500,
    pauseOnMouseEnter:true,
  },
  loop: true,
  direction:'horizontal',
  slidesPerView:5,
  slidesPerGroup:3,
  spaceBetween: 10,
  speed: 3000,
  resistance: true,
  resistanceRatio: 0.9,
});

// ringMenu button
document.addEventListener('DOMContentLoaded', () => {
    const ringItems = document.querySelector('.ringMenu-items');
    const ringLeftBtn = document.querySelector('.ringMenu-buttonLeft');
    const ringRightBtn = document.querySelector('.ringMenu-buttonRight');
    const moveDistance = 360;

    if (ringRightBtn && ringItems) {
        ringRightBtn.addEventListener('click', () => {
            ringItems.scrollBy({ left: moveDistance, behavior: 'smooth' });
        });
    }

    if (ringLeftBtn && ringItems) {
        ringLeftBtn.addEventListener('click', () => {
            ringItems.scrollBy({ left: -moveDistance, behavior: 'smooth' });
        });
    }
});

