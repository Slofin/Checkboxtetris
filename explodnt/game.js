function setStyle( objId, propertyObject )
{
 var elem = document.getElementById(objId);
 for (var property in propertyObject)
    elem.style[property] = propertyObject[property];
}

function gameStart() {
    setStyle("initButton",{'visibility':'hidden'});
}