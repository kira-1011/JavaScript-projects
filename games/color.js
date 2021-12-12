var canvas = document.getElementById('canvas');
canvas.addEventListener('mousemove',action);
//document.addEventListener('keypress',action);
function action(e)
{
    // canvas.style.backgroundColor = 'rgb('e.clientX + + + ')';
    //console.log(e.clientX,e.clientY);
    canvas.style.backgroundColor = `rgb(${e.clientX},${e.clientY},${0})`;
}