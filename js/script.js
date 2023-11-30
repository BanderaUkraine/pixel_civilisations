document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('pixel-canvas');
    var ctx = canvas.getContext('2d');
    var isDrawing = false;
    var currentColor = '#000'; 
    var pixelCount = 0;

    var colorButtons = document.querySelectorAll('.color-button');
    colorButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            currentColor = button.dataset.color;
        });
    });

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mousemove', handleMouseMove);

    function handleMouseDown(e) {
        isDrawing = e.shiftKey;
        draw(e);
    }

    function handleMouseUp() {
        isDrawing = false;
        ctx.beginPath();
    }

    function handleMouseMove(e) {
        if (isDrawing) {
            draw(e);
        }
    }

    function draw(e) {
        var pixelSize = 15;
        var offsetX = canvas.getBoundingClientRect().left;
        var offsetY = canvas.getBoundingClientRect().top;

        var x = Math.floor((e.clientX - offsetX) / pixelSize) * pixelSize;
        var y = Math.floor((e.clientY - offsetY) / pixelSize) * pixelSize;

        ctx.fillStyle = currentColor;
        ctx.fillRect(x, y, pixelSize, pixelSize);
    }

    function updatePixelCounter() {
        var pixelCounterElement = document.getElementById('pixel-counter');
        pixelCounterElement.textContent = 'Пікселів поставлено: ' + pixelCount;
    }
	
	var toggleMenuBtn = document.getElementById('toggle-menu-btn');
    var colorMenu = document.getElementById('color-menu');
    toggleMenuBtn.addEventListener('click', function () {
        var currentBottom = parseInt(getComputedStyle(colorMenu).bottom);
        colorMenu.style.bottom = currentBottom === 0 ? '-80px' : '0';
    });
});
