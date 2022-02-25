document.querySelector('.myevent').addEventListener('submit',(event) =>{
    event.preventDefault();
    console.log(event.target.firstname.value);
    console.log(event.target.lastname.value);
    console.log(event.target.Address.value);
    console.log(event.target.city.value);
    console.log(event.target.country.value);
   
    
    event.target.firstname.value='';
    event.target.lastname.value='';
    event.target.Address.value='';
    event.target.city.value='';
    event.target.country.value='';
   
    
})









// function validateHTMLform()
// {
//   let form = document.myEvent;
//   if(form.checkbox.value == ''){
//     alert('select the checkbox');
//     form.checkbox.focus();
//     return false;
//   }
// }
// document.querySelector('.checkbox').addEventListener('submit',(Event)=>{
  
// })

// 

// var orderbutton=document.querySelector("input [type='checkbox']");
var form=document.getElementsByClassName('.orderbutton');
function check() {
    
    if(form.orderbutton.checked == ''){
        alert('select the checkbox');
        return;
        
    };
}
// document.querySelector('.orderbutton').addEventListener('onclick',(event) =>{

// })
