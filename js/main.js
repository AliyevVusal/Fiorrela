//varibel
var date = new Date().getHours();
var body = document.getElementById('mode');
var val = document.getElementById('Valentine');
var exp = document.getElementById('Experts');
var blog = document.getElementById('Blogs');
var slay = document.getElementById('SlayderSeconde');
var menu = document.getElementById('click');

//hamburger menyu
function menus(){
    if(menu.style.height=="0%"){
        menu.style.height= "170px ";
        menu.style.visibility="visible";
    }
    else
    {
        menu.style.height= "0%";
        menu.style.visibility = "hidden";
    }  
}





//
if (date >= 6 && date < 20) {
    body.style.backgroundColor="white";
    menu.style.backgroundColor="#FEFAF3";
}
else{
    body.style.backgroundColor="grey";
    val.style.backgroundColor="lightgrey";
    exp.style.backgroundColor="grey";
    blog.style.backgroundColor="lightgrey";
    slay.style.backgroundColor="grey"; 
    menu.style.backgroundColor="lightgrey";
}


