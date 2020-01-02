<html>
  <head lang="en">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>STAR DASH</title>
    <link rel="icon" href="../images/logo.jpeg" type="image" sizes="16x16">
    <script type="text/javascript" src="../JS/star_dash.js"></script>
    <link rel="stylesheet" type="text/css" href="../CSS/star_dash.css">
    <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
  </head>

  <body onkeydown="" onkeyup="moveSelection(event)"><!--EVENT HANDLERS-->
    <main id="main">
      <div id="audio1">
        <audio id="car_sound" controls>
          <source src="../audio/car_sound.mp3" type="audio/mpeg">  
        </audio>
        <audio id="cheer_sound" controls >
          <source src="../audio/cheer_up.mp3" type="audio/mpeg">  
        </audio>
        <audio id="winner_sound" controls >
          <source src="../audio/winner_sound1.mp3" type="audio/mpeg">  
        </audio>
      </div>
      <a href="../index.php"><img src="../images/logo.jpeg" alt="STAR DASH" id="logo" title="STAR DASH"></a>
        <div id="game_ins">
            <h1>Speed To Win</h1>
            <p id="instruction">
                Tap -&gt; to fly Spaceship.<br/>
                Time Limit 30 Seconds.   
            </p>
            <button id="play" type="button">PLAY</button>
            <img src="../images/ufo.png" alt="Alien ship" title="Alien Travelling" class="a" id="ufo1">
            <img src="../images/rocket.png" alt="Rocket" id="rocket1" class="rocket" title="Rocket">
            <img src="../images/rocket.png" alt="Rocket" id="rocket2" class="rocket" title="Rocket">
            <img src="../images/alien.png" alt="Alien" title="Alien" id="alien">
            <img src="../images/ufo.png" alt="Alien ship" title="Alien Travelling" class="a" id="ufo">
        </div>

    <div id="timer_container">
        <p id="timer">You have <span id="time">30 </span> Seconds</p>
    </div>
    <div id="play_again_box"><p id="play_again">RETRY..</p></div>
    <button id="home_screen" type="button">HOME SCREEN</button>
    <div id="game">
      <img src="../images/earth.png" alt="Start position" id="start_pos" title="Start position" class="flags" >
  <img id="image1" src="../images/rocket.png" alt="Player car" title="Player" style="position: absolute; left: 15; right: 15; top: 500; bottom: auto;">
  <img src="../images/mars.png" alt="Finish line" id="finish_pos" title="finish line" class="flags" >
  </div>
  <div id="dialogue">
    <img src="../images/dialogue1.png" alt="Fast"  title="Fast">
  </div>
  </main>
 </body>
</html>