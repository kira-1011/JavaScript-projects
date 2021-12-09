var email = document.querySelector('#email');
var password = document.querySelector('#password');
var signBtn = document.querySelector('#signup');
var loginBtn = document.querySelector("#login");
var text = document.querySelector('#text');
var table = document.querySelector('table');

var counter = 1;

function getEmail()
{
    let userEmail = email.value;
    return userEmail;
}

function getPass()
{
    let userPass = password.value;
    return userPass;
}

function signUp()
{
    let tr = document.createElement('tr');
    let tdNumber = document.createElement('td');
    let tdEmail = document.createElement('td');
    tdEmail.id = "userEmail";
    
    if(getEmail() === '' || getPass() === '')
    {
        alert('All fields are required!');
        return false;
    }
    else if(check(tdEmail) === true)
    {
        alert("Already registered!");
        return false;
    }
    else if(validate() === false)
    {
        alert("Please insert appropriate Email!");
        return false;

    }
   

    table.appendChild(tr);
    tr.appendChild(tdNumber).innerText = counter;
    tr.appendChild(tdEmail).innerText = getEmail();
    counter++;
}
    

function logIn()
{
    //text.textContent = "Successfully logged in!";

}

function check(htmlTableData)
{
    
    //let tdEmailId = htmlTableData.id;
    let tableContent = document.querySelectorAll('#userEmail');

    //TODO: fix tableContent[some counting variable ]
    if(tableContent[0] != undefined)
    {

        console.log(tableContent);
        console.log(tableContent[0].textContent);
        console.log(getEmail());
        if(getEmail() === tableContent[0].textContent)
        {
            //console.log("TRUE");
            return true;
        }
    }
   return false;
}

function validate()
{
    let found = false;
    spliitedEmail = getEmail().split('.');
    
    if(spliitedEmail[0].split("").indexOf('@') != -1)
        found = true;

    if(spliitedEmail[1] === 'com')
    {
        if(found)
            return true;
    }

    return false;
    
}
signBtn.onclick = signBtn.addEventListener('click',signUp);
loginBtn.onclick = loginBtn.addEventListener('click',logIn);
