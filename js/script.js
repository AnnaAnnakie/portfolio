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