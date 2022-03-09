const menubuttom = document.getElementsByClassName('menubuttom')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

menubuttom.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})