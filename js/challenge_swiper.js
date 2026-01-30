const swiper1 = new Swiper('.swiper1',{
  autoplay:{
    delay:3000,
    pauseOnMouseEnter:true,
  },
  loop: true,
  slidesPerView:6,
  spaceBetween: 3,

  
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