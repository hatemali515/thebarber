
$(document).ready(function(){

    $('#menuBtn').click(function(){
        $('#sidenav').fadeToggle(400);
    });


});
/* by javascript sidenav
var menuBtn = document.getElementById("menuBtn")
var sidenav = document.getElementById("menuBtn")
var menu = document.getElementById("menu")
sidenav.style.right = "-250px";
menuBtn.onclick = function(){
    if(sidenav.style.right == "-250px"){
        sidenav.style.right = "0";
        menu.src = "images/avt-img.jpg";
    }
    else{
        sidenav.style.right ="-250px";
        menu.src = "images/avt-img.jpg";

    }
} 
*/