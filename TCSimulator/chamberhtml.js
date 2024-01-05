var chamberName = ["Flying","Rock", "Dragon", "Psychic", "Fire", "Fighting", "Steel", "Electric","Normal", "Grass", "Bug", "Dark", "Water", "Ghost", "Poison", "Ice", "Ground"];
var k = 0;
var floor = 1;
var key = 0;
var chamberNow = "Normal"
for(i=0;i<25;i++){
    if(i==1 || i==3 || i==5 || i==9 || i==15 || i==19 || i== 21 || i==23){
        $("#main").append(`<div class="blocks hiddenblock"></div>`);
    }
    else{
        $("#main").append(`<div class="blocks" id=${chamberName[k]}></div>`);
        k++;
    }
}

$(`#${chamberNow}`).text(`B${floor}`);

$(`#${chamberNow}`).bind("click",(e)=>{
    clear();
    floor++;
    chamber(`${chamberNow}`,floor);
    $(`#${chamberNow}`).text(`B${floor}`);
});


function clear(){

    chamberName.forEach(e=>{
        $(`#${e}`).text("");
        $(`#${e}`).unbind("click");
        $(`#${chamberNow}`).text(`B${floor}`);
    });

    //rebind
    $(`#${chamberNow}`).bind("click",(e)=>{
        clear();
        floor++;
        $(`#key`).text(`Key : ${key}`);
        $(`#${chamberNow}`).text(`B${floor}`);
        chamber(`${chamberNow}`,floor);
    });



}