

    $(document).ready(function(){
        $("#plus").click(function(){
            $("#sign").replaceWith(" + ");
        });
        $("#substr").click(function(){
            $("#sign").replaceWith(" - ");
        });
        $("#mul").click(function(){
            $("#sign").replaceWith(" * ");
        });
        $("#divide").click(function(){
            $("#sign").replaceWith(" / ");
        });
    });

