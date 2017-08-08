/* client side js on load */
window.onload = function(){
  /* toggle hamburger menu */
  document.getElementById('navigation').addEventListener('click', function(e){
    document.getElementById('inner--navigation').classList.toggle('bar-rest');
    document.getElementById('inner--navigation').classList.toggle('bar-active');
    document.getElementById('overlay--menu').classList.toggle('show--overlay');
  });
};
