window.onload=space;
function space(){
	document.getElementById("item1").onclick=starDash;
	document.getElementById("metoroids").style.display="none";
	animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
    animateDiv('.e');
    animateDiv('.f');
    animateDiv('.g');
    animateDiv('.h');
    animateDiv('.i');
    animateDiv('.j');
    animateDiv('.a1');
    animateDiv('.b1');
    animateDiv('.c1');
    animateDiv('.d1');
    animateDiv('.e1');
    animateDiv('.f1');
    animateDiv('.g1');
    animateDiv('.h1');
    animateDiv('.i1');
    animateDiv('.j1');
    document.getElementById("item2").onclick=metoroid;

}
function starDash(){
	window.location="html/star_dash.html";
}
function metoroid(){
	document.getElementById("metoroids").style.display="block";
}
function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 4000,   function(){
      animateDiv(myclass);        
    });
    
};