document.addEventListener('DOMContentLoaded', function(){
  var b=document.querySelector('.nav-toggle'), n=document.getElementById('main-nav');
  if(b && n){ b.addEventListener('click',function(){ var open=b.getAttribute('aria-expanded')==='true'; b.setAttribute('aria-expanded',String(!open)); n.classList.toggle('is-open',!open); }); }
});
