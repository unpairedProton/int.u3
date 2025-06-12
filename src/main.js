import Glide from '@glidejs/glide';

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.glide')) {
    new Glide('.glide', {
      type: 'carousel',
      autoplay:2000,
      perView: 6,
      gap: 0,
      breakpoints: {
        768: { perView: 3 },
        600: { perView: 1 }
      }
    }).mount();
  }
});
