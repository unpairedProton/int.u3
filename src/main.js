import Glide from '@glidejs/glide';

const aboveNavMenu=document.querySelector('.above-nav-sec')
const logo = document.getElementById('logo')
const menuIcon = document.querySelector('.menu-icon')
const crossIcon = document.querySelector('.cross-icon')
const navbar = document.querySelector('nav')


document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.glide')) {
    new Glide('.glide', {
      type: 'carousel',
      autoplay:2000,
      perView: 6,
      gap: 0,
      breakpoints: {
        768: { perView: 3 },
        640: { perView: 3 }
      }
    }).mount();
  }

   checkWindowSize();
   setupNavbarToggle();
});

function setupNavbarToggle() {
 

  if (crossIcon && navbar) {
    crossIcon.addEventListener('click', () => {
      navbar.style.right = '-100%';
      console.log("clicked");
      
    });
  }

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
      navbar.style.right = '0';
      console.log("clicked r");
    });
  }
}

function checkWindowSize() {
  const callIcon = document.querySelector('.call-icon');
  const burgerBg = document.querySelector('.burger-bg');
  if (window.innerWidth <= 640) {
    if (callIcon) callIcon.classList.remove('hidden');
    if (burgerBg) burgerBg.classList.remove('hidden');

    //nav-menu
    if(aboveNavMenu) {
      aboveNavMenu.style.display="none"
    }

    if(logo) {
      logo.style.width="20vw"
    }

  }

  else{
     if (callIcon) callIcon.classList.add('hidden');

      if (burgerBg) burgerBg.classList.add('hidden');

        if(aboveNavMenu) {
      aboveNavMenu.style.display="flex"
    }

    if(logo) {
      logo.style.width="11vw"
    }
  }
}

window.addEventListener('resize',()=>{
  checkWindowSize()
})

// // hamburger menu stuff
// const hamburger = document.getElementById('hamburger');

// let isMenuOpen = false;

// // toggle menu when clicked
// hamburger.addEventListener('click', (e) => {
//   // e.preventDefault();
//   // e.stopPropagation();
  
//   isMenuOpen = !isMenuOpen;
//   if (isMenuOpen) {
//     navMenu.style.right = '0';
//     hamburger.classList.add('active');
//   } else {
//     navMenu.style.right = '-100%';
//     hamburger.classList.remove('active');
//   }
//   console.log('hamburger clicked', isMenuOpen);
// });

// // close menu when clicking outside - better UX
// document.addEventListener('click', (e) => {
//   if (isMenuOpen && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
//     navMenu.style.right = '-100%';
//     hamburger.classList.remove('active');
//     isMenuOpen = false;
//     console.log('clicked outside');
//   }
// });

// // handle window resize - fixes menu on big screens
// window.addEventListener('resize', () => {
//   if (window.innerWidth >= 768) { // 768px is the md breakpoint in Tailwind
//     navMenu.style.right = '0';
//     isMenuOpen = false;
//     hamburger.classList.remove('active');
//   } else {
//     navMenu.style.right = '-100%';
//   }
// });

// // navbar scroll behavier - hide on scroll down
// let lastScrollTop = 0;
// const header = document.querySelector('header');

// window.addEventListener('scroll', () => {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   console.log('Srolling', scrollTop, 'lastScrollTop', lastScrollTop);
  
  
//   // only trigger if scrolled more than 5px - prevents tiny scrolls
//   if (Math.abs(scrollTop - lastScrollTop) > 5) {
//     if (scrollTop > lastScrollTop) {
//       // scrolling down - hide navbar
//       header.style.transform = 'translateY(-100%)';
//     } else {
//       // scrolling up - show navbar
//       header.style.transform = 'translateY(0)';
//     }
    
//     lastScrollTop = scrollTop;
//   }
// });

// // add smooth transition - looks better
// header.style.transition = 'transform 0.3s ease-in-out';
