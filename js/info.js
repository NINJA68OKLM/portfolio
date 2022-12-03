jQuery(function () {
    // Au clic sur le bouton "info" on affiche le bloc "info"
    $(".info").on("click", function(e){
        e.preventDefault()
        $("#info").css("display", "initial")
        var nameId = $(this).data("name")
        var fichier = $(this).siblings().each(function(r) {
            $.get(nameId, function(data) {
                $("#info").addClass("infoappear")
                $("#info").html(`<div class='' style='justify-content: right;'>
                                    <button class='closee'>
                                        <svg style='margin-left: 5px; margin-right: px;' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                <h2 style='opacity: 1 !important;'>Infos :</h2>
                <div class='contenuinfo'>${data}</div>`)
            })
        })
        
    })

    // Suppression du bloc "info" au clic sur la croix
    $("#info").on("click", function(f){
        f.preventDefault()
        // console.log("KKKKIK")
        $("#info").removeClass("infoappear")
        $("#info").css("display", "none")
    }) 
    $(".contenuinfo").on("click", function(f){
        f.preventDefault()
    }) 
    
})