function initialize() {

    // Get maximum x and y values based on size of canvas
    maxX = Math.floor(canvas.width / 10);
    maxY = Math.floor(canvas.height / 10);

    // Create all entities
    for (var i=0; i<numEntities; i++) {

        // Randomly choose x and y positions within range
        x = Math.floor(Math.random() * (maxX));
        y = Math.floor(Math.random() * (maxY));

        // Create entity
        var entity = {
            id: i,
            x: x,
            y: y,
            prehend: function(prehendee) {

                // Calculate Euclidean distance
                var distance = Math.sqrt( Math.pow(this.x,2) + Math.pow(prehendee.x,2) );

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

        // Add to array of entities
        entities.push(entity);

    }

}

function resizeCanvas() {

    canvas.width = window.innerWidth - 251;
    canvas.height = window.innerHeight;

    draw();

}

function draw() {
    
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
            ctx.arc(posX, posY, 5, 0, Math.PI*2, true);
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

        // Call prehension function
        prehender.prehend(prehendee);

        // Redraw canvas
        draw();

        // Keep loop running
        if (running) {
            mainLoop();
        }

    }, 100);

}

$(function($) {

    // Global variables
    canvas = document.getElementById('universe');
    entities = [];
    numEntities = 20;
    running = true;

    // jQuery variables
    $main = $('section#main');
    $universe = $('canvas#universe');

    $pause = $('button#pause');
    $resume = $('button#resume');
    $reset = $('button#reset');

    // Initialization
    resizeCanvas();
    initialize();

    // Start loop
    mainLoop();

    // Window resize handler
    $(window).resize(function() {
        resizeCanvas();
    });

    // Create thresholds slider
    $( "#thresholds-slider" ).slider({
        range: true,
        min: 0,
        max: 99,
        values: [ 10, 50 ],
        slide: function( event, ui ) {
            $( "#thresholds-slider .ui-slider-handle" ).eq(0).html( ui.values[ 0 ] );
            $( "#thresholds-slider .ui-slider-handle" ).eq(1).html( ui.values[ 1 ] );
        }
    });
    $("#thresholds-slider .ui-slider-handle").eq(0).html($("#thresholds-slider").slider("values", 0));
    $("#thresholds-slider .ui-slider-handle").eq(1).html($("#thresholds-slider").slider("values", 1));

    // Create number of entities slider
    $( "#number-entities-slider" ).slider({
        min: 0,
        max: 50,
        value: 25,
        slide: function( event, ui ) {
            $( "#number-entities-slider .ui-slider-handle" ).html( ui.value );
        }
    });
    $("#number-entities-slider .ui-slider-handle").html($("#number-entities-slider").slider("value"));

    // Create number of eternal objects slider
    $( "#number-eternals-slider" ).slider({
        min: 0,
        max: 25,
        value: 5,
        slide: function( event, ui ) {
            $( "#number-eternals-slider .ui-slider-handle" ).html( ui.value );
        }
    });
    $("#number-eternals-slider .ui-slider-handle").html($("#number-eternals-slider").slider("value"));

    // Button event handlers
    $pause.on('click', function(e) {
        e.preventDefault();
        $pause.hide();
        $resume.show();
    });
    $resume.on('click', function(e) {
        e.preventDefault();
        $resume.hide();
        $pause.show();
    });

});