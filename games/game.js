var canvas = document.getElementById('canvas');
var cx = canvas.getContext('2d');
var cxScore = canvas.getContext('2d');
var cxBox = canvas.getContext('2d');
cxScore.font = "20px Arial";
cx.fillStyle = "#00ff00";
canvas.style.background ="#000000";
var posX = 10;
var posY = 10;
var sizeX = 25;
var sizeY = 25;
var velocityX = 5;
var velocityY = 5;
var borderStart = 0;
var borderEnd = 570;
var intervalTime = 25;
var interval;
 
cxScore.fillText("Score:",450,25);
cx.fillRect(posX,posY,sizeX,sizeY);
cxBox.fillRect(100,100,10,10);

// class Fruit
// {
//     constructor()
//     {
//         var canvas = document.getElementById('canvas');
        
//     }
//     randomlySpawn() 
//     {
//         var cxBox = canvas.getContext('2d');
//         var x = Math.random() * 10;
//         var y = Math.random() * 10;
//         cxBox.fillRect(x,y,10,10);
        
//     }
// }


function randomlySpawn() 
{
    var x = Math.random() * 600;
    var y = Math.random() * 600;
    cxBox.fillRect(x,y,10,10);
    
}

function isEaten()
{
    if(posX == x)
    {
        return true;
    }
    
}

function draw()
{
    cx.clearRect(0,0,canvas.width,canvas.height);
    cx.fillRect(posX,posY,sizeX,sizeY);
    cxScore.fillText("Score:",450,25);

}
function move(key)
{
    clearInterval(interval);

    if(key.toLowerCase() === 'd')
    {
        interval = setInterval(function(){
        if(gameOver(posX))
        {
            cx.fillText("Game Over!!!", 200, 300);
        }
        else
        {
            posX += velocityX;
            draw();
        }
            
        },intervalTime);
       
    }
    else if(key.toLowerCase() === 'a')
    {
        interval = setInterval(function(){
        if(gameOver(posX))
        {
            cx.fillText("Game Over!!!", 200, 300);
        }
        else
        {
            posX -= velocityX;
            draw();
        }
        },intervalTime);
        
    }
    else if(key.toLowerCase() === 'w')
    {
        interval = setInterval(function(){
            if(gameOver(posY))
            {
                cx.fillText("Game Over!!!", 200, 300);
            }
            else
            {
                posY -= velocityY;
                draw();
            }
            
        },intervalTime);
       
    }
    else if(key.toLowerCase() === 's')
    {
        interval = setInterval(function(){
            if(gameOver(posY))
            {
                cx.fillText("Game Over!!!", 200, 300);
            }
            else
            {
                posY += velocityY;
                draw();
            }
            
        },intervalTime);
    }
    else 
    {
        draw();
    }
 
}

function onPress(e)
{
   move(e.key);
}

function gameOver(position)
{

    if(position <= borderStart || position >= borderEnd)
    {
        cx.font = "40px Arial";
        cx.fillStyle = "red";
        return true;   
    }
}
document.addEventListener('keypress',onPress);
