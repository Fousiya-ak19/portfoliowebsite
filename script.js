const nme=document.getElementById('name');
const email=document.getElementById('email');
const form=document.getElementById('form');
const nme_error=document.getElementById('name_error');
const email_error=document.getElementById('email_error');
var email_check= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
form.addEventListener('submit',(e)=>{

    if(name.value===('')||name.value==null)
    {
        e.preventDefault();
        name_error.innerHTML="Name is required";
    }
    if(!email.value.match(email_check))
    {
        e.preventDefault();
        email_error.innerHTML="Email is not valid";
    }

})