
//var numberofdrumButtons = document.querySelectorAll(".drum").lenght
// detecting number press
for(var i=0; i<document.querySelectorAll(".drum").length; i++)   //add effect to all button using for loop 
{
document.querySelectorAll(".drum")[i].addEventListener("click",function() 
{
    
    //this.style.color="white";
    //what to do when click detected 
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    
});
}
// Detecting keybord press
document.addEventListener("keypress",function(event){

   makeSound(event.key)

   buttonanimation(event.key)


});

function makeSound(key)
{
    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play()
            break;

        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play()
            break;    
        
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play()
            break;

        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play()
            break;

        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play()
            break;

        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play()
            break;

        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play()
            break;
        
    }
}

//button animatiom



function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }