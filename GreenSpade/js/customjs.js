$(document).ready(function() {

    $('select').blur(function() {
        if ($(this).val())
            $(this).addClass('used');
        else
            $(this).removeClass('used');



    });
    $('input').blur(function() {
        if ($(this).val())
            $(this).addClass('used');
        else
            $(this).removeClass('used');



    });
    $("body").on("click", ".selected", function() {
        $(this).next(".options").toggleClass("open");
    });

    $("body").on("click", ".option", function() {
        $(".selected").html($(this).find("span").html());
        $(".options").toggleClass("open");
    });

});