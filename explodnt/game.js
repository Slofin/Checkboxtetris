function setStyle(objId, propertyObject) {
    var elem = document.getElementById(objId);
    for (var property in propertyObject)
        elem.style[property] = propertyObject[property];
}

function gameStart() {
    setStyle("initButton", { 'visibility': 'hidden' });
    setStyle("startText", { 'animation': 'fadeInAndOut 5s ' });

    setTimeout(function () {
        setStyle("divBomb", { 'animation': 'fadeInn 5s', 'visibility': 'visible' });
      }, 4000);

}