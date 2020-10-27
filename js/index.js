// Hanling Inputs

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('change', (e) => {
    e.target.value !== '' 
      ? e.target.classList.add('not-empty')
      : e.target.classList.remove('not-empty');
  })
})


// Intersection Observer
const hero = document.getElementById('home');

const onEntry = (entries) => {
  entries.forEach(entry => { 
    const nav = document.getElementById('nav');
    if(entry.isIntersecting) {
      nav.classList.remove('sticky');
    } else {
      nav.classList.add('sticky');  
    }
  })
}

const observerOptions = {
  root: null,
  rootMargin: '-80% 0px 0px 0px',
  theshold: []
}

const observer = new IntersectionObserver(onEntry, observerOptions);

observer.observe(hero);