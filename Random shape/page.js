const container = document.getElementById('container');

document.addEventListener('mousemove', (event) => {
    createRandomShape(event.pageX, event.pageY);
});

function createRandomShape(x, y) {
    const shape = document.createElement('div');
    shape.style.position = 'absolute';
    shape.style.left = `${x}px`;
    shape.style.top = `${y}px`;
    
    const size = Math.random() * 50 + 20;
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;

    const borderRadius = Math.random() > 0.5 ? '50%' : '0';
    shape.style.borderRadius = borderRadius;
    
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    shape.style.backgroundColor = randomColor;
    
    container.appendChild(shape);
    
    setTimeout(() => {
        container.removeChild(shape);
    }, 3000);
}
