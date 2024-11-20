//detecting button press
var numberofdrumbuttons = document.querySelectorAll(".drum").length;
for(var i = 0 ; i< numberofdrumbuttons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonofinnerhtml = this.innerHTML;
        makeSound(buttonofinnerhtml);
        activeAnimation(buttonofinnerhtml);
        
    });

}
//detecting keyboard press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    activeAnimation(event.key);

});
function makeSound(key){
    switch(key){
            case "w":
         var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;
            
            case "a":
                 var kick = new Audio("sounds/kick-bass.mp3");
         kick.play();
                
         break;
            case "s":
               var snare = new Audio("sounds/snare.mp3");
         snare.play();
         break;
            case "d":
                  var crash = new Audio("sounds/crash.mp3");
         crash.play();
         break;
            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
         break;
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;
            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;

         default:
        }
}
function activeAnimation(currentkey){
   var activeButton = document.querySelector("."+ currentkey);
    activeButton.classList.add("pressed");
 setTimeout(function(){
    activeButton.classList.remove("pressed");
 }, 10);

}

