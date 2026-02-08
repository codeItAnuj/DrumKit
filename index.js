//Switch case to play sound......
function playSound(anyKey){
    switch(anyKey){
        case 'w':
            var w=new Audio('./sounds/tom-1.mp3');
            w.play();
            break;
        case 'a':
            var a=new Audio('./sounds/tom-2.mp3');
            a.play();
            break;
        case 's':
            var s=new Audio('./sounds/crash.mp3');
            s.play();
            break;
        case 'd':
            var d=new Audio('./sounds/snare.mp3');
            d.play();
            break;
        case 'j':
            var j=new Audio('./sounds/kick-bass.mp3');
            j.play();
            break;
        case 'k':
            var k=new Audio('./sounds/tom-3.mp3');
            k.play();
            break;
        case 'l':
            var l=new Audio('./sounds/tom-4.mp3');
            l.play();
            break;
        default:
            console.log("Btn not found");
            break;
    }
}

//To make animations.......
function makeAnimation(anyKey){
    var a=document.querySelector("."+anyKey);
    a.classList.add("pressed");
    setTimeout(function(){
        a.classList.remove("pressed");
    },200);
}





//To make sound & animations using button/cursour click........
function playAudioByClick(){
    var btn=this.innerHTML;
    playSound(btn);
    makeAnimation(btn);
}
for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",playAudioByClick);
}
//To make animations using button/cursour click......
// for(var i=0;i<7;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",makeAnimation);
// }



//To make sound & animations using key press.......
function playSoundByKey(){
    var ky=event.key;
    playSound(ky);
    makeAnimation(ky);
}
document.addEventListener("keydown",playSoundByKey);


// document.addEventListener("keydown",makeAnimation);