const pwdEl = document.getElementById("pwd");
const copyEl = document.getElementById("copy");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numbersEl = document.getElementById("numbers");
const specialEl = document.getElementById("special");
const lengthEl = document.getElementById("length");
const generateEl = document.getElementById("generate");


const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "!@#$%^&*()_+=";

function getLowercase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUppercase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSpecial(){
    return special[Math.floor(Math.random() * special.length)];
}


function generatePassword(){
    const length = lengthEl.value;

    let password = "";
    if(upperEl.checked){
        password += getUppercase();
    }
    if(lowerEl.checked){
        password += getLowercase();
    }
    if(numbersEl.checked){
        password += getNumber();
    }
    if(specialEl.checked){
        password += getSpecial();
    }

    for(let i = password.length; i<length; i++){
        const x = generateX();
        password += x;
    }

    pwdEl.innerText = password;
}

function generateX(){
    const xs = [];

    if(upperEl.checked){
        xs.push(getUppercase());
    }
    if(lowerEl.checked){
        xs.push(getLowercase());
    }
    if(numbersEl.checked){
        xs.push(getNumber());
    }
    if(specialEl.checked){
        xs.push(getSpecial());
    }

    if(xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click",generatePassword);

copyEl.addEventListener("click",()=>{
    const textarea = document.createElement("textarea");
    const password = pwdEl.innerText;

    if(!password){
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert('Password Copied!');
});
