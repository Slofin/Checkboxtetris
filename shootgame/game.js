var keyboardInput = [];

var metaSpeed;

var screenX, screenY;
var meta;
var bulletID = 0;
var bullets = {};

var NearestOpts = {
    includeSelf: false,
    sameX: false,
    sameY: false,
    showGuides: true,
    tolerance: 1
};


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

    constructor(x, y, speed, angle, radius, boxShadow, picture) {



        this.x = x;
        this.y = y;
        this.speed = speed;
        this.angle = angle - 180;
        this.radius = radius;

        var thisbulletID = bulletID;

        typeof boxShadow !== "undefined" ? this.boxShadow = boxShadow : this.boxShadow = "inset 0px 0px 8px 1px rgba(0, 255, 0, 255)";
        typeof picture !== "undefined" ? this.picture = picture : this.picture = "./morgan.png";

        var bulletMoveXY = [];
        bulletMoveXY = rotateVector([0, speed], angle);

        $("#square").append(`
            <div id="bullet${thisbulletID}" class="bullet"
            style="
            width: ${radius}px;
            height: ${radius}px;
            top: ${y}px;
            left: ${x}px;
            box-shadow : ${boxShadow};">
            </div>`
        );

        $(`#bullet${thisbulletID}`).css('background-image', 'url(' + picture + ')');

        var bulletMove = setInterval(function () {
            if ((x > -50 && x < $("#square").width() + 50) && (y > -50 && y < $("#square").height() + 50)) {

                x += bulletMoveXY[0];
                y += bulletMoveXY[1];

                $(`#bullet${thisbulletID}`).css({ "left": x + 'px', "top": y + 'px' });
                delete this;
            }
            else {
                clearInterval(bulletMove);
                $(`#bullet${thisbulletID}`).remove();
            }
        }, 16);
        bulletID++;
    }
}

jQuery(document).ready(function () {


    $("#square").append(`<img src="./metaorb.png" id="meta">`);
    // $("#square").append(`<div id="meta"></div>`);

    screenX = $("#square").position().left;
    screenY = $("#square").position().top;

    meta = new Meta(($("#meta").position().left - $("#square").position().left), ($("#meta").position().top - $("#square").position().top));

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
        GameInterval = setInterval(game, 16);

        for (let index = -30; index < 40; index += 10) {
            new bullet(400, 50, 2, 1 * index, 40, "none", "./morgan.png");
        }

    });

});

function game() {

    keyboard();
    metaMoveWall();
    metaHitbox();

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



    var nearest = $("#meta").nearest($(".bullet"),{tolerance: 0});
    if(typeof nearest[0] !== "undefined"){

    var mX = $("#meta").position().left+20;
    var mY = $("#meta").position().top+20;

    var bX = nearest.position().left + (nearest.width() / 2);
    var bY = nearest.position().top + (nearest.height() / 2);

    var dist = Math.hypot(mX-bX,mY-bY);

    if(dist < nearest.width()*0.95){
        console.log("Meta : AAAAAAAAAAA");
    }  
    }




}