var numberofdrums=document.querySelectorAll(".he").length;
for (var i=0;i<numberofdrums;i++){
    document.querySelectorAll(".he")[i].addEventListener("click",click);
    function click(){
       var text = this.querySelector("h2").innerHTML;
       switch(text){
        case "Modi Chalisa ▶️":
            var audio= new Audio("./modi song trim.mp3")
            audio.play();
            break;
        case "Hatja tao ▶️":
            var audio1= new Audio("./trim new.mp3")
            audio1.play();
            break;
        case "Tunak Tunak ▶️":
            var audio1= new Audio("./Tunak Tunak Tun Video  Daler Mehndi  Full Song  Daler Mehndi Music-[AudioTrimmer.com].mp3")
            audio1.play();
            break;    
       }
    }
}