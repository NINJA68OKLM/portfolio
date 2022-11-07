jQuery(function () {
    $(".info").on("click", function(){
        $("#info").css("display", "initial")
        var fichier = $("this").siblings().each(function() {
            var nameId = r.data(nameId)
        })
        $.get(nameId, function(data) {
            console.log(data)
            $("#info").html(data)
        })
    })
})