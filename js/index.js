// Hanling Inputs

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('change', (e) => {
    e.target.value !== '' 
      ? e.target.classList.add('form__input--not-empty')
      : e.target.classList.remove('form__input--not-empty');
  })
})


// Intersection Observer
const hero = document.getElementById('home');

const onEntry = (entries) => {
  entries.forEach(entry => { 
    const nav = document.getElementById('nav');
    if(entry.isIntersecting) {
      nav.classList.remove('nav--sticky');
    } else {
      nav.classList.add('nav--sticky');  
    }
  })
}

const observerOptions = {
  root: null,
  rootMargin: '-85% 0px 0px 0px',
  theshold: []
}

const observer = new IntersectionObserver(onEntry, observerOptions);

observer.observe(hero);