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
var randomOrder = [];

function bombQuest(id, question, answer, whereBomb, bombType) {
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.whereBomb = whereBomb;
    this.bombType = bombType;
}

// 藉由 Id 抓 html 改變 css 樣式的方便代碼
function setStyle(objId, propertyObject) {
    var elem = document.getElementById(objId);
    for (var property in propertyObject)
        elem.style[property] = propertyObject[property];
}

// 跳過開場動畫，Debug用
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

// 開始按鈕被按下之後
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

            // -----------------------------------------------------------

            // 炸彈模塊 【"E"生在哪】
            // 這裡有好多1...E..小寫e? 
            //
            // 規則：
            // 
            // 該模塊會有兩個被 "e","E","1" 填滿的文字方塊
            // 要成功拆除這個模組，就需要根據條件改變字串
            // 兩個字串都必須答對才會拆除，若答錯就會重置該區塊。
            // 
            // 條件：                                          應對：
            // 如果該字串長度為 8，                            刪除該字串所有的 E。               
            // 否則，如果該字串有兩個相連的 E，                 該字串所有的 e 更換為 E。
            // 否則，如果該字串的 e, E, 1 三者只有其中兩種，    將該字串尾端新增一個缺失的字。(如果只有 e 和 E，新增一個1在尾端)。
            // 否則，如果該字串的數字跟字母一樣多(字母包含E和e)，如果開頭是數字，將該字串所有 E 和 e 刪除。否則刪除該字串所有數字。
            // 否則，                                          將該字串刪除。

            // -----------------------------------------------------------

            // 這一段生成由 "e","E","1" 組成，長度為 5~8 的字串的陣列[0,1,2]
            // 這會顯示在文字方塊上作為提示。   

            var questions = [];
            for (k = 0; k <= 1; k++) {
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
            var answers = [];
            for (k = 0; k <= 1; k++) {

                //答案向下覆蓋
                var answer = ""; // 否則，將該字串刪除。 優先度 5

                //如果該字串的數字跟字母一樣多 優先度 4
                var questionNumCounts = questions[k].match(/(1)/g);
                var questionFontCounts = questions[k].match(/(e|E)/g);

                //如果沒有0或Ee他會null
                if (questionNumCounts == null) {
                    questionNumCounts = 0;
                }
                if (questionFontCounts == null) {
                    questionFontCounts = 0;
                }

                if (questionNumCounts.length == questionFontCounts.length) {
                    if (questions[k].match(/^(e|E)/)) {
                        answer = questions[k].replace(/1/g, '');
                    }
                    else if (questions[k].match(/^1/)) {
                        answer = questions[k].replace(/(E|e)/g, '');
                    }
                    else {
                        alert("可能哪裡出錯了");
                    }
                }


                // 如果該字串的 e, E, 1 三者只有其中兩種 優先度 3
                // 用 Set 抓唯一值，並驗證缺失了其中一種
                var questionSet = Array.from(new Set(questions[k]));
                if (questionSet[2] == undefined) {
                    var lost = "Ee1";
                    questionSet.forEach(e => {
                        lost = lost.replace(e, '');
                    });
                    answer = questions[k] + lost;
                }


                //如果該字串有兩個相連的 E 優先度 2
                if (questions[k].match(/E{2}/)) {
                    answer = questions[k].replace(/e/g, 'E'); // 這裡用 /e/g ，正規表示式會抓到全部的小寫e
                }

                //如果該字串長度為 8 優先度 1
                if (questions[k].match(/^(e|E|1){8}$/)) {
                    answer = questions[k].replace(/E/g, ''); //  刪除該字串所有的 E。
                }

                answers[k] = answer;
            }

            // console.log(questions[0], answers[0]);
            // console.log(questions[1], answers[1]);

            //設定這個炸彈的數值與答案
            bombId.push(new bombQuest(bombIdCount, questions[0], answers[0], bombDiv, bombType));
            bombId.push(new bombQuest(bombIdCount + 1, questions[1], answers[1], bombDiv, bombType));
            // bombId.push(new bombQuest(bombIdCount + 2, questions[2], answers[2], bombDiv, bombType));

            //這裡寫入炸彈的 html，這沒辦法換行。
            bombText = '<div class="divInsidebomb" style="left:9%; top:20%; width:80%; height: 10%; text-align: center;"> <input type="text" id="' + bombIdCount + '" value="' + questions[0] + '" style="font-size: 20px;width:100%;height: 100%;text-align: center;"> </div> <div class="divInsidebomb" style="left:9%; top:28%; width:80%; height: 10%; text-align: center;"> <input type="text" id="' + (bombIdCount + 1) + '" value="' + questions[1] + '" style="font-size: 20px;width:100%;height: 100%;text-align: center;"> </div> <div class="divInsidebomb" style="left:33%; top:45%; width:29%; text-align: center;"> <button onclick="submitBomb(' + bombDiv + ')" style="font-size:24px; width:120%;">提交</button> </div>';

            // 三個文字方塊的html
            // bombText = '<div class="divInsidebomb" style="left:9%; top:20%; width:80%; height: 10%; text-align: center;"> <input type="text" id="' + bombIdCount + '" value="' + questions[0] + '" style="font-size: 20px;width:100%;height: 100%;text-align: center;"> </div> <div class="divInsidebomb" style="left:9%; top:28%; width:80%; height: 10%; text-align: center;"> <input type="text" id="' + (bombIdCount + 1) + '" value="' + questions[1] + '" style="font-size: 20px;width:100%;height: 100%;text-align: center;"> </div> <div class="divInsidebomb" style="left:9%; top:36%; width:80%; height: 10%; text-align: center;"> <input type="text" id="' + (bombIdCount + 2) + '" value="' + questions[2] + '" style="font-size: 20px;width:100%;height: 100%;text-align: center;"> </div> <div class="divInsidebomb" style="left:33%; top:45%; width:29%; text-align: center;"> <button onclick="submitBomb(' + bombDiv + ')" style="font-size:24px; width:120%;">提交</button> </div>';

            //把 bombIdCount 往前推避免重疊
            bombIdCount += 2;

            break; //好不容易寫完了，但別忘了這裡是在 switch case 裡面
        }

        case 2: {
            break;
        }
        default: {
            break;
        }
    }

    bomb[bombDiv].innerHTML = bombText;
}

//驗證某顆炸彈，由按鈕觸發
function submitBomb(bombDivForSolveCheck) {

    var correct = true;
    //這裡用 forEach 找到按鈕觸發的所有問題
    bombId.forEach(e => {

        //先抓是哪一顆炸彈被觸發解答了
        if (e.whereBomb == bombDivForSolveCheck) {
            // console.log(`題目為:${e.question}`);
            // console.log(`答案為:${e.answer}`);
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

    if (correct) {
        //動畫：炸彈被拆除之後掉落
        var styleSelector = "divBomb" + (bombDivForSolveCheck + 1).toString();
        setStyle(styleSelector, {
            "animation": "bombDrop 1.5s",
            "pointer-events": "none",
            "animation-fill-mode": "forwards"
        });
        //刪除掉炸彈
        setTimeout(function () {
            bomb[bombDivForSolveCheck].innerHTML = '';
        }, 2000);
    }
    else {
        //這裡要因為錯誤而重置題目 
        var arrayShiftTime = 0;

        bombId.forEach(e => {
            if (e.whereBomb == bombDivForSolveCheck) {
                bombTypeTemp = e.bombType;
                bombId[e.id].whereBomb = -1;
            }
        })

        bomb[bombDivForSolveCheck].innerHTML = '';
        setBomb(bombDivForSolveCheck, bombTypeTemp);

        var styleSelector = "divBomb" + (bombDivForSolveCheck + 1).toString();
        setStyle(styleSelector, {
            "animation": "bombShake 0.5s",
            "animation-fill-mode": "none",
        });
        setTimeout(function () { setStyle(styleSelector, { "animation": "" }); }, 500);

    }
    correct ? console.log("沒炸") : console.log("炸了");

}

// 用來生產0~5，不重複數字的隨機陣列
function Bag() {
    var nums = [0, 1, 2, 3, 4, 5],
        ranNums = [],
        i = nums.length,
        j = 0;
    if (randomOrder.length <= 6) {
        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            ranNums.push(nums[j]);
            nums.splice(j, 1);
        }
        ranNums.forEach(e => randomOrder.push(e));
    }
}

//光速跳過開場
// skipIntro();

//生產0~5，不重複數字的隨機陣列，用來擺放不重複位置的炸彈
Bag();

//放炸彈
setBomb(randomOrder[0], 1);

