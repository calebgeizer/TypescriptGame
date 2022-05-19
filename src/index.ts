import GameSpace from "./gamespace.js";
import Primitive from "./svgElements.js";

const game = new GameSpace();
const object = new Primitive();

let colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "black", "white"];

/// * Generated Space Example * //
for (let i = 0; i < 500; i++) {
    game.appendSVG(object.createRect(i,"", randomDouble(1, 50), randomDouble(1, 50), randomDouble(1, 30), randomDouble(1, 1000),randomDouble(1, 1000)));
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDouble(min, max) {
    return Math.random() * (max - min) + min;
}




//update every second
setInterval(function () {
    for (let i = 0; i < 500; i++) {
        game.appendSVG(object.use(i, "", randomDouble(1, 1000), randomDouble(1, 1000), colors[randomInt(0, 9)]));
    }
}, 1000);