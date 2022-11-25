const title = document.querySelector('h1')
const navList = document.querySelector('.nav-list')
const navItems = document.querySelectorAll('.nav-list a')


document.addEventListener("DOMContentLoaded", function () {
    const currentlyPage = title.className
    navItems.forEach((item) => {
        if (item.className === currentlyPage) {
            item.classList.add('active')
        }
    })
})