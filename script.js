const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));


/* INICIO DE ESFERAS */
 


  /*fIN DE ESFERAS */