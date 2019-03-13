//make v-on:scroll werk

//variables
var target = document.querySelectorAll('.scroll');
var index = true;

//functions
function parallax(){

if( index = 0 , length = target.length);

for(index; index < length; index ++) { //incrementing lenght
    var position = window.pageYOffset * target [index].dataset.rate;
    
  target[index].style.transform = 'translate3d(0px, '+position+'px , 0px)' ;
}


};

//event listeners
window.addEventListener("scroll" , parallax);