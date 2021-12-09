var canvas = document.getElementById('canvas');
var cx = canvas.getContext('2d');
var posX = 10;
var posY = 10;
var sizeX = 50;
var sizeY = 50;

cx.fillRect(posX,posY,sizeX,sizeY);
document.addEventListener('keypress',function(e)
{
    if(e.key.toLowerCase() == 'w')
    {
        posY -= sizeY;
    }
    else if(e.key.toLowerCase() == 's')
    {
        posY += sizeY;
    }
    else if(e.key.toLowerCase() == 'd')
    {
        posX += sizeX;
    }
    else if(e.key.toLowerCase() == 'a')
    {
        posX -= sizeX;
    }
    cx.fillRect(posX,posY,sizeX,sizeY);
});

// var posX = 10;
// var posY = 10;
// function drawBox()
// {
//     cx.strokeRect(posX,posY,100,100);

//     if(posX >= 500)
//     {
//         posX = 10;
//         posY += 100;
//     }
//     else
//     {
//         posX += 100;
//     }  
// }

// // setInterval(drawBox, 500);

// let btn = document.getElementById('move');
// btn.addEventListener('click',drawBox);
