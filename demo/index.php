<!DOCTYPE html>
<html>
<head>
    <title>Actual Entities and Artificial Intelligence | Demo</title>
    <link href='http://fonts.googleapis.com/css?family=Alfa+Slab+One' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Noto+Serif:400,700,400italic' rel='stylesheet' type='text/css'>
    <link type="text/css" rel="stylesheet" href="/css/demo.css" />
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" ></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
    <script src="/js/grid.min.js"></script>
    <script src="/js/demo.js"></script>
    <link type="text/css" rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/themes/blitzer/jquery-ui.min.css" />
</head>
<body>

    <aside id="sidebar">
        <h1 id="site-title"><a href="/">Actual Entities</a></h1>
        <h2>Demo</h2>
        <div id="controls">
            <div class="control-container">
                <div id="number-entities-setting" class="settings">
                    <span class="label"># of Entities</span>
                </div>
                <div id="number-entities-slider"></div>
            </div>
            <div class="control-container">
                <div id="number-eternals-setting" class="settings">
                    <span class="label"># of Eternal Objects</span>
                </div>
                <div id="number-eternals-slider"></div>
            </div>
            <div class="control-container">
                <div id="thresholds-setting" class="settings">
                    <span class="label">Inner/Outer Thresholds</span>
                </div>
                <div id="thresholds-slider"></div>
            </div>
            <div class="control-container">
                <div id="speed-setting" class="settings">
                    <span class="label">Speed</span>
                </div>
                <div id="speed-slider"></div>
            </div>
            <button id="pause">Pause</button>
            <button id="resume">Resume</button>
            <button id="reset">Reset</button>
        </div>
    </aside>

    <section id="main">
        <canvas id="universe" width="500" height="500">Your browser does not support the HTML5 canvas element.</canvas>
    </section>

</body>
</html>