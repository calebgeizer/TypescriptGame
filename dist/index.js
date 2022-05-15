var GameSpace = /** @class */ (function () {
    function GameSpace(width, height) {
        if (width === void 0) { width = 1920; }
        if (height === void 0) { height = 1080; }
        this.render(this.width, this.height);
    }
    GameSpace.prototype.render = function (x, y) {
        var gamearea = this.createDiv(x, y, "white", "game");
        gamearea.style.margin = "auto";
        document.body.appendChild(gamearea);
    };
    GameSpace.prototype.createDiv = function (x, y, color, tag) {
        var el = document.createElement('div');
        el.style.width = x + "px";
        el.style.height = y + "px";
        el.style.background = color;
        el.id = tag;
        return el;
    };
    return GameSpace;
}());
var game = new GameSpace();
// TODO
//// - Create Function for JS to Render HTML
// - Define Class Structure
// - Define Project Scope
