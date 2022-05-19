export default class GameSpace {
    width: number = 1280;
    height: number = 720;

    constructor() {
        this.render(this.width, this.height);
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    render(x, y) {
        const gamearea = this.createSVG(x, y);
        gamearea.style.margin = "auto";
        document.body.appendChild(gamearea);

        //const rectangle = this.createLine(200,100,300,300,"red");
        //document.getElementsByTagName("svg")[0].appendChild(rectangle);
    }

    getSVG() {
        return document.getElementsByTagName("svg")[0];
    }

    createSVG(x, y) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", x + "px");
        svg.setAttribute("height", y + "px");
        return svg;
    }

    appendSVG(svgCode) {
        document.getElementsByTagName("svg")[0].appendChild(svgCode);
    }

    clearSVG() {
        document.getElementsByTagName("svg")[0].innerHTML = "";
    }

}


// TODO - Create polyline
// TODO - Add Animation Class
// TODO - Add Movement Controls to Seperate Class