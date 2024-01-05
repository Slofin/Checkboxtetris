var type = ["Normal", "Fire", "Grass", "Water", "Electric", "Psychic", "Fighting", "Ghost", "Dark", "Flying", "Rock", "Dragon", "Bug", "Ground", "Ice", "Poison", "Steel"];

var chambers = [Normal, Fire, Grass, Water, Electric, Psychic, Fighting, Ghost, Dark, Flying, Rock, Dragon, Bug, Ground, Ice, Poison, Steel];

type.forEach(e => {
    window[`${e}`] = [];
});

var floor;
var mew = 0;

var floorItem = [];
var switchInFloor = [];

function chamberInit(chamberData) {

    var chamberType = Object.values(chamberData[0]);
    // console.log(chamberType)
    chamberData.forEach(e => {

        if (Object.values(e)[0].switch) {

            floorItem[Object.keys(e)[0]] = Object.values(e)[0].switch;

            Object.values(e)[0].switch.forEach(ee => {
                // window[`${ee}`].push([Object.keys(e), chamberType]);
                window[`${chamberType}`].push([Object.keys(e), [ee]]);
            });
        }
        else {
            floorItem[Object.keys(e)[0]] = [];
        }
        if (Object.values(e)[0].key) {
            window[`${chamberType}`].push([Object.keys(e), ["Key"]]);
            // floorItem[Object.keys(e)[0]].push("Key");
        }
        if (Object.values(e)[0].mew) {
            window[`${chamberType}`].push([Object.keys(e), ["Mew"]]);
            // floorItem[Object.keys(e)[0]].push("Mew");
        }
        if (Object.values(e)[0].exit) {
            window[`${chamberType}`].push([Object.keys(e), ["Exit"]]);
            // floorItem[Object.keys(e)[0]].push("Exit");
        }
    });

    // console.log(floorItem);

}


chambers.forEach(e => {
    chamberInit(e);
})

function chamber(type, floor) {
    var floorNow = floor;
    var exit = false;

    // console.log(`${type} B${floorNow} ${key}`);

    const found = window[`${type}`].filter(function (item, index, array) {
        return floorNow == item[0];
    }) || false;

    if (found[0]) {

        if (found[0][1] == "Key") {
            key++;
            $(`#key`).text(`Key : ${key}`);
            console.log(`There's Key at B${found[0][0]} in ${type} Chamber`);
        }
        else if (found[0][1] == "Mew") {
            mew++;
            console.log(`There's Mew chance at B${found[0][0]} in ${type} Chamber`);
        }

        else if (found[0][1] != "Key" && found[0][1] != "Mew" && found[0][1] != "Exit") {
            clear();
            found.forEach(e => {
                if(e[1] == "Key"){
                    key++;
                    console.log(`There's Key at B${found[0][0]} in ${type} Chamber`);
                    $(`#key`).text(`Key : ${key}`);
                }
                else{
                    console.log(`There's ${e[1]} Chamber Switch in B${e[0]}`);
                }
                $(`#${e[1]}`).text(`B${e[0]}`);
                // console.log(e[1]);
                if(key>=1){
                $(`#${e[1]}`).bind("click", function (ee) {
                    chamberNow = e[1];
                    console.log(`Switched into ${chamberNow} in B${found[0][0]}`)
                    key--;
                    floor++;
                    clear();
                    // chamber(`${chamberNow}`,floor);
                });

                }

            });
        }

        else if (found[0][1] == "Exit") {
            console.log(`Reach Exit B${found[0][0]} in ${type} Chamber`);

            $(`#${chamberNow}`).unbind("click");
            
            exit = true;
        }
    }
}
