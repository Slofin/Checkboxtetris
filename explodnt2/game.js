import { Checkboxland } from './checkBox.js';

// -----宣告變數-----

// 簡化這些炸彈
//就可以 Bomb[0].classList.add("red");

var bomb = [document.getElementById("divBomb1"),
document.getElementById("divBomb2"),
document.getElementById("divBomb3"),
document.getElementById("divBomb4"),
document.getElementById("divBomb5"),
document.getElementById("divBomb6"),];

var bombTimer = [];     // 當炸彈有時間執行的物件時，會被放在這裡
var bombId = [];        // 用來存放各種 bombQuest
var randomOrder = [];   // 用來存放0~5，不重複數字的隨機陣列
var bombIdCount = 0;    // 用來存放id
var life = 2;           // 這是生命。勝利時，將生命設置成3
var gameTime = 180 * 1000;    // 計時
var audio = {}; // 音效
var wrongs = 0; // 錯誤次數 小專報告用
var beeping = {};
var musicFlag = -1;
class bombQuest { // 一個炸彈模塊由以下五個值組合：
    constructor(id, question, answer, whereBomb, bombType) {
        this.id = id;                   // id
        this.question = question;       // 問題
        this.answer = answer;           // 答案
        this.whereBomb = whereBomb;     // 炸彈的位置
        this.bombType = bombType;       // 炸彈的類型
    }
}
// -----宣告變數-----

// -------功能-------

// 藉由 Id 抓 html 改變 css 樣式的方便代碼
function setStyle(objId, propertyObject) {
    var elem = document.getElementById(objId);
    for (var property in propertyObject)
        elem.style[property] = propertyObject[property];
}

// 跳過開場動畫，Debug用
function skipIntro() {
    // 我不寫這個會可能等Intro等到死掉

    console.log(`[DEBUG] Skipped Intro`);
    // setStyle("versionText", { 'animation': 'fade-out 0.0001s', 'animation-fill-mode': 'forwards' });
    // setStyle("buttonToPDF", { 'animation': 'fade-out 0.0001s', 'animation-fill-mode': 'forwards' });
    // setStyle("divRightBottomButton", { 'visibility': 'hidden' });
    // setStyle("divRightBottomButtonText", { 'visibility': 'hidden' });
    setStyle("divBackground", { 'animation': 'fade-out 0.0001s', 'animation-fill-mode': 'forwards' });
    setStyle("initButton", { 'visibility': 'hidden' });
    setStyle("startText", { 'animation': 'fadeInAndOut 0.0001s', 'animation-fill-mode': 'forwards' });
    setBomb(randomOrder[5], 0);

    setStyle("divBomb", { 'animation': 'fade-in 0.25s', 'visibility': 'visible' });
    $(".clockscreen").css({ 'animation': 'fade-in 5s', 'visibility': 'visible' })

}

// 開始按鈕被按下之後
function gameStartButton() {

    // 這裡你按下了開始按鈕

    // FACT : animation-fill-mode 只會在動畫執行中有作用，而不是套用以後的動畫

    audioPlay("MusicIntro");
    audio["MusicIntro"].volume = 0.66;
    // setStyle("versionText", { 'animation': 'fade-out 0.0001s', 'animation-fill-mode': 'forwards' });
    // setStyle("buttonToPDF", { 'animation': 'fade-out 0.2s', 'animation-fill-mode': 'forwards' });
    // setStyle("divRightBottomButton", { 'visibility': 'hidden' });
    // setStyle("divRightBottomButtonText", { 'visibility': 'hidden' });
    setStyle("divBackground", { 'animation': 'fade-out 2s', 'animation-fill-mode': 'forwards' });
    setStyle("initButton", { 'visibility': 'hidden' });
    setStyle("startText", { 'animation': 'fadeInAndOut 5s', 'animation-fill-mode': 'forwards' });

    setBomb(randomOrder[5], 0);


    //有延遲的動畫
    setTimeout(function () {
        setStyle("divBomb", { 'animation': 'fade-in 5s', 'visibility': 'visible' });
        $(".clockscreen").css({ 'animation-name': 'fade-in', 'visibility': 'visible', 'animation-fill-mode': 'forwards' })
    }, 4000);



}

// 設定一個炸彈模塊
function setBomb(bombDiv, bombType) {
    var bombText = "";
    switch (bombType) {

        case 0: {//炸彈模塊【計時器】
            // -----------------------------------------------------------

            //
            // 炸彈模塊【計時器】
            // 你知道嗎？我做了三個炸彈之後才做了計時器。
            //

            // -----------------------------------------------------------


            setTimeout(function () {
                console.log("[Game] Bomb Timer Start");
                //撥放音樂，這些音樂是同時撥放的
                musicFlag = 0;
                MusicStage[0].play();
                MusicStage[1].play();
                MusicStage[2].play();
                MusicStage[0].volume = 0.66;
                MusicStage[1].volume = 0;
                MusicStage[2].volume = 0;

                var now = new Date().getTime();
                var countDownDate = new Date(now + gameTime).getTime();

                audio["beep"].play();
                beeping = setInterval(function () {
                    audio["beep"].play();
                }, 1000);

                var timing = setInterval(function () {
                    //這裡是分:秒，從5分鐘開始往下數到剩下60秒
                    var now = new Date().getTime();
                    var distance = countDownDate - now;
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    minutes = minutes.toLocaleString('en', { minimumIntegerDigits: 2, useGrouping: false });
                    seconds = seconds.toLocaleString('en', { minimumIntegerDigits: 2, useGrouping: false });
                    // console.log(minutes,seconds);
                    if (life == 3) {
                        clearInterval(timing);
                    }

                    $(".clock").text(`${minutes}:${seconds}`);

                    // 一分鐘三十秒，改變音樂
                    if (minutes <= 1 && seconds <= 30 && musicFlag == 0) {
                        console.log("[Audio] musicStage1 Fade Start");
                        musicFlag = 1;
                        var musicStage1Fade = setInterval(function () {
                            if (MusicStage[0].volume <= 0) {
                                clearInterval(musicStage1Fade);
                                console.log("[Audio] musicStage1 Fade Done");
                            }
                            else {
                                MusicStage[0].volume = Math.round(MusicStage[0].volume * 1000 - 10) / 1000;
                                MusicStage[1].volume = Math.round(MusicStage[1].volume * 1000 + 10) / 1000;
                            }
                        }, 10);

                    }
                    if (minutes <= 0) {
                        //這裡是剩下60秒之後的情況，會以秒:毫秒的方式計時
                        var timingLessMin = setInterval(function () {
                            now = new Date().getTime();
                            distance = countDownDate - now;
                            var minseconds = (Math.floor((distance % (1000 * 60)) / 10) / 100);
                            var minTime = minseconds.toLocaleString('en', { minimumIntegerDigits: 2, minimumFractionDigits: 2, useGrouping: false });
                            $(".clock").text(`${minTime}`);
                            //剩下30秒，數字會開始閃逤
                            if (life == 3) {
                                clearInterval(timingLessMin);
                            }
                            if (minTime < 30) {
                                if (musicFlag == 1) {
                                    $(".clock").css({"animation-name": "numberFlashing","animation-iteration-count": "infinite","animation-duration":"1s"});
                                    $(".clockscreen").css({"animation-name": "numberFlashing","animation-iteration-count": "infinite","animation-duration":"1s"});
                                    console.log("[Audio] musicStage2 Fade Start");
                                    musicFlag = 2;
                                    var musicStage2Fade = setInterval(function () {
                                        if (MusicStage[1].volume <= 0) {
                                            clearInterval(musicStage2Fade);
                                            console.log("[Audio] musicStage2 Fade Done");
                                        }
                                        else {
                                            MusicStage[1].volume = Math.floor(MusicStage[1].volume * 1000 - 10) / 1000;
                                            MusicStage[2].volume = Math.floor(MusicStage[2].volume * 1000 + 10) / 1000;
                                        }
                                    }, 10);
                                }
                            }
                            if (minTime <= 0) {

                                clearInterval(timingLessMin);
                                minTime = 0;
                                defusedOrExploded(false);
                            }
                        }, 10);

                        $(".clockbg").text("88.88");
                        clearInterval(timing);
                    }

                }, 100);

            }, 10000);

            //要在遊戲開始計時前就把時間顯示好
            var preTimerMinute = Math.floor(((gameTime % 3600000) / 60000)).toLocaleString('en', { minimumIntegerDigits: 2, useGrouping: false });
            var preTimerSecond = Math.floor(((gameTime % 60000) / 1000)).toLocaleString('en', { minimumIntegerDigits: 2, useGrouping: false });

            bombText =
                `
            <div class="clockout">
                <div class="clock">${preTimerMinute}:${preTimerSecond}</div>
                <div class="clockbg">88:88</div>
            </div>       
            <div class="counterout">
                <div class="counter">!!</div>
                <div class="counterbg">XX</div>
            </div>    
            `


            bomb[bombDiv].innerHTML = bombText;

            //我不知道為什麼改變位置需要塞延時才修得好，但這樣才過得去
            setTimeout(() => {
                var element = document.getElementsByClassName('clock');
                var topPos = element[0].getBoundingClientRect().top + window.scrollY;
                var leftPos = element[0].getBoundingClientRect().left + window.scrollX;
                $(".clockscreen").css({ left: leftPos + 'px', top: topPos + 'px' });
                $(".clockscreen").text(`${preTimerMinute}:${preTimerSecond}`);
            }, 100);


            //隱藏沒有炸彈的方格
            bomb.forEach(e => {
                if (e.childNodes.length == 0) {
                    e.style = "visibility:hidden";
                }
            });

            break;
        }

        case 1: {//炸彈模塊【"E"生在哪】

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
            //
            // 注意：在繳交答案前，請確保沒有

            // -----------------------------------------------------------

            // 這一段生成由 "e","E","1" 組成，長度為 5~8 的字串的陣列[0,1,2]
            // 這會顯示在文字方塊上作為提示。   

            var questions = [];
            for (var k = 0; k <= 1; k++) {
                var question = '';
                var loop = Math.floor(Math.random() * 4) + 5; // 5~8
                var choice;
                for (var i = 1; i <= loop; i++) {
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
            for (var k = 0; k <= 1; k++) {

                //答案向下覆蓋
                var answer = ""; // 否則，將該字串刪除。 優先度 5

                //如果該字串的數字跟字母一樣多 (這會順便將null轉為0) 優先度 4
                var questionNumCounts = questions[k].match(/(1)/g) || 0;
                var questionFontCounts = questions[k].match(/(e|E)/g) || 0;

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

                // console.log(answer);
                answers[k] = answer;
            }


            //設定這個炸彈的數值與答案
            bombId.push(new bombQuest(bombIdCount, questions[0], answers[0], bombDiv, bombType));
            bombId.push(new bombQuest(bombIdCount + 1, questions[1], answers[1], bombDiv, -1));
            // bombId.push(new bombQuest(bombIdCount + 2, questions[2], answers[2], bombDiv, bombType));

            bombText = `
            <div class="divTextbomb" style="left:9%; top:20%; width:80%; height: 10%; text-align: center;"> 
            <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="${bombIdCount}" value="${questions[0]}"> 
            </div> 

            <div class="divTextbomb" style="left:9%; top:28%; width:80%; height: 10%; text-align: center;"> 
            <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="${(bombIdCount + 1)}" value="${questions[1]}"> 
             </div> 

            <div class="divTextbomb" style="left:33%; top:45%; width:29%; text-align: center; user-select: none;"> 
            <button  id="bombbutton${bombIdCount}">提交</button> 
            </div>`;


            bomb[bombDiv].innerHTML = bombText;

            var bombAudioSet = document.getElementById(`${(bombIdCount)}`)
            bombAudioSet.addEventListener('input', function () {
                audioPlay(`keypress${Math.floor(Math.random() * 3) + 1}`);
            });

            bombAudioSet = document.getElementById(`${(bombIdCount + 1)}`)
            bombAudioSet.addEventListener('input', function () {
                audioPlay(`keypress${Math.floor(Math.random() * 3) + 1}`);
            });

            $("#bombbutton" + bombIdCount).bind('click', function () {
                submitBomb(bombDiv);
            })



            //把 bombIdCount 往前推避免重疊
            bombIdCount += 2;

            break; //好不容易寫完了，但別忘了這裡是在 switch case 裡面
        }

        case 2: {//炸彈模塊【按鈕】

            // -----------------------------------------------------------

            //
            // 炸彈模塊 【按鈕】
            // 只要是炸彈那就少不了按鈕的，接受現實吧。
            // 
            // 如果上面沒有字，按兩次。
            // 否則，如果上面有數字且是偶數，依照上面的數字按下按鈕數次。若是奇數，按一次。
            // 否則，如果按鈕是藍色，按鈕上每有一個字就按一次。
            // 否則，如果按鈕上面若有人稱代名詞（你、我、他），按六次。
            // 否則，按一次。 
            // 

            // -----------------------------------------------------------


            var questions = [];

            //這裡是按鈕上面的字，隨機挑一個
            const question0List =
                ["按鈕", "藍色", "紅色", "綠色", "黃色",
                    "不知道", "我不知道", "你說什麼", "按我", "爆炸",
                    "", "", "按下", Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1];
            questions[0] = question0List[Math.floor(Math.random() * question0List.length)];

            //這裡是按鈕上面的顏色，隨機挑一個
            const question1List = ["Blue", "Red", "Green", "Yellow"];
            questions[1] = question1List[Math.floor(Math.random() * question1List.length)];

            //這裡寫答案，預設為按一下
            var answer = 1;

            //避免程式爆掉，外面套了typeof
            if (typeof questions[0] == 'string') {
                if (questions[0].match(/(你|我|他)/g)) {
                    answer = 6;
                }
            }

            if (questions[1] == "Blue") {
                answer = questions[0].length;
            }

            if (typeof questions[0] == 'number') {
                questions[0] % 2 == 0 ? answer = questions[0] : answer = 1;
            }

            if (questions[0] == '') {
                answer = 2;
            }

            //設定這個炸彈的數值與答案
            bombText += `<button id="bombbutton${bombIdCount}" class="roundButton roundButton${questions[1]}">${questions[0]}</button>`;
            bombId.push(new bombQuest(bombIdCount, questions[0], answer, bombDiv, bombType));
            bombId.push(new bombQuest(bombIdCount + 1, questions[1], 0, bombDiv, -1));

            bomb[bombDiv].innerHTML = bombText;

            $("#bombbutton" + bombIdCount).bind('click', function () {
                audioPlay("button1");
                submitBomb(bombDiv);
            })


            bombIdCount += 2;
            break;
        }

        case 3: {//炸彈模塊【打勾方塊】

            // -----------------------------------------------------------

            //
            //  Feat.Checkboxland 行欄列行不行？
            //
            //  該模塊為 6x6 的打勾方塊陣列
            //  必須在按兩次內，將圖形按成以下的其中一種就可以拆除：
            //  [附件：六種可能的答案]
            //
            // 000000 000000 000010
            // 000000 001000 000000
            // 000001 000000 000000
            // 000000 000000 000010
            // 100000 000000 000000
            // 000000 000100 000000
            //
            // 100000 000000 000000
            // 000000 000000 000000
            // 000000 000100 100000
            // 000000 001000 000000
            // 000000 000000 000100
            // 000010 000000 000000
            //
            //  *若一開始顯示的就是答案，在某一格上點兩下就可以拆除。
            //  *技術上問題所以沒辦法生成兩個以上的該模塊
            //

            // -----------------------------------------------------------


            bombId.push(new bombQuest(bombIdCount, -1, -1, bombDiv, 3));
            bombText += `
            <div class="checkboxlandBox" id=${bombIdCount}>
                 <div id="checkboxland"></div>
            </div>`;
            bomb[bombDiv].innerHTML = `${bombText}`;

            if (typeof cbl === 'undefined') {
                var cbl = new Checkboxland({ dimensions: '6x6' });
            }

            var cblGrid = [];       //從答案複製過來被隨機按兩次
            var cblTrigger = 2;     //必須在按兩次內按出答案
            var cblAnswers =
                [[[0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0]],

                [[0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0]],

                [[0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0]],

                [[1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0]],

                [[0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0]],

                [[0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0]]];

            cblGrid = structuredClone(cblAnswers[Math.floor(Math.random() * 6)]); // hardcopy

            for (var i = 2; i > 0; i--) {   // 隨機挑兩個按鈕按一下
                var randomGridX = Math.floor(Math.random() * 6);
                var randomGridY = Math.floor(Math.random() * 6);
                cblGrid[randomGridX][randomGridY] == 1 ? cblGrid[randomGridX][randomGridY] = 0 : cblGrid[randomGridX][randomGridY] = 1;
            }

            cbl.setData(cblGrid); // 設置打勾

            cbl.onClick(function handleCheckboxClick({ x, y }) {

                if (cblGrid[y][x] == 1) {
                    cblGrid[y][x] = 0;
                    audioPlay("checkboxoff");
                }
                else {
                    cblGrid[y][x] = 1;
                    audioPlay("checkboxon");
                }

                if (cblTrigger >= 2) {
                    cblTrigger--;
                }
                else {
                    var correct = false;
                    // console.log(cblGrid);
                    cblAnswers.forEach(e => {
                        if (JSON.stringify(e) === JSON.stringify(cblGrid)) {
                            // console.log("yes");
                            correct = true;
                        }
                    });
                    bombTrigger(correct, bombDiv);
                }
            });

            bombIdCount += 1;
            break;
        }

        default: {
            console.log("朋友你忘記放break了");
            break;
        }
    }

    console.log(`[Game] Deployed Bomb ${bombType} At Div ${bombDiv}`);

    // $(`#${bomb[bombDiv].id}`).html(bombText);
    // bomb[bombDiv].style = "visibility:visible;"
}

// 驗證某顆炸彈模塊，由按鈕使用觸發
function submitBomb(bombDivForSolveCheck) {
    var correct = true;
    //用 forEach 找到按鈕觸發的所有問題
    bombId.forEach(e => {
        //先抓是哪一顆炸彈被觸發解答了
        if (e.whereBomb == bombDivForSolveCheck) {

            console.log(`[Game] Bomb ${e.whereBomb} Is Triggered`)

            switch (e.bombType) {
                case 1: {
                    // console.log(`題目為:${e.question[1]}`);
                    // console.log(`答案為:${e.answer[1]}`);
                    if (bombId[e.id].answer == document.getElementById(e.id).value &&
                        bombId[e.id + 1].answer == document.getElementById(e.id + 1).value) {
                        // console.log("答對");
                        bombTrigger(true, bombDivForSolveCheck);
                    }
                    else {
                        // console.log("答錯");
                        bombTrigger(false, bombDivForSolveCheck);
                    }
                    break;
                }

                case 2: {
                    //每按一次，變數+1，且重置按鈕觸發的時間
                    bombId[e.id + 1].answer++;
                    // console.log(bombId[e.id + 1].answer);
                    clearTimeout(bombTimer[e.id]);
                    bombTimer[e.id] = setTimeout(function () {
                        if (e.answer == bombId[e.id + 1].answer) {
                            // console.log("答對");
                            bombTrigger(true, bombDivForSolveCheck);
                        }
                        else {
                            // console.log("答錯");
                            bombTrigger(false, bombDivForSolveCheck);
                        }
                    }, 1000);
                    break;
                }

                case 3: {
                    break;
                }

                default: {
                    break;
                }
            }
        }
    });
}

// 觸發某顆炸彈模塊
function bombTrigger(correct, bombDivForSolveCheck) {

    if (correct) {   // 回答正確
        bombId.forEach(e => {
            if (e.whereBomb == bombDivForSolveCheck) {
                bombId[e.id].whereBomb = -1;
            }
        });

        console.log(`[Game] Bomb ${bombDivForSolveCheck} Defused`);

        //動畫：炸彈被拆除之後掉落

        audioPlay("moduleDefused");
        var styleSelector = "divBomb" + (bombDivForSolveCheck + 1).toString();

        setStyle(styleSelector, {
            "animation": "bombDrop 1.5s",
            "pointer-events": "none",
            // "animation-fill-mode": "forwards"
        });
        //刪除掉炸彈

        setTimeout(function () {
            setStyle(styleSelector, {
                "visibility": "hidden"
            });
            bomb[bombDivForSolveCheck].innerHTML = '';
        }, 1400);

    }
    else {  // 回答錯誤
        //重骰該題目
        console.log(`[Game] Bomb ${bombDivForSolveCheck} Wrong, Replace A New Question`);
        var bombTypeTemp;

        bombId.forEach(e => {
            if (e.whereBomb == bombDivForSolveCheck) {
                if (e.bombType != -1) {
                    bombTypeTemp = e.bombType;
                }
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

        if (life == 1) {
            $(".counter").text("XX");
            defusedOrExploded(false);
        }
        else {


            // life--;
            // $(".counter").text("X!");

            wrongs++;
            $(".counter").text(wrongs.toLocaleString('en', { minimumIntegerDigits: 2, useGrouping: false }));

            audioPlay("wrong");
        }

    }

    var allBombsAreDefused = true;
    bombId.forEach(e => {
        if (e.whereBomb != -1) {
            allBombsAreDefused = false;
        }
    });

    if (allBombsAreDefused) {
        console.log("[Game] All Bombs Are Defused");
        defusedOrExploded(true);
    }
}

// 觸發炸彈，或者是拆掉炸彈
function defusedOrExploded(correct) {

    MusicStage[0].volume = 0;
    MusicStage[1].volume = 0;
    MusicStage[2].volume = 0;
    clearInterval(beeping);
    setStyle("QRCode", { 'visibility': 'hidden' });
    setTimeout(() => {
        setStyle("QRCodeGame", { 'visibility': 'visible', 'opacity': '1' });
    }, 6000);

    if (correct) {

        life = 3;

        $(".clock").css("animation-name", "numberFlashing");
        $(".clock").css("animation-iteration-count", "1");
        setStyle("clockscreen",{"animation-iteration-count": "1"},{"animation-name": "numberFlashing"})

        setTimeout(() => {
            audioPlay("BombDefused");
            setStyle("divForeground", {
                'animation': 'bombDefuseShow 10s',
                'animation-fill-mode': 'forwards',
                'background-image': 'url(./img/bombDefused.png)'
            });
        }, 1200);

    }
    else {

        console.log("[Game] Game Over");
        audioPlay("explode");
        $(".clock").css("animation-name", "");
        setStyle("clockscreen",{ 'visibility': 'hidden' })
        setStyle("divBomb", { 'visibility': 'hidden' });
        document.body.style = `background-color: rgb(0, 0, 0)`;
        setStyle("QRCodeGame", { 'left': '50%' });
        setStyle("divForeground", {
            'animation': 'fadeInAndOut 10s',
            'animation-fill-mode': 'forwards',
            'background-image': 'url(./img/youdied.png)'
        });
        


        // 滿 滿 的 動 畫
    }
}

// 播放音效用，如果音樂正在撥放的時候重播，
function audioPlay(name) {
    if (audio[name].paused) {
        audio[name].play();
    }
    else {
        audio[name].currentTime = 0;
    }
}

// 用來生產0~5，但不重複數字的隨機陣列
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

// 黑幕跟著滑鼠
jQuery(document).ready(function () {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;

    $(document).mousemove(function (e) {
        mouseX = e.pageX - $(window).width();
        mouseY = e.pageY - $(window).height();
    });

    setInterval(function () {
        xp += ((mouseX - xp) / 2);
        yp += ((mouseY - yp) / 2);
        $("#flashlight").css({ left: xp + 'px', top: yp + 'px' });
    }, 20);

});



// -------功能-------

// ------瀏覽器------

// 取消掉一些手機手勢
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99;
});

document.addEventListener('gesturechange', function (e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99;
});

document.addEventListener('gestureend', function (e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99;
});

// ------瀏覽器------

$(window).resize(function () {
    setTimeout(() => {
        var element = document.getElementsByClassName('clock');
        var topPos = element[0].getBoundingClientRect().top + window.scrollY;
        var leftPos = element[0].getBoundingClientRect().left + window.scrollX;
        $(".clockscreen").css({ left: leftPos + 'px', top: topPos + 'px' });
    }, 50);
});

// -----音效設定-----

//音效的名稱定義與位置
var audioFiles = [
    "wrong", "./audio/wrong.mp3",
    "beep", "./audio/beep.wav",
    "button1", "./audio/button1.mp3",
    "keypress1", "./audio/key-press-1.mp3",
    "keypress2", "./audio/key-press-2.mp3",
    "keypress3", "./audio/key-press-3.mp3",
    "keypress4", "./audio/key-press-4.mp3",
    "checkboxon", "./audio/checkboxon.mp3",
    "checkboxoff", "./audio/checkboxoff.mp3",
    "moduleDefused", "./audio/moduleDefused.mp3",
    "BombDefused", "./audio/tooholy.wav",
    "explode", "./audio/explode.wav",
    "MusicIntro", "./audio/MusicIntro.mp3"
];

//載入音效
for (var k = 0; k < audioFiles.length; k += 2) {
    audio[`${audioFiles[k]}`] = new Audio();
    audio[`${audioFiles[k]}`].src = audioFiles[k + 1];
}

//載入音樂
var MusicStage = []
for (var k = 0; k < 3; k++) {
    MusicStage[k] = new Audio(`./audio/MusicStage${k + 1}.mp3`);
}

MusicStage[0].addEventListener('timeupdate', function () {
    var buffer = .7;
    if (this.currentTime > this.duration - buffer) {
        for (var k = 0; k < 3; k++) {
            MusicStage[k].currentTime = 0
            MusicStage[k].play();
        }
    }
});

// -----音樂設定-----

// -------執行-------

// 生產0~5，不重複數字的隨機陣列，用來擺放不重複位置的炸彈
Bag();

// 放炸彈    
// setBomb(randomOrder[0], 1);
setBomb(randomOrder[1], 2);
// setBomb(randomOrder[2], 2);
// setBomb(randomOrder[3], 3);
console.log("[Game] Bomb Deploy Done");

// 註解掉下面這行跳過開場

// skipIntro();

// 讓開始按紐生效
$('document').ready(function () {
    $(".divInitButton>Button").bind('click', function () {
        audioPlay("checkboxon");
        gameStartButton();
        console.log("[Game] Intro Playing");
    });
    console.log("[Game] Ready");
});

// -------執行-------



