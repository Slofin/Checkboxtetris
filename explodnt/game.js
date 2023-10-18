//先簡化這些炸彈
//這樣你就可以 Bomb[0].classList.add("red");
var Bomb = [document.getElementById("divBomb1"),
document.getElementById("divBomb2"),
document.getElementById("divBomb3"),
document.getElementById("divBomb4"),
document.getElementById("divBomb5"),
document.getElementById("divBomb6"),];
//

// 藉由 Id 抓 html 改變 css 樣式的方便代碼
function setStyle(objId, propertyObject) {
    var elem = document.getElementById(objId);
    for (var property in propertyObject)
        elem.style[property] = propertyObject[property];
}

function skipIntro() {
    // 我不寫這個會可能等Intro等到死掉

    setStyle("divBackground", { 'animation': 'fade-out 0.1s', 'animation-fill-mode': 'forwards' });
    setStyle("divRightBottomButton", { 'visibility': 'hidden' });
    setStyle("divRightBottomButtonText", { 'visibility': 'hidden' });

    setStyle("initButton", { 'visibility': 'hidden' });
    setStyle("startText", { 'animation': 'fadeInAndOut 0.1s', 'animation-fill-mode': 'forwards' });

    setTimeout(function () {
        setStyle("divBomb", { 'animation': 'fade-in 0.1s', 'visibility': 'visible' });
    }, 200);

}

function gameStartButton() {

    // 這裡你按下了開始按鈕
    // FACT : animation-fill-mode 只會在動畫執行中有作用，而不是套用以後的動畫

    setStyle("divBackground", { 'animation': 'fade-out 2s', 'animation-fill-mode': 'forwards' });
    setStyle("divRightBottomButton", { 'visibility': 'hidden' });
    setStyle("divRightBottomButtonText", { 'visibility': 'hidden' });
    setStyle("initButton", { 'visibility': 'hidden' });
    setStyle("startText", { 'animation': 'fadeInAndOut 5s', 'animation-fill-mode': 'forwards' });

    setTimeout(function () {
        setStyle("divBomb", { 'animation': 'fade-in 5s', 'visibility': 'visible' });
    }, 4000);

}


skipIntro();
Bomb[4].innerHTML='';

