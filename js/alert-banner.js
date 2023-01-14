const closeBtn = document.querySelector('.alert-banner-icon')
const banner = document.querySelector('.alert-banner-container')

closeBtn.addEventListener('click', () =>{
  banner.classList.add('close-banner')
})
