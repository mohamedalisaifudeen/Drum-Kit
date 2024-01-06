
function Button_functionality(bt1){
  document.querySelector('.'+bt1).classList.add("pressed")
}

function timeout(click){
  setTimeout(function(){
    document.querySelector('.'+click).classList.remove('pressed')
  },100)
}


function Drummer(cl){
  switch (cl) {
    case 'w':
        var audio1=new Audio(list_of_audio[0]);
        audio1.play();
      break;
    case 'a':
      var audio12=new Audio(list_of_audio[1]);
      audio12.play();
    break;
    case 's':
      var audio123=new Audio(list_of_audio[2]);
      audio123.play();
    break;
    case 'd':
      var audio1234=new Audio(list_of_audio[3]);
      audio1234.play();
    break;
    case 'j':
      var audio12345=new Audio(list_of_audio[4]);
      audio12345.play();
    break;
    case 'k':
      var audio123456=new Audio(list_of_audio[5]);
      audio123456.play();
    break;

    case 'l':
      var audio1234567=new Audio(list_of_audio[6]);
      audio1234567.play();
    break;


    default:

  }
}

list_of_audio=['sounds/tom-1.mp3','sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3','sounds/crash.mp3','sounds/kick-bass.mp3','sounds/snare.mp3']
for(var i=0;i<7;i++){
  document.querySelectorAll('.drum')[i].addEventListener("click",function (){
    this.style.color='red';
    var click=this.innerHTML;
    Drummer(cl=click);
    Button_functionality(click);
    timeout(click)

});
}

document.addEventListener('keypress',function(event){
  Drummer(event.key)
  Button_functionality(event.key)
  timeout(event.key)
})



/*function Clicked(){

}*/
