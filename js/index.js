/*---------------------메뉴바-----------------------*/

const Btn = document.querySelector('.navbar_btn');
const menu = document.querySelector('.navbar_menu');
const link = document.querySelector('.navbar_link');
const bgi =document.querySelector('.navbar');

Btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  link.classList.toggle('active');
  bgi.classList.toggle('active');
});

//-----------------------시계----------------------// 
function clock() {
  var time = new Date(),
      hours = time.getHours(),
      minutes = time.getMinutes(),
      seconds = time.getSeconds();
  document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
    
  function harold(standIn) {
      if (standIn < 10) {
        standIn = '0' + standIn
      }
      return standIn;
    }
}
setInterval(clock, 1000);