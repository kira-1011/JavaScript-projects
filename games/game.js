var canvas = document.getElementById('canvas');
var cx = canvas.getContext('2d');
var posX = 10;
var posY = 10;
function drawBox()
{
    cx.strokeRect(posX,posY,100,100);

    if(posX >= 500)
    {
        posX = 10;
        posY += 100;
    }
    else
    {
        posX += 100;
    }  
}

// setInterval(drawBox, 500);

let btn = document.getElementById('move');
btn.addEventListener('click',drawBox);