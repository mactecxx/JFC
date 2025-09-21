document.addEventListener('DOMContentLoaded', function(){
  // set current year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');
  mobileToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // Menu tabs
  const tabs = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu-panel');
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      tabs.forEach(x=>x.classList.remove('active'));
      t.classList.add('active');
      const target = t.getAttribute('data-target');
      panels.forEach(p => p.classList.toggle('active', p.id === target));
      // close mobile nav if open
      if (mainNav.classList.contains('open')) mainNav.classList.remove('open');
    });
  });

  // Simple hero animation (fade in elements)
  const hero = document.querySelector('.hero');
  if(hero){
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(8px)';
    setTimeout(()=>{ hero.style.transition='opacity .8s ease, transform .6s ease'; hero.style.opacity=1; hero.style.transform='translateY(0)'; }, 120);
  }

  // Contact / Newsletter forms: simple client-side handler (stub)
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Thanks! Message received (this demo does not send emails).');
      contactForm.reset();
    });
  }
  const nl = document.getElementById('newsletterForm');
  if(nl){
    nl.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Subscribed! (demo)');
      nl.reset();
    });
  }
});
