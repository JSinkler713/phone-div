const button = document.querySelector('#dark-button')
const phone = document.querySelector('.phone')

button.addEventListener('click', ()=> {
  console.log('button was clicked')
  phone.classList.toggle('dark-mode')
})

