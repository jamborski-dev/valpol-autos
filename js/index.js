// Hanling Inputs

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('change', e => {
    e.target.value !== ''
      ? e.target.classList.add('form__input--not-empty')
      : e.target.classList.remove('form__input--not-empty');
  });
});

// Intersection Observer
const hero = document.getElementById('home');
const bussiness = document.getElementById('bussiness');
const services = document.getElementById('services');
const reviews = document.getElementById('reviews');
const contact = document.getElementById('contact');

const onEntry = entries => {
  entries.forEach(entry => {
    
    // observe navigation bar
    const nav = document.getElementById('nav');
    if (entry.isIntersecting && entry.target.id === 'home') {
      nav.classList.remove('nav--sticky');
    } else if (!entry.isIntersecting && entry.target.id === 'home') {
      nav.classList.add('nav--sticky');
    }
  });
};

const onEntryItems = entries => {
  entries.forEach(entry => {
    
    // observe navigation items
    const hash = '#' + entry.target.id;
    const section = document.querySelector(`a[href="${hash}"]`);

    if (entry.isIntersecting) {
      section.classList.add('nav__link--active');
    } else {
      section.classList.remove('nav__link--active');
    }  
  });
};

const navConfig = {
  root: null,
  rootMargin: '-85% 0px 0px 0px',
  theshold: [],
};

const menuItemsConfig = {
  root: null,
  rootMargin: '-50% 0px -50% 0px',
  theshold: [],
};

const observerNav = new IntersectionObserver(onEntry, navConfig);
const observerMenuItems = new IntersectionObserver(onEntryItems, menuItemsConfig);

observerNav.observe(hero);
observerMenuItems.observe(hero);
observerMenuItems.observe(bussiness);
observerMenuItems.observe(services);
observerMenuItems.observe(reviews);
observerMenuItems.observe(contact);
