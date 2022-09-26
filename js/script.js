// Portfolio V2
document.querySelector(".partone>svg").addEventListener("click", submenu);
function submenu(){
    document.querySelector(".parttwo").classList.toggle("hide");
    document.querySelector(".partthree").classList.toggle("hide");

}
// Hauteur totale
var totalheight = (screen.height)-(window.innerHeight);
console.log(totalheight);
// Menu
if (window.matchMedia("(min-width: 1200px)").matches) {
    
    document.querySelectorAll(".hide").forEach(e => {
        e.classList.toggle("hide");
    });
    console.log(screen.width);
    document.querySelector("main").style.width= (screen.width)-220+"px";
    var footerwidth = document.querySelector("footer").style.width;
    // Pied de page
    console.log(screen.height);
    var main = document.querySelector("main");
    console.log("jjjj");
    console.log(main.off)
    if (main.offsetHeight < screen.height) {
        console.log("fffff");
        main.style.height = screen.height+"px";
    }
    // Menu sous-menus
    document.querySelector(".ul-menu").classList.add("hide");
    document.querySelector(".declencheur").addEventListener("mouseover", opacity);
    document.querySelector(".declencheur").addEventListener("mouseout", opacity);
    function opacity(){
        document.querySelector(".ul-menu").classList.toggle("hide");
    }
}
// A propos
if (window.matchMedia("(min-width: 680px)").matches) {
    // Les images d'A propos
    var images = document.querySelectorAll(".img");
    images.forEach(e => {
        e.style.height = e.getAttribute("pour-id")+"%";
    });

    // Gallerie
    var galleryimage = document.querySelectorAll(".grid.gallery.lycee>img");
    galleryimage.forEach(e=> {
        e.addEventListener("click", function(){
            var fullscreen = document.createElement("div");
            fullscreen.classList.add("fullscreen");
            fullscreen.style.width= document.querySelector("main").style.width;
            fullscreen.style.height= "100vh";
            fullscreen.innerHTML= `<svg style='margin-left: auto; margin-right: 10px;' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                <img style='margin-top: 10px;' src='${e.getAttribute("src")}' alt='${e.getAttribute("alt")}' width='90%' alt='${e.getAttribute("alt")}' loading='lazy'>`;
            fullscreen.style.position= "fixed";
            fullscreen.style.top= "0px";
            fullscreen.style.right= "0px";
            fullscreen.style.display= "flex";
            fullscreen.style.flexDirection= "column";
            fullscreen.style.alignItems= "center";
            fullscreen.style.background= "#000000";
            fullscreen.style.padding= "10px";
            document.querySelector("body").appendChild(fullscreen);
            // Fermer le plein écran
            var fermer = document.querySelector(".fullscreen > svg");
            fermer.addEventListener("click", function(){
                fullscreen = document.querySelector(".fullscreen");
                this.parentNode.parentNode.removeChild(fullscreen);
            });
        });
    });
}
// Réalisations et A propos et sous catégories
var lien = window.location.href;
var tab = lien.split("/");
var logos = document.querySelectorAll(".blanc, .fond.deux");
logos.forEach(e => {
    var Idd = e.parentNode.getAttribute("id");
    if (tab.length == 10)
    {
        e.style.backgroundImage= "url('../img/"+Idd+"')";
    }
    else
    {
        e.style.backgroundImage= "url('img/"+Idd+"')";
    }
    e.style.backgroundSize= "contain";
    e.style.backgroundRepeat= "no-repeat";
    e.style.backgroundPosition= "center center";
});
console.log(tab);
console.log(window.location.href);
// Compétences
var progress = document.querySelectorAll(".progress");
progress.forEach(e => {
    e.style.width= e.getAttribute("val-id")+"%";
});

// Animation 
var elements = document.querySelectorAll(".bloc, h2");
elements.forEach(e => {
    setTimeout(() => {
        e.style.opacity= 1;
    }, e.getAttribute("tempp-id"));
    e.style.animation= "appear 2s";
    e.style.animationDelay= e.getAttribute("temp-id")+"s";
});

// Animation de fond
document.querySelector(".area").style.height= document.querySelector("main").offsetHeight+"px";
console.log(window.innerHeight);
console.log(screen.height)