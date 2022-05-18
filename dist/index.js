var GameSpace = /** @class */ (function () {
    function GameSpace(width, height) {
        if (width === void 0) { width = 1280; }
        if (height === void 0) { height = 720; }
        this.render(width, height);
    }
    GameSpace.prototype.render = function (x, y) {
        var gamearea = this.createSVG(x, y);
        gamearea.style.margin = "auto";
        var rectangle = this.createLine(200, 100, 300, 300, "red");
        document.body.appendChild(gamearea);
        document.getElementsByTagName("svg")[0].appendChild(rectangle);
    };
    GameSpace.prototype.getSvgNS = function () {
        var svgns = "http://www.w3.org/2000/svg", container = document.getElementById('cont');
        return svgns;
    };
    GameSpace.prototype.createSVG = function (x, y) {
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", x + "px");
        svg.setAttribute("height", y + "px");
        return svg;
    };
    // Create SVG Elements
    GameSpace.prototype.createLine = function (x1, y1, x2, y2, color) {
        var svgns = this.getSvgNS();
        var line = document.createElementNS(svgns, "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("style", "stroke:" + color);
        return line;
    };
    GameSpace.prototype.createRect = function (x, y, color) {
        var svgns = this.getSvgNS();
        var rect = document.createElementNS(svgns, "rect");
        rect.setAttribute("width", x);
        rect.setAttribute("height", y);
        rect.setAttribute("style", "fill:" + color);
        return rect;
    };
    GameSpace.prototype.createCircle = function (x, y, r, color) {
        var svgns = this.getSvgNS();
        var circle = document.createElementNS(svgns, "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", r);
        circle.setAttribute("style", "fill:" + color);
        return circle;
    };
    GameSpace.prototype.createEllipse = function (x, y, rx, ry, color) {
        var svgns = this.getSvgNS();
        var ellipse = document.createElementNS(svgns, "ellipse");
        ellipse.setAttribute("cx", x);
        ellipse.setAttribute("cy", y);
        ellipse.setAttribute("rx", rx);
        ellipse.setAttribute("ry", ry);
        ellipse.setAttribute("style", "fill:" + color);
        return ellipse;
    };
    GameSpace.prototype.createText = function (x, y, text1, color) {
        var svgns = this.getSvgNS();
        var text = document.createElementNS(svgns, "text");
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.setAttribute("fill", color);
        text.innerHTML = text1;
        return text;
    };
    GameSpace.prototype.createPolygon = function (x, y, points, color) {
        var svgns = this.getSvgNS();
        var polygon = document.createElementNS(svgns, "polygon");
        polygon.setAttribute("points", points);
        polygon.setAttribute("style", "fill:" + color);
        return polygon;
    };
    return GameSpace;
}());
var game = new GameSpace();
// TODO
//// - Create Function for JS to Render HTML
// - Define Class Structure
// - Define Project Scope
//! - Create path, polyline
