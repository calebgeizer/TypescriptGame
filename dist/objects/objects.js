// Objects Parent Class
export default class Objects {
    constructor() {
        this.svgns = this.getSvgNS();
    }
    getSvgNS() {
        const svgns = "http://www.w3.org/2000/svg", container = document.getElementById('cont');
        return svgns;
    }
    // Define Private Function
    element(element, id, left, top) {
        const svgns = this.getSvgNS();
        const result = document.createElementNS(svgns, element);
        result.setAttribute('id', id);
        if (typeof left !== "undefined")
            result.setAttribute("x", left.toString());
        if (typeof top !== "undefined")
            result.setAttribute("y", top.toString());
        // add smooth css transitions
        result.setAttribute("style", "transition: all 0.1s ease-in;");
        return result;
    }
    // Create SVG Elements
    line(id, color, x1, y1, x2, y2, left, top) {
        const line = this.element("line", id, left, top);
        line.setAttribute("x1", x1.toString());
        line.setAttribute("y1", y1.toString());
        line.setAttribute("x2", x2.toString());
        line.setAttribute("y2", y2.toString());
        line.setAttribute("style", "stroke:" + color);
        return line;
    }
    // Create Primative
    polygon(sides, radius, color, left, top) {
        const svgns = this.getSvgNS();
        const polygon = document.createElementNS(svgns, "polygon");
        polygon.setAttribute("points", this.getPolygonPoints(sides, radius, left, top));
        polygon.setAttribute("style", "fill:" + color);
        return polygon;
    }
    text(id, text, left, top) {
        const textNode = this.element("text", id, left, top);
        textNode.innerHTML = text;
        return textNode;
    }
    getPolygonPoints(sides, radius, left, top) {
        let points = "";
        let angle = 360 / sides;
        for (let i = 0; i < sides; i++) {
            let x = left + radius * Math.cos(angle * i * Math.PI / 180);
            let y = top + radius * Math.sin(angle * i * Math.PI / 180);
            points += x + "," + y + " ";
        }
        return points;
    }
}
