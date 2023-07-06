const sound = "audio/tunnel_song.mp3"
let player;
let status = 0;


let style1 = `body {
                background-image: url(images/tunnel_dance.gif);
              }`;

let styleSheet = document.createElement("style");




/**
 * listen for keystroke patterns
 *
 * @param event key event
 */




function initMaesperience() {
    player.src = sound;
    player.loop = true;
    player.load();
    player.play();
    styleSheet.innerText = style1;
    document.head.appendChild(styleSheet);
    var button = document.getElementById("sexy");
    button.style.display = "none";
}

/**
 * initialize the listener
 */
function scriptInit() {
    player = document.querySelector("#player");
}

window.onload = () => {
    scriptInit();               
}