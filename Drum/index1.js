var numOfButton = document.querySelectorAll(".btnn").length;
for(var i=0;i<numOfButton;i++){
    document.querySelectorAll(".btnn")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
})
function makeSound(key){
    switch(key){
        case "a":
            var a = new Audio('beats/tom-1.mp3');
            a.play();
            break;
        case "s":
            var s = new Audio('beats/snareDrum.mp3');
            s.play();
            break;
        case "d":
            var d = new Audio('beats/snareDrum.mp3');
            d.play();
            break;
        case "f":
            var f = new Audio('beats/Hi-Hat.mp3');
            f.play();
            break;
        case "j":
            var j = new Audio('beats/Drum-Sticks.mp3');
            j.play();
            break;
        case "k":
            var k = new Audio('beats/China-Cymbal-Crash.mp3');
            k.play();
            break;
        case "h":
            var h = new Audio('beats/China-Cymbal-Crash.mp3');
            h.play();
            break;
        case "l":
            var l = new Audio('beats/Bass-Drum.mp3');
            l.play();
            break;
    }
}