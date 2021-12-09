
var btn = document.querySelector("button");
var BMI = document.querySelector("#BMI");
var height = document.querySelector('#height');
var weight = document.querySelector("#weight");
var bmi = 0;

function getHeightValue()
{
    // var heightValue = document.querySelector('#height').value;
    //var heightValue = height.value;
    // if(heightValue === null)
    // {
    //     heightValue = 10;
    // }
    let heightValue = height.value;
    return heightValue;
}

function getWeightValue()
{
    // var weightValue = document.querySelector("#weight").value;
    // if(weightValue === null)
    // {
    //     weightValue = 0;
    // }
    let weightValue = weight.value;
    return weightValue;
}
function clicked()
{
    bmi = (getWeightValue())/(getHeightValue())**2;
    BMI.innerText = bmi.toFixed(3);
    //alert("Your BMI is " + bmi.toFixed(3));
    // var parentElement = document.querySelector("#inputs");
    // var childElement = document.createTextNode("Your BMI is " + bmi.toFixed(3));
    // parentElement.appendChild(childElement);
}

function calculate()
{
    btn.addEventListener('click',clicked);
}


btn.onclick = calculate();


