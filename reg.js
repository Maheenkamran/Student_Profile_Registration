// const fullname=document.getElementById('name');
// const sex=document.getElementById('sex');
// const studentid=document.getElementById('std_id');
// const sec=document.getElementById('section');
// const username=document.getElementById('username');
// const password=document.getElementById('password');
// const form=document.getElementById('form');
// const errorElement=document.getElementById('error');

// form.addEventListener('submit', (e)=>  {
//     let messages=[]
//     if (fullname.value==null || sex.value==null  || studentid.value==null || sec.value==null || username==null || password==null) {
//         messages.push("FILL REQUIRED!");
//     }
//     if(messages.length>0) {
//         e.preventDefault()
//         errorElement.innerText=messages.join(',')
//     }
// }
// )

function validateform(){  
var name=document.myform.name.value;  
var sex=document.myform.name.value;
var std_id=document.myform.name.value;
var section=document.myform.name.value;
var username=document.myform.name.value;
var password=document.myform.password.value;  
const style=document.getElementById('submit');
style.addEventListener('click',function(event){
    style.classList.add('button-style');
});

  
if (name==null || name=="" || sex==null || std_id==null || section==null || username==null ){  
  alert("Empty Fields!");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
}  
  