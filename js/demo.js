function resizeCanvas() {

    canvas.width = window.innerWidth - 251;
    canvas.height = window.innerHeight;

    draw(); 
}

function draw() {

    console.log("Drawing.");
    
    if (canvas.getContext){

        var ctx = canvas.getContext("2d");

        ctx.clearRect(0,0,canvas.width,canvas.height);
 
        var gridOptions = {
          distance : 10,
          lineWidth : 0.1,
          gridColor  : "#CCCCCC",
          caption : false,
        };

        new Grid(gridOptions).draw(ctx);

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);
 
        ctx.fillStyle = "rgba(0, 0, 200, 1)";
        ctx.fillRect (30, 30, 55, 50);

        // ctx.beginPath();
        // ctx.arc(10,10,1,0,Math.PI*2,true); // Outer circle
        // ctx.stroke();
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