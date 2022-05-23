import GameSpace from "./gamespace.js";
import Primitive from "./svgElements.js";
// import Animation from "./animation.js";
const game = new GameSpace();
const object = new Primitive();
let colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "aqua", "white"];
/// * Generated Space Example * //
for (let i = 0; i < 20; i++) {
    game.appendSVG(object.createRect(i, colors[randomInt(0, 9)], randomDouble(1, 50), randomDouble(1, 50), randomDouble(1, 30), randomDouble(1, game.getWidth()), randomDouble(1, game.getHeight())));
}
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomDouble(min, max) {
    return Math.random() * (max - min) + min;
}
// add large text
game.appendSVG(object.createText(0, "white", game.getWidth() / 2, game.getHeight() / 2, "Hello World!", "43pt"));
// playerID
let playerID;
// On click, move the rect
game.getSVG().addEventListener("click", function (event) {
    console.log(event.target);
    const rect = event.target;
    //if event target is rect
    if (rect.tagName === "rect") {
        playerID = rect.id;
        console.log(playerID);
    }
});
//update every second
setInterval(function () {
    for (let i = 0; i < 20; i++) {
        if (i == parseInt(playerID)) {
            continue;
        }
        //random number from 1 to 10
        let random = randomInt(1, 10);
        if (random < 6) {
            continue;
        }
        // get rect id
        const rect = document.getElementById(i.toString());
        let x = parseFloat(rect.getAttribute("x")) + randomInt(-50, 50);
        let y = parseFloat(rect.getAttribute("y")) + randomInt(-50, 50);
        if (x < 0) {
            x = 0;
        }
        if (y < 0) {
            y = 0;
        }
        if (x > game.getWidth()) {
            x = game.getWidth();
        }
        if (y > game.getHeight()) {
            y = game.getHeight();
        }
        // get width and height
        let width = parseInt(rect.getAttribute("width"));
        let height = parseInt(rect.getAttribute("height"));
        // width = width + randomInt(-30, 30);
        // height = height + randomInt(-30, 30);
        if (width < 0) {
            width = 0;
        }
        if (height < 0) {
            height = 0;
        }
        if (width > 50) {
            width = 50;
        }
        if (height > 50) {
            height = 50;
        }
        // change color
        rect.setAttribute("fill", colors[randomInt(0, 9)]);
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", width.toString());
        rect.setAttribute("height", height.toString());
    }
}, 1000);
// On key press, move the rect
document.addEventListener("keydown", function (event) {
    if (playerID === undefined) {
        return;
    }
    const rect = document.getElementById(playerID);
    if (rect === null) {
        return;
    }
    const x = parseInt(rect.getAttribute("x"));
    const y = parseInt(rect.getAttribute("y"));
    const width = parseInt(rect.getAttribute("width"));
    const height = parseInt(rect.getAttribute("height"));
    //disable css animation style
    rect.style.transition = "none";
    switch (event.key) {
        case "ArrowUp":
            rect.setAttribute("y", (y - 10).toString());
            break;
        case "ArrowDown":
            rect.setAttribute("y", (y + 10).toString());
            break;
        case "ArrowLeft":
            rect.setAttribute("x", (x - 10).toString());
            break;
        case "ArrowRight":
            rect.setAttribute("x", (x + 10).toString());
            break;
        case "w":
            rect.setAttribute("y", (y - 10).toString());
            break;
        case "s":
            rect.setAttribute("y", (y + 10).toString());
            break;
        case "a":
            rect.setAttribute("x", (x - 10).toString());
            break;
        case "d":
            rect.setAttribute("x", (x + 10).toString());
            break;
        case "q":
            rect.setAttribute("width", (width - 10).toString());
            break;
        case "e":
            rect.setAttribute("width", (width + 10).toString());
            break;
        case "z":
            rect.setAttribute("height", (height - 10).toString());
            break;
        case "c":
            rect.setAttribute("height", (height + 10).toString());
            break;
        default:
            break;
    }
});
// TODO 
// Parent Class SVG Functions
// Child Classes define Player, Object, Background
