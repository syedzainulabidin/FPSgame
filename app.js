document.body.addEventListener('mousemove', function(event) {
    const thor = document.getElementById('thor');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (centerX - event.clientX) / 2;
    const moveY = (centerY - event.clientY) / 2;

    thor.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
});

window.onload = function() {
    // Get the container element
    const container = document.querySelector('.container');
    // container.document.removeChild('div')

    // Get the width and height of the container
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Function to generate a random position within the container
    function getRandomPosition(size, max) {
        return Math.floor(Math.random() * (max - size));
    }

    for (let i = 0; i < 1; i++) {
        const target = document.createElement('div');
        target.classList.add('targets');

        // Set random positions for the target divs
        const randomX = getRandomPosition(50, containerWidth);
        const randomY = getRandomPosition(50, containerHeight);

        target.style.left = `${randomX}px`;
        target.style.top = `${randomY}px`;

        // Append the target divs to the container
        container.appendChild(target);
    }
};



// function mark1(){
//    document.querySelector('.targets').style.background = 'green'
// }