$(document).ready(function() {
    $(".drop").click(function(event) {
        event.preventDefault();
        if ($(this).hasClass("clicked")) {
            $(".dropdown-div").hide();
            $(this).removeClass("clicked");
        } else {
            $(".dropdown-div").show();
            $(this).addClass("clicked");
        }
    });

    $("#objective").hover(function() {
        $("#obj-check").show();
    }, function() {
        $("#obj-check").hide();
    })

    $("#aquisition").hover(function() {
        $("#aq-check").show();
    }, function() {
        $("#aq-check").hide();
    })

    $("#activation").hover(function() {
        $("#act-check").show();
    }, function() {
        $("#act-check").hide();
    })

    $("#retention").hover(function() {
        $("#ret-check").show();
    }, function() {
        $("#ret-check").hide();
    })

});
