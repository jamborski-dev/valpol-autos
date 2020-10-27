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
const bussinessSection = document.getElementById('bussiness');

const onEntry = (entries) => {
  entries.forEach(entry => { 
    if(entry.isIntersecting) {
      const nav = document.getElementById('nav');
      nav.classList.add('sticky');
    }
  })
}

const observerOptions = {
  root: null,
  rootMargin: '-100px',
  theshold: 0
}

const observer = new IntersectionObserver(onEntry, observerOptions);

observer.observe(bussinessSection);