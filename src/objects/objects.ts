// Objects Parent Class

export default class Objects {
    svgns = this.getSvgNS();
    x: number;
    y: number;
    color: string;
    width: number;
    height: number;

    constructor() {
    }

    getSvgNS(){
        const svgns = "http://www.w3.org/2000/svg", 
        container = document.getElementById( 'cont' );
        return svgns;
    }

    // Define Private Function
    private element(element: string, id: string, left?: number, top?: number) {
        const svgns = this.getSvgNS();
        const result = document.createElementNS(svgns, element);
        result.setAttribute('id', id);
        if (typeof left !== "undefined") result.setAttribute("x", left.toString());
        if (typeof top !== "undefined") result.setAttribute("y", top.toString());

        // add smooth css transitions
        result.setAttribute("style", "transition: all 0.1s ease-in;");

        return result;
    }

    // Create SVG Elements

    line(id: string, color: string, x1: number, y1: number, x2: number, y2: number, left?: number, top?: number) {
        const line = this.element("line", id, left, top);

        line.setAttribute("x1", x1.toString());
        line.setAttribute("y1", y1.toString());
        line.setAttribute("x2", x2.toString());
        line.setAttribute("y2", y2.toString());
        line.setAttribute("style", "stroke:" + color);
        return line;
    }

    // Create Primative
    polygon(sides:number,radius:number,color:string,left?:number,top?:number) {
        const svgns = this.getSvgNS();
        const polygon = document.createElementNS(svgns, "polygon");
        polygon.setAttribute("points", this.getPolygonPoints(sides,radius,left,top));
        polygon.setAttribute("style", "fill:" + color);
        return polygon;
    }

    text(id: string, text: string, left?: number, top?: number) {
        const textNode = this.element("text", id, left, top);
        textNode.innerHTML = text;
        return textNode;
    }

    private getPolygonPoints(sides:number,radius:number,left?:number,top?:number) {
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