var keyboardInput = [];

var metaSpeed;

var screenX, screenY;
var meta;
var bulletID = 0;
var rotate = 0;
var audio = [];

var rotateVector = function (vec, ang) {
    ang = -ang * (Math.PI / 180);
    var cos = Math.cos(ang);
    var sin = Math.sin(ang);
    return new Array(Math.round(10000 * (vec[0] * cos - vec[1] * sin)) / 10000, Math.round(10000 * (vec[0] * sin + vec[1] * cos)) / 10000);
};

class Meta {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class bullet {

    constructor(startx, starty, endx, endy, speed, radius, boxShadow, picture) {

        var thisbulletID = bulletID;

        typeof boxShadow !== "undefined" ? this.boxShadow = boxShadow : this.boxShadow = "inset 0px 0px 8px 1px rgba(0, 255, 0, 255)";

        $("#square").append(`
            <div id="bullet${thisbulletID}" class="bullet"
            style="
            width: ${radius}px;
            height: ${radius}px;
            top: ${starty}px;
            left: ${startx}px;
            transition : left ${speed}s linear, top ${speed}s linear;
            box-shadow : ${this.boxShadow};">
            </div>`
        );

        var move = setTimeout(() => {
            $(`#bullet${thisbulletID}`).css("left", endx);
            $(`#bullet${thisbulletID}`).css("top", endy);
        }, 20);

        var close = setTimeout(() => {
            $(`#bullet${thisbulletID}`).remove();
        }, speed * 1000 + 20);

        if (typeof picture == "undefined") {
            this.picture = "none";
        }
        else {
            this.picture = picture;
            $(`#bullet${thisbulletID}`).css('background-image', `url(${picture})`);
        }

        bulletID++;
        delete this;
    }
}

jQuery(document).ready(function () {


    $("#square").append(`<img src="./metaorb.png" id="meta">`);
    // $("#square").append(`<div id="meta"></div>`);

    screenX = $("#square").position().left;
    screenY = $("#square").position().top;

    meta = new Meta(($("#meta").position().left - $("#square").position().left),
        ($("#meta").position().top - $("#square").position().top));

    meta.x = $("#meta").position().left - $("#square").position().left;
    meta.y = $("#meta").position().top - $("#square").position().top;

    $("#meta").css({ left: meta.x + 'px', top: meta.y + 'px' });

    $("#startbutton").css({ left: meta.x + 'px', top: meta.y + 'px' });

    onkeydown = onkeyup = function (e) {
        keyboardInput[e.key] = e.type == 'keydown';
        // console.log(keyboardInput);
    }

    $("#startbutton").click(function () {
        // $("body").css({ "cursor": "none" });
        $("#startbutton").css({ "display": "none" });
        GameInterval = setInterval(game, 16.67);

        $("#square").append(`<div id="premovetext">Use Arrow Keys to move</div>`);
        
        

        audio[`m`] = new Audio();
        audio[`m`].src = "./m.m4a";
        audio[`m`].currentTime = 118.2;

        bullets();

    });

});

function game() {

    keyboard();
    metaMoveWall();
    metaHitbox();

}

function bulletVector(startXY,distance,angle,time,radius){

    var rotated = rotateVector([distance,0],angle-180);

    new bullet(startXY[0],startXY[1],startXY[0]+rotated[0],startXY[1]+rotated[1],time,radius, "inset 0px 0px 4px 1px rgb(255, 255, 255)");
}

function keyboard() {

    if (keyboardInput["ArrowUp"]) {
        metaMoveKeyboard(0, -metaSpeed);
    }
    if (keyboardInput["ArrowDown"]) {
        metaMoveKeyboard(0, metaSpeed);
    }
    if (keyboardInput["ArrowLeft"]) {
        metaMoveKeyboard(-metaSpeed, 0);
    }
    if (keyboardInput["ArrowRight"]) {
        metaMoveKeyboard(metaSpeed, 0);
    }

    if (keyboardInput[" "]) {
        console.log(meta.x, meta.y);
        console.log(screenX, screenY);
    }

    if (keyboardInput["z"]) {
        // bullet(meta.x, meta.y + 10, 1, 0);
    }

    if (keyboardInput["Shift"]) {
        metaSpeed = 2;
        $("#meta").css({ "box-shadow": "inset 0px 0px 8px 1px rgb(255, 100, 0)" });
    }

    else {
        metaSpeed = 4;
        $("#meta").css({ "box-shadow": "none" });
    }

}

function metaMoveKeyboard(x, y) {

    $("#premovetext").remove();     

    if ((meta.x > 20 && x < 0) || (meta.x < $("#square").width() - 20 && x > 0)) {
        meta.x += x;
    }

    if ((meta.y > 20 && y < 0) || (meta.y < $("#square").height() - 20 && y > 0)) {
        meta.y += y;
    }

    // console.log(meta.x, meta.y, $("#square").width(), $("#square").height(), x, y);

    $("#meta").css({ left: meta.x + 'px', top: meta.y + 'px' });
}

function metaMoveWall() {

    if (meta.x < 20) {
        meta.x = 20;
    }

    if (meta.x > $("#square").width() - 20) {
        meta.x = $("#square").width() - 20;
    }

    if (meta.y < 20) {
        meta.y = 20;
    }

    if (meta.y > $("#square").height() - 20) {
        meta.y = $("#square").height() - 20;
    }

    $("#meta").css({ left: meta.x + 'px', top: meta.y + 'px' });

}

function metaHitbox() {

    var nearest = $("#meta").nearest($(".bullet"), { tolerance: 0 });
    // console.log(nearest);
    if (typeof nearest[0] !== "undefined") {
        var bX = nearest.position().left + (nearest.width() / 2) - $("#square").position().left;
        var bY = nearest.position().top + (nearest.height() / 2) - $("#square").position().top;

        var dist = Math.hypot(meta.x - bX, meta.y - bY);


        if (dist < nearest.width() / 2 * 0.9 + 20) {
            rotate += 60;
        }
        else {
            rotate = 0;
        }
        $("#meta").css(`transform`, `translate(-50%, -50%) rotate(${rotate}deg)`);
    }

}

function bullets(){

    var Snowing = setInterval(() => {
        var a = Math.random() * $("#square").width();
        var b = a + (50 - Math.random() * 100);
        new bullet(a, -20, b, 600, 5, 10, "inset 0px 0px 5px 2px rgb(255, 255, 255)");
    }, 250);
    
        // var a = Math.random() * 800;
        // var b = a + (50 - Math.random() * 100);

        // new bullet(a, -20, b, 590, 2, 10, "inset 0px 0px 4px 1px rgb(255, 0, 0)");
        // bulletVector([400,200],500,b+270,2,20);
        // bulletVector([400,200],500,b+180,2,20);
        // bulletVector([400,200],500,b+90,2,20);

        // bulletVector([400,200],400,a,2,5);
        // c+=15;

    // setInterval(() => {

    //     var a = Math.random() * 800;

    //     new bullet(a, -20,  meta.x - 20,  meta.y - 20, 5, 40, "none","./morgan.png");

    // }, 200);

}