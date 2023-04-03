document.addEventListener('DOMContentLoaded', function() {
    
  //Dropdown
  var drop = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(drop);
});
  
const occult = document.querySelector('.occult');
occult.addEventListener('click', (e)=>{
  const sms = document.querySelector('.sms');
  sms.setAttribute('class','hide');
});
  