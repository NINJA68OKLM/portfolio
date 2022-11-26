jQuery(function () {
    $(".info").on("click", function(e){
        e.preventDefault()
        $("#info").css("display", "initial")
        var nameId = $(this).data("name")
        var fichier = $(this).siblings().each(function(r) {
            console.log(nameId)
            $.get(nameId, function(data) {
                console.log(data)
                $("#info").addClass("infoappear")
                $("#info").html(`<div class='flex' style='justify-content: right;'><svg class='closeinfo' style='margin-left: auto; margin-right: 10px;' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                <h2 style='opacity: 1 !important;'>Infos :</h2>
                ${data}`)
            })
        })
        
    })

    $(".closeinfo").on("click", function(e){
        consol.log("KKKKIK")
        $("#info").removeClass("infoappear")
    })
})