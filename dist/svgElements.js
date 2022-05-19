export default class Primitive {
    // Define SVG Primitives
    constructor() {
        this.svgns = this.getSvgNS();
    }
    getSvgNS() {
        const svgns = "http://www.w3.org/2000/svg", container = document.getElementById('cont');
        return svgns;
    }
    createElement(element, id, left, top) {
        var svgns = this.getSvgNS();
        const result = document.createElementNS(svgns, element);
        result.setAttribute('id', id);
        if (typeof left !== "undefined")
            result.setAttribute("x", left);
        if (typeof top !== "undefined")
            result.setAttribute("y", top);
        // add smooth css transitions
        result.setAttribute("style", "transition: all 0.1s ease-in;");
        return result;
    }
    // Create SVG Elements
    createLine(id, color, x1, y1, x2, y2, left, top) {
        const line = this.createElement("line", id, left, top);
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("style", "stroke:" + color);
        return line;
    }
    createRect(id, color, x, y, rx, left, top) {
        const rect = this.createElement("rect", id, left, top);
        rect.setAttribute("width", x);
        rect.setAttribute("height", y);
        rect.setAttribute("fill", color);
        if (typeof rx !== "undefined") {
            rect.setAttribute("rx", rx);
        }
        return rect;
    }
    createEllipse(id, color, x, y, rx, ry, left, top) {
        const ellipse = this.createElement("ellipse", id, left, top);
        ellipse.setAttribute("style", "fill:" + color);
        ellipse.setAttribute("cx", x);
        ellipse.setAttribute("cy", y);
        ellipse.setAttribute("rx", rx);
        if (typeof ry === "undefined") {
            ellipse.setAttribute("ry", rx);
        }
        else {
            ellipse.setAttribute("ry", ry);
        }
        return ellipse;
    }
    createText(id, color, x, y, text1, size, left, top) {
        const text = this.createElement("text", id, left, top);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.setAttribute("fill", color);
        text.setAttribute("font-size", size);
        // align center
        text.setAttribute("text-anchor", "middle");
        text.innerHTML = text1;
        return text;
    }
    createPolygon(id, color, x, y, points, left, top) {
        const polygon = this.createElement("polygon", id, left, top);
        polygon.setAttribute("points", points);
        polygon.setAttribute("style", "fill:" + color);
        return polygon;
    }
    createPath(id, color, d, left, top) {
        const path = this.createElement("path", id, left, top);
        path.setAttribute("d", d);
        path.setAttribute("style", "fill:" + color);
    }
    use(id, href, left, top, color) {
        const use = this.createElement("use", id, left, top);
        use.setAttribute("href", href);
        if (typeof color !== "undefined")
            use.setAttribute("fill", color);
        return use;
    }
}
