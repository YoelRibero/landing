document.addEventListener('DOMContentLoaded', () => {
  document.querySelector(".header__hamburguer").addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector(".header__nav").classList.toggle('is-active')
  })
})