const hamburger = document.querySelector('.hamburger')
const navMobile = document.querySelector('.navigation__mobile')
const navLinks = document.querySelectorAll('.navigation__mobile a')

const show = () => {
    hamburger.classList.toggle('is-active')
    navMobile.classList.toggle('navigation__mobile--show')

    handleNavLinksAnimation();
}

const linksAnimation = () => {
    let delayTime = 0;
    navLinks.forEach(item => {
        item.classList.toggle('nav-mobile-animation')
        item.style.animationDelay = '.' + delayTime + 's'
        delayTime++
    })
}

hamburger.addEventListener('click', show)
navLinks.forEach(link => {
    link.addEventListener('click', show)
})

console.log(navMobile);