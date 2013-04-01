function resizeCanvas() {

    canvas.width = window.innerWidth - 250;
    canvas.height = window.innerHeight;

    draw(); 
}

function draw() {

    console.log("Drawing.");
    
    if (canvas.getContext){

    }
}

function mainLoop() {
    setTimeout(function() {
        draw();
        if (running) {
            mainLoop();
        }
    }, 500);
}

jQuery(function($) {

    console.log('DOM loaded.');

    $main = $('section#main');
    $universe = $('canvas#universe');
    canvas = document.getElementById('universe');

    running = true;

    $(window).resize(function() {
        resizeCanvas();
    });

    resizeCanvas();
    mainLoop();

});