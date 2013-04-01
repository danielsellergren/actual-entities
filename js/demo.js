function initialize() {

    maxX = Math.floor(canvas.width / 10);
    maxY = Math.floor(canvas.height / 10);

    for (var i=0; i<numEntities; i++) {

        x = Math.floor(Math.random() * (maxX));
        y = Math.floor(Math.random() * (maxY));

        var entity = {
            id: i,
            x: x,
            y: y,
            prehend: function(prehendee) {

                console.log("#" + this.id + " prehending #" + prehendee.id + ".");

                // Calculate Euclidean distance
                var distance = Math.sqrt( Math.pow(this.x,2) + Math.pow(prehendee.x,2) );
                console.log("Distance: " + distance);

                // Check against thresholds
                if (distance < 10) {
                    // Do nothing
                } else if (distance > 10 && distance < 50) {
                    
                    // Move x position
                    (prehendee.x > this.x) ? this.x++ : this.x--

                    // Move y position
                    (prehendee.y > this.y) ? this.y++ : this.y--

                } else {
                    //Do nothing
                }

            },
        }

        entities.push(entity);

    }

}

function resizeCanvas() {

    canvas.width = window.innerWidth - 251;
    canvas.height = window.innerHeight;

    console.log(canvas.width);

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
          gridColor  : "#333333",
          caption : false,
        };

        new Grid(gridOptions).draw(ctx);

        for (var i=0; i<entities.length; i++) {

            posX = (entities[i].x * 10) + 5;
            posY = (entities[i].y * 10) + 5;

            ctx.fillStyle = "rgba(255,51,51,0.8)";
            ctx.beginPath();
            ctx.arc(posX,posY,5,0,Math.PI*2,true); // Outer circle
            ctx.fill();

        }

    }
}

function mainLoop() {

    setTimeout(function() {

        // Randomly choose prehender and prehendee
        prehenderIndex = Math.floor(Math.random() * (entities.length));
        prehendeeIndex = Math.floor(Math.random() * (entities.length));

        prehender = entities[prehenderIndex];
        prehendee = entities[prehendeeIndex];

        prehender.prehend(prehendee);

        draw();

        if (running) {
            mainLoop();
        }

    }, 100);

}

$(function($) {

    console.log('DOM loaded.');

    $main = $('section#main');
    $universe = $('canvas#universe');
    canvas = document.getElementById('universe');

    numEntities = 20;
    entities = [];

    running = true;

    $(window).resize(function() {
        resizeCanvas();
    });

    resizeCanvas();
    initialize();

    console.log(entities);

    mainLoop();

});