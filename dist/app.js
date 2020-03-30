const navSlide = () => {
    const burger = document.querySelector('.nav-burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle Nav menu
        nav.classList.toggle('nav-active')

        //Animate Nav Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``
            } else {
                link.style.animation = `navLinkFade 0.5s ease backwards ${index / 7 + .5}s`
            }
        })

        //Animate Nav-burger into X when menu active
        burger.classList.toggle('toggle')
    })

    nav.addEventListener('click', () => {
        //Toggle menu when link is clicked
        nav.classList.toggle('nav-active')
    })
}

navSlide()