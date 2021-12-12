var canvas = document.getElementById('canvas');
var cx = canvas.getContext('2d');
var posX = 0;
var posY = 0;
var sizeX = 50;
var sizeY = 50;
var velocityX = 6;
var velocityY = 6;
var border2 = 550;
var border1  = 0;

moveUp =false;
moveDown = false;
moveRight =false;
moveLeft = false;

// var action = {
//     moveUp:false,
//     moveDown:false,
//     moveRight:false,
//     moveLeft:false
// }

cx.fillRect(posX,posY,sizeX,sizeY);

function onPress(e)
{
    ///TODO: clear screen after
    
    if(e.key.toLowerCase() == 'w')
    {
        moveUp = true;
        moveDown = false;
        moveLeft = false;
        moveRight = false;
    }
    else if(e.key.toLowerCase() == 's')
    {
        moveUp = false;
        moveDown = true;
        moveLeft = false;
        moveRight = false;
        
    }
    else if(e.key.toLowerCase() == 'd')
    {
        moveUp = false;
        moveDown = false;
        moveLeft = false;
        moveRight = true;
    }
    else if(e.key.toLowerCase() == 'a')
    {
        moveUp = false;
        moveDown = false;
        moveLeft = true;
        moveRight = false;
        
    }
    cx.fillRect(posX,posY,sizeX,sizeY);
    console.log(moveUp,moveDown,moveLeft,moveRight);
}

function move()
{
    if(moveUp && posY > border1)
    {
        posY -= velocityY;
    }
    else if(moveDown  && posY < border2)
    {
        posY += velocityY;
    }
    else if(moveRight && posX < border2)
    {
        posX += velocityX;
    }
    else if(moveLeft  && posX > border1)
    {
        posX -= velocityX;
    }
}

document.addEventListener('keypress',onPress);
console.log(moveUp,moveDown,moveLeft,moveRight);
move();