const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('change', (e) => {
    e.target.value !== '' 
      ? e.target.classList.add('not-empty')
      : e.target.classList.remove('not-empty');
  })
})

const firstSection = document.getElementById('bussiness');
const startScrollObserver = new IntersectionObserver(() => console.log('hi there'));

startScrollObserver.observe(firstSection);