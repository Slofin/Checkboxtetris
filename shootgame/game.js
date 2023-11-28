console.log("ok");

jQuery(document).ready(function () {

    $("#square").append(`<div id="meta"></div>`);
    var mouseX = 800, mouseY = 600;
    var xp = 0, yp = 0;

    $(document).mousemove(function (e) {
        mouseX = e.pageX - $("#square").position().left;
        mouseY = e.pageY - $("#square").position().top;
        // console.log($("#meta").position());
    });

    setInterval(function () {

        if($("#square").is(":hover")){
            xp += ((mouseX - xp) / 1.5);
            yp += ((mouseY - yp) / 1.5);
            $("#meta").css({ left: xp + 'px', top: yp + 'px' });
            // console.log(xp);
        }
    }, 20);

});