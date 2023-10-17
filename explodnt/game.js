function setStyle( objId, propertyObject )
{
 var elem = document.getElementById(objId);
 for (var property in propertyObject)
    elem.style[property] = propertyObject[property];
}

console.log(document.getElementById("startText").style);

function gameStart() {
    setStyle("initButton",{'visibility':'hidden'});
    setStyle("startText",{'animation':'fadeInAndOut 5s'});
    setStyle("divBomb",{'animation':'fadeInn 3s'});
}