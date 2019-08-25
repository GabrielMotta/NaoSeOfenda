$(document).ready(function() {
    setTimeout(function() {
        $('#welcome1').addClass("appear");
        setTimeout(function() {
            $('#welcome2').addClass("slideRight");
        }, 3000);
    }, 2000);
});