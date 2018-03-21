/* This is the Javascript portion of the simple JS-DrumKit Project */

/* Add the element you are listening for. In this case key down. Function gives the event
    e => object full of data describing what happened. 
*/


function playSound(e){
    //console.log(e.keyCode);     You can see the codes for all keys using this console log out.

    // The below variable will check if the key pressed has an associated audio file to go with it. null if there isn't.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //Selects the div of associated key.
    //console.log(audio);       Logs out the related audio data file (tag and location). i.e. `<audio data-key="65" src="sounds/clap.wav"></audio>`
    //console.log(key);         Logs out the related div associated with the data-key (Button Pressed)
    if (!audio){
        return; //Stop function from running if there is no audio file associated with the key that was pressed.
    }

    audio.currentTime = 0;//Rewinds the audio file to the start, so that there is no pause when hitting the same button repeatedly.

    audio.play(); //Plays the audio file.

    key.classList.add('playing'); //adding a class. .

    //Transition end event.


};

function removeTransition(e){
    //console.log(e);
    if (e.propertyName !== 'transform'){
        return;
    }
    //console.log(e.propertyName);
    
    //console.log("Hey!! -- " + this.key);
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //arrow function add function to each key div.

window.addEventListener('keydown', playSound); //Event Listener for the keys 