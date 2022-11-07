jQuery(function () {
    $(".info").on("click", function(){
        $("#info").css("display", "initial")
        $.get("michou.txt", function(data) {
            console.log(data)
            $("#info").html(data)
        })
    })
})