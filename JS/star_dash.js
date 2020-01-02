window.onload=gameLoop;
function gameLoop()
        {
            var play=document.getElementById("play");
            document.getElementById("game").style.display="none";
            document.getElementById("audio1").style.display="none";
            var sound=document.getElementById("car_sound");
            var cheer_up=document.getElementById("cheer_sound");
            var winner=document.getElementById("winner_sound");
            var time_box=document.getElementById("timer_container");
            var time_disp=document.getElementById("time");
            var time_disp_value=document.getElementById("time").innerHTML;
            var time_txt=document.getElementById("timer");
            var retry=document.getElementById("play_again_box");
            var back=document.getElementById("home_screen");
            var player=document.getElementById("image1");
            document.getElementById("dialogue").style.display="none";
            back.style.display="none";
            retry.style.display="none";
            time_box.style.display="none";
            sound.autoplay="true";
            sound.load();
            
            play.onclick=game_prep;
            retry.onclick=reload;

            function reload(){
                window.location="../html/star_dash.php";
            }

            function game_prep(){
            document.getElementById("game_ins").style.display="none";
            document.getElementById("game").style.display="block";
            document.getElementById("logo").style.display="none"
            time_box.style.display="block";
            sound.autoplay="true";
            sound.load();
            cheer_up.autoplay="true";
            cheer_up.load();
            var timeleft = 30;
            var flag=false;
            var downloadTimer = setInterval(function(){
            timeleft--;
            
            time_disp.textContent =("0" + timeleft).slice(-2);

            if( timeleft > 0 && player.offsetLeft > 1280)//https://www.kirupa.com/html5/get_element_position_using_javascript.htm
            {
                clearInterval(downloadTimer);
                console.log(time_disp.innerHTML);
                document.getElementById("game").style.display="none";
                time_txt.innerHTML="YOU WIN";
                retry.style.display="block";
                back.style.display="block";
                back.onclick=function(){
                    window.location="../index.php";
                }
            }
            else if(timeleft<=0)
            {
                console.log(player.offsetLeft);
                clearInterval(downloadTimer);
                console.log(time_disp.innerHTML);
                document.getElementById("game").style.display="none";
                time_txt.innerHTML="YOU LOSE";
                retry.style.display="block";
                back.style.display="block";
                document.getElementById("dialogue").style.display="none";
                back.onclick=function(){
                    window.location="../index.php";
                }
            }
            else if(timeleft <=15 && timeleft > 1)
            {
                document.getElementById("dialogue").style.display="block";
            }
            else{
                console.log(player.offsetLeft);
            }
            },1000);
            }

            
            moveSelection();
            setTimeout("gameLoop()",10);

        }
       
/*******************EVENT DRIVING FUNCTION**********************/

function moveSelection(event) {                    
    switch (event.keyCode) {
        case 37:
        console.log("left");
            leftArrowPressed();
        break;

        case 39:
        console.log("right");
            rightArrowPressed();
        break;
    }
};
 /*************TO MOVE THE PLAYER ********************/


function rightArrowPressed() {
                var element = document.getElementById("image1");
                element.style.left = parseInt(element.style.left) + 5 + 'px';
            }

        
