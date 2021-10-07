const form = document.getElementById('form')
const fullname = document.getElementById('fullname')
const blood_group = document.getElementById('blood-group')
const nationality = document.getElementById('nationality')
const state_name = document.getElementById('state-name')
const pob = document.getElementById('place-of-birth')
const dob = document.getElementById('date-of-birth')
const guardian = document.getElementById('guardian-name')
const phone_no = document.getElementById('phone-no')
const gphone_no = document.getElementById('gphone-no')
const email = document.getElementById('email')
const address = document.getElementById('address')
const ssc = document.getElementById('ssc')
const hsc = document.getElementById('hsc')




function showError(input,message){
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message;
}

function showSucess(input){
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
}

function checkEmail(input){
   const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
   if(regex.test(input.value.trim())){
      showSucess(input);
   }else{
      showError(input,'Email is not valid. ')
   }
}

function checkPhoneNo(pn){
    const re = /^[0-9]{10}$/;

    if(re.test(pn.value.trim())){
        showSucess(pn);
    }else{
        showError(pn,'Phone No is invalid (*Only 10 digit numbers)')
    }
}
function checkgPhoneNo(pn){
    const re = /^[0-9]{10}$/;

    if(re.test(pn.value.trim())){
        showSucess(pn);
        console.log('asd')
    }else{
        showError(pn,'Phone No is invalid (*Only 10 digit numbers).')
    }
}

function checkhsc(input){
    const re = /^([0-9]|[1-9][0-9]|100)$/;
    if(re.test(input.value.trim())){
        showSucess(input);
    }else{
        showError(input,'Percentage Invalid (*Only input percentage Numbers)')
    }
}

function checkssc(input){
    const re = /^([0-9]|[1-9][0-9]|100)$/;
    if(re.test(input.value.trim())){
        showSucess(input);
    }else{
        showError(input,'Percentage Invalid (*Only input percentage Numbers)')
    }
}

function checkRequired(inpArr){
   let isRequired = false;
   inpArr.forEach(input => {
      if(input.value.trim() === ''){
         showError(input, `${getTarget(input)} is required`)
      }else{
         showSucess(input)
      }
   })
}

function checkLength(input,min,max){
   if(input.value.length<min){
      showError(input,`${getTarget(input)} must be at least ${min} characters`);
   }else if(input.value.length>max){
      showError(input,`${getTarget(input)} must be less than ${max} characters`);
   }else{
      showSucess(input);
   }
}



function getTarget(input){
   return input.id.charAt(0) + input.id.slice(1);
}




form.addEventListener('submit',function(e){
   e.preventDefault();
   if(!checkRequired([fullname,email,blood_group,pob,nationality,state_name,dob,guardian,phone_no,gphone_no,address,hsc,ssc])){
      checkLength(fullname,3,15);
      checkEmail(email);
      checkPhoneNo(phone_no)
      checkgPhoneNo(gphone_no)
      checkhsc(hsc)
      checkssc(ssc)
   }
   console.log('sss')
});