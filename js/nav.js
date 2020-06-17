const section = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(to right top, #56ab2f, #a8e063)",
    "linear-gradient(to right top,  #cb2d3e, #ef473a)",
    "linear-gradient(to right top,  #83a4d4, #b6fbff)",
];

const options = {
    threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;


       const activeAnchor = document.querySelector("[data-page="+ className + "]");


        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();

        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left

        };

        if (entry.isIntersecting){
            bubble.style.setProperty('left', directions.left.toString() + 'px');
            bubble.style.setProperty('top', directions.top.toString() + 'px');
            bubble.style.setProperty('width', directions.width.toString() + 'px');
            bubble.style.setProperty('height', directions.height.toString() + 'px');
            bubble.style.background = gradients[gradientIndex];

        }
    });
}

section.forEach(section => {
    observer.observe(section);
});