// Menu clic
document.querySelector(".partone>svg").addEventListener("click", submenu);
function submenu(){
    document.querySelector(".area").classList.toggle("top");
    document.querySelector("main").classList.toggle("top");
    document.querySelector(".parttwo").classList.toggle("hide");
    document.querySelector(".partthree").classList.toggle("hide");
}
// Taille des anim
document.querySelector(".area");
// Hauteur totale
var totalheight = (screen.height)-(window.innerHeight);
// Style menu
if (window.matchMedia("(max-width: 1200px)").matches) {
    document.querySelector("body").style.height= "99vh";
    // Taille du main en mobilme et tablette
    // setInterval(() => {
    //     document.querySelector("main").style.width= (window.innerWidth)+"px";
    // }, 100);
    document.querySelector(".area").style.width= "100%";
}
if (window.matchMedia("(min-width: 1200px)").matches) {
    
    document.querySelectorAll(".hide").forEach(e => {
        e.classList.toggle("hide");
    });
    // Définition et actualisation de la largeur du main
    // setInterval(() => {
    //     document.querySelector("main").style.width= (window.innerWidth)-175+"px";
    // }, 100);
    
    var footerwidth = document.querySelector("footer").style.width;
    // Position du pied de page
    console.log("Taille de l'écran :"+screen.height);
    var main = document.querySelector("main");
    console.log(main.off)
    if (main.offsetHeight < screen.height) {
        main.style.height = screen.height+"px";
        setInterval(() => {
            // document.querySelector("main").style.width= (window.innerWidth)-175+"px";
            // document.querySelector(".area").style.height= screen.height+"px";
            // document.querySelector(".area").style.width= window.innerWidth+"px";
        }, 100);
        console.log("Hauteur de la main : "+main.offsetHeight);
        document.querySelector("footer").style.marginTop= "auto";
        
    }
    else
    {
        document.querySelector("footer").style.marginTop= "25px";
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
    var galleryimage = document.querySelectorAll(".grid.gallery.lycee>img, .etudiant>div>img");
    galleryimage.forEach(e=> {
        e.addEventListener("click", function(){
            var fullscreen = document.createElement("div");
            fullscreen.classList.add("fullscreen");
            
            fullscreen.style.width= document.querySelector("main").style.width;
            fullscreen.style.width= "90%";
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
            fullscreen.style.padding= "10px 10px 10px 175px";
            // fullscreen.style.boxSizing= "border-box";
            
            document.querySelector("body").appendChild(fullscreen);
            // Fermer le plein écran
            var fermer = document.querySelector(".fullscreen > svg");
            fermer.addEventListener("click", function(){
                fullscreen = document.querySelector(".fullscreen");
                this.parentNode.parentNode.removeChild(fullscreen);
            });
            
            // Définition de la taille
            fsm = document.querySelector(".fullscreen>img[alt='Noé Zimmermann - EKIZ Mustafa']");
            console.log(fsm);
            if (fsm.getAttribute("alt") == "Noé Zimmermann - EKIZ Mustafa") {
                fsm.style.height= "90%";
                fsm.style.width= "auto";
            }
        });
    });
}
// Réalisations et A propos et sous catégories
var lien = window.location.href;
var tab = lien.split("/");
var logos = document.querySelectorAll(".blanc, .fond.deux");
logos.forEach(e => {
    var Idd = e.parentNode.getAttribute("id");
    if (tab.length == 5)
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
console.log(tab.length);
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
// document.querySelector(".area").style.height= document.querySelector("main").offsetHeight+"px";
// setInterval(() => {
//     document.querySelector(".area").style.height= document.querySelector("main").offsetHeight+"px";
//     console.log(window.innerWidth);
// }, 100);

// console.log(document.querySelector("main").offsetHeight);

// Taille du .area
setInterval(() => {
    document.querySelector(".area").style.height= document.querySelector("main").offsetHeight+"px";
}, 100);