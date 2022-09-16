// // Menu mobile
// document.querySelector(".header-item").addEventListener("click", elements);
// document.querySelector(".sub-header>svg").addEventListener("click", elements);
// function elements(){
//     document.querySelector(".header.mobile").classList.toggle("hide");
// }

// Portfolio V2
document.querySelector(".partone>svg").addEventListener("click", submenu);
function submenu(){
    document.querySelector(".parttwo").classList.toggle("hide");
    document.querySelector(".partthree").classList.toggle("hide");

}
// Menu
if (window.matchMedia("(min-width: 1200px)").matches) {
    document.querySelectorAll(".hide").forEach(e => {
        e.classList.toggle("hide");
    });
    console.log(screen.width);
    document.querySelector("main").style.width= (screen.width)-222+"px";
    var footerwidth = document.querySelector("footer").style.width;
    // document.querySelectorAll("a, li").forEach(e => {
    //     e.
    // });
    // Les images d'A propos
    var images = document.querySelectorAll(".img");
    images.forEach(e => {
        e.style.height = e.getAttribute("Id")+"%";
        // console.log(e.getAttribute("Id"));
    });
}
// Réalisations et A propos
var logos = document.querySelectorAll(".blanc, .fond.deux");
logos.forEach(e => {
    var Idd = e.parentNode.getAttribute("id");
    e.style.backgroundImage= "url('img/logos/"+Idd+".png')";
    e.style.backgroundSize= "contain";
    e.style.backgroundRepeat= "no-repeat";
    e.style.backgroundPosition= "center center";
    // console.log(Idd);
});
// Compétences
var progress = document.querySelectorAll(".progress");
progress.forEach(e => {
    e.style.width= e.getAttribute("val-id")+"%";
    // if (e.getAttribute("val-id") == 100) {
    //     e.style.borderRadius= "10px";
    // } else {
    //     e.style.borderRadius= "10px 0px 0px 10px";
    // }
});

// Animation 

var elements = document.querySelectorAll(".bloc, h2");
elements.forEach(e => {
    setTimeout(() => {
        e.style.opacity= 1;
    }, e.getAttribute("tempp-id"));
    e.style.animation= "appear 2s";
    e.style.animationDelay= e.getAttribute("temp-id")+"s";
    // console.log(e.getAttribute("temp-id"));
    // console.log(e.getAttribute("tempp-id"))
});
