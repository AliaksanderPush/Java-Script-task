const elm = document.querySelector('div');
elm.addEventListener('click', (el) => {
  const elActive = elm.querySelector('.active');
  if (elActive) {
    elActive.classList.remove('active')
  }
  el.target.classList.add('active');
});