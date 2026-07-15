let scrollerArea = document.getElementById("scroller");


const images = [
    'angular',
    'html',
    'illustrator',
    'indesign',
    'java',
    'javascript',
    'my-sql',
    'photoshop',
    'php',
    'python',
];

images.forEach(image => {
    let img = document.createElement("img");

    img.src = `assets/skills/${image}.svg`;
    img.alt = "";

    scrollerArea.appendChild(img);
})


const burger = document.querySelector('.burger');
const nav = document.querySelector('header nav');
const navLinks = document.querySelectorAll('header nav a');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
    });
});