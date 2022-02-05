var canvas = document.getElementById('canvas');
var cx = canvas.getContext('2d');

canvas.addEventListener('mousemove',action);
//document.addEventListener('keypress',action);
function action(e)
{
    cx.fillStyle = `rgb(${0},${e.clientY},${e.clientX})`;
    cx.clearRect(0,0,canvas.width, canvas.height);
    cx.fillRect(e.clientX,e.clientY,25,25);
    // canvas.style.backgroundColor = 'rgb('e.clientX + + + ')';
    //console.log(e.clientX,e.clientY);
    //cx.fillStyle = "#ffffff";
    // setInterval(10000);
    //cx.fillRect(e.clientX,e.clientY,canvas.width,canvas.height);
    //cx.fillStyle = "#000000";
    //canvas.style.backgroundColor = 'red';
    //cx.fillStyle = "#ffffff";
    //canvas.style.backgroundColor = `rgb(${e.clientX},${e.clientY},${e.clientY})`;
}