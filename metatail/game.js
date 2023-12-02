// var beatTimes[];
var beatTimes = [0.11, 0.53, 0.93, 1.35, 1.81, 2.21, 2.62, 3.0500000000000003, 3.48, 3.9, 4.32,
    4.75, 5.22, 5.628181818181818, 6.036363636363636, 6.444545454545454, 6.852727272727273, 7.260909090909091, 7.669090909090909, 8.077272727272728, 8.485454545454546, 8.893636363636364, 9.301818181818183, 9.71, 10.16, 10.57, 11.030000000000001, 11.49, 11.912, 12.334000000000001, 12.756000000000002, 13.178000000000003, 13.6, 14.05, 14.47, 14.96, 15.36, 15.754999999999999, 16.15, 16.555, 16.96, 17.345, 17.73, 18.14,
    18.545, 18.95, 19.39, 19.81, 20.2, 20.59, 21, 21.41, 21.82, 22.2, 22.580000000000002, 23.01, 23.4175, 23.825, 24.232499999999998, 24.64, 25.01, 25.410000000000004, 25.810000000000002, 26.29, 26.66, 27.060000000000002, 27.47, 27.900000000000002, 28.340000000000003, 28.78, 29.18, 29.68, 30.15, 30.62, 31.1, 31.52, 31.948, 32.376000000000005, 32.804,
    33.232, 33.660000000000004, 34.06, 34.57, 34.980000000000004, 35.415000000000006, 35.85, 36.260000000000005, 36.67, 37.1, 37.531666666666666, 37.96333333333333, 38.394999999999996, 38.82666666666666, 39.258333333333326, 39.69, 40.12, 40.5625, 41.005, 41.447500000000005, 41.89, 42.27125, 42.6525, 43.033750000000005, 43.415000000000006, 43.79625000000001, 44.17750000000001, 44.55875000000001, 44.94, 45.33076923076923, 45.72153846153846, 46.11230769230769, 46.50307692307692, 46.89384615384615, 47.28461538461538, 47.67538461538461, 48.06615384615384, 48.45692307692307, 48.8476923076923, 49.23846153846153, 49.62923076923076, 50.02, 50.43000000000001, 50.84, 51.26, 51.64, 52.050000000000004, 52.44, 52.85, 53.29, 53.730000000000004, 54.17, 54.7, 55.1, 55.51, 55.910000000000004, 56.300000000000004, 56.69,
    57.08, 57.555, 58.03, 58.43, 58.83, 59.230000000000004, 59.63, 60.02, 60.43, 60.83, 61.230000000000004, 61.620000000000005, 62.02, 62.43, 62.82, 63.22, 63.620000000000005, 64.02, 64.43, 64.82000000000001, 65.22, 65.62, 66.02, 66.42, 66.82000000000001, 67.22, 67.62, 68.02, 68.42, 68.82000000000001, 69.22, 69.61, 70.02, 70.42, 70.82000000000001, 71.22, 71.62, 72.02,
    72.41, 72.82000000000001, 73.22, 73.62, 74.01, 74.41, 74.81, 75.21000000000001, 75.61, 76.01, 76.41, 76.81, 77.21000000000001, 77.61, 78.01, 78.41, 78.81, 79.21000000000001, 79.61, 80, 80.41, 80.81, 81.21000000000001, 81.61, 82.01, 82.41, 82.8, 83.2, 83.60000000000001, 84, 84.4, 84.81, 85.21000000000001, 85.60000000000001, 86, 86.4, 86.8, 87.2, 87.60000000000001, 88, 88.4, 88.8, 89.2, 89.60000000000001, 90, 90.4, 90.8, 91.19, 91.59, 91.99, 92.4, 92.8, 93.19, 93.59, 93.99,
    94.4, 94.79, 95.2, 95.60000000000001, 96, 96.39, 96.79, 97.19, 97.59, 97.99000000000001, 98.39, 98.79, 99.18, 99.58, 99.99000000000001, 100.38, 100.8, 101.2, 101.60000000000001, 101.99000000000001, 102.39, 102.78, 103.19, 103.58, 103.97, 104.38, 104.78, 105.19, 105.57000000000001, 105.98, 106.37, 106.78, 107.17, 107.58, 107.97, 108.38, 108.77,
    109.18, 109.58, 109.97, 110.38, 110.77, 111.18, 111.58, 111.96000000000001, 112.37, 112.77, 113.17, 113.57000000000001, 113.97, 114.37, 114.78, 115.17, 115.57000000000001, 115.96000000000001, 116.37, 116.76, 117.17, 117.57000000000001, 117.97, 118.36, 118.77, 119.17, 119.56, 119.97, 120.36, 120.76, 121.16, 121.57000000000001, 121.96000000000001, 122.36, 122.76,
    123.16, 123.56, 123.96000000000001, 124.37, 124.75, 125.16, 125.56, 125.96000000000001, 126.35000000000001, 126.76, 127.16, 127.58, 127.96000000000001, 128.35, 128.75, 129.15, 129.56, 129.96, 130.35, 130.75, 131.15, 131.55, 131.96, 132.35, 132.74, 133.15, 133.55, 133.95, 134.34, 134.75, 135.14000000000001, 135.55, 135.94, 136.35, 136.74, 137.15, 137.55, 137.95000000000002,
    138.34, 138.75, 139.15, 139.55, 139.95000000000002, 140.39000000000001, 140.75, 141.14000000000001, 141.54, 141.94, 142.33, 142.74, 143.13, 143.54, 143.94, 144.34, 144.74, 145.13, 145.54, 145.94, 146.34, 146.74, 147.14000000000001, 147.53, 147.93, 148.33, 148.73, 149.13, 149.53, 149.94, 150.33, 150.73, 151.13, 151.53, 151.92000000000002, 152.33, 152.73, 153.13,
    153.52, 153.93, 154.32, 154.73, 155.12, 155.52, 155.92000000000002, 156.33, 156.72, 157.12, 157.53, 157.92000000000002, 158.32, 158.72, 159.11, 159.51, 159.91, 160.32, 160.71, 161.12, 161.51, 161.92000000000002, 162.32, 162.72, 163.12, 163.52, 163.92000000000002, 164.32, 164.72, 165.11, 165.51, 165.92000000000002, 166.31, 166.71, 167.11,
    167.52, 167.92000000000002, 168.31, 168.71, 169.11, 169.5, 169.92000000000002, 170.33, 170.71, 171.12, 171.51, 171.91, 172.32, 172.70000000000002, 173.11, 173.51, 173.9, 174.32, 174.71, 175.1, 175.51, 175.89000000000001, 176.3, 176.70000000000002, 177.1, 177.5, 177.9, 178.3, 178.70000000000002, 179.1, 179.5, 179.9, 180.3, 180.69, 181.1, 181.5,
    181.9, 182.3, 182.70000000000002, 183.1, 183.5, 183.9, 184.29, 184.69, 185.09, 185.48, 185.9, 186.3, 186.69, 187.1, 187.5, 187.89000000000001, 188.29, 188.70000000000002, 189.09, 189.49, 189.89000000000001, 190.29, 190.69, 191.09, 191.49, 191.88, 192.29, 192.68, 193.13, 193.48000000000002, 193.88, 194.29, 194.68, 195.09, 195.48000000000002, 195.88,
    196.29, 196.69, 197.065, 197.44, 197.865, 198.29, 198.68, 199.08, 199.47, 199.89000000000001, 200.29, 200.71, 201.13, 201.48000000000002, 201.88, 202.28, 202.68, 203.07, 203.47, 203.87, 204.28, 204.68, 205.07, 205.47, 205.88, 206.26, 206.67000000000002, 207.07, 207.48000000000002, 207.87, 208.27, 208.66, 209.07, 209.46, 209.87, 210.26, 210.67000000000002, 211.07, 211.46, 211.87, 212.27, 212.67000000000002, 213.07, 213.47, 213.87, 214.27, 214.66, 215.07, 215.46, 215.86, 216.26, 216.66, 217.06, 217.45000000000002, 217.86, 218.26, 218.66, 219.06, 219.46, 219.86, 220.26, 220.65, 221.06,
    221.45000000000002, 221.86, 222.26, 222.65, 223.05, 223.46, 223.86, 224.25, 224.65, 225.06, 225.46, 225.85, 226.26, 226.655, 227.05, 227.445, 227.84, 228.25, 228.64000000000001, 229.04000000000002, 229.44, 229.84, 230.24, 230.645, 231.05];

var lynics = [
    `I`,
    `Don't want a lot for Christmas`,
    `There is just one thing I need`,
    `I don't care about the presents`,
    `Underneath the Christmas tree`,
    `I just want you for my own`,
    `More than you could ever know`,
    `Make my wish come true`,
    `All I want for Christmas`,
    `Is`,
    `You`,
    ``,
    `I don't want a lot for Christmas`,
    `There is just one thing I need (And I)`,
    `Don't care about the presents`,
    `Underneath the Christmas tree`,
    `I don't need to hang my stocking`,
    `There upon the fireplace (Ah)`,
    `Santa Claus won't make me happy`,
    `With a toy on Christmas Day`,
    `I just want you for my own (Ooh)`,
    `More than you could ever know (Ooh)`,
    `Make my wish come true`,
    `All I want for Christmas is you`,
    `You, baby`,
    `Oh, I won't ask for much this Christmas`,
    `I won't even wish for snow (And I)`,
    `I'm just gonna keep on waiting`,
    `Underneath the mistletoe`,
    `I won't make a list and send it`,
    `To the North Pole for Saint Nick (Ah)`,
    `I won't even stay awake to`,
    `Hear those magic reindeer click`,
    `'Cause I just want you here tonight (Ooh)`,
    `Holding on to me so tight (Ooh)`,
    `What more can I do?`,
    `Oh baby,`,
    `All I want for Christmas is you`,
    `You, baby`,
    `Oh, all the lights are shining`,
    `So brightly everywhere (So brightly, baby)`,
    `And the sound of children's`,
    `Laughter fills the air (Oh, oh yeah)`,
    `And everyone is singing (Oh yeah)`,
    `I hear those sleigh bells ringing (Oh)`,
    `Santa, won't you bring me the one I really need? (Yeah, oh, oh)`,
    `Won't you please bring my baby to me?`,
    `Oh, I don't want a lot for Christmas`,
    `This is all I'm asking for (Ah)`,
    `I just wanna see my baby`,
    `Standing right outside my door`,
    `Oh, I just want you for my own (Ooh)`,
    `More than you could ever know (Ooh)`,
    `Make my wish come true`,
    `Oh baby`,
    `All I want for Christmas`,
    `Is`,
    `You`,
    `You, baby`,
    `All I want for Christmas is you, baby (You)`,
    `All I want for Christmas is you, baby (Ah, oh, ah, oh)`,
    `All I want for Christmas is you, baby (You)`,
    `All I want for Christmas is you, baby (All I really want, baby, ooh)`,
    ``
];




var nextLynicsBeatTime = [
    16, 21, 31, 41, 51, 59, 69, 81, 94, 110, 120, 120, 134,
    138, 145, 154, 161, 169, 177, 185, 193, 201, 209, 217, 225,
    241, 249, 257, 266, 273, 281, 289, 298, 305, 313, 321, 329,
    336, 337, 354, 362, 369, 379, 385, 395, 403, 409, 417, 425,
    433, 442, 449, 457, 465, 473, 480, 481, 493, 498, 505, 513,
    529, 545, 561, 573];

var lynicsidx = 0;



var keyboardInput = [],
    metaSpeed,
    screenX,
    screenY,
    meta,
    bulletID = 0,
    rotate = 0,
    audio = [],
    nextBeatTime = 0,
    Snowing = [],
    metaHitboxSize = 19.5,
    base = 1522514, // oven
    metaInvincibility = false,
    metahurt = 0;

var rotateVector = function (vec, ang) {
    ang = -ang * (Math.PI / 180);
    var cos = Math.cos(ang);
    var sin = Math.sin(ang);
    return new Array(Math.round(10000 * (vec[0] * cos - vec[1] * sin)) / 10000, Math.round(10000 * (vec[0] * sin + vec[1] * cos)) / 10000);
};

function angle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= -180 / Math.PI; // rads to degs, range (-180, 180]
    //if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
}

class Meta {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function nextLynics() {
    console.log(lynics[lynicsidx]);
    $("#lynics").addClass('hide');
    setTimeout(function () {
        $("#lynics").text(lynics[lynicsidx]);
        lynicsidx = (lynicsidx + 1) % lynics.length;
    }, 100);
    setTimeout(function () {
        $("#lynics").removeClass('hide');
    }, 100);
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
        }, speed * 1000 + 25);

        if (typeof picture == "undefined") {
            this.picture = "none";
        }
        else {
            if (picture == "./morgan.png") {
                // $(`#bullet${thisbulletID}`).css('border-radius', '0px');
                $(`#bullet${thisbulletID}`).css('animation', `rotates 0.25s infinite`);
            }
            $(`#bullet${thisbulletID}`).css('background-image', `url(${picture})`);
        }

        bulletID++;
        delete this;
    }
}

jQuery(document).ready(function () {

    audio[`m`] = new Audio();
    audio[`m`].src = "music.m4a";
    audio['m'].volume = 0.5;

    audio[`h`] = new Audio();
    audio[`h`].src = "undertale_hurt.wav";
    audio['h'].volume = 0.5;

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
        var GameInterval = setInterval(game, 16);
        var MusicInterval = setInterval(musicBullets, 17);
        $("#square").append(`<div id="premovetext">Use Arrow Keys to move<br>Use Shift to focus</div>`);
        $("#squareout").append(`<div id="lynics"></div>`);
        $("#seizurewarning").remove();
        audio[`m`].currentTime = 0;

        while (beatTimes[nextBeatTime] <= audio["m"].currentTime || beatTimes[nextBeatTime] - audio["m"].currentTime < 0.0166) {
            nextBeatTime++;
            if (nextLynicsBeatTime.indexOf(nextBeatTime) != -1) {
                nextLynics();
            }
            if (nextBeatTime == 123) {
                $("#square").append(`<div class="morgan" style="filter:blur(0px);opacity:1"></div>`)
            }
            if (nextBeatTime == 138) {
                $(".morgan").css(`animation-name`, `rotates`);
                $(".morgan").addClass("bullet");
            }
        }

        // test bullet
        // new bullet(400, 300, 400, 300, 120, 20, "inset 0px 0px 5px 2px rgb(255, 255, 255)");

        setTimeout(() => {
            audio[`m`].play();
        }, 1000);

    });

});

function game() {

    keyboard();
    metaMoveWall();
    metaHitbox();

}

function bulletVector(startXY, distance, angle, time, radius, border, picture) {

    var rotated = rotateVector([distance, 0], angle);

    new bullet(startXY[0], startXY[1], startXY[0] + rotated[0], startXY[1] + rotated[1], time, radius, border, picture);
}

function keyboard() {

    if (keyboardInput["ArrowUp"] || keyboardInput["w"] || keyboardInput["W"]) {
        metaMoveKeyboard(0, -metaSpeed);
    }
    if (keyboardInput["ArrowDown"] || keyboardInput["s"] || keyboardInput["S"]) {
        metaMoveKeyboard(0, metaSpeed);
    }
    if (keyboardInput["ArrowLeft"] || keyboardInput["a"] || keyboardInput["A"]) {
        metaMoveKeyboard(-metaSpeed, 0);
    }
    if (keyboardInput["ArrowRight"] || keyboardInput["d"] || keyboardInput["D"]) {
        metaMoveKeyboard(metaSpeed, 0);
    }

    // if (keyboardInput[" "]) {
    //     console.log(meta.x, meta.y);
    //     console.log(screenX, screenY);
    // }

    if (keyboardInput["Shift"]) {
        metaSpeed = 2;
        // $("#meta").css({ "box-shadow": "inset 0px 0px 8px 1px rgb(255, 100, 0)" });
        $("#meta").attr('src', "metaorbfocus.png");
        metaHitboxSize = 5.6;
    }

    else {
        metaSpeed = 4;
        metaHitboxSize = 19.5;
        $("#meta").attr('src', "metaorb.png");
        // $("#meta").css({ "box-shadow": "none" });
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

        // var bX = nearest.position().left + ( parseInt(nearest.css("width"), 10) / 2) - $("#square").position().left;
        // var bY = nearest.position().top + (  parseInt(nearest.css("height"), 10) / 2) - $("#square").position().top;

        var bX = parseInt(nearest.css("left"), 10);
        var bY = parseInt(nearest.css("top"), 10);

        var dist = Math.hypot(meta.x - bX, meta.y - bY);
        if (keyboardInput[' ']) {
            console.log(dist);
        }

        if (dist < parseInt(nearest.css("height"), 10) / 2 + metaHitboxSize /*this is meta's size*/ && metaInvincibility==false) {

            audio['h'].play();
            $("#meta").css(`animation-name`, `hurt`);
            metaInvincibility=true;
            metahurt++;
            setTimeout(()=>{
                metaInvincibility=false;
                $("#meta").css(`animation-name`, ``);             
            },1500);

        }
    }
}

function random(n) {
    // uses Mulberry32 PRNG
    let z = (base += 0x9e3779b9);
    z ^= z >>> 16;
    z = Math.imul(z, 0x21f0aaad);
    z ^= z >>> 15;
    z = Math.imul(z, 0x735a2d97);
    z ^= z >>> 15;
    return Math.abs(z % n);
}

function musicBullets() {

    if (beatTimes[nextBeatTime] <= audio["m"].currentTime || beatTimes[nextBeatTime] - audio["m"].currentTime < 0.0166) {
        nextBeatTime++;

        if (nextLynicsBeatTime.indexOf(nextBeatTime) != -1) {
            nextLynics();
        }

        if (nextBeatTime >= 123) {
            var el = document.getElementById('square');
            el.style.animation = 'none';
            el.offsetHeight; /* trigger reflow */
            el.style.animation = null;
            $("#square").css("animation", "borderBeats 0.5s");
        }

        if (nextBeatTime <= 13) {
            var a = random($("#square").width());
            var b = a + (50 - random(100));
            new bullet(a, -10, b, 600, 5, 10, "inset 0px 0px 10px 2px rgb(255, 255, 255)");
        }

        if (nextBeatTime == 13) {
            new bullet(600, -50, 600, 50, beatTimes[18] - beatTimes[13], 40, "inset 0px 0px 10px 2px rgb(255,0, 0)");
        }

        if (nextBeatTime == 18) {
            Snowing[0] = setInterval(() => {
                if (nextBeatTime >= 112) {
                    clearInterval(Snowing[0]);
                }
                var a = -50 + random($("#square").width() + 100);
                var b = a + (50 - random(100));
                new bullet(a, -20, b, 600, 5, 10, "inset 0px 0px 10px 2px rgb(255, 255, 255)");
            }, 200);
        }
        var nextBeatTimeIntro = [18, 30, 41, 50, 59, 67, 70, 76, 80, 85, 93, 100];


        if (nextBeatTimeIntro.indexOf(nextBeatTime) != -1) {
            if (nextBeatTimeIntro.indexOf(nextBeatTime) % 2 == 0) {
                if (nextBeatTime != 100) {
                    new bullet(200, -50, 200, 50, beatTimes[nextBeatTimeIntro[nextBeatTimeIntro.indexOf(nextBeatTime) + 1]] - beatTimes[nextBeatTimeIntro[nextBeatTimeIntro.indexOf(nextBeatTime)]], 40, "inset 0px 0px 10px 2px rgb(0,255, 0)");
                }
                setTimeout(() => {
                    for (var i = 1; i <= 100; i++) {
                        bulletVector([600, 50], 800, random(360), random(30) / 10 + 3, 20, "inset 0px 0px 10px 2px rgb(255,0, 0)");
                    }
                }, 0);
            }
            else {
                setTimeout(() => {
                    if (nextBeatTime != 100) {
                        new bullet(600, -50, 600, 50, beatTimes[nextBeatTimeIntro[nextBeatTimeIntro.indexOf(nextBeatTime) + 1]] - beatTimes[nextBeatTimeIntro[nextBeatTimeIntro.indexOf(nextBeatTime)]], 40, "inset 0px 0px 10px 2px rgb(255,0, 0)");
                    }
                    for (var i = 1; i <= 100; i++) {
                        bulletVector([200, 50], 800, random(360), random(30) / 10 + 3, 20, "inset 0px 0px 10px 2px rgb(0,255, 0)");
                    }
                }, 0);
            }
        }

        if (nextBeatTime == 123) {
            $("#square").append(`<div class="morgan"></div>`);

            setTimeout(() => {
                $(".morgan").css("filter", `blur(0px)`);
                $(".morgan").css("opacity", `1`);
            }, 100);
        }

        if (nextBeatTime == 123) {
            var closing = 0;
            Snowing[0] = setInterval(() => {
                closing += 7;
                if (nextBeatTime >= 133) {
                    clearInterval(Snowing[0]);
                }
                new bullet((random(20 + closing)), -10, (random(20 + closing)), 600, 2, 20, "inset 0px 0px 10px 2px rgb(255, 255, 0)");
                new bullet(800 - (random(20 + closing)), -10, 800 - (random(20 + closing)), 600, 2, 20, "inset 0px 0px 10px 2px rgb(255, 255, 0)");
            }, 100);
        }

        if (nextBeatTime == 135 ||
            nextBeatTime == 136 ||
            nextBeatTime == 137) {

            var k = nextBeatTime - 134;
            for (var i = -6; i < 6; i++) {
                if (i != 0) {
                    bulletVector([0, 0], 1000, -45 + (i * (20 - k * 3)), 2.5, 40, "none", "./morgan.png");
                }
            }
            setTimeout(() => {
                for (var i = -6; i < 6; i++) {
                    if (i != 0) {
                        bulletVector([800, 0], 1000, -135 + (i * (20 - k * 3)), 2.5, 40, "none", "./morgan.png");
                    }
                }
            }, 150);
        }


        if (nextBeatTime == 138) {
            $(".morgan").css(`animation-name`, `rotates`);
            $(".morgan").addClass("bullet");
            for (var i = -6; i < 6; i++) {
                if (i != 0) {
                    bulletVector([0, 0], 1000, -45 + (i * 12), 2.5, 40, "none", "./morgan.png");
                    bulletVector([800, 0], 1000, -135 + (i * 12), 2.5, 40, "none", "./morgan.png");
                }
            }


        }

        if (nextBeatTime == 139) {
            $(".morgan").css(`animation-name`, `rotates`);
            $(".morgan").addClass("bullet");

            var a = 0, b = 0, c = 0;
            Snowing[0] = setInterval(() => {
                c++;
                if (nextBeatTime >= 169) {
                    clearInterval(Snowing[0]);
                }
                a > 800 ? a -= 800 - random(10) : a += 144;
                b = a + (10 - random(20));
                new bullet(a, -20, b, 600, 3, 10, `inset 0px 0px 10px 2px rgb(${(c % 2) * 255}, ${((c + 1) % 2) * 255}, 0)`);
            }, 50);
        }

        if (nextBeatTime >= 139 && (nextBeatTime % 2 == 1) && nextBeatTime <= 169) {
            for (var i = 0 + (nextBeatTime - 139) / 2; i <= 15 + (nextBeatTime - 139) / 2; i++) {
                var degree = (nextBeatTime - 139) / 2 * 8 + (i * 22.5);
                var forward = rotateVector([0, 120], degree);

                if (Math.abs(degree % 360) < 120 || Math.abs(degree % 360) > 240) {
                    bulletVector([400 + forward[0], 60 + forward[1]], 800, -90 + degree, 3, 40, "none", "./morgan.png");
                }
            }
        }

        if (nextBeatTime >= 170 && (nextBeatTime % 2 == 0) && nextBeatTime <= 199) {
            for (var i = 0 + (nextBeatTime - 170) / 2; i <= 15 + (nextBeatTime - 170) / 2; i++) {
                var degree = (nextBeatTime - 170) / 2 * 8 + (i * 22.5);
                var forward = rotateVector([0, 162], 30 + degree);
                if (nextBeatTime % 4 == 2) {
                    new bullet(400, 60, 700 + forward[0], -50 + forward[1], 0.4, 40, "none", "./morgan.png");
                    new bullet(400, 60, 100 + forward[0], -50 + forward[1], 0.4, 40, "none", "./morgan.png");
                }
                else {
                    new bullet(400, 60, 400 + forward[0], -50 + forward[1], 0.4, 40, "none", "./morgan.png");
                }
            }
            if (nextBeatTime % 4 == 2) {
                new bullet(400, 60, 700, -50, 0.4, 60, "none", "./morgan.png");
                new bullet(400, 60, 100, -50, 0.4, 60, "none", "./morgan.png");
            }
            else {
                new bullet(400, 60, 400, -50, 0.4, 60, "none", "./morgan.png");
            }

        }

        if (nextBeatTime >= 171 && (nextBeatTime % 2 == 1) && nextBeatTime <= 199) {
            for (var i = 0 + (nextBeatTime - 171) / 2; i <= 11 + (nextBeatTime - 171) / 2; i++) {
                var degree = (nextBeatTime - 171) / 2 * 8 + (i * 30);
                var forward = rotateVector([0, 162], 30 + degree);
                if (nextBeatTime % 4 == 3) {
                    bulletVector([730 + forward[0], -50 + forward[1]], 800, -90, 3, 40, "none", "./morgan.png");
                    bulletVector([70 + forward[0], -50 + forward[1]], 800, -90, 3, 40, "none", "./morgan.png");
                }
                else {
                    bulletVector([400 + forward[0], -50 + forward[1]], 800, -90, 3, 40, "none", "./morgan.png");
                }
            }
            if (nextBeatTime % 4 == 3) {
                bulletVector([730, -50], 800, -90, 3, 60, "none", "./morgan.png");
                bulletVector([70, -50], 800, -90, 3, 60, "none", "./morgan.png");
            }
            else {
                bulletVector([400, -50], 800, -90, 3, 60, "none", "./morgan.png");
            }
        }



        if (nextBeatTime >= 202 && nextBeatTime <= 234) {
            var a = 0;
            if (nextBeatTime >= 210) {
                a += 4;
            }
            if (nextBeatTime >= 218) {
                a += 4;
            }
            if (nextBeatTime >= 226) {
                a += 4;
            }
            if (nextBeatTime >= 234) {
                a += 4;
            }


            for (var i = 0 + (nextBeatTime - 200) / 2; i <= 15 + a + (nextBeatTime - 200) / 2; i++) {
                var degree = (nextBeatTime - 200) / 2 * 8 + (i * 360 / (16 + a));
                var forward = rotateVector([0, 120], 0 + degree);
                if (Math.abs(degree % 360) < 120 || Math.abs(degree % 360) > 240) {
                    bulletVector([400 + forward[0], 60 + forward[1]], 800, -90 + degree, 3, 40, "none", "./morgan.png");

                }
            }
        }

        if (nextBeatTime == 234) {

            Snowing[0] = setInterval(() => {

                if (nextBeatTime >= 248) {
                    clearInterval(Snowing[0]);
                }
                var degree = random(360);
                var forward = rotateVector([0, 100], 0 + degree);
                if (Math.abs(degree % 360) < 120 || Math.abs(degree % 360) > 240) {
                    bulletVector([400 + forward[0], 60 + forward[1]], 800, -90 + degree, random(20) / 10 + 4, 10, "inset 0px 0px 10px 2px rgb(255,0,0)");
                }
                var degree = random(360);
                var forward = rotateVector([0, 100], 0 + degree);
                if (Math.abs(degree % 360) < 120 || Math.abs(degree % 360) > 240) {
                    bulletVector([400 + forward[0], 60 + forward[1]], 800, -90 + degree, random(20) / 10 + 4, 10, "inset 0px 0px 10px 2px rgb(0,255,0)");
                }

            }, 20);

        }


        if (nextBeatTime == 246 ||
            nextBeatTime == 247 ||
            nextBeatTime == 248) {

            var k = nextBeatTime - 246;
            for (var i = -6; i < 6; i++) {
                bulletVector([0, 0], 1000, -45 + (i * (20 - k * 3)), 2.5, 40, "none", "./morgan.png");
            }
            setTimeout(() => {
                for (var i = -6; i < 6; i++) {
                    bulletVector([800, 0], 1000, -135 + (i * (20 - k * 3)), 2.5, 40, "none", "./morgan.png");
                }
            }, 150);
        }

        if (nextBeatTime >= 250 && nextBeatTime <= 280) {
            for (var v = 0 + (nextBeatTime - 249) / 2; v <= 7 + (nextBeatTime - 249) / 2; v++) {
                var degree = (nextBeatTime - 249) / 2 * 8 + (v * 360 / 8);
                var forward = rotateVector([0, 120], 0 + degree);
                if (Math.abs(degree % 360) < 120 || Math.abs(degree % 360) > 240) {
                    for (var w = -1; w <= 1; w++) {
                        bulletVector([400 + forward[0], 60 + forward[1]], 800, -90 + w * 5 + degree, 3, 40, "none", "./morgan.png");
                    }
                }
            }
        }

        if (nextBeatTime == 265) {

            closing = 0;
            Snowing[0] = setInterval(() => {
                closing += 2.5;
                if (nextBeatTime >= 280) {
                    clearInterval(Snowing[0]);
                }
                new bullet(closing, -10, (random(20 + closing)), 600, 2, 20, "inset 0px 0px 10px 2px rgb(255, 255, 0)");
                new bullet(800 - closing, -10, (random(20 + closing)) + 780 - closing, 600, 2, 20, "inset 0px 0px 10px 2px rgb(255, 255, 0)");
            }, 75);

        }

        if (nextBeatTime == 277) {

            var a = 0, b = 0, c = 0;
            Snowing[1] = setInterval(() => {
                c++;
                if (nextBeatTime >= 309) {
                    clearInterval(Snowing[1]);
                }
                a > 800 ? a -= 800 - random(10) : a += 333;
                b = a + (10 - random(20));

                if (c % 3 == 0 && nextBeatTime >= 298) {
                    new bullet(a, -20, b, 600, 3, 40, 'none', "./morgan.png");
                }
                else {
                    new bullet(a, -20, b, 600, 3, 10, `inset 0px 0px 10px 2px rgb(${(c % 3 != 0) * 255}, ${(c % 3 != 1) * 255}, ${(c % 3 == 2) * 255})`);
                }

                // }
            }, 20);

        }

        if (nextBeatTime == 313) {

            a = 0;
            b = 0;
            Snowing[0] = setInterval(() => {

                if (nextBeatTime >= 335) {
                    clearInterval(Snowing[0]);
                }
                var degree = a * 10 - 120 + b;
                var degree2 = -a * 10 + 120 - b;

                if (degree > 90) {
                    a = 0;
                    b += 5;
                }

                var forward = rotateVector([0, 120], 0 + degree);
                var forward2 = rotateVector([0, 120], 0 + degree2);
                for (var i = -1; i <= 1; i += 2) {
                    bulletVector([400 + forward[0], 60 + forward[1]], 800, -90 + degree + i * 50, 3, 40, "none", "./morgan.png");
                    bulletVector([400 + forward2[0], 60 + forward2[1]], 800, -90 + degree2 - i * 50, 3, 40, "none", "./morgan.png");
                }
                a++;
            }, 100);
        }

        if (nextBeatTime >= 336 && nextBeatTime <= 345) {
            for (var i = 0 + (nextBeatTime - 336); i <= 35 + (nextBeatTime - 336); i++) {
                var degree = (nextBeatTime - 336) * 18 + (i * 360 / 36);
                var forward = rotateVector([0, 120], 0 + degree);
                if (Math.abs(degree % 360) < 120 || Math.abs(degree % 360) > 240) {
                    bulletVector([400 + forward[0], 60 + forward[1]], 800, -90 + degree, 3, 40 + (nextBeatTime - 336) * 2, "none", "./morgan.png");
                }
            }
        }

        if (nextBeatTime == 345) {
            c = 0;
            Snowing[0] = setInterval(() => {

                for (var i = 0; i < 5; i++) {
                    c++;
                    if (nextBeatTime >= 362) {
                        clearInterval(Snowing[0]);
                    }
                    var degree = random(360);
                    var forward = rotateVector([0, 100], 0 + degree);
                    if (Math.abs(degree % 360) < 120 || Math.abs(degree % 360) > 240) {
                        bulletVector([400 + forward[0], 60 + forward[1]], 800, -90 + degree, random(20) / 10 + 3, 10, `inset 0px 0px 10px 2px rgb(${(c % 3 != 0) * 255}, ${(c % 3 != 1) * 255}, ${(c % 3 == 2) * 255})`);
                    }
                }
            }, 100);

        }

        if (nextBeatTime == 362) {
            a = 0;
            Snowing[2] = setInterval(() => {
                if (a >= 600) {
                    clearInterval(Snowing[2]);
                }
                new bullet(30, a, 30, a, 3, 40, 'none', "./morgan.png");
                new bullet(770, a, 770, a, 3, 40, 'none', "./morgan.png");
                // console.log(a);
                setTimeout((b) => {
                    bulletVector([30, b], 1000, angle(30, b, meta.x, meta.y), 3, 40, "none", "./morgan.png");
                    bulletVector([770, b], 1000, angle(770, b, meta.x, meta.y), 3, 40, "none", "./morgan.png");
                }, 3000, a);
                a += 20;
            }, 100);
        }

        if (nextBeatTime == 378) {
            a = 600;
            Snowing[1] = setInterval(() => {
                if (a <= 0) {
                    clearInterval(Snowing[1]);
                }
                new bullet(30, a, 30, a, 3, 40, 'none', "./morgan.png");
                new bullet(770, a, 770, a, 3, 40, 'none', "./morgan.png");
                // console.log(a);
                setTimeout((b) => {
                    bulletVector([30, b], 1000, angle(30, b, meta.x, meta.y), 3, 40, "none", "./morgan.png");
                    bulletVector([770, b], 1000, angle(770, b, meta.x, meta.y), 3, 40, "none", "./morgan.png");
                }, 3000, a);
                a -= 20;
            }, 100);
        }

        if (nextBeatTime == 393) {
            a = -20;
            b = 200;
            Snowing[2] = setInterval(() => {
                if (nextBeatTime >= 410) {

                    clearInterval(Snowing[2]);
                }
                if (a < 95) {
                    a += 2;
                }
                if (a >= 95) {
                    a = 95;
                }
                if (b > 85) {
                    b -= 2;
                }
                if (b <= 85) {
                    b = 85;
                }
                bulletVector([500, 60], 1000, - a, 3, 40, "none", "./morgan.png");
                bulletVector([300, 60], 1000, - b, 3, 40, "none", "./morgan.png");
            }, 75);
        }

        if (nextBeatTime == 410) {
            for (i = -20; i <= 20; i++) {
                if (Math.abs(i) > 1) {
                    bulletVector([400 , 60 ], 1000, 270 + 5 * i, 3, 40, "none","./morgan.png");
                }
            }
        }

        if (nextBeatTime >= 410 && nextBeatTime <= 417) {
            a = 0, b = 0;
            if (nextBeatTime % 2 == 0) {

                Snowing[1] = setInterval(() => {
                    if (a++ >= 5) {
                        clearInterval(Snowing[1]);
                    } else {
                        for (var i = 1; i <= 4; i++) {
                            bulletVector([790, 10], 1000, 180 + random(90), random(10) / 10 + 4, 20, "inset 0px 0px 10px 2px rgb(255,0, 0)");
                        }
                    }
                }, 10);
            }
            else {

                Snowing[4] = setInterval(() => {
                    if (b++ >= 5) {
                        clearInterval(Snowing[4]);
                    } else {
                        for (var i = 1; i <= 4; i++) {
                            bulletVector([10, 10], 1000, 270 + random(90), random(10) / 10 + 4, 20, "inset 0px 0px 10px 2px rgb(0,255, 0)");
                        }
                    }
                }, 10);
            }
        }

        if (nextBeatTime == 418) {
            for (var i = 0; i <= 107; i++) {
                var k = Math.floor(i / 36);
                var degree = i * 10 + k * 3.3;
                var forward = rotateVector([0, 60 - k * 30], 0 + degree);
                if (Math.abs(degree % 360) < 120 || Math.abs(degree % 360) > 240) {
                    bulletVector([400 + forward[0], 60 + forward[1]], 800, -90 + degree, 5 + k, 40, "none", "./morgan.png");
                }
            }
        }

        if (nextBeatTime >= 425 && nextBeatTime % 2 == 0 && nextBeatTime <= 440) {
            for (var i = 0; i <= 7; i++) {
                var k = Math.floor(i / 8);
                var degree = i * 45 + (nextBeatTime - 426) * 10;
                var forward = rotateVector([0, 10], 0 + degree);
                if (Math.abs(degree % 360) < 120 || Math.abs(degree % 360) > 240) {
                    bulletVector([400 + forward[0], 60 + forward[1]], 800, -90 + degree, 5 + k, 150, "none", "./morgan.png");
                }
            }
        }

        if (nextBeatTime >= 441 && nextBeatTime % 2 == 0 && nextBeatTime <= 456) {
            for (var i = 0; i <= 7; i++) {
                var k = Math.floor(i / 8);
                var degree = i * 45 + (nextBeatTime - 426) * 10;
                var forward = rotateVector([0, 10], 0 + degree);
                if (Math.abs(degree % 360) < 120 || Math.abs(degree % 360) > 240) {
                    bulletVector([400 + forward[0], 60 + forward[1]], 800, -90 + degree, 5 + k, 150 - (nextBeatTime - 441) * 5, "none", "./morgan.png");
                }
            }
        }

        if (nextBeatTime >= 441 && nextBeatTime % 2 == 1 && nextBeatTime <= 456) {
            for (var i = 0; i <= 7; i++) {
                var k = Math.floor(i / 8);
                var degree = i * 45 + (nextBeatTime - 426) * 10;
                var forward = rotateVector([0, 10], 0 + degree);
                if (Math.abs(degree % 360) < 120 || Math.abs(degree % 360) > 240) {
                    bulletVector([400 + forward[0], 60 + forward[1]], 800, -90 + degree, 5 + k, 20 + (nextBeatTime - 441) * 5, "none", "./morgan.png");
                }
            }
        }

        if (nextBeatTime >= 456 && nextBeatTime <= 473) {
            for (var i = 0; i <= 7; i++) {
                var k = Math.floor(i / 8);
                var degree = i * 45 + (nextBeatTime - 426) * 10;
                var forward = rotateVector([0, 10], 0 + degree);
                if (Math.abs(degree % 360) < 120 || Math.abs(degree % 360) > 240) {
                    bulletVector([400 + forward[0], 60 + forward[1]], 800, -90 + degree, 5 + k, 85, "none", "./morgan.png");
                }
            }
        }

        if (nextBeatTime >= 473 && nextBeatTime <= 480) {
            for (var i = 0; i <= 15; i++) {
                var k = Math.floor(i / 16);
                var degree = i * 22.5 + (nextBeatTime - 426) * 10;
                var forward = rotateVector([0, 10], 0 + degree);
                if (Math.abs(degree % 360) < 120 || Math.abs(degree % 360) > 240) {
                    bulletVector([400 + forward[0], 60 + forward[1]], 800, -90 + degree, 5 + k, 85, "none", "./morgan.png");
                }
            }
        }

        if (nextBeatTime >= 481 && nextBeatTime <= 486) {
            for (var i = 0; i <= 15; i++) {
                var k = Math.floor(i / 16);
                var degree = i * 22.5 + (nextBeatTime - 426) * 10;
                var forward = rotateVector([0, 10], 0 + degree);
                if (Math.abs(degree % 360) < 120 || Math.abs(degree % 360) > 240) {
                    bulletVector([400 + forward[0], 60 + forward[1]], 800, -90 + degree, 5 + k, 85 - (nextBeatTime - 481) * 5, "none", "./morgan.png");
                }
            }
        }

        if (nextBeatTime == 487) {
            $(".morgan").css(`animation-iteration-count`, `1`);
            $("#square").append(`<div class="morgan" style="left:20%;transition: filter 1s linear, opacity 4s linear;"></div>`);
            $("#square").append(`<div class="morgan" style="left:80%;transition: filter 1s linear, opacity 4s linear;"></div>`);
            setTimeout(() => {
                $(".morgan").css(`animation-name`, ``);
                $(".morgan").css("filter", `blur(0px)`);
                $(".morgan").css("opacity", `1`);
            }, 100);
        }

        if (nextBeatTime == 498) {
            $(".morgan").addClass(`bullet`);
            $(".morgan").css(`animation-iteration-count`, `infinite`);
            $(".morgan").css(`animation-name`, `rotates`);
            $(".morgan").css(`animation-durations`, `0.1s`);
        }

        //left right
        if (nextBeatTime >= 498) {
            // for (i = -1; i <= 1; i++) {
                bulletVector([160, 60], 1000, 250 + ((nextBeatTime - 498) % 8 * 10)  + (Math.floor((nextBeatTime - 498) / 8)), 4, 40, "none", "./morgan.png");
            // }
        }
        if (nextBeatTime >= 498) {
            // for (i = -1; i <= 1; i++) {
                bulletVector([640, 60], 1000, -70 - ((nextBeatTime - 498) % 8 * 10)  - (Math.floor((nextBeatTime - 498) / 8)), 4, 40, "none", "./morgan.png");
            // }
        }
        //left right

        //middle
        if (nextBeatTime >= 498 && nextBeatTime % 2 == 0) {
            for (i = -10; i <= 10; i++) {
                bulletVector([400, 60], 700, 270 + 10 * i, 3, 40, "inset 0px 0px 10px 6px rgb(255,0, 0)");
            }
        }
        if (nextBeatTime >= 498 && nextBeatTime % 2 == 1) {
            for (i = -10; i <= 9; i++) {
                bulletVector([400, 60], 700, 270 + 10 * i + 5, 3, 40, "inset 0px 0px 10px 6px rgb(255,255,255)");
            }
        }

        if (nextBeatTime == 530) {
            $(".morgan").css("transition", "filter 25s linear, opacity 25s linear");
            $(".morgan").css("filter", `blur(20px)`);
            $(".morgan").css("opacity", `0`);
        }

        if (nextBeatTime == 573) {
            $(".morgan").removeClass("bullet");
            setTimeout(()=>{
                $("#lynics").text(`Meta was festived ${metahurt} time(s)`);
            },3000);
        }

        console.log(nextBeatTime, audio["m"].currentTime, beatTimes[nextBeatTime]);
        // audio['b'].play();
    }
}