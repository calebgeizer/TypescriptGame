class GameSpace {
    width:number;
    height:number;
   
    constructor(width = 1280, height = 720) {
      this.render(width,height);
    }

    render(x,y){
        const gamearea = this.createSVG(x,y);
        gamearea.style.margin = "auto";
        const rectangle = this.createEllipse(200,100,100,100,"red");
        
        document.body.appendChild(gamearea);
        document.getElementsByTagName("svg")[0].appendChild(rectangle);
    }

    getSvgNS(){
        const svgns = "http://www.w3.org/2000/svg", 
        container = document.getElementById( 'cont' );
        return svgns;
    }

    createSVG(x,y){
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width",x+"px");
        svg.setAttribute("height",y+"px");
        return svg;
    }

    // Create SVG Elements

    createLine(x1,y1,x2,y2,color){
        var svgns = this.getSvgNS();
        const line = document.createElementNS(svgns,"line");

        line.setAttribute("x1",x1);
        line.setAttribute("y1",y1);
        line.setAttribute("x2",x2);
        line.setAttribute("y2",y2);
        line.setAttribute("style","stroke:"+color);
        return line;
    }

    createRect(x,y,color){
        var svgns = this.getSvgNS();
        const rect = document.createElementNS(svgns,"rect");

        rect.setAttribute("width",x);
        rect.setAttribute("height",y);
        rect.setAttribute("style","fill:"+color);
        return rect;
    }

    createCircle(x,y,r,color){
        var svgns = this.getSvgNS();
        const circle = document.createElementNS(svgns,"circle");

        circle.setAttribute("cx",x);
        circle.setAttribute("cy",y);
        circle.setAttribute("r",r);
        circle.setAttribute("style","fill:"+color);
        return circle;
    }

    createEllipse(x,y,rx,ry,color){
        var svgns = this.getSvgNS();
        const ellipse = document.createElementNS(svgns,"ellipse");

        ellipse.setAttribute("cx",x);
        ellipse.setAttribute("cy",y);
        ellipse.setAttribute("rx",rx);
        ellipse.setAttribute("ry",ry);
        ellipse.setAttribute("style","fill:"+color);
        return ellipse;
    }

    createText(x,y,text1,color){
        var svgns = this.getSvgNS();
        const text = document.createElementNS(svgns,"text");

        text.setAttribute("x",x);
        text.setAttribute("y",y);
        text.setAttribute("fill",color);
        text.innerHTML = text1;
        return text;
    }

}

const game = new GameSpace();

// TODO
//// - Create Function for JS to Render HTML
// - Define Class Structure
// - Define Project Scope

//! - Create path, polyline, polygon