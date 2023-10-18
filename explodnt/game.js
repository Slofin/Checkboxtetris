//先簡化這些炸彈
//這樣你就可以 Bomb[0].classList.add("red");
var bomb = [document.getElementById("divBomb1"),
document.getElementById("divBomb2"),
document.getElementById("divBomb3"),
document.getElementById("divBomb4"),
document.getElementById("divBomb5"),
document.getElementById("divBomb6"),];

var bombId = [];
var bombIdCount = 0;

function bombQuest(id, question, answer, whereBomb, bombType) {
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.whereBomb = whereBomb;
    this.bombType = bombType;
}
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

    //有延遲的動畫
    setTimeout(function () {
        setStyle("divBomb", { 'animation': 'fade-in 5s', 'visibility': 'visible' });
    }, 4000);

}
//設定一個炸彈
function setBomb(bombDiv, bombType) {
    var bombText;
    switch (bombType) {
        case 1: {

            // 炸彈模塊 【"E"生在哪】
            // 這裡有好多1...E..小寫e? 
            //
            // 規則：
            // 
            // 該模塊會有三個被 "e","E","1" 填滿的文字方塊
            // 要成功拆除這個模組，就需要根據條件改變字串
            // 三個字串都必須答對才會拆除，若答錯就會重置該區塊。
            // 
            // 條件：                                          應對：
            // 如果該字串長度為 8，                            刪除該字串所有的 E。               
            // 否則，如果該字串有兩個相連的 E，                 該字串所有的 e 更換為 E。
            // 否則，如果該字串的 e, E, 1 三者只有其中兩個，    將該字串尾端新增一個缺失的字。(如果只有 e 和 E，新增一個1在尾端)。
            // 否則，如果該字串的數字跟字母一樣多，             如果開頭是數字，將該字串所有 E 和 e 刪除。否則刪除該字串所有數字。
            // 否則，                                          將該字串刪除。

            // 這一段生成由 "e","E","1" 組成，長度為 5~8 的字串的陣列[0,1,2]
            // 這會顯示在文字方塊上作為提示。   

            var questions = [];
            for (k = 0; k <= 2; k++) {
                var question = '';
                var loop = Math.floor(Math.random() * 4) + 5; // 5~8
                var choice;
                for (i = 1; i <= loop; i++) {
                    choice = Math.floor(Math.random() * 3) + 1; // 1~3
                    if (choice == 1) {
                        question += "e";
                    }
                    else if (choice == 2) {
                        question += "E";
                    }
                    else {
                        question += "1";
                    }
                }
                questions[k] = question;
            }

            //這裡生成解答
            
            console.log(questions[0].match(/e/));


            //設定這個炸彈的數值與答案
            bombId[bombIdCount] = new bombQuest("divBomb1-1", questions[0], "1", bombDiv, bombType);
            bombId[bombIdCount + 1] = new bombQuest("divBomb1-2", questions[1], "2", bombDiv, bombType);
            bombId[bombIdCount + 2] = new bombQuest("divBomb1-3", questions[2], "3", bombDiv, bombType);

            //這裡寫入炸彈的 html，這沒辦法換行。
            bombText = '<div class="divInsidebomb" style="left:9%; top:20%; width:80%; height: 10%; text-align: center;"> <input type="text" id="' + bombId[bombIdCount].id + '" value="' + bombId[bombIdCount].question + '" style="font-size: 20px;width:100%;height: 100%;text-align: center;"> </div> <div class="divInsidebomb" style="left:9%; top:28%; width:80%; height: 10%; text-align: center;"> <input type="text" id="' + bombId[bombIdCount + 1].id + '" value="' + bombId[bombIdCount + 1].question + '" style="font-size: 20px;width:100%;height: 100%;text-align: center;"> </div> <div class="divInsidebomb" style="left:9%; top:36%; width:80%; height: 10%; text-align: center;"> <input type="text" id="' + bombId[bombIdCount + 2].id + '" value="' + bombId[bombIdCount + 2].question + '" style="font-size: 20px;width:100%;height: 100%;text-align: center;"> </div> <div class="divInsidebomb" style="left:36%; top:50%; width:29%; text-align: center; "> <button onclick="submitBomb(' + bombId[bombIdCount].whereBomb + ')">提交</button> </div>';

            //把 bombIdCount 往前推避免重疊
            bombIdCount += 3;

            break;
        }
        default: {
            break;
        }
    }

    bomb[bombDiv].innerHTML = bombText;
    // console.log(bomb[bombDiv].innerHTML);
}

//驗證某顆炸彈，由按鈕觸發
function submitBomb(bombDivForSolveCheck) {

    var correct = true;

    this.bombDivForSolveCheck = bombDivForSolveCheck;
    console.log(bombDivForSolveCheck);


    //這裡用 forEach 找到按鈕觸發的所有問題
    bombId.forEach(e => {
        console.log(e.answer);
        //console.log(e.bombType);
        console.log(document.getElementById(e.id).value);
        //先抓是哪一顆炸彈被觸發解答了
        if (e.whereBomb == bombDivForSolveCheck) {
            switch (e.bombType) {
                case 1: {
                    if (e.answer == document.getElementById(e.id).value) {
                        console.log("答對");
                    }
                    else {
                        console.log("答錯");
                        correct = false;
                    }
                }
                default: {
                    break;
                }
            }
        }
    });

    correct ? console.log("沒炸") : console.log("炸了");

}



skipIntro();

setBomb(Math.floor(Math.random() * 6), 1);

