function capture() {


    document.body.style.webkitUserDrag="none";
    document.body.style.userSelect="none";

    const dragBox = document.createElement('div');
    dragBox.setAttribute('id','drag-box');
    dragBox.setAttribute("style", `
    position: absolute;
    background-color: #3399ff44;
    border: 1px solid #3399ff88;
    display: block;
    `);
    document.body.appendChild(dragBox);

    let isDragging = false;
    let startX, startY; 

    document.addEventListener("mousedown", function mousedownListener(event){
        if (event.button === 0) {
            startX = event.clientX;
            startY = event.clientY;
            isDragging = true;
            dragBox.style.left = startX + "px";
            dragBox.style.top = startY + "px";
            dragBox.style.width = "0";
            dragBox.style.height = "0";
        }
    },{once: true});

    document.addEventListener("mousemove", function mousemoveListener(event){
        if (isDragging) {
            const currentX = event.clientX;
            const currentY = event.clientY;
            const width = Math.abs(currentX - startX);
            const height = Math.abs(currentY - startY);
            dragBox.style.width = width + "px";
            dragBox.style.height = height + "px";
            dragBox.style.left = Math.min(currentX, startX) + "px";
            dragBox.style.top = Math.min(currentY, startY) + "px";
        }
    });

    document.addEventListener("mouseup", (event) => {

        if (event.button === 0 && isDragging) { 
            isDragging = false;
            dragBox.style.display = "none";
            const releaseX = event.clientX;
            const releaseY = event.clientY;
            const width = Math.abs(releaseX - startX);
            const height = Math.abs(releaseY - startY);
            const left = Math.min(releaseX, startX);
            const top = Math.min(releaseY, startY);

            const captureElement = document.querySelector('body') // Select the element you want to capture. Select the <body> element to capture full page.
            html2canvas(captureElement,{width:width,height:height,x:left,y:top})
                .then(canvas => {
                    canvas.style.display = 'none'
                    document.body.appendChild(canvas);
                    return canvas;
                })
                .then(canvas => {
                    const image = canvas.toDataURL('image/png');
                    const a = document.createElement('a');
                    a.setAttribute('download', 'my-image.png');
                    a.setAttribute('href', image);
                    a.click();
                    canvas.remove();
            })
            dragBox.style.display = "none";
            document.body.style.webkitUserDrag=null;
            document.body.style.userSelect=null;
        }
    },{once: true});
}




