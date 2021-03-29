// js for toogle  navbar menu

var menuItems = document.getElementById("menuItems")

menuItems.style.maxHeight = "0px";

function menutoggl(){
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "200px";
    }
    else{
        menuItems.style.maxHeight = "0px"
    }
}
//-------- product-details-page-------------------
// small-img show in box

var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("smallImg");

smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src
}
smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src
}
smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src
}
smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src
}

// -----------account page | login and Register-------------------------

var LoginForm = document.getElementById("loginForm");
 var RegForm = document.getElementById("RegForm")
var idicator = document.getElementById("idicator");

function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform ="translateX(0px)";
}
function login() {
   RegForm.style.transform = "translateX(300px)";
   LoginForm.style.transform = "translateX(300px)";
}