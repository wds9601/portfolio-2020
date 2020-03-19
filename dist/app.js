const navSlide = () => {
    const burger = document.querySelector('.nav-burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        console.log("Click")
        nav.classList.toggle('nav-active')
    })
}

navSlide()