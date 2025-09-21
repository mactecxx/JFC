// Slider functionality
document.addEventListener('DOMContentLoaded', function() {
  let slides = document.querySelectorAll('.hero-slider .slide');
  let current = 0;
  const nextBtn = document.querySelector('.hero-slider .next');
  const prevBtn = document.querySelector('.hero-slider .prev');

  function showSlide(index) {
    slides.forEach((s,i) => {
      s.classList.remove('active');
      if (i === index) {
        s.classList.add('active');
      }
    });
  }

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });
  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  // Optional: auto-rotate
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);
  
  // Menu tabs
  const tabs = document.querySelectorAll('.menu-tabs .tab');
  const tabContents = document.querySelectorAll('.menu-tab-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.getAttribute('data-tab');
      tabContents.forEach(tc => {
        if (tc.id === target) {
          tc.classList.add('active');
        } else {
          tc.classList.remove('active');
        }
      });
    });
  });

});
