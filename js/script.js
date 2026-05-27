  const quickMenu = document.getElementById('quickMenu');
  const quickClose = document.querySelector('.quick-close');
  const heroSection = document.getElementById('hero');

  function setQuickMenuPosition() {
    const heroHeight = heroSection.offsetHeight;
    if (window.innerWidth <= 767) {
      quickMenu.style.top = `${heroHeight + 22}px`;
    } else {
      quickMenu.style.top = `${heroHeight - 124}px`;
    }
  }

  setQuickMenuPosition();
  window.addEventListener('resize', setQuickMenuPosition);

  quickClose.addEventListener('click', function () {
    quickMenu.style.display = 'none';
  });

  window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const reviewSwiper = new Swiper('.reviewSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 12,
  loop: true,
  pagination: {
    el: '.review-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2.2,
    },
    992: {
      slidesPerView: 3.2,
    }
  }
});

function countUp(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(start).toLocaleString('ko-KR');
  }, 16);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countUp(entry.target, 3754);
    }
  });
}, { threshold: 0.5 });

const counterEl = document.querySelector('.newsletter-number');
if (counterEl) observer.observe(counterEl);

AOS.init({
  disable: false,
  duration: 800,
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',
});