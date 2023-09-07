import {Checkboxland} from './checkBox.js';
const bodyEl = document.querySelector('body');
const dimensions = `16x20`;
let gameover = false ;
let interval = 1; //gamespeed
let ticks = 0;
let placedTimer=0;
let downFallTimer=0;
let cbl;
let OldblockSpin=0;
let intervalId;
let fallingShape;
let bag = [];
let holdingBlock = 10;
let holdBlockUse = 0;
let wallKickCount= 0;
let spinAble = false;
let next5Bag = [];
let corner=[
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2]];
let gameMap=[
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]];
let fallMap=[
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]];
let hardDropMap=[
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]];
let KshapePlace = [[0,0],[0,0],[0,0],[0,0]];
let NshapePlace= [];
let shapePlace = [];
let newHardDropPlace=[];
let hardDropPlace =[];
let map = {};
let oBlockfix = 0;
let blockNow = 0;
let blockSpin = 0;
let shape;
let CopyedShape=[];
let spinShape=[];
let hardDropHold = false;
let ZHold = false;
let XHold = false;
let DASTimer = 0;
let ARRTimer = 0;
let LRFirstHold = 0;
let LRCount = 0 ;
let OldLRCount = 0 ;
let softDropTimer = 0 ;
let LineClear = 0 ;

let delayAutoShift = 50 ;
let autoRepeatRate = 10 ;
let softDropSpeed = 10 ;
let downFallSpeed = 200 ;


const elementsList = document.querySelectorAll('[type=button]');
const elementsArray = [...elementsList];

elementsArray.forEach(function(e){
switch(e.id.split(' ')[0])
{
case "speed":
  {
    e.addEventListener("click", function(event){
      setting("DFS",245 - e.id.split(' ')[1]*45);
    });
    break;  
  }
case "das":
  {
    e.addEventListener("click", function(event){
      setting("DAS",60 - e.id.split(' ')[1]*10);
    });
    break;
  }
case "arr":
  {
    e.addEventListener("click", function(event){
      setting("ARR",12 - e.id.split(' ')[1]*2);
    });
    break;
  }
case "sds":
  {
    e.addEventListener("click", function(event){
      setting("SDS",12.5 - e.id.split(' ')[1]*2.5);
    });
    break;
  }
  default:
    {
      break;
    }
}

})

const Shapes = {
ZShape: [[0,-1], [0, 0], [1, 0], [1, 1]], // 0
SShape: [[1,-1], [0, 0], [1, 0], [0, 1]], // 1 
IShape: [[0,-2], [0,-1], [0, 0], [0, 1]], // 2 
TShape: [[0,-1], [0, 0], [0, 1], [1, 0]], // 3
OShape: [[1,-1], [0,-1], [1, 0], [0, 0]], // 4 
LShape: [[0,-1], [0, 0], [0, 1], [1,-1]], // 5
JShape: [[0,-1], [0, 0], [0, 1], [1, 1]], // 6
};


function init(existingCbl) {
  cbl = !!existingCbl ? existingCbl : new Checkboxland({dimensions});
  document.querySelector('#checkboxland').focus();
  intervalId = setInterval(redrawGameMap, 1);
  cbl.onClick(handleClick);
  return cbl;
}

function keyboardboard(){
  
if(map[65])
{
BagShow();
}
  
if(map[40] && canMove(2))
{
downFallTimer=0;
softDropTimer++;
if ( canMove(2) && softDropTimer >= softDropSpeed ) 
{
softDropTimer=0;
MoveBlock(0,1);
}

}

if(map[39]&&map[37]) LRCount = 2 ;
if(map[37]&&(!map[39])) LRCount = 1 ;
if(map[39]&&(!map[37])) LRCount = 3 ;
if((!map[39])&&(!map[37])) LRCount = 0 ;


if(LRCount != OldLRCount)
{
(OldLRCount == 2 && LRCount == 1) || (OldLRCount == 2 && LRCount == 3) ? DASTimer=1 : DASTimer=0;
OldLRCount = LRCount;
ARRTimer=0;
}

if(map[37] && !( LRFirstHold==4 && map[39]) )
{

if(!map[39])
{
LRFirstHold=4;
}




if(DASTimer==0 )
{
if(canMove(4)) {MoveBlock(-1,0);}
}
else if((DASTimer >= delayAutoShift) && ARRTimer >= autoRepeatRate)
{
ARRTimer=0;
if(canMove(4)) {MoveBlock(-1,0);}
}
DASTimer++;
ARRTimer++;


}

if(map[39] && !( LRFirstHold==6 && map[37] ) )
{

if(!map[37])
{
LRFirstHold=6;
}


if(DASTimer==0)
{
if(canMove(6)) MoveBlock(1,0);
}
else if((DASTimer >= delayAutoShift) && ARRTimer >= autoRepeatRate)
{
ARRTimer=0;
if(canMove(6)){ MoveBlock(1,0);}
}
DASTimer++;
ARRTimer++;


}

if(map[32]&&hardDropHold==false) {hardDrop();}
else if(!map[32] && hardDropHold==true) hardDropHold=false;

if(map[88]&&XHold==false) {XHold=true;spin(6);}
else if(!map[88] && XHold==true) {XHold=false;}

if(map[90]&&ZHold==false) {ZHold=true;spin(4);}
else if(!map[90] && ZHold==true) {ZHold=false;}



if(map[65])
{
console.log(elementsArray);
}


/*
if(map[70])
{
console.log(fallMap);
}

if(map[71])
{
console.log(gameMap);
}

if(map[72])
{
console.log(shapePlace);
}
*/

if(map[16])
{
holdBlock();
}

}

function redrawGameMap() {

if(!gameover)
{

document.getElementById("score").innerHTML = "Line Cleared :" + " " + LineClear;
blockPlaced();
downFall();
keyboardboard();
hardDropshow();
BagShow();
}
else
{
console.log("gameover");
clearTimeout(intervalId);
}

cbl.setData(corner);
cbl.setData(fallMap);
}

onkeydown = onkeyup = function(e) {
  e = e || event; 
  map[e.keyCode] = e.type == 'keydown';
 //console.log(map);
}

/*tetris things*/

function nextBlock(){

clearLine();
Bag();
downFallTimer=0;
blockSpin = 0;
gameMap = fallMap.map(function(arr) {
  return arr.slice();
	});
  fallingShape = randomShape();
	shapePlace=[];
  blockNow==2 ? oBlockfix = 0 : oBlockfix = 1 ;
  fallingShape.forEach(e=> shapePlace.push([oBlockfix-e[0],4-e[1]]));
  
  shapePlace.forEach(function (e){ 
  fallMap[e[0]][e[1]] == 1 ? gameover = true : fallMap[e[0]][e[1]]=1;
  
  });
}

function Bag(){
var nums = [0,1,2,3,4,5,6],
    ranNums = [],
    i = nums.length,
    j = 0;
if(bag.length<=7)    
{
while (i--) {
j = Math.floor(Math.random() * (i+1));
ranNums.push(nums[j]);
nums.splice(j,1);
}
ranNums.forEach(e => bag.push(e));
}
}

function randomShape(){
var keys = Object.keys(Shapes);
var ord = bag[0];
shape = Shapes[keys[ord]];
blockNow=bag[0];
//console.log(shape);
bag.shift();
CopyedShape=[];
shape.forEach(function (e){
CopyedShape.push([e[0],e[1]]);
})
return shape;
}

function blockPlaced() {

if(canMove(2)==false)
{
placedTimer++;
if(map[40]){placedTimer++;}
if(placedTimer>=200){
placedTimer=0;
holdBlockUse=0;
nextBlock();
}
}
else{
placedTimer=0;
}
}

function canMove(dir){
let result = true;
let configX;
let configY;

if(dir==4){
configY=0;
configX=1;
shapePlace.forEach(function(e){
if(e[1]==0)
{
result=false;
}})}
if(dir==6){
configY=0;
configX=-1;
shapePlace.forEach(function(e){
if(e[1]>=9) {result=false;}
})
}

if(dir==2){
configY=-1;
configX=0;
shapePlace.forEach(function(e){
if(e[0]>=19) {result=false;}
})

}

if(result==true){
shapePlace.forEach(function(e){
//console.log(gameMap[e[0]][e[1]-1]);
if(gameMap[e[0]-configY][e[1]-configX]==1) {result=false;}
})
}

return result;
}

function MoveBlock(x,y){
NshapePlace=[];
shapePlace.forEach(function (e){
fallMap[e[0]][e[1]]=0;
NshapePlace.push([e[0]+y,e[1]+x]);
//console.log(e[0],e[1]);
});

shapePlace=NshapePlace;
shapePlace.forEach(e => fallMap[e[0]][e[1]]=1);
//console.log(shapePlace);
}

function downFall(){
downFallTimer++;
if(downFallTimer>=downFallSpeed){
downFallTimer=0;
if(canMove(2)){ MoveBlock(0,1);}
}

}

function hardDropshow(){

	newHardDropPlace=[];
	hardDropMap = gameMap.map(function(arr) {
  return arr.slice();
	});
	hardDropMap.push([1,1,1,1,1,1,1,1,1,1]);
  let deeper = true;
  let downBlocks = 0;
  
  while(deeper)
  {
	shapePlace.forEach(function(e){
  if(hardDropMap[e[0]+downBlocks][e[1]]==1) {deeper = false;}
  })
  if(deeper==true){ downBlocks++;}
  }
  
  fallMap.forEach(function(e){
  for(var i=0;i<4;i++)
  {
  var index = e.indexOf(2);
	if (index !== -1) {
    e[index] = 0;
	}
  }
  })
  
	shapePlace.forEach(function(e){
  if(fallMap[e[0]+downBlocks-1][e[1]]==0) fallMap[e[0]+downBlocks-1][e[1]]=2;
  newHardDropPlace.push([e[0]+downBlocks-1,e[1]]);
	});
  
  hardDropPlace = newHardDropPlace.map(function(arr) {
  return arr.slice();
	});  
}

function hardDrop(){

hardDropHold = true;

NshapePlace=[];
shapePlace.forEach(function (e){
fallMap[e[0]][e[1]]=0;
});

NshapePlace = hardDropPlace.map(function(arr) {
return arr.slice();
});
shapePlace=NshapePlace;

shapePlace.forEach(e => fallMap[e[0]][e[1]]=1);
holdBlockUse=0;
nextBlock();  
}

function clearLine(){
var line=0;
fallMap.forEach(function(e){

if(e.every((currentValue) => currentValue == 1))
{
fallMap.splice(line,1);
fallMap.unshift([0,0,0,0,0,0,0,0,0,0]);
LineClear++;
}
line++;
})

}

function holdBlock(){

if(holdBlockUse == 0 )
{

if(holdingBlock != 10) bag.unshift(holdingBlock);

holdingBlock = blockNow;
shapePlace.forEach(function (e){
fallMap[e[0]][e[1]]=0;
});

holdBlockUse++;
nextBlock();
}
}

function spin(L46R){

let shapeOld = [[0,0],[0,0],[0,0],[0,0]];

for (var x = 0; x < 4; x++){
  for (var y = 0; y < 2; y++){
    shapeOld[x][y] = CopyedShape[x][y];
  }
}

spinShape=[];
NshapePlace=[[0,0],[0,0],[0,0],[0,0]];

OldblockSpin=blockSpin;

if(!(blockNow==4 || blockNow==2)) // not O and I shape
{

if(L46R==4)
{
blockSpin == 0 ? blockSpin = 3 : blockSpin-- ;

CopyedShape.forEach(function (e){

if(e[0]==1){
if		  (e[1]== 1)	{spinShape.push([-2, 0]); }
else if (e[1]== 0) 	{spinShape.push([-1, 1]); }
else /* (e[1]==-1)*/{spinShape.push([ 0, 2]); }
}
if(e[0]==0){
if		  (e[1]== 1)	{spinShape.push([-1,-1]); }
else if (e[1]== 0) 	{spinShape.push([ 0, 0]); }
else /* (e[1]==-1)*/{spinShape.push([ 1, 1]); }
}
if(e[0]==-1){
if		  (e[1]== 1)	{spinShape.push([ 0,-2]); }
else if (e[1]== 0) 	{spinShape.push([ 1,-1]); }
else /* (e[1]==-1)*/{spinShape.push([ 2, 0]); }
}

})

for (var x = 0; x < 4; x++){
for (var y = 0; y < 2; y++){
CopyedShape[x][y] = CopyedShape[x][y] + spinShape[x][y];
NshapePlace[x][y] = shapePlace[x][y] - spinShape[x][y]; // it goes chaos if you turn - to +
KshapePlace[x][y] = NshapePlace[x][y];
}
}

spinAble = true ;

wallKickCount=0;

for(var i=0;i<5;i++)
{

if (spinAble == false && wallKickCount < 5) {wallKick(4,0);}

KshapePlace.forEach(function (e){
if(e[0]>19 || e[1]>9 || e[1]<0) {spinAble = false ;}
else if(gameMap[e[0]][e[1]]==1) {spinAble = false ;}
})

}

if(spinAble == true)
{

for (var x = 0; x < 4; x++){
for (var y = 0; y < 2; y++){
NshapePlace[x][y] = KshapePlace[x][y];
}
}

shapePlace.forEach(function (e){
fallMap[e[0]][e[1]]=0;
});
shapePlace=NshapePlace;
shapePlace.forEach(e => fallMap[e[0]][e[1]]=1);
}
else
{
  blockSpin=OldblockSpin;
for (var x = 0; x < 4; x++){
  for (var y = 0; y < 2; y++){
    CopyedShape[x][y] =  shapeOld[x][y];
  }
}
}

}

else if(L46R==6)
{
blockSpin == 3 ? blockSpin = 0 : blockSpin++ ;

CopyedShape.forEach(function (e){

if(e[0]==1){
if		  (e[1]== 1)	{ spinShape.push([0 ,-2]);}
else if (e[1]== 0) 	{ spinShape.push([-1,-1]);}
else /* (e[1]==-1)*/{ spinShape.push([-2, 0]);}
}
if(e[0]==0){
if		  (e[1]== 1)	{ spinShape.push([ 1,-1]);}
else if (e[1]== 0) 	{ spinShape.push([ 0, 0]);}
else /* (e[1]==-1)*/{ spinShape.push([-1, 1]);}
}
if(e[0]==-1){
if		  (e[1]== 1)	{ spinShape.push([2 ,0 ]);}
else if (e[1]== 0) 	{ spinShape.push([1, 1 ]);}
else /* (e[1]==-1)*/{ spinShape.push([0, 2 ]);}
}

})

for (var x = 0; x < 4; x++){
for (var y = 0; y < 2; y++){
CopyedShape[x][y] = CopyedShape[x][y] + spinShape[x][y];
NshapePlace[x][y] = shapePlace[x][y] - spinShape[x][y]; // it goes chaos if you turn - to +
KshapePlace[x][y] = NshapePlace[x][y];
}
}

spinAble = true ;

wallKickCount=0;

for(var i=0;i<5;i++)
{

if (spinAble == false && wallKickCount < 5){ wallKick(6,0);}

KshapePlace.forEach(function (e){
if(e[0]>19 || e[1]>9 || e[1]<0) spinAble = false ;
else if(gameMap[e[0]][e[1]]==1) spinAble = false ;
})
}

if(spinAble == true)
{

for (var x = 0; x < 4; x++){
for (var y = 0; y < 2; y++){
NshapePlace[x][y] = KshapePlace[x][y];
}
}

shapePlace.forEach(function (e){
fallMap[e[0]][e[1]]=0;
});
shapePlace=NshapePlace;
shapePlace.forEach(e => fallMap[e[0]][e[1]]=1);
}
else
{
blockSpin=OldblockSpin;
for (var x = 0; x < 4; x++){
  for (var y = 0; y < 2; y++){
    CopyedShape[x][y] =  shapeOld[x][y];
  }
}
}

}

else //180
{
//blockSpin == 3 ? blockSpin = 0 : blockSpin++ ;
//blockSpin == 3 ? blockSpin = 0 : blockSpin++ ;
}

}
else if(blockNow==2)
{

if(L46R==4)
{

blockSpin == 0 ? blockSpin = 3 : blockSpin-- ;

CopyedShape.forEach(function (e){

//[0,-2], [0,-1], [0, 0], [0, 1]]

if(e[0]==1){
if		  (e[1]== 0)	{spinShape.push([-2, 1]); }
else if (e[1]==-1) 	{spinShape.push([-1, 2]); }
}
if(e[0]==0){
if		  (e[1]== 1)	{spinShape.push([-2,-1]); }
else if (e[1]== 0) 	{spinShape.push([-1, 0]); }
else if (e[1]==-1)  {spinShape.push([ 0, 1]); }
else /* (e[1]==-2)*/{spinShape.push([ 1, 2]); } 
}
if(e[0]==-1){
if		  (e[1]== 1)	{spinShape.push([-1,-2]); }
else if (e[1]== 0) 	{spinShape.push([ 0,-1]); }
else if (e[1]==-1)  {spinShape.push([ 1, 0]); }
else /* (e[1]==-2)*/{spinShape.push([ 2, 1]); }
}
if(e[0]==-2){
if		  (e[1]== 0)	{spinShape.push([ 1,-2]); }
else if (e[1]==-1) 	{spinShape.push([ 2,-1]); }
}

})

for (var x = 0; x < 4; x++){
for (var y = 0; y < 2; y++){
CopyedShape[x][y] = CopyedShape[x][y] + spinShape[x][y];
NshapePlace[x][y] = shapePlace[x][y] - spinShape[x][y]; // it goes chaos if you turn - to +
KshapePlace[x][y] = NshapePlace[x][y];
}
}

spinAble = true ;

wallKickCount=0;

for(var i=0;i<5;i++)
{

if (spinAble == false && wallKickCount < 5) {wallKick(4,1);}

KshapePlace.forEach(function (e){
if(e[0]<0 || e[0]>19 || e[1]>9 || e[1]<0) spinAble = false ;
else if(gameMap[e[0]][e[1]]==1) spinAble = false ;
})

}

if(spinAble == true)
{

for (var x = 0; x < 4; x++){
for (var y = 0; y < 2; y++){
NshapePlace[x][y] = KshapePlace[x][y];
}
}

shapePlace.forEach(function (e){
fallMap[e[0]][e[1]]=0;
});
shapePlace=NshapePlace;
shapePlace.forEach(e => fallMap[e[0]][e[1]]=1);
}
else
{
  blockSpin=OldblockSpin;
for (var x = 0; x < 4; x++){
  for (var y = 0; y < 2; y++){
    CopyedShape[x][y] =  shapeOld[x][y];
  }
}

}


}

else if(L46R==6)
{

blockSpin == 3 ? blockSpin = 0 : blockSpin++ ;

CopyedShape.forEach(function (e){

//[0,-2], [0,-1], [0, 0], [0, 1]]

if(e[0]==1){
if		  (e[1]== 0)	{spinShape.push([-1,-2]); }
else if (e[1]==-1) 	{spinShape.push([-2,-1]); }
}
if(e[0]==0){
if		  (e[1]== 1)	{spinShape.push([ 1,-2]); }
else if (e[1]== 0) 	{spinShape.push([ 0,-1]); }
else if (e[1]==-1)  {spinShape.push([-1, 0]); }
else /* (e[1]==-2)*/{spinShape.push([-2, 1]); }
}
if(e[0]==-1){
if		  (e[1]== 1)	{spinShape.push([ 2,-1]); }
else if (e[1]== 0) 	{spinShape.push([ 1, 0]); }
else if (e[1]==-1)  {spinShape.push([ 0, 1]); }
else /* (e[1]==-2)*/{spinShape.push([-1, 2]); }
}
if(e[0]==-2){
if		  (e[1]== 0)	{spinShape.push([2 ,1 ]); }
else if (e[1]==-1) 	{spinShape.push([1, 2 ]); }
}

})

for (var x = 0; x < 4; x++){
for (var y = 0; y < 2; y++){
CopyedShape[x][y] = CopyedShape[x][y] + spinShape[x][y];
NshapePlace[x][y] = shapePlace[x][y] - spinShape[x][y]; // it goes chaos if you turn - to +
KshapePlace[x][y] = NshapePlace[x][y];
}
}

spinAble = true ;

wallKickCount=0;

for(var i=0;i<5;i++)
{

if (spinAble == false && wallKickCount < 5) wallKick(6,1);

KshapePlace.forEach(function (e){
if(e[0]<0 || e[0]>19 || e[1]>9 || e[1]<0) spinAble = false ;
else if(gameMap[e[0]][e[1]]==1) spinAble = false ;
})

}

for (var x = 0; x < 4; x++){
for (var y = 0; y < 2; y++){
NshapePlace[x][y] = KshapePlace[x][y];
}
}

if(spinAble == true)
{

for (var x = 0; x < 4; x++){
for (var y = 0; y < 2; y++){
NshapePlace[x][y] = KshapePlace[x][y];
}
}

shapePlace.forEach(function (e){
fallMap[e[0]][e[1]]=0;
});
shapePlace=NshapePlace;
shapePlace.forEach(e => fallMap[e[0]][e[1]]=1);
}

else
{

  blockSpin=OldblockSpin;
for (var x = 0; x < 4; x++){
  for (var y = 0; y < 2; y++){
    CopyedShape[x][y] =  shapeOld[x][y];
  }
}

}

}

} // I shape spin

}	

function wallKick(L46R,OBlock){
wallKickCount++;
spinAble = true;

if(OBlock==0)
{
switch(wallKickCount){
case 1:
{

if(L46R == 6)
{
blockSpin == 1 ? NShapeMove(-1,0) : 
blockSpin == 2 ? NShapeMove( 1,0) :
blockSpin == 3 ? NShapeMove( 1,0) :
							   NShapeMove(-1,0) ;
}
if(L46R == 4)
{
blockSpin == 0 ? NShapeMove( 1,0) : 
blockSpin == 1 ? NShapeMove(-1,0) :
blockSpin == 2 ? NShapeMove(-1,0) :
							   NShapeMove( 1,0)  ;
}

break;
}
case 2:
{
if(L46R == 6)
{
blockSpin == 1 ? NShapeMove(-1,1 ) : 
blockSpin == 2 ? NShapeMove( 1,-1) :
blockSpin == 3 ? NShapeMove( 1,1 ) :
							   NShapeMove(-1,-1) ;
}
if(L46R == 4)
{
blockSpin == 0 ? NShapeMove( 1,-1) : 
blockSpin == 1 ? NShapeMove(-1,1 ) :
blockSpin == 2 ? NShapeMove(-1,-1) :
							   NShapeMove( 1,1 ) ;
}
break;
}
case 3:
{
if(L46R == 6)
{
blockSpin == 1 ? NShapeMove(0,-2) : 
blockSpin == 2 ? NShapeMove(0,2) :
blockSpin == 3 ? NShapeMove(0,-2) :
							   NShapeMove(0,2) ;
}
if(L46R == 4)
{
blockSpin == 0 ? NShapeMove(0,2) : 
blockSpin == 1 ? NShapeMove(0,-2) :
blockSpin == 2 ? NShapeMove(0,2) :
							   NShapeMove(0,-2) ;
}
break;
}
case 4:
{
if(L46R == 6)
{
blockSpin == 1 ? NShapeMove(-1,-2) : 
blockSpin == 2 ? NShapeMove( 1, 2) :
blockSpin == 3 ? NShapeMove( 1,-2) :
							   NShapeMove(-1, 2) ;
}
if(L46R == 4)
{
blockSpin == 0 ? NShapeMove( 1, 2) : 
blockSpin == 1 ? NShapeMove(-1,-2) :
blockSpin == 2 ? NShapeMove(-1, 2) :
							   NShapeMove( 1,-2) ;
}
break;
}
default:
{
spinAble = false; 
break;
}
}
}
else{
switch(wallKickCount){
case 1:
{

if(L46R == 6)
{
blockSpin == 1 ? NShapeMove(-2,0) : 
blockSpin == 2 ? NShapeMove(-1,0) :
blockSpin == 3 ? NShapeMove( 2,0) :
							   NShapeMove( 1,0) ;
}
if(L46R == 4)
{
blockSpin == 0 ? NShapeMove( 2,0) : 
blockSpin == 1 ? NShapeMove( 1,0) :
blockSpin == 2 ? NShapeMove(-2,0) :
							   NShapeMove(-1,0)  ;
}

break;
}
case 2:
{
if(L46R == 6)
{
blockSpin == 1 ? NShapeMove( 1, 0) : 
blockSpin == 2 ? NShapeMove( 2, 0) :
blockSpin == 3 ? NShapeMove(-1, 0) :
							   NShapeMove(-2, 0) ;
}
if(L46R == 4)
{
blockSpin == 0 ? NShapeMove( 2, 0) : 
blockSpin == 1 ? NShapeMove( 1, 0) :
blockSpin == 2 ? NShapeMove(-2, 0) :
							   NShapeMove(-1, 0) ;
}
break;
}
case 3:
{
if(L46R == 6)
{
blockSpin == 1 ? NShapeMove(-2,-1) : 
blockSpin == 2 ? NShapeMove(-1, 2) :
blockSpin == 3 ? NShapeMove( 2, 1) :
							   NShapeMove( 1,-2) ;
}
if(L46R == 4)
{
blockSpin == 0 ? NShapeMove( 2, 1) : 
blockSpin == 1 ? NShapeMove( 1,-2) :
blockSpin == 2 ? NShapeMove(-2,-1) :
							   NShapeMove(-1, 2) ;
}
break;
}
case 4:
{
if(L46R == 6)
{
blockSpin == 1 ? NShapeMove( 1, 2) : 
blockSpin == 2 ? NShapeMove( 2,-1) :
blockSpin == 3 ? NShapeMove(-1,-2) :
							   NShapeMove(-2, 1) ;
}
if(L46R == 4)
{
blockSpin == 0 ? NShapeMove(-1,-2) : 
blockSpin == 1 ? NShapeMove(-2, 1) :
blockSpin == 2 ? NShapeMove( 1, 2) :
							   NShapeMove( 2,-1) ;
}
break;
}
default:
{
spinAble = false; 
break;
}
}
}
}

function NShapeMove(x,y){
//console.log("trying",x,y);
let Move = [[-y,x],[-y,x],[-y,x],[-y,x]];

for (var i = 0; i < 4; i++){
for (var j = 0; j < 2; j++){
KshapePlace[i][j] = NshapePlace[i][j] + Move[i][j];
}
}
}

function BagShow(){
corner=[
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
[0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2]];
next5Bag = [];
for(var i=0;i<5;i++)
{
next5Bag.push(bag[i]);
}
if(holdingBlock != 10)
{
next5Bag.push(holdingBlock);
}
else
{
next5Bag.push(7);
}
corner[12][0]=1;

for(var i=0,j=0;i<6;i++)
{
if(i==5) j=1;

switch(next5Bag[i])
{
case 0:
corner[1+(3*i)+j][11]=1;
corner[1+(3*i)+j][12]=1;
corner[2+(3*i)+j][12]=1;
corner[2+(3*i)+j][13]=1;
break;
case 1:
corner[1+(3*i)+j][12]=1;
corner[1+(3*i)+j][13]=1;
corner[2+(3*i)+j][11]=1;
corner[2+(3*i)+j][12]=1;
break;
case 2:
corner[2+(3*i)+j][11]=1;
corner[2+(3*i)+j][12]=1;
corner[2+(3*i)+j][13]=1;
corner[2+(3*i)+j][14]=1;
break;
case 3:
corner[2+(3*i)+j][11]=1;
corner[2+(3*i)+j][12]=1;
corner[2+(3*i)+j][13]=1;
corner[1+(3*i)+j][12]=1;
break;
case 4:
corner[2+(3*i)+j][12]=1;
corner[1+(3*i)+j][12]=1;
corner[1+(3*i)+j][13]=1;
corner[2+(3*i)+j][13]=1;
break;
case 5:
corner[1+(3*i)+j][13]=1;
corner[2+(3*i)+j][11]=1;
corner[2+(3*i)+j][12]=1;
corner[2+(3*i)+j][13]=1;
break;
case 6:
corner[1+(3*i)+j][11]=1;
corner[2+(3*i)+j][11]=1;
corner[2+(3*i)+j][12]=1;
corner[2+(3*i)+j][13]=1;
break;
default:
break;
}
}

}

function handleClick({ x, y, checkbox }) {
let nope=true;
shapePlace.forEach(function (e){
if(e[0]==y&&e[1]==x) nope=false;
});

if(nope)
{
fallMap[y][x]==1 ? fallMap[y][x]=0 : fallMap[y][x]=1;
gameMap[y][x]==1 ? gameMap[y][x]=0 : gameMap[y][x]=1;
}
//console.log(y,x);
}

function setting(set,val){

  if(set == "DAS")
  {
    delayAutoShift = val;
    document.getElementById('dastext').value = val;
  }

  if(set == "ARR")
  {
    autoRepeatRate = val;
    document.getElementById('arrtext').value = val;
  }

  if(set == "SDS")
  {
    softDropSpeed = val;
    document.getElementById('sdstext').value = val;
  }

  if(set == "DFS")
  {
    downFallSpeed = val;
    document.getElementById('speedtext').value = val;
  }

}

export{
  init,
  nextBlock,
  }