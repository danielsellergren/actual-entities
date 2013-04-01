entities = [];
board = [];

function initialize() {

    // Get maximum x and y values based on size of canvas
    maxX = Math.floor(canvas.width / 10);
    maxY = Math.floor(canvas.height / 10);

    for (var i=0; i<maxX; i++) {
        board[i] = [];
        for (var j=0; j<maxY; j++) {
            board[i][j] = 0;
        }
    }

    // Get values from controls
    var numEntities = $entitiesSlider.slider("value");
    var innerThreshold = $thresholdsSlider.slider("values",0);
    var outerThreshold = $thresholdsSlider.slider("values",1);

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
                if (distance < innerThreshold) {
                    // Do nothing
                } else if (distance > innerThreshold && distance < outerThreshold) {
                    
                    var newX, newY;

                    // Calculate new x position
                    if (prehendee.x > this.x) {
                        newX = this.x + 1;
                    } else {
                        newX = this.x - 1;
                    }

                    // Calculate new y position
                    if (prehendee.y > this.y) {
                        newY = this.y + 1;
                    } else {
                        newY = this.y - 1;
                    }

                    // Check to see if new position is already taken before moving
                    if (board[newX][newY] == 0) {
                        board[this.x][this.y] = 0;
                        board[newX][newY] = 1;
                        this.x = newX;
                        this.y = newY;
                    }

                } else {
                    //Do nothing
                }

            },
        }

        // Add to array of entities
        entities.push(entity);

        board[entity.x, entity.y] = 1;

    }

}

function mainLoop() {

    var speed = $speedSlider.slider("value");
    speed = (100 - 99) * 10;

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

    }, speed);

}

function resizeCanvas() {

    canvas.width = window.innerWidth - 251;
    canvas.height = window.innerHeight;

    draw();

}

function draw() {

    clearUniverse();

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

function pause() {
    $pause.hide();
    $resume.show();
    running = false;
}

function resume() {
    $resume.hide();
    $pause.show();
    running = true;
    mainLoop();
}

function reset() {
    clearUniverse();
    entities = [];
    initialize();
}

function clearUniverse() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

$(function($) {

    // Global variables
    canvas = document.getElementById('universe');
    ctx = canvas.getContext("2d");
    numEntities = 20;
    running = true;

    // jQuery variables
    $main = $('section#main');
    $universe = $('canvas#universe');

    $thresholdsSlider = $('div#thresholds-slider');
    $entitiesSlider = $('div#number-entities-slider');
    $eternalsSlider = $('div#number-eternals-slider');
    $speedSlider = $('div#speed-slider');

    $pause = $('button#pause');
    $resume = $('button#resume');
    $reset = $('button#reset');

    // Window resize handler
    $(window).resize(function() {
        resizeCanvas();
    });

    // Add class to second handle on ranged sliders
    $('.ui-slider').find('.ui-slider-handle').eq(1).addClass('second');

    // Create thresholds slider
    $thresholdsSlider.slider({
        range: true,
        min: 0,
        max: 99,
        values: [ 10, 50 ],
        slide: function(event, ui) {
            $thresholdsSlider.find('.ui-slider-handle').eq(0).html(ui.values[ 0 ]);
            $thresholdsSlider.find('.ui-slider-handle').eq(1).html(ui.values[ 1 ]);
        }
    });
    $thresholdsSlider.find('.ui-slider-handle').eq(0).html($thresholdsSlider.slider("values", 0));
    $thresholdsSlider.find('.ui-slider-handle').eq(1).html($thresholdsSlider.slider("values", 1));

    // Create number of entities slider
    $entitiesSlider.slider({
        min: 0,
        max: 50,
        value: 25,
        slide: function(event, ui) {
            $entitiesSlider.find('.ui-slider-handle').html(ui.value);
        }
    });
    $entitiesSlider.find('.ui-slider-handle').html($entitiesSlider.slider("value"));

    // Create number of eternal objects slider
    $eternalsSlider.slider({
        min: 0,
        max: 25,
        value: 5,
        slide: function(event, ui) {
            $eternalsSlider.find('.ui-slider-handle').html(ui.value);
        }
    });
    $eternalsSlider.find('.ui-slider-handle').html($eternalsSlider.slider("value"));

    // Create number of eternal objects slider
    $speedSlider.slider({
        min: 0,
        max: 99,
        value: 20,
        slide: function(event, ui) {
            $speedSlider.find('.ui-slider-handle').html(ui.value);
        }
    });
    $speedSlider.find('.ui-slider-handle').html($speedSlider.slider("value"));

    // Button event handlers
    $pause.on('click', function(e) {
        pause();
    });
    $resume.on('click', function(e) {
        resume();
    });
    $reset.on('click', function(e) {
        reset();
    });

    // Initialization
    resizeCanvas();
    initialize();

    // Start loop
    mainLoop();

});