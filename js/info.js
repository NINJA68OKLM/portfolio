jQuery(function () {
    $(".info").on("click", function(){
        $("#info").css("display", "initial")
        var fichier = $(this).siblings().each(function(r) {
            var nameId = $(this).attr("data-name-id")
            console.log(nameId)
            $.get(nameId, function(data) {
                console.log(data)
                $("#info").html(data)
            })
        })
        
    })
})